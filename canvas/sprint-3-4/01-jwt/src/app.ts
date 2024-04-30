import "dotenv/config";
import express, { json } from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";

export const app = express();

app.use(helmet());

app.use(json());

app.post("/login", (req, res) => {
  if (process.env.JWT_SECRET) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET);

    return res.status(200).json({ accessToken: token });
  }
  else{
    return res.status(400).json(Error);
    
  }
});
