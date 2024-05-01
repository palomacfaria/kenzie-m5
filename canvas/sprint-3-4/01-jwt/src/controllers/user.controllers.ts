import "reflect-metadata";
import { Request, Response } from "express";
import { UserServices } from "../services/user.services";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserControllers {

constructor(@inject("UserServices") private userServices: UserServices) {}

  async login(req: Request, res: Response): Promise<Response> {
    const response = await this.userServices.login(req.body);

    return res.status(200).json(response);
  }

  async register(req: Request, res: Response) {
    const response = await this.userServices.register(req.body);

    return res.status(201).json(response);
  }

  getUser(req: Request, res: Response) {
    const response = this.userServices.getUser();

    return res.status(200).json(response);
  }
}
