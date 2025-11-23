import { useState, useEffect } from "react";
import { useCart } from "@/features/cart/hooks/useCart";
import { AddToCartIcon, CloseIcon, RemoveFromCartIcon } from "@/shared/ui/Icons";
import { Button } from "@/shared/ui/Buttons";
import { fetchProductById } from "../use-cases";
import type { ProductItem } from "@/features/products/types/product.type";

interface ProductDetailModalProps {
    productId: number | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProductDetailModal({ productId, isOpen, onClose }: ProductDetailModalProps) {
    const { addToCart, removeFromCart, isInCart } = useCart();
    const [product, setProduct] = useState<ProductItem | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && productId) {
            let cancelled = false;
            
            const loadProduct = async () => {
                setLoading(true);
                setProduct(null);
                
                try {
                    const data = await fetchProductById(productId);
                    if (!cancelled) {
                        setProduct(data);
                    }
                } catch (error) {
                    console.error(error);
                } finally {
                    if (!cancelled) {
                        setLoading(false);
                    }
                }
            };

            loadProduct();

            return () => {
                cancelled = true;
            };
        }
    }, [isOpen, productId]);

    if (!isOpen) return null;

    if (loading || !product) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black/50" onClick={onClose} />
                <div className="relative bg-white rounded-lg p-8 z-10">
                    <p className="text-gray-600">Cargando detalles...</p>
                </div>
            </div>
        );
    }

    const inCart = isInCart(product.id);

    const handleCartAction = () => {
        if (inCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div 
                    className="fixed inset-0 bg-black/50 transition-opacity"
                    onClick={onClose}
                />
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl z-10 pt-10">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1"
                    >
                        <CloseIcon width={24} height={24} />
                    </button>
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full rounded-lg object-cover"
                                />
                                {product.images && product.images.length > 1 && (
                                    <div className="grid grid-cols-4 gap-2">
                                        {product.images.slice(0, 4).map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image}
                                                alt={`${product.title} ${idx + 1}`}
                                                className="w-full h-20 object-cover rounded border hover:border-blue-500 cursor-pointer"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {product.title}
                                    </h2>
                                    {product.brand && (
                                        <p className="text-sm text-gray-500 mt-1">
                                            Marca: {product.brand}
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-bold text-blue-600">
                                        ${product.price}
                                    </span>
                                    {product.discountPercentage > 0 && (
                                        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                                            -{product.discountPercentage.toFixed(0)}%
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-gray-900">Descripción:</h3>
                                    <p className="text-gray-600 text-sm">{product.description}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">

                                    {product.availabilityStatus && (
                                        <div>
                                            <span className="text-gray-500">Disponibilidad:</span>
                                            <span className="ml-2 font-semibold text-green-600">
                                                {product.availabilityStatus}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <Button
                                    variant={inCart ? "secondary" : "primary"}
                                    className="w-full flex items-center justify-center gap-2"
                                    onClick={handleCartAction}
                                >
                                    {inCart ? (
                                        <>
                                            <RemoveFromCartIcon /> Eliminar del carrito
                                        </>
                                    ) : (
                                        <>
                                            <AddToCartIcon /> Agregar al carrito
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
