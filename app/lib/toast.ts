type ToastOptions = {
  message: string;
  duration?: number;
  bgColor?: string;
  textColor?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
};

type ShowToastFn = (options: ToastOptions) => void;

let toastHandler: ShowToastFn | null = null;

export const Toast = {
  _setHandler(fn: ShowToastFn) {
    toastHandler = fn;
  },

  show(options: ToastOptions) {
    toastHandler?.(options);
  },

  default(message: string, options?: Partial<ToastOptions>) {
    toastHandler?.({
      message,
      bgColor: "bg-white",
      textColor: "text-black",
      ...options,
    });
  },
  success(message: string, options?: Partial<ToastOptions>) {
    toastHandler?.({
      message,
      bgColor: "bg-green-500",
      textColor: "text-white",
      ...options,
    });
  },

  error(message: string, options?: Partial<ToastOptions>) {
    toastHandler?.({
      message,
      bgColor: "bg-red-500",
      textColor: "text-white",
      ...options,
    });
  },

  warning(message: string, options?: Partial<ToastOptions>) {
    toastHandler?.({
      message,
      bgColor: "bg-yellow-400",
      textColor: "text-black",
      ...options,
    });
  },
  info(message: string, options?: Partial<ToastOptions>) {
    toastHandler?.({
      message,
      bgColor: "bg-blue-500",
      textColor: "text-white",
      ...options,
    });
  },
};
