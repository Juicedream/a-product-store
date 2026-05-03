"use client";
import { useCart } from "@/app/providers/cartProvider";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id, name, price, imageUrl, description }: { id: string; name: string; price: number; imageUrl: string; description: string }) {
  const { addToCart } = useCart();
  function addCart() {
    addToCart();
  }
  return (
    <div className="shadow-sm shadow-black/50 rounded-2xl flex flex-col">
      <Image
        loading="eager"
        src={imageUrl}
        width={350}
        height={350}
        className="object-cover rounded-t-2xl h-auto w-full grow"
        alt={`${name} image for the product`}
      />
      <hr className="border" />
      <div className="rounded-b-2xl bg-white py-4 px-4 flex flex-col gap-y-2">
        <p className="text-xl lg:text-2xl font-semibold">{name}</p>
        <p className="font-light text-lg lg:text-xl">₦{" "}{price.toLocaleString()}.00</p>
        <p className="text-gray-500 text-sm lg:text-base">
          {description}
        </p>
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
