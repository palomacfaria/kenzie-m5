import { prisma } from "../database/prisma";
import { TCreateQuestionBody } from "../interfaces/question.interfaces";

export class QuestionServices {
  async create(body: TCreateQuestionBody, studentId: number) {
    const newQuestion = { ...body, studentId };

    return await prisma.question.create({ data: newQuestion });
  }

  async deleteMany(studentId: number){
    return await prisma.question.deleteMany({where: {studentId}})
  }
}
