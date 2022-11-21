"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const spending_controller_1 = __importDefault(require("../controller/spending-controller"));
const router = (0, express_1.Router)();
router.get('/spending', spending_controller_1.default.getAll);
//# sourceMappingURL=spending-router.js.map