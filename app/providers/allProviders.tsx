"use client";
import React, { createContext, useState } from "react";
import { ToastProvider } from "./toastProvider";
import { CartProvider } from "./cartProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "../context/UserContext";

const ProviderContext = createContext<null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </QueryClientProvider>
    </UserProvider>
  );
}
