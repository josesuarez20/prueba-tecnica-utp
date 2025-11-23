import type { ProductItem } from "@/features/products/types/product.type";

export interface CartItem extends ProductItem {
    quantity: number;
}

export type CartState = CartItem[];

export type CartAction =
    | { type: "ADD_ITEM"; payload: ProductItem }
    | { type: "REMOVE_ITEM"; payload: number }
    | { type: "CLEAR_CART" };

export interface CartContextType {
        cart: CartItem[];
        addToCart: (product: ProductItem) => void;
        removeFromCart: (id: number) => void;
        clearCart: () => void;
        isInCart: (id: number) => boolean;
        totalItems: number;
        totalAmount: number;
    }
    