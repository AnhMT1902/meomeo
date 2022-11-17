"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = void 0;
const mongoose_1 = require("mongoose");
let ReceiptSchema = new mongoose_1.Schema({
    time: String,
    Total_money: Number
});
const Receipt = (0, mongoose_1.model)('Receipt', ReceiptSchema);
exports.Receipt = Receipt;
//# sourceMappingURL=receipt.js.map