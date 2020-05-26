export class ProductModel {
    name: string;
    description: string;
    price: number;
    photo: string;
    active: { type: Boolean, required: true },
}