import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class IsTodoIdValid{
    static async execute(req: Request, res: Response, next: NextFunction){
        const paramsId = req.params.id;

        const todo =  await prisma.todo.findFirst({ where: { id: paramsId }});

        if(!todo){
            return res.status(404).json({ message: "Todo not found."});
        }

        next();
    }
}