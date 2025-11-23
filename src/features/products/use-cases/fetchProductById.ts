import type { ProductItem } from "@/features/products/types/Products";
import { getProductoById } from "../api/productsApi";

export async function fetchProductById(id: number): Promise<ProductItem> {
    try {
        const product = await getProductoById(id);
        return product;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw new Error(`No se pudo cargar el producto con ID: ${id}`);
    }
}
