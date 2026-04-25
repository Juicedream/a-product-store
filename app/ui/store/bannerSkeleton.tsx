
export default function BannerSkeleton() {
  return (
    <div className="flex w-full h-82 bg-slate-400/50 animate-pulse">
      <div className="h-full flex flex-col items-center justify-center hover:cursor-pointer ">
        {/* <ChevronLeft size={82} className="text-slate-400 hover:text-blue-500"/> */}
      </div>
      <div className="h-full grow flex flex-row justify-between items-center px-10">
        {/* <div className="space-y-8 flex-wrap py-5 px-12">
          <h2 className="text-6xl uppercase">Your Products are great</h2>
          <button className="uppercase px-12 py-3 bg-black text-white text-center hover:bg-black/70 rounded-sm hover:cursor-pointer">Shop Now</button>
        </div> */}
        <div className="px-10 py-2">
          {/* <Image 
          src="/watch.png"
          height={350}
          width={350}
          alt="Watch Image displayed in the banner section"
        /> */}
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-center hover:cursor-pointer">
        {/* <ChevronRight size={82} className="text-blue-400 hover:text-blue-500"/> */}
      </div>
    </div>
  );
}
