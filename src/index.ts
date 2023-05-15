import express, { Express, Request, Response, NextFunction } from "express";
import { userRoute, commentsRoute } from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8123;

app.use("/user", userRoute);
app.use("/comments", commentsRoute);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
