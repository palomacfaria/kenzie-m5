export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type TUserRegisterBody = Omit<IUser, "id">;

export type TUserLoginBody = Pick<IUser, "email" | "password">;
