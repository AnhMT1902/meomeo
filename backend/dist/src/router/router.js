"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const spending_router_1 = require("./spending-router");
const walletRouter_1 = require("./walletRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', user_router_1.userRouter);
exports.router.use('/spending', spending_router_1.spendingRouter);
exports.router.use('/wallet', walletRouter_1.walletRouter);
//# sourceMappingURL=router.js.map