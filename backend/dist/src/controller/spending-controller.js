"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spending_1 = require("../model/spending");
class SpendingController {
    constructor() {
        this.getAll = async (req, res) => {
            let spending = await spending_1.Spending.find();
            return res.status(200).json(spending);
        };
    }
}
exports.default = new SpendingController();
//# sourceMappingURL=spending-controller.js.map