import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import logger from "./logger/logger";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8123;

app.get("/", (req: Request, res: Response) => {
  logger.log("debug", "Hello World!"); //debug level as first param
  logger.debug("This is the home '/' route."); // using debug method directly
  res.json({ method: req.method, message: "Hello World", ...req.body });
});

app.get("/404", (req: Request, res: Response) => {
  logger.error("404 error"); //error method
  logger.debug("This is the 404 route");
  res.sendStatus(404);
});

app.get("/user", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("Invalid user");
  } catch (error) {
    logger.error("Auth Error: invalid user");
    logger.debug("The is the user route.");
    res.status(500).send("Error!");
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
