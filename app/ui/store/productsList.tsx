import { Suspense } from "react";
import ProductCard from "./productCard";
import ProductCardSkeleton from "./productCardSkeleton";
const items = [1,2,3,4,5,6,7,8,9,10,11,12]
export default function ProductsList() {
  return (
    <div>
      <h3 className="my-8 font-bold text-xl">Flash Sales</h3>
      <div className="w-full grid grid-cols-6 gap-x-2 gap-y-6 my-4">
       {items.map((item) => (
        <Suspense key={item} fallback={<ProductCardSkeleton />}>
          <ProductCard />
        </Suspense>
       ))}
      </div>
    </div>
  );
}
