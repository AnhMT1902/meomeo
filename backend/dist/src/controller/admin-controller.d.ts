import { Request, Response } from "express";
declare class SneakerController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: SneakerController;
export default _default;
