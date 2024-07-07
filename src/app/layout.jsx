"use client";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ROUTES } from "./constants";
import { toast, ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  const locationIsProtected =
    !ROUTES.includes(window.location.pathname) ||
    window.location.pathname === "/";

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (locationIsProtected) {
        router.push("/login");
        toast.error("You must be logged in to access this page");
      }
    }
  }, []);

  return (
    <html lang="en">
      <>
        <body className={inter.className}>{children}</body>
        <ToastContainer />
      </>
    </html>
  );
}
