export function ProductCardSkeleton() {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4 animate-pulse">
        <div className="aspect-square rounded-lg bg-gray-200 w-3xs" />

        <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />

        <div className="mt-2 h-4 w-1/3 rounded bg-gray-200" />

        <div className="mt-4 flex flex-col justify-between gap-2">
            <div className="h-10 w-full rounded bg-gray-200" />
            <div className="h-10 w-full rounded bg-gray-200" />
        </div>
        </div>
    );
}