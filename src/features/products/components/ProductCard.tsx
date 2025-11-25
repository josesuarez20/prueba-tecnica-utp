import { Button } from "@/shared/ui/Buttons";
import { AddToCartIcon, PreviewIcon, RemoveFromCartIcon } from "@/shared/ui/Icons";
import { ProductDetailModal } from "@features/products/components/ProductDetailModal";
import { ConfirmDialog } from "@/shared/ui/ConfirmDialog";
import { useProductDetail, useProductCartAction } from "@/features/products/hooks";
import type { ProductItem } from "@/features/products/types/product.type";

interface ProductItemProps {
    product: ProductItem;
}

export function ProductCard({ product }: ProductItemProps) {
    const { isDetailOpen, selectedProductId, openDetail, closeDetail } = useProductDetail();
    const { 
        inCart, 
        isConfirmOpen, 
        actionType, 
        handleCartAction, 
        confirmAction, 
        cancelAction 
    } = useProductCartAction(product);

    return (
        <>
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                        alt={product.title}
                        src={product.thumbnail}
                        className="aspect-square w-full bg-gray-100 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.discountPercentage > 0 && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                            -{product.discountPercentage.toFixed(0)}%
                        </span>
                    )}
                </div>
                <h3 className="text-base font-bold text-gray-900 line-clamp-1">{product.title}</h3>
                <p className="mt-2 text-xs text-gray-600 line-clamp-2 flex-1">{product.description}</p>
                <div className="mt-3 flex items-baseline gap-2">
                    <p className="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">
                        ${product.price}
                    </p>
                    {product.discountPercentage > 0 && (
                        <p className="text-sm text-gray-400 line-through">
                            ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                        </p>
                    )}
                </div>
                <div className="mt-4 flex flex-col justify-between gap-2">
                    <Button 
                        variant="outline" 
                        size="small"
                        onClick={() => openDetail(product.id)}
                        className="flex items-center justify-center gap-2">
                        <PreviewIcon /> Ver detalles
                    </Button>
                    <Button 
                        variant={inCart ? "secondary" : "primary"}
                        size="small"
                        onClick={handleCartAction}
                        className="flex items-center justify-center gap-2">
                        {inCart ? (
                            <>
                                <RemoveFromCartIcon /> Eliminar
                            </>
                        ) : (
                            <>
                                <AddToCartIcon /> Agregar
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <ProductDetailModal
                productId={selectedProductId}
                isOpen={isDetailOpen}
                onClose={closeDetail}
            />

            <ConfirmDialog
                isOpen={isConfirmOpen}
                title={actionType === 'add' ? '¿Agregar producto?' : '¿Eliminar producto?'}
                message={
                    actionType === 'add'
                        ? `¿Deseas agregar "${product.title}" al carrito?`
                        : `¿Deseas eliminar "${product.title}" del carrito?`
                }
                onConfirm={confirmAction}
                onCancel={cancelAction}
                confirmText={actionType === 'add' ? 'Agregar' : 'Eliminar'}
                cancelText="Cancelar"
                type={actionType === 'add' ? 'success' : 'danger'}
            />
        </>
    );
}

export default ProductCard;
