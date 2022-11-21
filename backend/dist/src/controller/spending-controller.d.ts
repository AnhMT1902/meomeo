import { Request, Response } from "express";
declare class SpendingController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: SpendingController;
export default _default;
