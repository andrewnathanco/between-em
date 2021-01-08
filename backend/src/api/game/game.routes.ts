import { Request, Response, Router } from "express";

// define router
const router = Router();

router.get("/", async (_: Request, res: Response) => {
    try {
        //response
        res.status(200).json({ msg: "success"})
    } catch (e) {
        res.status(400).json(e);
    }
})

router.post("/start", async (_: Request, res: Response) => {
    try {
        //response
        res.status(200).json({ msg: "success"})
    } catch (e) {
        res.status(400).json(e);
    }
})

export default router;
