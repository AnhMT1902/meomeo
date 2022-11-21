"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletRouter = void 0;
const express_1 = require("express");
const wallet_controller_1 = __importDefault(require("../controller/wallet-controller"));
exports.walletRouter = (0, express_1.Router)();
exports.walletRouter.post('/creat', wallet_controller_1.default.creatWallet);
exports.walletRouter.post('/delete', wallet_controller_1.default.deleteWallet);
//# sourceMappingURL=walletRouter.js.map