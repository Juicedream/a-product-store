import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="flex-col max-w-fit">
      <Image
        src="/shirt.jpg"
        width={250}
        height={50}
        className="object-contain rounded-t-2xl"
        alt="Shirt image for the product"
      />
      <div className="rounded-b-2xl bg-white py-4 px-4 flex flex-col gap-y-2">
        <p className="text-xl font-semibold">Shirt</p>
        <p className="font-light">$5693</p>
        <div className="flex justify-between gap-x-4 mt-2">
          <button className="px-4 py-2 text-white bg-black rounded-md hover:bg-black/60 hover:cursor-pointer uppercase">
            View
          </button>
          <button className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-500 hover:cursor-pointer uppercase">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
