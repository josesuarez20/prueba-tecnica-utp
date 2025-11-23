import type { CartState } from "@/features/cart/types/cart.type";

export function removeProductFromCart(cart: CartState, productId: number): CartState {
    return cart.filter((item) => item.id !== productId);
}
