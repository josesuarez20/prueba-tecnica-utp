import { useState } from "react";
import { ShoppingBagIcon } from "@/shared/ui/Icons";
import { useCart } from "@/features/cart/hooks/useCart";
import { CartModal } from "@/features/cart/components/CartModal";

function Header() {
    const { totalItems, totalAmount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 bg-blue-600 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                            <ShoppingBagIcon width={28} height={28} className="text-white" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Tienda Online</h1>
                    </div>
                    <button 
                        onClick={() => setIsCartOpen(true)}
                        className="relative flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
                    >
                        <ShoppingBagIcon width={24} height={24} />
                        {totalItems > 0 && (
                            <>
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg animate-pulse">
                                    {totalItems}
                                </span>
                                <span className="hidden sm:block text-sm font-semibold bg-white/20 px-2 py-1 rounded-lg">
                                    ${totalAmount.toFixed(2)}
                                </span>
                            </>
                        )}
                    </button>
                </div>
            </header>
            
            <CartModal 
                isOpen={isCartOpen} 
                onClose={() => setIsCartOpen(false)} 
            />
        </>
    );
}

export default Header;