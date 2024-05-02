import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";
import { status } from "../utils/HttpStatusCode";

export class HandleErrors {
   static execute(error: Error, req: Request, res: Response, next: NextFunction) {
      if (error instanceof AppError) {
         return res.status(error.statusCode).json({ message: error.message });
      }

      if(error instanceof ZodError){
         return res.status(status.HTTP_400_BAND_REQUEST).json({message: error.errors});
      }

      if(error instanceof JsonWebTokenError){
         return res.status(status.HTTP_401_UNAUTHORIZED).json({message: error.message})
      }

      console.log(error);
      return res.status(status.HTTP_500_BAND_INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
   }
}
