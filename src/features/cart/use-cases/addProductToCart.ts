import type { CartState } from "@/features/cart/types/cart.type";
import type { ProductItem } from "@/features/products/types/product.type";

export function addProductToCart(cart: CartState, product: ProductItem): CartState {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
        return cart;
    }
    
    return [...cart, { ...product, quantity: 1 }];
}
