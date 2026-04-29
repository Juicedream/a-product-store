import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex max-w-7xl lg:w-full mx-auto max-h-82 items-center bg-slate-300/10">
      <div className="hover:cursor-pointer">
        <ChevronLeft size={62} className="text-slate-400 hover:text-blue-500"/>
      </div>
      <div className="flex flex-row justify-between items-center bg-slate-900/90 flex-1 ">
        <div className="space-y-3 flex-wrap p-4">
          <h2 className="text-md lg:text-2xl uppercase text-white">Your Products are great</h2>
          <button className="uppercase transition-colors p-4 bg-black text-white text-center hover:bg-black/70 rounded-2xl hover:cursor-pointer text-sm lg:text-lg">Shop Now</button>
        </div>
        <div className="max-w-xl">
          <Image 
          src="/watch.png"
          width={150}
          height={150}
          alt="Watch Image displayed in the banner section"
        />
        </div>
      </div>
      <div className="hover:cursor-pointer">
        <ChevronRight size={62} className="text-blue-400 hover:text-blue-500"/>
      </div>
    </div>
  )
}