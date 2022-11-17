"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sneaker = void 0;
const mongoose_1 = require("mongoose");
let SneakerSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    color: String,
    size: Number,
    quantity: Number,
    sale: Boolean,
    sold_out: Boolean,
});
const Sneaker = (0, mongoose_1.model)('Sneaker', SneakerSchema);
exports.Sneaker = Sneaker;
//# sourceMappingURL=sneaker.js.map