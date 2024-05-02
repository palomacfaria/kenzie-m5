import { z } from "zod";

export const userSchema = z.object({
   id: z.number().positive(),
   name: z.string().min(1),
   email: z.string().min(1).email(),
   password: z.string().min(8)
});

export const CreateUserSchema = userSchema.omit({id:true});
export const LoginUserSchema = userSchema.pick({email: true, password: true});
export const UserReturnSchema = userSchema.omit({password: true})

// export const TokenSchema = z.object({token: z.string()})
// export const BodyGetTasksSchema = TasksSchema.omit({categoryId: true}).extend({category: GetCategoryList});

export const ReturnLoginSchema =  UserReturnSchema.extend({token: z.string()});