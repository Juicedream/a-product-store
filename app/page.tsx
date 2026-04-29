import { Metadata } from "next";
import StoreFrontPage from "./(store)/page";

export const metadata: Metadata = {
  title: "Home Page"
}

export default function Home() {
  return (
    <>
      <StoreFrontPage />
    </>
  );
}
