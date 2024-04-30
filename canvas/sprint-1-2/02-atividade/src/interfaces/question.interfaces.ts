export interface IQuestion{
    id: number;
    title: string;
    content?: string;
    studentId: number;
}

export type TCreateQuestionBody = Pick<IQuestion, "title" | "content">;