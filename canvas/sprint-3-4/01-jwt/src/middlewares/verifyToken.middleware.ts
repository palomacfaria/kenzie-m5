import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError.error";
import jwt from "jsonwebtoken";
export class VerifyToken {
  static execute(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError("Token is required", 403);
    }

    const secret = process.env.JWT_SECRET as string;

    jwt.verify(token, secret);

    res.locals.decode = jwt.decode(token);

    next();
  }
}
