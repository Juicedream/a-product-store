import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container h-200 text-center flex flex-col justify-center space-y-8">
      <h2 className="font-lato text-3xl">Page not found 😔</h2>
      <Link href={"/"} className="text-xl text-blue-400 hover:underline">Return Back</Link>
    </div>
  )
}