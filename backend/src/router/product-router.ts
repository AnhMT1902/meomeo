import {Router} from "express";
import SneakerController from "../controller/admin-controller";
const sneakerRouter = Router();
sneakerRouter.get('/', SneakerController.getAll)