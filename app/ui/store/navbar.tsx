"use client";
import { useUser } from "@/app/context/UserContext";
import { useCart } from "@/app/providers/cartProvider";
import clsx from "clsx";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navlinks = [
  { id: 1, name: "HOME", path: "/home" },
  { id: 2, name: "ABOUT", path: "/about" },
  { id: 3, name: "BLOGS", path: "/blogs" },
  { id: 4, name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const { loading } = useUser();
  const pathname = usePathname();
  const { cartTotal } = useCart();
 
  if (loading) return null;
  return (
    <header className="sticky top-0 py-3 px-4 bg-white z-999">
      <nav className="flex flex-col lg:flex-row gap-3 items-center lg:max-w-7xl mx-auto justify-between transition-all">
        <Link href={"/"} className="hidden lg:block">
          <h1 className="uppercase text-sm md:text-lg lg:text-2xl font-bold hover:text-blue-300 duration-500 ease-in-out transform hover:-translate-y-1 transition-all hover:cursor-pointer">
            Store
          </h1>
        </Link>
        <div className="">
          <ul className="space-x-6">
            {navlinks.map((navItem) => (
              <li
                key={navItem.id}
                className={clsx(
                  "rounded-md p-2 inline",
                  { "text-blue-400": pathname === navItem.path },
                  {
                    "transition duration-500 ease-in-out transform hover:bg-blue-400 hover:text-white hover:-translate-y-1 hover:scale-102":
                      pathname !== navItem.path,
                  },
                )}
              >
                <Link href={navItem.path} className="">
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-6 text-sm">
          <div
            title="Search here"
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer"
          >
            <Search size={18} />
          </div>
          <Link
            href={"/profile"}
            title="Your profile"
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer"
          >
            <CircleUserRound size={18} />
          </Link>
          <Link
            href={"/cart"}
            title="Cart"
            className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer px-2"
          >
            <span className="p-1 text-xs rounded-full absolute -top-3 -right-1 bg-slate-200">
              {cartTotal}
            </span>
            <ShoppingCart size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
