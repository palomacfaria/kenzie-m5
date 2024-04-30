import { prisma } from "../database/prisma";
import {
  TCreateStudentBody,
  TUpdateStudentBody,
} from "../interfaces/student.interfaces";

export class StudentServices {
  //Criação individual
  async create(body: TCreateStudentBody) {
    return await prisma.student.create({ data: body });
  }

  //Criação Múltipla

  async createMany(data: TCreateStudentBody[]) {
    return await prisma.student.createMany({ data });
  }

  //Método de leitura individual
  async findOne(id: number) {
    return await prisma.student.findFirst({
      where: { id },
      include: { studentInfo: true },
    });
  }

  //Método de leitura multipla
  async findMany(search?: string) {
    if (!search) {
      return await prisma.student.findMany(); // Retorna todos se o search for undefined
    }
    return await prisma.student.findMany({
      where: { name: { contains: search, mode: "insensitive" } },
      include: { studentInfo: true },
    });
  }

  //Método de atualização individual
  async updateOne(id: number, data: TUpdateStudentBody) {
    return await prisma.student.update({ where: { id }, data });
  }

  //Método de exclusão individual
  async deleteOne(id: number) {
    return await prisma.student.delete({ where: { id } });
  }
}
