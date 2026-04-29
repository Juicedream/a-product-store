"use client";

import { useCart } from "@/app/providers/cartProvider";
import { ArrowLeft, Send } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const reviews: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let reviews = [];

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  const id = pathname.split("/")[2] || "nothing here";
  const { addToCart } = useCart();
  const router = useRouter();
  function addCart() {
    addToCart();
  }

  return (
    <div className="mt-8 grid grid-rows-2 lg:grid-cols-2 gap-4 mx-auto max-w-7xl md:max-w-6xl px-4">
      <div className="p-8 rounded-sm bg-white/10 shadow-md shadow-black/40">
        <div className="flex flex-col gap-4">
          <div
            onClick={() => router.back()}
            className="mb-4 hover:cursor-pointer text-white hover:text-blue-400 max-w-fit"
          >
            <ArrowLeft size={30} />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 shrink-10">
              <Image
                loading="eager"
                src="/shirt.jpg"
                alt="Shirt image of the product"
                width={180}
                height={100}
                className="rounded-md object-contain w-auto h-auto"
              />
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold font-lato ">
                  Shirt
                </h2>
                <p className="text-wrap text-slate-200">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam tempora voluptatum pariatur vitae dolorum.
                </p>
                <p className="font-bold italic text-sm lg:text-md">SKU-{id}</p>
                <span className="text-2xl font-poppins">₦ 7,800</span>
                <div className="mt-8 space-x-4 lg:flex">
                  <button
                    // href={`/product/${id}`}
                    className="px-4 py-2 text-white bg-black rounded-md hover:bg-black/60 hover:cursor-pointer uppercase"
                  >
                    Buy Now
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-400 hover:cursor-pointer uppercase"
                    onClick={addCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <Image
              src="/shirt.jpg"
              alt="Shirt image of the product"
              width={40}
              height={50}
              className="rounded-md h-auto w-auto"
            />
            <Image
              src="/shirt.jpg"
              alt="Shirt image of the product"
              width={40}
              height={40}
              className="rounded-md h-auto w-auto"
            />
            <Image
              src="/shirt.jpg"
              alt="Shirt image of the product"
              width={40}
              height={50}
              className="rounded-md h-auto w-auto"
            />
            <Image
              src="/shirt.jpg"
              alt="Shirt image of the product"
              width={40}
              height={50}
              className="rounded-md h-auto w-auto"
            />
          </div>
        </div>
      </div>

      <div className="p-8 bg-white/70 rounded-sm shadow-md shadow-black/40 relative">
        {/* Reviews */}
        <h2 className="after:content-['(10)'] after:text-amber-500 after:ml-1 text-xl lg:text-2xl text-center">
          Reviews
        </h2>

        <div className="mb-14 mt-8">
          {reviews.length === 0 ? (
            <p className="bg-slate-500 text-center py-10 rounded-xl text-3xl lg:text-xl text-slate-100">
              Be the first to leave a review
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 overflow-y-scroll max-h-98">
              {reviews.map((review) => (
                <div
                  key={review}
                  className="flex flex-col gap-3 bg-slate-700 text-white p-3 rounded-2xl hover:bg-slate-600 transition-colors"
                >
                  <p className="text-2xl lg:text-xl font-lato">
                    The quality is nice
                  </p>

                  <span className="text-sm font-lato">Posted By: Admin</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* text input to leave a review */}
        <div className="flex gap-4 absolute lg:min-w-136 min-w-185 md:min-w-205 bottom-4">
          <input
            type="text"
            name="review"
            id=""
            placeholder="Leave a review"
            className="flex-1 lg:flex-none lg:min-w-sm bg-white p-3 rounded-3xl ring-0 outline-none font-lato text-xl"
          />
          <button className="bg-yellow-500 hover:bg-yellow-400 transition-colors hover:cursor-pointer px-4 py-3 rounded-xl text-white">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}
