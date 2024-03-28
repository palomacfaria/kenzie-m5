import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { ZodSchema } from "zod";

export class ValidateBody{
    static execute(schema: ZodSchema){
        return (req: Request, res: Response, next: NextFunction) => {
            req.body = schema.parse(req.body);

            return next();
        }
    }
}