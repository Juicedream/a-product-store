"use client";
import { useCart } from "@/app/providers/cartProvider";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id }: { id: number }) {
  const { addToCart } = useCart();
  function addCart() {
    addToCart();
  }
  return (
    <div className="shadow-sm shadow-black/50 rounded-2xl">
      <Image
        loading="eager"
        src="/shirt.jpg"
        width={350}
        height={350}
        className="object-contain rounded-t-2xl h-auto w-auto"
        alt="Shirt image for the product"
      />
      <div className="rounded-b-2xl bg-white py-4 px-4 flex flex-col gap-y-2">
        <p className="text-xl lg:text-2xl font-semibold">Shirt</p>
        <p className="font-light text-lg lg:text-xl">$5693</p>
        <div className="grid text-center gap-2 mt-2">
          <Link
            href={`/product/${id}`}
            className="p-2 text-white bg-black rounded-md hover:bg-black/60 hover:cursor-pointer uppercase"
          >
            View
          </Link>
          <button
            className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-500 hover:cursor-pointer uppercase"
            onClick={addCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
