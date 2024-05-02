 import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import {userServices} from "../services/userServices";
import { status } from "../utils/HttpStatusCode";

@injectable()
export class UserControllers{
    constructor(@inject("userServices") private userServices: userServices){};

    public register = async (req: Request, res: Response): Promise<Response> =>{
        const user =  await this.userServices.register(req.body);
        return res.status(status.HTTP_200_OK).json(user)
    }

    public get = async(req: Request, res: Response): Promise<Response>=>{
        const getUsers = await this.userServices.getUsers();
        return res.status(status.HTTP_200_OK).json(getUsers)
    }

    public getOneUser = async(req: Request, res: Response): Promise<Response>=>{
        const user = res.locals.user
        // const userId = Number(req.params.userId);
        // const getOneUser = await this.userServices.getOneUser(userId);
        return res.status(status.HTTP_200_OK).json(user);
    }

    public login = async(req: Request, res: Response): Promise<Response> =>{
        const userLogin = await this.userServices.login(req.body);
        return res.status(status.HTTP_200_OK).json(userLogin); 
    }

    public deleteUser = async (req: Request, res: Response): Promise<Response> => {
        const userId = Number(req.params.id);
        await this.userServices.delete(userId);
        return res.status(status.HTTP_200_OK).json("Usuário deletado com sucesso!!"); 
    }
}