import type { CartState } from "@/features/cart/types/cart.type";

export function calculateCartTotals(cart: CartState): {
    totalItems: number;
    totalAmount: number;
} {
    const totalItems = cart.length;
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    return { totalItems, totalAmount };
}
