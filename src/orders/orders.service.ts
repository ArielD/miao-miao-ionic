import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  public temp = [];
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>
  ) {

  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return await createdOrder.save();
  }

  async getAllByUserId(userId: string): Promise<Order> {
    return await this.orderModel.find({ userId: userId });
  }

  async getAll(): Promise<Order> {
    return await this.orderModel.find();
  }

  async getOrder(orderId: string): Promise<Order> {
    return await this.orderModel.findOne({ _id: orderId });
  }

  async updateOrder(updatedOrder: Order): Promise<Order> {
    if (updatedOrder) {
      const newOrder = await this.orderModel.updateOne({ _id: updatedOrder._id }, updatedOrder, { upsert: true });
      if (newOrder) {
        return updatedOrder;
      }
    }
  }

  async getFewOrder(skip: number, limit: number): Promise<Order> {
    return await this.orderModel.find().skip(Number(skip)).limit(Number(limit));
  }
}
