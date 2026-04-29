"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="h-205 flex flex-col justify-center items-center">
      <h2 className="font-lato text-3xl">Page not found 😔</h2>
      <p className="text-slate-200 mb-10">You tried to access: {pathname} </p>
      <div>
        <Link href={"/"} className="text-xl text-white px-6 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
          Go Home
        </Link>
      </div>
    </div>
  );
}
