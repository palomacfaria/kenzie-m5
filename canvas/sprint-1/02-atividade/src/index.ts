import { QuestionServices } from "./services/question.services";
import { StudentServices } from "./services/student.services";
import { StudentInfoServices } from "./services/studentInfo.services";

async function exampleController() {
  const studentServices = new StudentServices();
  /*   const create = await studentServices.create({
    name: "Rodolfo",
    email: "rodolfo@email.com.br",
  });

  console.log(create);

  const createMany = await studentServices.createMany([
    { name: "Maria", email: "maria@email.com.br" },
    { name: "Jose", email: "jose@email.com.br" },
  ]);

  console.log(createMany); */
  //####################################################
  const studentInfoServices = new StudentInfoServices();

  /* const studentInfo1 = await studentInfoServices.create({
    address: "Endereço 1",
    phone: "3333-3333",
    studentId: 1,
  });

  const studentInfo2 = await studentInfoServices.create({
    address: "Endereço 2",
    phone: "5555-3333",
    studentId: 2,
  });

  console.log(studentInfo1, studentInfo2);

  const findOne = await studentServices.findOne(1);
  const findMany = await studentServices.findMany();
  const searchMany = await studentServices.findMany("rodolf");

  console.log(findOne);
  console.log(findMany);
  console.log(searchMany);*/

  //####################################################

  /*   const updateStudent = await studentServices.updateOne(1, { name: "Diogo" });

  console.log(updateStudent);

  const updateStudentInfo = await studentInfoServices.updateOne(1, {
    phone: "(99) 99999-9999",
  });

  console.log(updateStudentInfo); */

  const questionServices = new QuestionServices();

/*   await studentInfoServices.deleteOne(1);

  await studentServices.deleteOne(1);

  await questionServices.create({ title: "Para que serve a tag dialog?" }, 2);

  await questionServices.create({ title: "O que é prisma?", content: "Me explique em detalhes por favor" }, 2);

  await questionServices.create({ title: "Quando eu tiro férias?" }, 3); */

  await questionServices.deleteMany(2);
}

exampleController();
