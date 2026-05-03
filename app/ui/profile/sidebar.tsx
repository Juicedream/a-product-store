"use client";
import { useUser } from "@/app/context/UserContext";
import { Toast } from "@/app/lib/toast";
import { sidebarItems } from "@/app/utils/sidebarItems";
import clsx from "clsx";
import { PowerIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function ProfileSidebar() {
  const pathname = usePathname();
  const {logout, user} = useUser();
  const router = useRouter();
  function handleLogout() {
    logout();
    Toast.default("Logged out successfully");
    router.push("/login");
  }
  return (
    <div className="bg-transparent w-full rounded p-4 flex items-center flex-row lg:flex-col justify-between">
      <div className="flex flex-row lg:flex-col gap-8 lg:gap-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              "text-center p-3 rounded-2xl hover:cursor-pointer",
             {"bg-blue-400 hover:bg-blue-500 transition-colors text-white": pathname === item.href}
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button
        className="lg:mt-8 lg:mx-auto p-3 bg-red-400 rounded-2xl text-white hover:bg-red-500 transition-colors hover:cursor-pointer"
        title="Logout"
        onClick={handleLogout}
      >
        <PowerIcon />
      </button>
    </div>
  );
}
