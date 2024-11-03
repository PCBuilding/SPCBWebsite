"use client";

import { useEffect } from "react";
import { auth } from "@/lib/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import ProtectedNavbar from "../../Navbar/ProtectedNavbar";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading && (!user || error)) {
      toast.error("Please login to access this page.");
      router.push("/login");
    }
  }, [user, loading, error, router]);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
        <span className="animate-spin text-5xl text-gray-800">
          <LuLoader2 />
        </span>
      </div>
    );
  }

  if (!user || error) {
    return null;
  }

  return <main>{children}</main>;
}
