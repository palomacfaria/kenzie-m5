import "dotenv/config";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import { HandleError } from "./middlewares/handleError.middleware";

export const app = express();

app.use(helmet());

app.use(json());

app.get("/auth", (req, res) => {
  try {
    const token = req.headers.authorization;

    const secret = process.env.JWT_SECRET;

    if (token && secret) {
      jwt.verify(token, secret);

      const payload = jwt.decode(token);

      return res.status(200).json(payload);
    }
  } catch (error) {
    return res.status(403).json(error);
  }
});

app.post("/login", (req, res) => {
  if (process.env.JWT_SECRET) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.status(200).json({ accessToken: token });
  }
});

app.use(HandleError.execute);
