"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const walletRouter_1 = require("./walletRouter");
exports.router = (0, express_1.Router)();
exports.router.use('', user_router_1.userRouter);
exports.router.use('', walletRouter_1.walletRouter);
//# sourceMappingURL=router.js.map