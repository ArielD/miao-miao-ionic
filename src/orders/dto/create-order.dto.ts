export class CreateOrderDto {
    readonly _id?: string;
    readonly status: number;
    readonly userId: string;
    readonly totalPrice: number;
    readonly productsId: productsId[];
    readonly date: Date;
  }

  export class productsId {
    _id: string;
    quantity: number;
}