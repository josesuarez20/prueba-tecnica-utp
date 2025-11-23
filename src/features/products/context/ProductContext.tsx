import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../use-cases";
import type { ProductItem } from "@/features/products/types/Products";

interface ProductsContextType {
    products: ProductItem[];
    loading: boolean;
    error: string | null;
    }

    const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

    export function ProductsProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
        try {
            setLoading(true);
            const data = await fetchProducts();
            setProducts(data);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "No se pudieron cargar los productos";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
        }
        loadProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, loading, error }}>
        {children}
        </ProductsContext.Provider>
    );
    }

    export { ProductsContext };