"use client";
import clsx from "clsx";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { id: 1, name: "HOME", path: "/" },
  { id: 2, name: "ABOUT", path: "/about" },
  { id: 3, name: "BLOGS", path: "/blogs" },
  { id: 4, name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="sticky top-0 bg-white px-42 flex flex-col lg:flex-row items-center py-3">
      <Link
        href={"/"}
        className="font-bold text-xl lg:text-2xl"
      >
        <h1 className=" hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer">STORE</h1>
      </Link>
      <div className="flex-1"></div>
      <div>
        <ul className="flex space-x-8 mr-22 text-xl lg:text-sm">
          {navlinks.map((navItem) => (
            <Link
              key={navItem.id}
              href={navItem.path}
              className={clsx('rounded-md p-2', 
                {"text-white bg-blue-400": pathname === navItem.path},
                {"transition duration-500 ease-in-out transform hover:text-black hover:-translate-y-1 hover:scale-102": pathname !== navItem.path}
              )}
            >
              <li>{navItem.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex space-x-6 text-sm">
        <div title="Search here" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer">
          <Search size={18} />
        </div>
        <Link href={"/profile"} title="Your profile" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer">
          <CircleUserRound size={18} />
        </Link>
        <Link href={"/cart"} title="Cart" className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer px-2">
          <span className="rounded-full absolute -top-3 right-0 bg-slate-200">0</span>
          <ShoppingCart size={18} />
        </Link>
      </div>
    </div>
  );
}
