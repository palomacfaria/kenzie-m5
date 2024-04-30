import { IStudentInfo } from "./studentInfo.interfaces";

export interface IStudent {
  id: number;
  name: string;
  email: string;
  studentInfo?: IStudentInfo;
}

export type TCreateStudentBody = Omit<IStudent, "id" | "studentInfo">;

export type TUpdateStudentBody = Partial<TCreateStudentBody>;
