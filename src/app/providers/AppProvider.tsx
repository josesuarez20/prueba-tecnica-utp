import { CartProvider } from "@/features/cart/context/CartContext";
import { ProductsProvider } from "@/features/products/context/ProductContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ProductsProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductsProvider>
    );
}