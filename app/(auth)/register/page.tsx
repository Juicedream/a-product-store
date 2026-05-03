"use client";
import { signup } from "@/app/actions/auth";
import { clsx } from "clsx";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const [state, action, pending] = useActionState(signup, undefined);
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen flex items-center justify-center px-2">
      <div className=" p-4 my-2 bg-gray-100 rounded-2xl">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-gray-600 text-xs mt-1">
          Create an account to get started.
        </p>
        <form action={action} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={clsx(
                "mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2",
                state?.errors?.name && "border-red-500",
               
              )}
            />
            {state?.errors?.name && (
              <p className="text-red-500 text-xs mt-2">{state.errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              
              className={clsx(
                "mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2",
                state?.errors?.name && "border-red-500",
              
              )}
            />
            {state?.errors?.email && (
              <p className="text-red-500 text-xs mt-2">{state.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
    
              className={clsx(
                "mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2",
                state?.errors?.password && "border-red-500",
               
              )}
            />
            {state?.errors?.password && (
              <>
                <p>Password must:</p>
                <ul className="list-disc list-inside text-red-500 text-xs mt-2">
                  {state.errors.password.map((error) => (
                    <li key={error}>
                      {error}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className={clsx(
                "mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2",
                state?.errors?.confirmPassword && "border-blue-500",
                
                
              )}
            />
            {state?.errors?.confirmPassword && (
              <p className="text-red-500 text-xs mt-2">{state.errors.confirmPassword}</p>
            )}
          </div>
          <div className="mb-8 inline-flex gap-2">
            <input
              type="checkbox"
              id="showPassword"
              name="showPassword"
              className={clsx(
                "border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-1",
              )}
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
             <label
              htmlFor="showPassword"
              className=" text-sm font-medium text-gray-700"
              
            >
              Show password
            </label>
           
          </div>
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 items-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-2xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2"
              disabled={pending}
            >
              {pending ? <Loader2Icon className="animate-spin" /> : "Sign up"}
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2">
              <FaGoogle className="mr-2" /> Sign up with Google
            </button>
          </div>
        </form>
        <Link
          href="/login"
          className="text-blue-500 hover:text-blue-700 mx-auto w-full block text-center mt-4 font-lato"
        >
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}
