import Products from "@/features/products/components";
import { ProductSkeletonGrid } from "@/features/products/components/ProductSkeletonGrid";
import { useProducts } from "@/features/products/hooks/useProducts";


export default function ProductPage() {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <ProductSkeletonGrid />;
    }

    if (error) {
        return <div>Error loading products.</div>;
    }
    console.log('Products:', products);

    return (
        <div className="w-full flex justify-center items-center flex-col">
            <Products products={products || []} />
        </div>
    );
}