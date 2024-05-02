import { z } from "zod";
import { CreateUserSchema, LoginUserSchema, ReturnLoginSchema, UserReturnSchema, userSchema } from "../schemas/user.schemas";

export type TUser = z.infer<typeof userSchema>;
export type TCreateUser = z.infer<typeof CreateUserSchema>;
export type TLoginUser = z.infer<typeof LoginUserSchema>;
export type TUserReturn = z.infer<typeof UserReturnSchema>;
export type TReturnLoginSchema = z.infer<typeof ReturnLoginSchema>;
