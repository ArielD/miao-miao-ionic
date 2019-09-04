import { Controller, Post, Body, Res, HttpStatus, Get, Query } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrdersService } from "./orders.service";

@Controller('orders')
export class OrdersController {

    constructor(
        private readonly ordersService: OrdersService
    ) { }

    @Post('createOrder')
    async create(@Body() createOrderDto: CreateOrderDto, @Res() res) {
        console.log(createOrderDto);

        this.ordersService.create(createOrderDto).then((data) => {
            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: data, message: 'nice' });
        }, (err) => {
            return res.status(HttpStatus.BAD_REQUEST).json({ status: HttpStatus.BAD_REQUEST, message: 'damn' })
        });
    }

    @Get('getAllByUserId')
    async getAllById(@Query() data, @Res() res) {
        this.ordersService.getAllByUserId(data.userId).then((data) => {
            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: data, message: 'nice' });
        },
            (err) => {
                return res.status(HttpStatus.BAD_REQUEST).json({ status: HttpStatus.BAD_REQUEST, message: 'damn' })
            })
    }

    @Get('getAllOrders')
    async getAllOrders(@Res() res) {
        this.ordersService.getAll().then((data) => {
            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: data, message: 'nice' });
        },
            (err) => {
                return res.status(HttpStatus.BAD_REQUEST).json({ status: HttpStatus.BAD_REQUEST, message: 'damn' })
            })
    }

    @Get('getOrderById')
    async getOrderById(@Query() data, @Res() res) {
        this.ordersService.getOrder(data.orderId).then((data) => {
            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: data, message: 'nice' });
        },
            (err) => {
                return res.status(HttpStatus.BAD_REQUEST).json({ status: HttpStatus.BAD_REQUEST, message: 'damn' })
            })
    }

    @Post('updateOrder')
    async updateOrder(@Body() data, @Res() res) {
        this.ordersService.updateOrder(data).then((data) => {
            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: data, message: 'nice' });
        },
            (err) => {
                return res.status(HttpStatus.BAD_REQUEST).json({ status: HttpStatus.BAD_REQUEST, message: 'damn' })
            })
    }

    @Get('getFewOrder')
    async getFewOrder(@Query() data, @Res() res) {

        this.ordersService.getFewOrder(data.skip, data.limit).then((data) => {
            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: data, message: 'nice' });
        },
            (err) => {
                return res.status(HttpStatus.BAD_REQUEST).json({ status: HttpStatus.BAD_REQUEST, message: 'damn' })
            })
    }
}