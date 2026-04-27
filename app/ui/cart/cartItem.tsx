"use client";

import { Edit, MinusIcon, PlusIcon, Save, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CartItem({  value }: {  value: number }) {
  const [quantity, setQuantityValue] = useState(value); 
  const [isEditing, setIsEditing] = useState(false)
  const handleIncreaseValue = () => {
      setQuantityValue((prev) => prev + 1);
  }
  const handleDecreaseValue = () => {
      setQuantityValue((prev) => prev - 1);
  }
  return (
    <div className="bg-white flex items-center justify-between py-4 px-4 shadow-sm shadow-black/40 mx-4 rounded-2xl">
      <div className="flex gap-4 items-center">
        <Image
          src="/shirt.jpg"
          width={50}
          height={35}
          className="rounded-md"
          alt="Image of a shirt"
        />
        <div className="flex flex-col">
          <p className="text-3xl text-slate-700 font-semibold font-lato">
            Shirt
          </p>
          <span className="text-lg font-light"> ₦ 500</span>
          <span className="font-light text-slate-500">Quanity: {quantity}</span>
        </div>
      </div>
      {isEditing ? (
        <div className="flex gap-8 items-center">
          {<button className="bg-slate-300 p-2 rounded-full hover:bg-slate-400 hover:cursor-pointer"
          onClick={handleDecreaseValue}
          disabled={quantity === 1}
          >
            <MinusIcon />
          </button>}
          <p className="text-xl flex-1">{quantity}</p>
          <button className="bg-slate-300 p-2 rounded-full hover:bg-slate-400 hover:cursor-pointer"
          onClick={handleIncreaseValue}
          disabled={quantity === 20}
          >
            <PlusIcon />
          </button>
          
        </div>
      ) : (
        null
      )}
      <div className="flex gap-2">
        <div className="text-blue-900 hover:cursor-pointer hover:text-blue-400">
          {!isEditing ? <Edit onClick={() => setIsEditing(true)}/> : <Save onClick={() => setIsEditing(false)}/>}
        </div>
        <div className="text-red-500 hover:cursor-pointer hover:text-red-400">
          <Trash2Icon />
        </div>
      </div>
    </div>
  );
}
