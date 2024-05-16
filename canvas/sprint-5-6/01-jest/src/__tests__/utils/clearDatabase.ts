import { prisma } from "../../database/prisma";

beforeEach(async () => {
   await prisma.$transaction([prisma.todo.deleteMany()]);
});
