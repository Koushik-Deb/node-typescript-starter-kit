import { Router, Request, Response } from "express";
const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ method: req.method, message: "Hello World", ...req.body });
});

export default router;
