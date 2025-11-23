import { createContext, useReducer, useMemo } from "react";
import { cartReducer } from "./cartReducer";
import type { CartContextType } from "@/features/cart/types/cart.type";
import { calculateCartTotals } from "../use-cases";
import type { ProductItem } from "@/features/products/types/product.type";


const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = (product: ProductItem) =>
        dispatch({ type: "ADD_ITEM", payload: product });

    const removeFromCart = (id: number) =>
        dispatch({ type: "REMOVE_ITEM", payload: id });

    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    const isInCart = (id: number) => cart.some((item) => item.id === id);

    const { totalItems, totalAmount } = useMemo(() => calculateCartTotals(cart), [cart]);

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                addToCart, 
                removeFromCart, 
                clearCart, 
                isInCart, 
                totalItems, 
                totalAmount 
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartContext };