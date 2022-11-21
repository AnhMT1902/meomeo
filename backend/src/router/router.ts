import {Router} from "express";
import {userRouter} from "./user-router";
import {spendingRouter} from "./spending-router"

import {walletRouter} from "./walletRouter";
export const router = Router();
router.use('/auth',userRouter);
router.use('/spending',spendingRouter);
router.use('/wallet', walletRouter)