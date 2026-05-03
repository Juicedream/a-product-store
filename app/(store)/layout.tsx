import ProtectedRoute from "../ui/ProtectedRoute";
import Footer from "../ui/store/footer";

import NavbarWrapper from "../ui/store/navbar-wrapper";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <ProtectedRoute>
      <NavbarWrapper />
      <div className="mb-30">{children}</div>
      <Footer />
    </ProtectedRoute>
    </>
  );
}
