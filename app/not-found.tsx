import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container h-200 text-center flex flex-col justify-center space-y-8">
      <h2 className="font-lato text-3xl">Page not found 😔</h2>
      <div>
        <Link href={"/"} className="text-xl text-white px-6 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
          Go Home
        </Link>
      </div>
    </div>
  );
}
