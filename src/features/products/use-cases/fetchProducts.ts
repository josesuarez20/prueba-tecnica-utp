import type { ProductItem } from "@/features/products/types/Products";
import { getProductos } from "../api/productsApi";

export async function fetchProducts(): Promise<ProductItem[]> {
    try {
        const products = await getProductos();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("No se pudieron cargar los productos");
    }
}
