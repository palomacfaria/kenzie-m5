import { Request, response, Response } from "express";
import { OpportunityServices } from "../services/opportunity.services";

export class OpportunityControllers {
  async create(req: Request, res: Response) {
    const opportunityServices = new OpportunityServices();

    const response = await opportunityServices.create(req.body);

    res.status(201).json(response);
  }
  async findMany(req: Request, res: Response) {}
  async findOne(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}
