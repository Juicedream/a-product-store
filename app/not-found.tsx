"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="container h-200 text-center flex flex-col justify-center space-y-8">
      <h2 className="font-lato text-3xl">Page not found 😔</h2>
      <p className="text-slate-400 mb-10">You tried to access: {pathname} </p>
      <div>
        <Link href={"/"} className="text-xl text-white px-6 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
          Go Home
        </Link>
      </div>
    </div>
  );
}
