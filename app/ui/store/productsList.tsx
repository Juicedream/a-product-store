"use client";
import { ProductTypes } from "@/app/types";
import ProductCard from "./productCard";
import ProductCardSkeleton from "./productCardSkeleton";
import { getProducts } from "@/app/actions/products";
import { useQuery } from "@tanstack/react-query";

export default function ProductsList() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => await getProducts(),
  });

  const products: ProductTypes[] = data || [];

  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-4 gap-y-8">
        {isLoading && <ProductCardSkeleton />}
        {products.length > 1 && (
            <h3 className="mt-4 font-semibold text-2xl lg:text-4xl text-white col-span-full">
              Flash Sales
            </h3>
          ) &&
          products?.map((product) => (
            <ProductCard key={product._id} id={product._id} {...product} />
          ))}
        {!isLoading && products.length === 0 && (
          <div className="max-w-7xl mx-auto px-2 lg:px-4">
            <h3 className="mt-4 font-semibold text-2xl lg:text-4xl text-white">
              No products available at the moment
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
