import {Request, Response} from "express";
import {Spending} from "../model/spending";

class SpendingController{
    getAll = async (req:Request,res:Response)=>{
        let spending = await Spending.find();
        return res.status(200).json(spending)
    }
}

export default new  SpendingController()