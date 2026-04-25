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
              className={clsx('transition duration-500 ease-in-out hover:bg-blue-300 hover:text-white transform hover:-translate-y-1 hover:scale-110 p-2 rounded-md', 
                {"text-blue-400 font-semibold": pathname === navItem.path}
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
        <div title="Your profile" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer">
          <CircleUserRound size={18} />
        </div>
        <div title="Cart" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer">
          <ShoppingCart size={18} />
        </div>
      </div>
    </div>
  );
}
