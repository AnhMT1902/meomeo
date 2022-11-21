import { Request, Response } from "express";
declare class WalletService {
    creatWallet: (req: Request, res: Response) => Promise<void>;
    deleteWallet: (req: Request, res: Response) => Promise<void>;
}
declare const _default: WalletService;
export default _default;
