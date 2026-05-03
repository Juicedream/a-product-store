"use client"
import { useLastSeen } from "@/app/lib/hooks/useLastSeen";
import { UserType } from "@/app/types";
import clsx from "clsx";
import { CameraIcon, Edit2Icon, HouseIcon, User2 } from "lucide-react";
import Link from "next/link";


export default function Profile({ user }: { user: UserType }) {
  console.log({ user });
  const { formatted } = useLastSeen();
  let formattedCheck = formatted.split("")[0];
  if (isNaN(Number(formattedCheck))) {
    formattedCheck = "false";
  } else {
    formattedCheck = "true";
  }

  if (!user) return;
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-2 gap-6 lg:py-8">
      {/* profile with image */}
      <div className="bg-white p-2 shadow-black/40 shadow-sm rounded-lg grid grid-cols-2 gap-4 px-2">
        <div className="items-center mx-auto justify-center flex flex-col sm:col-span-2 lg:col-auto">
          <User2
            size={152}
            className="border-2 border-amber-400 rounded-full text-white bg-blue-400"
          />
          <div className="inline-flex gap-2 text-white text-xs bg-gray-400 w-full items-center justify-center rounded-full border-2 hover:bg-gray-500 transition-colors">
            Upload Image
            <CameraIcon />
          </div>
        </div>
        <div className="flex flex-col gap-1 shadow sm:p-4 lg:p-2 bg-gray-100 rounded-md sm:col-span-2 sm:place-items-center sm:mx-auto lg:col-auto">
          <p className="font-lato">
            Name: <span className="font-semibold">{user?.name}</span>
          </p>
          <p className="font-lato">
            Email: <span className="font-semibold">{user?.email}</span>
          </p>
          <p className="font-lato">
            Orders: <span className="font-semibold">{user?.orders.length}</span>
          </p>
          <p className="font-lato">
            Role: <span className="font-semibold capitalize">{user?.role}</span>
          </p>
          <p className="font-lato">
            Verified:{" "}
            <span className="font-semibold capitalize text-amber-500">
              {user?.isVerified ? "true" : "false"}
            </span>
          </p>
          <p className="font-lato">
            Last logged in:{" "}
            <span
              className={clsx("font-semibold", {
                "text-red-600": formattedCheck === "true",
                "text-green-600": formattedCheck === "false",
              })}
            >
              {formatted}
            </span>
          </p>
          <div className="inline-flex font-lato items-center gap-2 justify-center p-2 bg-blue-400 text-white rounded-md my-2 hover:cursor-pointer hover:bg-blue-500 shadow">
            Edit Profile
            <Edit2Icon size={16} />
          </div>
        </div>
      </div>
      {/* address */}
      <div className="bg-white p-2 shadow-black/40 shadow-sm rounded-lg">
        <div className="h-full w-full bg-gray-200 p-8 flex flex-col items-center justify-center">
          <Link href={"/profile/addresses"} className="bg-amber-500 font-lato px-2 py-4 rounded-xl flex flex-row lg:flex-col items-center gap-2 lg:gap-1 text-white hover:bg-amber-400 hover:cursor-pointer transition-colors">
              <HouseIcon />
              <p className="lg:text-lg text-xl font-bold ">Add a new address</p>
          </Link>

        </div>
      </div>
    </div>
  );
}
