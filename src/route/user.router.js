import { Router } from "express";

import getJoke from "../controller/user.controller.js";

const router = Router();

router.get("/dad/joke", getJoke);

export { router };
