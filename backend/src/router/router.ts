import {Router} from "express";
import {userRouter} from "./user-router";
import {walletRouter} from "./walletRouter";
export const router = Router();
router.use('/auth',userRouter);
router.use('/wallet', walletRouter)