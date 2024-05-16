import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserServices } from "../services/user.services";
import { TUserLoginReturn, TUserReturn } from "../schemas/user.schemas";

@injectable()
export class UserControllers {
   constructor(@inject("UserServices") private userService: UserServices) {}

   async register(req: Request, res: Response): Promise<Response<TUserReturn>> {
      const response = await this.userService.register(req.body);

      return res.status(200).json(response);
   }

   async login(req: Request, res: Response): Promise<Response<TUserLoginReturn>> {
      const response = await this.userService.login(req.body);

      return res.status(200).json(response);
   }

   async getUser(req: Request, res: Response): Promise<Response<TUserReturn>> {
      const { id } = res.locals.decode;

      const response = await this.userService.getUser(id);

      return res.status(200).json(response);
   }
}
