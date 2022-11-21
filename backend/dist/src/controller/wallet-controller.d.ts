import { Request, Response } from "express";
declare class WalletController {
    creatWallet: (req: Request, res: Response) => Promise<void>;
    deleteWallet: (req: Request, res: Response) => Promise<void>;
}
declare const _default: WalletController;
export default _default;
