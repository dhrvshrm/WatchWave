"use client";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserStore } from "./store/userStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (user.accessToken === "") {
      router.push("/login");
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        router.push("/login");
      }
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
