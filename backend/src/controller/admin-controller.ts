import {Sneaker} from "../model/sneaker";
import {Request, Response} from "express";
 class SneakerController {
    getAll = async (req: Request, res: Response) => {
        let products = await Sneaker.find()
        return res.status(200).json(products)
    }
}
export default new SneakerController()