import {Request, Response} from "express";
import {User} from "../model/user";
import bcrypt from 'bcrypt';
import AccountService from "../service/use-service";

class UserController {
    register = async (req: Request, res: Response) => {
        return await AccountService.addAccount(req, res)
    }
}

export default new UserController();