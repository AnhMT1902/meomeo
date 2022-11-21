import {Router} from "express";
import spendingController from "../controller/spending-controller";

const router = Router();

router.get('/spending',spendingController.getAll);