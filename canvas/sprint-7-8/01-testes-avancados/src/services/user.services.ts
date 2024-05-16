import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppErrors";
import {
   TUserLoginBody,
   TUserLoginReturn,
   TUserRegisterBody,
   TUserReturn,
   userReturnSchema,
   userSchema,
} from "../schemas/user.schemas";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

@injectable()
export class UserServices {
   async register(body: TUserRegisterBody): Promise<TUserReturn> {
      const existingUser = await prisma.user.findFirst({ where: { email: body.email } });

      if (existingUser) {
         throw new AppError("This email is already registered", 403);
      }

      const hashPassword = await bcrypt.hash(body.password, 10);

      const userData: TUserRegisterBody = {
         ...body,
         password: hashPassword,
      };

      const newUser = await prisma.user.create({ data: userData });

      return userReturnSchema.parse(newUser);
   }

   async login(body: TUserLoginBody): Promise<TUserLoginReturn> {
      const user = await prisma.user.findFirst({ where: { email: body.email } });

      if (!user) {
         throw new AppError("User not registered.");
      }

      const comparePassword = await bcrypt.compare(body.password, user.password);

      if (!comparePassword) {
         throw new AppError("E-mail and password doesn't match.");
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);

      return {
         token,
         user: userReturnSchema.parse(user),
      };
   }

   async getUser(userId: string): Promise<TUserReturn>{
    const user = await prisma.user.findFirst({ where: { id: userId }});

    return userSchema.parse(user);
   }
}
