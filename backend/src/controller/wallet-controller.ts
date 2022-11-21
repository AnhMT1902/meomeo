import {Request, Response} from "express";
import WalletService from "../service/wallet-service";

class WalletController {
    creatWallet = async (req: Request, res: Response) => {
        return await WalletService.creatWallet(req, res)
    }
    deleteWallet = async (req: Request, res: Response) => {
        return await WalletService.deleteWallet(req, res)
    }
}

export default new WalletController()