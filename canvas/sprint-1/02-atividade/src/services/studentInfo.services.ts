import { prisma } from "../database/prisma";
import { TCreateStudentInfoBody } from "../interfaces/studentInfo.interfaces";

export class StudentInfoServices {
    //Método de inserção
    async create(body: TCreateStudentInfoBody){
        return await prisma.studentInfo.create({data: body});
    }
}