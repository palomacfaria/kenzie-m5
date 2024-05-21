import { Request, Response } from "express";

export class BandController {
  public list = (req: Request, res: Response): Response => {
    return res.status(200).json({ message: "GET" });
  };

  public create = (req: Request, res: Response): Response => {
    return res.status(201).json({ message: "POST" });
  };
}
