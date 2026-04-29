"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { id: 1, name: "HOME", path: "/" },
  { id: 2, name: "ABOUT", path: "/about" },
  { id: 3, name: "BLOGS", path: "/blogs" },
  { id: 4, name: "CONTACT", path: "/contact" },
];
const date = new Date();

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 bg-white/98 mx-auto px-8 flex flex-col lg:flex-row items-center w-full py-3 justify-between">
      <div className="">
        <ul className="lg:flex space-x-8 text-md lg:text-sm hidden">
          {navlinks.map((navItem) => (
            <Link
              key={navItem.id}
              href={navItem.path}
              className={clsx(
                "rounded-md p-2",
                { "text-blue-400": pathname === navItem.path },
                {
                  "transition duration-500 ease-in-out transform hover:bg-blue-400 hover:text-white hover:-translate-y-1 hover:scale-102":
                    pathname !== navItem.path,
                },
              )}
            >
              <li>{navItem.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <Link href={"/"} className="font-bold text-md lg:text-xl">
        <h1 className=" hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer">
          STORE
        </h1>
      </Link>
      <div className="flex space-x-6 text-xs lg:text-sm">
        <p> All Rights Reserverd &copy; {date.getFullYear()}</p>
      </div>
    </div>
  );
}
