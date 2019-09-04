import { CreateOrderDto } from "./dto/create-order.dto";
import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto, res: any): Promise<void>;
    getAllById(data: any, res: any): Promise<void>;
    getAllOrders(res: any): Promise<void>;
    getOrderById(data: any, res: any): Promise<void>;
    updateOrder(data: any, res: any): Promise<void>;
    getFewOrder(data: any, res: any): Promise<void>;
}
