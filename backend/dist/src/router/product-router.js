"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = __importDefault(require("../controller/admin-controller"));
const sneakerRouter = (0, express_1.Router)();
sneakerRouter.get('/', admin_controller_1.default.getAll);
//# sourceMappingURL=product-router.js.map