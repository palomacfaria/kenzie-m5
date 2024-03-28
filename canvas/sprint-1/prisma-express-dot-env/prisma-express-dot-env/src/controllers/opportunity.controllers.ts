import { Request, Response } from "express";
import { OpportunityServices } from "../services/opportunity.services";
import { container } from "tsyringe";

export class OpportunityControllers{
    async create(req: Request, res: Response){
        const opportunityServices = container.resolve(OpportunityServices);

        const response = await opportunityServices.create(req.body);

        return res.status(201).json(response);
    }

    async findMany(req: Request, res: Response){
        const opportunityServices = container.resolve(OpportunityServices);

        const response = await opportunityServices.findMany();

        return res.status(200).json(response);
    }

    findOne(req: Request, res: Response){
        const opportunityServices = container.resolve(OpportunityServices);

        const response = opportunityServices.findOne(res.locals.opportunity);

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response){
        const opportunityServices = container.resolve(OpportunityServices);

        const response = await opportunityServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response){
        const opportunityServices = container.resolve(OpportunityServices);

        await opportunityServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}