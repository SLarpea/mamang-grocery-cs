export interface Product {
    id: number;
    name: string;
    price: boolean;
    description: string;
    imgUrl: string;
    categories: Category[];
}

export interface Category {
    id: number;
    name: string;
}