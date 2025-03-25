"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query/queryClient";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/firebase/analytics";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user] = useAuthState(auth);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Set the body's background on client-view components. (Improves aesthetics on mobile browsers)
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/dashboard");

  useEffect(() => {
    if (isAdminRoute) {
      document.body.style.backgroundColor = "#fff";
    } else {
      document.body.style.backgroundColor = "#080d14";
    }
  }, [isAdminRoute]);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {user && (
          <Sidebar isCollapsed={isCollapsed} onCollapse={setIsCollapsed} />
        )}
        <div
          className={`transition-all duration-300 ${
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
