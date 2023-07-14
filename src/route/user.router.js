import { Router } from "express";

import { getJoke } from "../controller/user.controller";

const router = Router();

router.get("/dadjoke", getJoke )

export const userRouter = router;