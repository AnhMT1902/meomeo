import {Router} from "express";
import {userRouter} from "./user-router";
import {walletRouter} from "./walletRouter";
export const router = Router();
router.use('',userRouter);
router.use('',walletRouter);