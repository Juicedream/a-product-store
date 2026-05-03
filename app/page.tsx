import { redirect } from "next/navigation";

export default function Home() {
  const user = true; // Simulate user authentication status
  if (user) {
    redirect("/home"); // Redirect to login page if user is not authenticated
  } else {
    redirect("/login"); // Redirect to home page if user is authenticated
  }
}
