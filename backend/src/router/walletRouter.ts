import {Router} from "express";
import UserController from "../controller/user-controller";
import WalletService from "../service/wallet-service";
import WalletController from "../controller/wallet-controller";
export const walletRouter = Router();
walletRouter.post('/creat', WalletController.creatWallet);
walletRouter.post('/delete', WalletController.deleteWallet);