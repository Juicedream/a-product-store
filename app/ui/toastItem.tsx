import clsx from "clsx";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

  type ToastItemProps = {
  message: string;
  bgColor?: string;
  textColor?: string;
  position?: ToastPosition;
};

export default function ToastItem({
  message,
  bgColor = "bg-white",
  textColor = "text-black",
  position = "top-center",
}: ToastItemProps) {
  const positionClases = {
    "top-left": "top-25 left-5",
    "top-center": "top-25 left-1/2 -translate-x-1/2",
    "top-right": "top-25 right-5",
    "bottom-left": "bottom-25 left-5",
    "bottom-center": "bottom-15 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-15 right-5",
  };

  return (
    <div className={
      clsx(
        "absolute transition-all duration-500 ease-in-out animate-slideIn",
        positionClases[position],
      )
    }>
      <div
      className={clsx(
        "px-5 py-3 rounded-xl shadow-xl backdrop-blur-md",
        bgColor,
        textColor
      )}
      >
        {message}
      </div>

    </div>
  )
}
