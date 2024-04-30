import { Request, Response } from "express";
import { UserServices } from "../services/user.services";

export class UserControllers {
  async login(req: Request, res: Response): Promise<Response> {
    const userServices = new UserServices();

    const response = await userServices.login(req.body);

    return res.status(200).json(response);
  }

  async register(req: Request, res: Response) {
    const userServices = new UserServices();

    const response = await userServices.register(req.body);

    return res.status(201).json(response);
  }

  getUser(req: Request, res: Response) {
    const userServices = new UserServices();

    const response = userServices.getUser();

    return res.status(200).json(response);
  }
}
