"use client";
import { Toast } from "@/lib/toast";
import { createContext, useState ,useEffect } from "react";
import ToastItem from "../ui/toastItem";

type ToastType = {
  id: string;
  message: string;
  duration?: number;
  bgColor?: string;
  textColor?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
}

const ToastContext = createContext(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);
  function showToast(toast: Omit<ToastType, "id">) {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration || 3000);
  }

  useEffect(() => {
    Toast._setHandler(showToast);
  }, []);

  return (
    <ToastContext.Provider value={null}>
      <div className="fixed inset-0 pointer-events-none z-50">
       {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
       ))}
      </div>
      {children}
    </ToastContext.Provider>
  )
}

