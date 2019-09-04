import { Model } from 'mongoose';
import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly orderModel;
    temp: any[];
    constructor(orderModel: Model<Order>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    getAllByUserId(userId: string): Promise<Order>;
    getAll(): Promise<Order>;
    getOrder(orderId: string): Promise<Order>;
    updateOrder(updatedOrder: Order): Promise<Order>;
    getFewOrder(skip: number, limit: number): Promise<Order>;
}
