import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server is running");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// import express from "express";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3369;

// app.get("/", (req, res) => {
//   res.send("Express with TypeScript Server");
// });

// app.listen(port, () => {
//   console.log(`[Server]: Server is running at http://localhost:${port}`);
// });
