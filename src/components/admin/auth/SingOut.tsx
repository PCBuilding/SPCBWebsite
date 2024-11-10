// components/SignOutButton.tsx
"use client";

import { auth } from "@/lib/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully logged out");
      router.push("/login");
    } catch (error) {
      toast.error("Error signing out");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
    >
      Log Out
    </button>
  );
}