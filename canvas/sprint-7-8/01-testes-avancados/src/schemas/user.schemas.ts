import { z } from "zod";

export const userSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    email: z.string().min(1),
    password: z.string().min(8)
});

export type TUser = z.infer<typeof userSchema>;

export const userRegisterBodySchema = userSchema.omit({ id: true });

export type TUserRegisterBody =  z.infer<typeof userRegisterBodySchema>;

export const userLoginBodySchema = userSchema.omit({ id: true, name: true });

export type TUserLoginBody = z.infer<typeof userLoginBodySchema>;

export const userReturnSchema = userSchema.omit({ password: true });

export type TUserReturn = z.infer<typeof userReturnSchema>;

export type TUserLoginReturn = {
    token: string;
    user: TUserReturn
}