"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sneaker_1 = require("../model/sneaker");
class SneakerController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await sneaker_1.Sneaker.find();
            return res.status(200).json(products);
        };
    }
}
exports.default = new SneakerController();
//# sourceMappingURL=admin-controller.js.map