import { ITodo, TCreateTodoBody } from "../../interfaces/todo.interfaces"

export const todoDefaultExpects = (data: ITodo, expected: TCreateTodoBody) => {
    expect(data.id).toBeDefined();
    expect(data.title).toBe(expected.title);
    expect(data.content).toBe(expected.content);    
}