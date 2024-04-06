import { StudentServices } from "./services/student.services";

async function exampleController() {
  const studentServices = new StudentServices();

  const create = await studentServices.create({
    name: "Rodolfo",
    email: "rodolfo@email.com.br",
  });

  console.log(create);

  const createMany = await studentServices.createMany([
    { name: "Maria", email: "maria@email.com.br" },
    { name: "Jose", email: "jose@email.com.br" },
  ]);

  console.log(createMany);
}

exampleController();
