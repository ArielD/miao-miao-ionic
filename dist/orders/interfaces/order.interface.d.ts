import { Document } from 'mongoose';
export interface Order extends Document {
    readonly _id: string;
    readonly status: number;
    readonly userId: string;
    readonly totalPrice: number;
    readonly productsId: productsId[];
    readonly date: Date;
}
export interface productsId {
    _id: string;
    quantity: number;
}
