import { StudentInfo } from "@prisma/client";

export interface IStudentInfo{
    id: number;
    phone: string;
    address: string;
    studentId: number;
}

export type TCreateStudentInfoBody = Omit<StudentInfo, "id">

export type TUpdateStudentInfoBody = Partial<Pick<IStudentInfo, "phone" | "address">>