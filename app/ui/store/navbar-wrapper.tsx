// app/ui/store/navbar-wrapper.tsx
"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/app/ui/store/navbar"), { ssr: false });

export default function NavbarWrapper() {
  return <Navbar />;
}