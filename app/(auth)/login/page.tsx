"use client";

import { signin } from "@/app/actions/auth";
import { useUser } from "@/app/context/UserContext";
import { Toast } from "@/app/lib/toast";
import { clsx } from "clsx";
import { ArrowLeftIcon, ArrowRightIcon,Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { GiGuards } from "react-icons/gi";


const sections: string[] = ["email", "password"];

export default function LoginPage() {
  const {loginWithEmailPassword, loading, isAuthenticated} = useUser(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [state, action] = useActionState(signin, undefined);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();


  useEffect(() => {
    const emailPasswordLogin = async () => {
      if (state?.data) {
        const {email, password} = state.data;
        const response = await loginWithEmailPassword(email, password);
        if (response) {
          router.push("/home");
        }
      }
    }
    emailPasswordLogin()
  }, [state?.data, loginWithEmailPassword, router]);

  useEffect(() => {
    if (loading) return;
    if (isAuthenticated) {
      router.push('/home');
    }
  }, [isAuthenticated, loading, router]);

  function handleNextSection() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && regex.test(email)) {
      setIsEmailValid(true);
      setErrorMessage("");
    }
    if (email && !regex.test(email)) {
      setErrorMessage("Invalid email address");
      return;
    }
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    }
  }
  function handlePreviousSection() {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-2">
      <div className=" py-4 px-6 bg-gray-100 rounded-2xl">
        <form className="mt-4" action={action}>
          {currentSection === "email" && (
            <>
              <h1 className="text-2xl font-bold">Sign In</h1>
              <p className="text-gray-600 text-xs mt-1 mb-4">
                Welcome to the store.
              </p>

              <div className="mb-4">
                {/* email field */}
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
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {state?.errors?.email && (
                  <p className="text-red-500 text-xs mt-2">
                    {state.errors.email}
                  </p>
                )}

                {!isEmailValid && errorMessage && (
                  <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
                )}
                {/* Continue button */}
                <div
                  className={clsx(
                    "w-full p-2 bg-amber-400 mt-4 rounded-2xl items-center justify-center text-white hover:bg-amber-500 transition-all duration-500",
                    { hidden: email.trim() === "" },
                    { "inline-flex": email.trim() !== "" },
                  )}
                  onClick={handleNextSection}
                >
                  Continue <ArrowRightIcon />
                </div>

                <div className="mt-8 flex lg:flex-row lg:gap-2 flex-col gap-2 items-center">
                  {/* Google Sign Up button */}
                  <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2">
                    <FaGoogle className="mr-2" /> Sign up with Google
                  </div>
                  {/* Dont have an accountt sign up link */}
                  <Link
                    href="/register"
                    className="text-sm text-blue-500 hover:text-blue-700 mt-2 block lg:inline"
                  >
                    Don&apos;t have an account? Sign up
                  </Link>
                </div>
              </div>
            </>
          )}
          {currentSection === "password" && (
            <>
              <div className="inline-flex w-full items-center justify-between mb-4">
                <ArrowLeftIcon
                  className="cursor-pointer"
                  onClick={handlePreviousSection}
                />
                <p className="text-gray-600 text-xs mt-1"></p>
                <p className="text-xs py-1 px-2 bg-amber-400 rounded">
                  Email:{" "}
                  <span className="text-gray-100 font-bold ml-1">{email}</span>
                </p>
                <input type="hidden" name="email" value={email} />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {state?.errors?.password && (
                  <p className="text-red-500 text-xs mt-2 mb-2">
                    {state.errors.password}
                  </p>
                )}
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-500 hover:text-blue-700 mt-2 block text-right"
                >
                  Forgot Password?
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className={clsx(
                    "items-center px-4 py-2 border border-transparent text-sm font-medium rounded-2xl shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 mx-auto w-full mt-2",
                    { hidden: password.trim() === "" },
                    {
                      "inline-flex justify-center items-center":
                        password.trim() !== "",
                    },
                    {"bg-blue-300" : loading},
                    {"bg-blue-600 hover:bg-blue-700": !loading}
                  )}
                >
                  {loading  ? <Loader2Icon className="animate-spin"/> : "Sign in"}
                </button>
                <div className="flex lg:flex-row lg:gap-2 mt-4 flex-col gap-4 items-center">
                  <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-white text-sm font-medium rounded-md shadow-sm bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 p-2">
                    <GiGuards className="mr-2" /> Passwordless login
                  </div>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
