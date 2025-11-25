import { useState } from "react";

export function useProductDetail() {
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const openDetail = (productId: number) => {
        setSelectedProductId(productId);
        setIsDetailOpen(true);
    };

    const closeDetail = () => {
        setIsDetailOpen(false);
        setSelectedProductId(null);
    };

    return {
        isDetailOpen,
        selectedProductId,
        openDetail,
        closeDetail,
    };
}
