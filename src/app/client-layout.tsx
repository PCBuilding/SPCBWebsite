"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase";
import Navbar from "@/components/Navbar/PublicNavbar";
import Sidebar from "@/components/Navbar/Sidebar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query/queryClient";
import { useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user] = useAuthState(auth);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        {user && (
          <Sidebar isCollapsed={isCollapsed} onCollapse={setIsCollapsed} />
        )}
        <div
          className={`min-h-screen transition-all duration-300 ${
            user ? (isCollapsed ? "lg:ml-16" : "lg:ml-48") : ""
          }`}
        >
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
