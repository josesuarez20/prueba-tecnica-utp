import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "./ProductItem";
import type { ProductItem } from "@/features/products/types/product.type";

const addToCartMock = vi.fn();
const removeFromCartMock = vi.fn();
const isInCartMock = vi.fn(() => false);

vi.mock("@/features/cart/hooks/useCart", () => ({
    useCart: () => ({
        addToCart: addToCartMock,
        removeFromCart: removeFromCartMock,
        isInCart: isInCartMock,
        cart: [],
        clearCart: vi.fn(),
        totalItems: 0,
        totalAmount: 0
    }),
}));

// Mock del modal para no renderizarlo completo
vi.mock("@/features/products/components/ProductDetailModal", () => ({
    ProductDetailModal: () => <div role="dialog">Mock Modal</div>
}));

// Mock del ConfirmDialog
vi.mock("@/shared/ui/ConfirmDialog", () => ({
    ConfirmDialog: () => null
}));

    const mockProduct: ProductItem = {
    id: 1,
    title: "Test Product",
    description: "This is a test product description",
    category: "test",
    price: 99.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 50,
    tags: ["test"],
    brand: "Test Brand",
    sku: "TEST-001",
    weight: 1,
    dimensions: { width: 10, height: 10, depth: 10 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1-2 days",
    availabilityStatus: "In Stock",
    reviews: [],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        barcode: "123456789",
        qrCode: "qr-code-url"
    },
    images: ["https://example.com/image1.jpg"],
    thumbnail: "https://example.com/thumbnail.jpg"
    };

describe("ProductCard", () => {
    it("renderiza correctamente el producto", () => {
        render(<ProductCard product={mockProduct} />);

        expect(screen.getByText("Test Product")).toBeInTheDocument();
        expect(screen.getByText("$99.99")).toBeInTheDocument();
        expect(screen.getByText(/This is a test product description/i)).toBeInTheDocument();
    });

    it("muestra la imagen del producto", () => {
        render(<ProductCard product={mockProduct} />);

        const image = screen.getByAltText("Test Product") as HTMLImageElement;
        expect(image.src).toContain("thumbnail.jpg");
    });

    it("muestra el botón Agregar cuando el producto no está en el carrito", () => {
        render(<ProductCard product={mockProduct} />);

        expect(screen.getByText("Agregar")).toBeInTheDocument();
        expect(screen.queryByText("Eliminar")).not.toBeInTheDocument();
    });

    it("muestra el botón Eliminar cuando el producto está en el carrito", () => {
        isInCartMock.mockReturnValue(true);
        
        render(<ProductCard product={mockProduct} />);

        expect(screen.getByText("Eliminar")).toBeInTheDocument();
        expect(screen.queryByText("Agregar")).not.toBeInTheDocument();
        
        isInCartMock.mockReturnValue(false);
    });

    it('abre el modal de detalles al hacer clic en "Ver detalles"', () => {
        render(<ProductCard product={mockProduct} />);

        fireEvent.click(screen.getByText("Ver detalles"));
        expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
});