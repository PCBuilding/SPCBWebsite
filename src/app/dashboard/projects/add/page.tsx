"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import AddForm from "@/components/admin/projects/AddForm";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function projects() {
  return (
    <ProtectedRoute>
      <div className="flex justify-between p-6 pt-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold">Create Project</h1>
        <Link href={"/dashboard"} className="flex items-center gap-2 underline">
          Back To Dashboard{" "}
          <span className="text-lg">
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
      <AddForm />
    </ProtectedRoute>
  );
}
