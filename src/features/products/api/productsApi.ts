import type { ProductItem, ProductsResponse } from "@/features/products/types/product.type";

const BASE_URL = 'https://dummyjson.com';

export const getProductos = async (): Promise<ProductItem[]> => {
    const response = await fetch(`${BASE_URL}/products`);
    if(!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data: ProductsResponse = await response.json();
    return data.products;
}

export const getProductoById = async (id: number): Promise<ProductItem> => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if(!response.ok) {
        throw new Error(`Failed to fetch product with id: ${id}`);
    }
    const product: ProductItem = await response.json();
    return product;
}