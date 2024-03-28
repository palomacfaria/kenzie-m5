import { prisma } from "../database/prisma";
import { TOpportunity, TOpportunityCreate, TOpportunityUpdate } from "../schemas/opportunity.schemas";
import { injectable } from "tsyringe";

@injectable()
export class OpportunityServices {
   async create(body: TOpportunityCreate): Promise<TOpportunity> {
      const data = await prisma.opportunity.create({ data: body });

      return data;
   }

   async findMany(): Promise<TOpportunity[]> {
      const data = await prisma.opportunity.findMany();

      return data;
   }

   findOne(opportunity: TOpportunity): TOpportunity { 
      return opportunity;
   }

   async update(id: number, body: TOpportunityUpdate): Promise<TOpportunity> {
     const data = await prisma.opportunity.update({ where: { id }, data: body });

     return data;
   }

   async delete(id: number): Promise<void> {
    await prisma.opportunity.delete({ where: { id }});
   }
}
