import {Request, Response} from "express";
import {User} from "../model/user";
import bcrypt from "bcrypt"

class AccountService {
    addAccount = async (req: Request, res: Response) => {

        let user = req.body;
        user.password = await bcrypt.hash(user.password, 10);
        let userFind = await User.findOne({
            username: user.username
        });
        if (userFind) {
            return res.status(201).json({
                message: "Account da ton tai!!!"
            })
        } else {
            user = await User.create(user);
            return res.status(201).json({
                message: "Success"
            })
        }
    }
}

export default new AccountService();