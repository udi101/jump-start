export type Product = {
    id: number;
    title:string;
    price: number;
}

export type ProductDetails = Product & {
    description: string;
    category: string;
}
