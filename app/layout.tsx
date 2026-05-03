import type { Metadata } from "next";
import { Providers } from "./providers/allProviders";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Store front",
  description: "A store for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html
      lang="en"
      className={`${lato.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
           <Providers>
            <div>{children}</div>
           </Providers>
      </body>
    </html>
  );
}
