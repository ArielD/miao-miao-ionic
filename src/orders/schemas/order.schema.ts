import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
    status: Number,
    userId: String,
    totalPrice: Number,
    productsId: [{
        _id: String,
        quantity: Number
    }],
    date: Date,
});