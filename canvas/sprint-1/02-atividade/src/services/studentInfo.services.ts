import { prisma } from "../database/prisma";
import {
  TCreateStudentInfoBody,
  TUpdateStudentInfoBody,
} from "../interfaces/studentInfo.interfaces";

export class StudentInfoServices {
  //Método de inserção
  async create(body: TCreateStudentInfoBody) {
    return await prisma.studentInfo.create({ data: body });
  }

  //Método de atualização
  async updateOne(studentId: number, data: TUpdateStudentInfoBody) {
    return await prisma.studentInfo.update({ where: { studentId }, data });
  }

  //Método de exclusão
  async deleteOne(studentId: number) {
    return await prisma.studentInfo.delete({ where: {studentId} });
  }
}
