"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AccountService {
    constructor() {
        this.addAccount = async (req, res) => {
            let user = req.body;
            user.password = await bcrypt_1.default.hash(user.password, 10);
            let userFind = await user_1.User.findOne({
                username: user.username
            });
            if (userFind) {
                return res.status(201).json({
                    message: "Account da ton tai!!!"
                });
            }
            else {
                user = await user_1.User.create(user);
                return res.status(201).json({
                    message: "Success"
                });
            }
        };
    }
}
exports.default = new AccountService();
//# sourceMappingURL=use-service.js.map