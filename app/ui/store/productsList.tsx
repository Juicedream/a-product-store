import { Suspense } from "react";
import ProductCard from "./productCard";
import ProductCardSkeleton from "./productCardSkeleton";
const items = [1,2,3,4,5,6,7,8,9,10,11,12]
export default function ProductsList() {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-4 gap-y-8">
      <h3 className="mt-4 font-semibold text-2xl lg:text-4xl text-white col-span-full">Flash Sales</h3>
       {items.map((item) => (
        <Suspense key={item} fallback={<ProductCardSkeleton />}>
          <ProductCard id={item} />
        </Suspense>
       ))}
      </div>
    </div>
  );
}
