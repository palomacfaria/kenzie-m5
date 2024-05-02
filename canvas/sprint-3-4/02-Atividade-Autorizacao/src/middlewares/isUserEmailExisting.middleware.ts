import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import { status } from "../utils/HttpStatusCode";

class IsUserEmailExisting{
    public emailExists = async ({body}: Request, res: Response, next: NextFunction) => {
        const userEmail =  body.email
        const currentUser = await prisma.user.findFirst({where: {email: userEmail}});
        
        if(currentUser){
            throw new AppError("E-mail already registered.", status.HTTP_403_FORBIDEN); //email já registrado.
        }
        
        return next();
    }
}
export const isUserEmailExisting = new IsUserEmailExisting();