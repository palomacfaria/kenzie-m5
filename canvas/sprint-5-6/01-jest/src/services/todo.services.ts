import { generateId, todoDatabase } from "../database/database";
import { ITodo, TCreateTodoBody } from "../interfaces/todo.interfaces";

export class TodoServices{
    getMany(){
        return todoDatabase;
    }

    create(body: TCreateTodoBody): ITodo{
        const newTodo = { id: generateId(), ...body };

        todoDatabase.push(newTodo);

        return newTodo;
    }
}