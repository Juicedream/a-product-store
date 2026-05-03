import { redirect } from "next/navigation";
import { SigninSchema, SignupSchema } from "../lib/definition";
import { Toast } from "../lib/toast";
import { FormState } from "../types";
import { createSession, deleteSession } from "../lib/session";
import { useUser } from "../context/UserContext";

export async function signup(state: FormState, formdata: FormData) {
  // Validate form fields
  const validateFields = SignupSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    password: formdata.get("password"),
    confirmPassword: formdata.get("confirmPassword"),
  });

  // If validation fails, return errors
  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors;
    return { errors };
  }

  // valid data
  const { name, email, password } = validateFields.data;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      },
    );

    if (!res.ok) {
      const errorData = await res.json();
      Toast.default(errorData.message || "Signup failed");
      return;
    }

    const data = await res.json();
    Toast.default(data.message || "Signup successful");
  } catch (error) {
    console.error("Error during signup:", error);
    Toast.error("An unexpected error occurred");
  }
  redirect("/login");
}

export async function signin(state: FormState, formdata: FormData) {
  // Validate form
  const validateFields = SigninSchema.safeParse({
    email: formdata.get("email"),
    password: formdata.get("password"),
  });

  // If validation fails, return errors
  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors;
    return { errors };
  }

  // pass to our login function
  const { email, password } = validateFields.data;
  return {data: {email, password}}; 
}
export async function logout() {
  try {
    await deleteSession();
    localStorage.removeItem("accessToken");
  } catch (error) {
    console.log(error);
    Toast.error("Could not delete session.");
    return;
  }

  redirect("/login");
}
