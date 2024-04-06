export interface IStudent{
    id: number;
    name: string;
    email: string;
}

export type TCreateStudentBody = Omit<IStudent, "id">