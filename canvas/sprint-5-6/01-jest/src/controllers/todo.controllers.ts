import { Request, Response } from "express";
import { ITodo } from "../interfaces/todo.interfaces";
import { TodoServices } from "../services/todo.services";

export class TodoControllers{
    async getMany(req: Request, res: Response): Promise<Response<ITodo[]>>{
        const todoServices = new TodoServices();

        const response = await todoServices.getMany();

        return res.status(200).json(response);
    }
    
    async create(req: Request, res: Response): Promise<Response<ITodo>>{
        const todoServices = new TodoServices();

        const response = await todoServices.create(req.body);

        return res.status(201).json(response);
    }

    async update(req: Request, res: Response): Promise<Response<ITodo>>{
        const id = req.params.id;

        const todoServices = new TodoServices();

        const response = await todoServices.update(req.body, id);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response): Promise<Response<void>>{
        const id = req.params.id;

        const todoServices = new TodoServices();

        const response = await todoServices.delete(id);

        return res.status(204).json(response);
    }
}