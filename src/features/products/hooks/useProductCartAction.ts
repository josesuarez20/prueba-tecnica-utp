import { useState } from "react";
import { useCart } from "@/features/cart/hooks/useCart";
import type { ProductItem } from "@/features/products/types/product.type";

export function useProductCartAction(product: ProductItem) {
    const { addToCart, removeFromCart, isInCart } = useCart();
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [actionType, setActionType] = useState<'add' | 'remove'>('add');
    
    const inCart = isInCart(product.id);

    const handleCartAction = () => {
        if (inCart) {
            setActionType('remove');
            setIsConfirmOpen(true);
        } else {
            setActionType('add');
            setIsConfirmOpen(true);
        }
    };

    const confirmAction = () => {
        if (actionType === 'remove') {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
        setIsConfirmOpen(false);
    };

    const cancelAction = () => {
        setIsConfirmOpen(false);
    };

    return {
        inCart,
        isConfirmOpen,
        actionType,
        handleCartAction,
        confirmAction,
        cancelAction,
    };
}
