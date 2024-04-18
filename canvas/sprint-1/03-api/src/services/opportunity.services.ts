import { prisma } from "../database/prisma";
import { TOpportunity, TOpportunityCreate } from "../schemas/opportunity.schemas";

export class OpportunityServices{
    async create(body: TOpportunityCreate): Promise<TOpportunity>{
        const data = await prisma.opportunity.create({data: body});

        return data;
    }
    async findMany(){

    }
    async findOne(){

    }
    async update(){

    }
    async delete(){
        
    }
}