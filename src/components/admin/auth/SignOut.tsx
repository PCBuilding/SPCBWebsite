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
      router.push("/admin");
    } catch (error) {
      toast.error("Error signing out");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="rounded-md bg-red-500 px-4 py-2 text-white transition-all hover:bg-red-600 text-sm sm:text-base"
    >
      Log Out
    </button>
  );
}
