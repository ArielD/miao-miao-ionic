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
var _a;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let OrdersService = class OrdersService {
    constructor(orderModel) {
        this.orderModel = orderModel;
        this.temp = [];
    }
    create(createOrderDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdOrder = new this.orderModel(createOrderDto);
            return yield createdOrder.save();
        });
    }
    getAllByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orderModel.find({ userId: userId });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orderModel.find();
        });
    }
    getOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orderModel.findOne({ _id: orderId });
        });
    }
    updateOrder(updatedOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            if (updatedOrder) {
                const newOrder = yield this.orderModel.updateOne({ _id: updatedOrder._id }, updatedOrder, { upsert: true });
                if (newOrder) {
                    return updatedOrder;
                }
            }
        });
    }
    getFewOrder(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orderModel.find().skip(Number(skip)).limit(Number(limit));
        });
    }
};
OrdersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Order')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map