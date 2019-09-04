"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const products_service_1 = require("./products/products.service");
const products_controller_1 = require("./products/products.controller");
const products_module_1 = require("./products/products.module");
const users_module_1 = require("./users/users.module");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const auth_module_1 = require("./auth/auth.module");
const orders_module_1 = require("./orders/orders.module");
const orders_controller_1 = require("./orders/orders.controller");
const orders_service_1 = require("./orders/orders.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/ionic'),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            orders_module_1.OrdersModule
        ],
        controllers: [
            app_controller_1.AppController,
            products_controller_1.ProductsController,
            users_controller_1.UsersController,
            orders_controller_1.OrdersController
        ],
        providers: [app_service_1.AppService, products_service_1.ProductsService, users_service_1.UsersService, orders_service_1.OrdersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map