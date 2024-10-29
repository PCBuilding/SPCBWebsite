"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import EditForm from "@/components/Forms/EditForm";
import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";

export default function projects() {
  return (
    <ProtectedRoute>
      <div className="flex justify-between px-4 pt-6">
        <h1 className="text-2xl font-medium">Edit Projects</h1>
        <Link href={"/dashboard"} className="flex items-center gap-2 underline">
          Back To Dashboard{" "}
          <span className="text-lg">
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
      <EditForm />
    </ProtectedRoute>
  );
}
