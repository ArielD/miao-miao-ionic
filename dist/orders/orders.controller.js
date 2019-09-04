"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_order_dto_1 = require("./dto/create-order.dto");
const orders_service_1 = require("./orders.service");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    create(createOrderDto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(createOrderDto);
            this.ordersService.create(createOrderDto).then((data) => {
                return res.status(common_1.HttpStatus.OK).json({ status: common_1.HttpStatus.OK, data: data, message: 'nice' });
            }, (err) => {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({ status: common_1.HttpStatus.BAD_REQUEST, message: 'damn' });
            });
        });
    }
    getAllById(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ordersService.getAllByUserId(data.userId).then((data) => {
                return res.status(common_1.HttpStatus.OK).json({ status: common_1.HttpStatus.OK, data: data, message: 'nice' });
            }, (err) => {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({ status: common_1.HttpStatus.BAD_REQUEST, message: 'damn' });
            });
        });
    }
    getAllOrders(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ordersService.getAll().then((data) => {
                return res.status(common_1.HttpStatus.OK).json({ status: common_1.HttpStatus.OK, data: data, message: 'nice' });
            }, (err) => {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({ status: common_1.HttpStatus.BAD_REQUEST, message: 'damn' });
            });
        });
    }
    getOrderById(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ordersService.getOrder(data.orderId).then((data) => {
                return res.status(common_1.HttpStatus.OK).json({ status: common_1.HttpStatus.OK, data: data, message: 'nice' });
            }, (err) => {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({ status: common_1.HttpStatus.BAD_REQUEST, message: 'damn' });
            });
        });
    }
    updateOrder(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ordersService.updateOrder(data).then((data) => {
                return res.status(common_1.HttpStatus.OK).json({ status: common_1.HttpStatus.OK, data: data, message: 'nice' });
            }, (err) => {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({ status: common_1.HttpStatus.BAD_REQUEST, message: 'damn' });
            });
        });
    }
    getFewOrder(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ordersService.getFewOrder(data.skip, data.limit).then((data) => {
                return res.status(common_1.HttpStatus.OK).json({ status: common_1.HttpStatus.OK, data: data, message: 'nice' });
            }, (err) => {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({ status: common_1.HttpStatus.BAD_REQUEST, message: 'damn' });
            });
        });
    }
};
__decorate([
    common_1.Post('createOrder'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
__decorate([
    common_1.Get('getAllByUserId'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getAllById", null);
__decorate([
    common_1.Get('getAllOrders'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getAllOrders", null);
__decorate([
    common_1.Get('getOrderById'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderById", null);
__decorate([
    common_1.Post('updateOrder'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateOrder", null);
__decorate([
    common_1.Get('getFewOrder'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getFewOrder", null);
OrdersController = __decorate([
    common_1.Controller('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map