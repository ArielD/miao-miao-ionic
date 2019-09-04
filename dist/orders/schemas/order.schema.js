"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrderSchema = new mongoose.Schema({
    status: Number,
    userId: String,
    totalPrice: Number,
    productsId: [{
            _id: String,
            quantity: Number
        }],
    date: Date,
});
//# sourceMappingURL=order.schema.js.map