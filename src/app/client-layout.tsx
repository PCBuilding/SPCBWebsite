"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase";
import ProtectedNavbar from "@/components/Navbar/ProtectedNavbar";
import PublicNavbar from "@/components/Navbar/PublicNavbar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query/queryClient";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user] = useAuthState(auth);

  return (
    <QueryClientProvider client={queryClient}>
      {user ? <ProtectedNavbar /> : <PublicNavbar />}
      {children}
    </QueryClientProvider>
  );
}
