import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import { status } from "../utils/HttpStatusCode";

class IsUserIdParams{
    public idExists = async ({params}: Request, res: Response, next: NextFunction) => {
        const userId =  Number(params.id);
        const currentUser = await prisma.user.findFirst({where: {id: userId}});
        if(!currentUser){
            throw new AppError("user not found.", status.HTTP_404_NOT_FOUND);
        };
        res.locals.userCurrent = currentUser;
        return next();
    }
}
export const isUserIdParams = new IsUserIdParams();