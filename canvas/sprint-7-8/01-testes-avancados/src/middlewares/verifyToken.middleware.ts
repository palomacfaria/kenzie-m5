import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export class VerifyToken{
    static async execute(req: Request, res: Response, next: NextFunction){
        const authorization = req.headers.authorization;

        const token = authorization?.replace("Bearer ", "");

        if(!token){
            return res.status(401).json({ message: "Token is required."});
        }

        jwt.verify(token, process.env.JWT_SECRET as string);

        const decode = jwt.decode(token);

        res.locals.decode = decode;

        next();
    }
}