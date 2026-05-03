"use client";

import { Edit, MinusIcon, PlusIcon, Save, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CartItem({ value }: { value: number }) {
  const [quantity, setQuantityValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const handleIncreaseValue = () => {
    setQuantityValue((prev) => prev + 1);
  };
  const handleDecreaseValue = () => {
    setQuantityValue((prev) => prev - 1);
  };
  return (
    <div className="bg-slate-500 flex items-center justify-between py-4 px-4 shadow-sm shadow-black/40 mx-4 rounded-2xl">
      <div className="flex gap-4 items-center">
        <Image
          loading="eager"
          src="/shirt.jpg"
          width={50}
          height={35}
          className="rounded-md h-auto w-auto"
          alt="Image of a shirt"
        />
        <div className="flex flex-col">
          <p className="text-3xl lg:text-2xl text-slate-100 font-semibold font-lato">
            Shirt
          </p>
          <span className="text-lg font-light"> ₦ 500</span>
          <span className="font-light text-slate-200 lg:text-xs">
            Quanity: {quantity}
          </span>
        </div>
      </div>
      {isEditing ? (
        <div className="flex gap-8 items-center">
          {
            <button
              className="bg-slate-300 p-2 rounded-full hover:bg-slate-400 hover:cursor-pointer lg:p-1"
              onClick={handleDecreaseValue}
              disabled={quantity === 1}
            >
              <MinusIcon />
            </button>
          }
          <p className="lg:text-lg text-xl flex-1">{quantity}</p>
          <button
            className="bg-slate-300 p-2 rounded-full hover:bg-slate-400 hover:cursor-pointer lg:p-1"
            onClick={handleIncreaseValue}
            disabled={quantity === 20}
          >
            <PlusIcon />
          </button>
        </div>
      ) : null}
      <div className="flex gap-2">
        <div className="text-blue-300 hover:cursor-pointer hover:text-blue-400">
          {!isEditing ? (
            <Edit onClick={() => setIsEditing(true)} />
          ) : (
            <Save onClick={() => setIsEditing(false)} />
          )}
        </div>
        <div className="text-red-400 hover:cursor-pointer hover:text-red-400">
          <Trash2Icon />
        </div>
      </div>
    </div>
  );
}
