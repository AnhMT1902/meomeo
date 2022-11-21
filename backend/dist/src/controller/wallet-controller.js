"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_service_1 = __importDefault(require("../service/wallet-service"));
class WalletController {
    constructor() {
        this.creatWallet = async (req, res) => {
            return await wallet_service_1.default.creatWallet(req, res);
        };
        this.deleteWallet = async (req, res) => {
            return await wallet_service_1.default.deleteWallet(req, res);
        };
    }
}
exports.default = new WalletController();
//# sourceMappingURL=wallet-controller.js.map