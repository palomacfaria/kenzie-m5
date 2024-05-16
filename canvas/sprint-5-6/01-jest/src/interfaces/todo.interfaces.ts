export interface ITodo{
    id: string;
    title: string;
    content: string;
}

export type TCreateTodoBody = Omit<ITodo, 'id'>;

export type TUpdateTodoBody = Partial<TCreateTodoBody>;