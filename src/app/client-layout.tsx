"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase";
import ProtectedNavbar from "@/components/Navbar/ProtectedNavbar";
import PublicNavbar from "@/components/Navbar/PublicNavbar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? <ProtectedNavbar /> : <PublicNavbar />}
      {children}
    </>
  );
}
