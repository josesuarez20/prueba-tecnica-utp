import { useState } from "react";
import { useCart } from "@/features/cart/hooks/useCart";
import { ClearCartIcon, CloseIcon, RemoveFromCartIcon } from "@/shared/ui/Icons";
import { Button } from "@/shared/ui/Buttons";
import { ConfirmDialog } from "@/shared/ui/ConfirmDialog";
import type { CartItem } from "@/features/cart/types/cart.type";

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
    const { cart, removeFromCart, clearCart, totalItems, totalAmount } = useCart();
    const [isConfirmRemoveOpen, setIsConfirmRemoveOpen] = useState(false);
    const [isConfirmClearOpen, setIsConfirmClearOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);

    const handleRemoveClick = (item: CartItem) => {
        setSelectedItem(item);
        setIsConfirmRemoveOpen(true);
    };

    const confirmRemoveItem = () => {
        if (selectedItem) {
            removeFromCart(selectedItem.id);
        }
        setIsConfirmRemoveOpen(false);
        setSelectedItem(null);
    };

    const handleClearCartClick = () => {
        setIsConfirmClearOpen(true);
    };

    const confirmClearCart = () => {
        clearCart();
        setIsConfirmClearOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div 
                    className="fixed inset-0 bg-black/50 transition-opacity"
                    onClick={onClose}
                />
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-blue-600 px-6 py-4 flex items-center justify-between rounded-t-lg">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <span>🛒</span> Carrito de Compras
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-200 transition-colors"
                        >
                            <CloseIcon width={24} height={24} />
                        </button>
                    </div>
                    <div className="bg-white px-4 py-5 sm:p-6">
                        {cart.length === 0 ? (
                            <div className="text-center py-8">
                                <p className="text-gray-500">Tu carrito está vacío</p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 max-h-96 overflow-y-auto">
                                    {cart.map((item) => (
                                        <div 
                                            key={item.id}
                                            className="flex gap-4 p-3 border-b last:border-b-0 hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-20 h-20 object-cover rounded-lg shadow-sm"
                                            />
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-sm text-gray-900">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-500">
                                                    ${item.price}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => handleRemoveClick(item)}
                                                className="text-red-500 hover:text-red-700 transition-colors"
                                                title="Eliminar producto"
                                            >
                                                <RemoveFromCartIcon width={20} height={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 border-t-2 pt-4 bg-gray-50 -mx-4 px-4 py-4 rounded-b-lg">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm font-medium text-gray-600">
                                            Total de productos:
                                        </span>
                                        <span className="font-bold text-gray-900 bg-gray-200 px-3 py-1 rounded-full">{totalItems}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-900">
                                            Total a pagar:
                                        </span>
                                        <span className="text-3xl font-bold bg-blue-600 bg-clip-text text-transparent">
                                            ${totalAmount.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    {cart.length > 0 && (
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse gap-2">
                            <Button
                                variant="primary"
                                className="w-full sm:w-auto"
                                onClick={onClose}
                            >
                                Continuar comprando
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto flex items-center justify-center gap-2"
                                onClick={handleClearCartClick}
                            >
                                <ClearCartIcon width={18} height={18} />
                                Vaciar carrito
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            <ConfirmDialog
                isOpen={isConfirmRemoveOpen}
                title="¿Eliminar producto?"
                message={
                    selectedItem
                        ? `¿Deseas eliminar "${selectedItem.title}" del carrito?`
                        : "¿Deseas eliminar este producto del carrito?"
                }
                onConfirm={confirmRemoveItem}
                onCancel={() => {
                    setIsConfirmRemoveOpen(false);
                    setSelectedItem(null);
                }}
                confirmText="Eliminar"
                cancelText="Cancelar"
                type="danger"
            />

            <ConfirmDialog
                isOpen={isConfirmClearOpen}
                title="¿Vaciar carrito?"
                message={`¿Estás seguro de eliminar todos los productos (${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}) del carrito? Esta acción no se puede deshacer.`}
                onConfirm={confirmClearCart}
                onCancel={() => setIsConfirmClearOpen(false)}
                confirmText="Vaciar carrito"
                cancelText="Cancelar"
                type="danger"
            />
        </div>
    );
}
