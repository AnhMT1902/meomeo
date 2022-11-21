import { Request, Response } from "express";
declare class AccountService {
    addAccount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: AccountService;
export default _default;
