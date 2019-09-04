export declare class CreateOrderDto {
    readonly _id?: string;
    readonly status: number;
    readonly userId: string;
    readonly totalPrice: number;
    readonly productsId: productsId[];
    readonly date: Date;
}
export declare class productsId {
    _id: string;
    quantity: number;
}
