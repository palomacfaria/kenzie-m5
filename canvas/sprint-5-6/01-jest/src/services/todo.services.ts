import { prisma } from "../database/prisma";
import { ITodo, TCreateTodoBody, TUpdateTodoBody } from "../interfaces/todo.interfaces";

export class TodoServices {
   async getMany(): Promise<ITodo[]> {
      const todoList = await prisma.todo.findMany();

      return todoList;
   }

   async create(body: TCreateTodoBody): Promise<ITodo> {
      const newTodo = await prisma.todo.create({ data: body });

      return newTodo;
   }

   async update(body: TUpdateTodoBody, updatingId: string): Promise<ITodo> {
      const updateTodo = await prisma.todo.update({
         data: body,
         where: { id: updatingId },
      });

      return updateTodo;
   }

   async delete(removingId: string): Promise<void> {
      await prisma.todo.delete({ where: { id: removingId } });
   }
}
