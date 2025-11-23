import type { CartState, CartAction } from "@/features/cart/types/cart.type";
import { addProductToCart, removeProductFromCart, clearCart } from "../use-cases";

export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM":
            return addProductToCart(state, action.payload);

        case "REMOVE_ITEM":
            return removeProductFromCart(state, action.payload);

        case "CLEAR_CART":
            return clearCart();

        default:
            return state;
    }
}