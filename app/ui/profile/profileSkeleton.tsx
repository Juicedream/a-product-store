"use client"

export default function ProfileSkeleton () {
 
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-2 gap-6 lg:py-8 animate-pulse">
      {/* profile with image */}
      <div className="bg-gray-500 p-2 shadow-black/40 shadow-sm rounded-lg grid grid-cols-2 gap-4 px-2 w-full">
        <div className="items-center mx-auto justify-center flex flex-col sm:col-span-2 lg:col-auto">
          <div
            
            className="border-2 border-gray-100 p-12 rounded-full text-white bg-gray-400"
          />
          <div className="inline-flex gap-2 text-white text-xs bg-gray-400 w-full items-center justify-center rounded-full border-2 hover:bg-gray-500 transition-colors h-full">
            {/* Upload Image
            <CameraIcon /> */}
          </div>
        </div>
        <div className="flex flex-col gap-1 shadow sm:p-4 lg:p-2 bg-gray-400 rounded-md sm:col-span-2 sm:place-items-center sm:mx-auto lg:col-auto w-full">
          <p className="font-lato">
            <span className="font-semibold"></span>
          </p>
         </div> 
      </div>
      {/* address */}
      <div className="bg-gray-400 p-2 shadow-black/40 shadow-sm rounded-lg w-full">
        <div className="h-full w-full bg-gray-200 p-8 flex flex-col items-center justify-center">
          <div  className="bg-gray-500 font-lato px-2 py-4 rounded-xl flex flex-row lg:flex-col items-center gap-2 lg:gap-1 text-white hover:bg-gray-400 hover:cursor-pointer transition-colors w-full">
              {/* <HouseIcon /> */}
              <p className="lg:text-lg text-xl font-bold "></p>
          </div>

        </div>
      </div>
    </div>
  );
}
