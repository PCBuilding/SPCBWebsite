"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import EditForm from "@/components/admin/projects/EditForm";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function projects() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-6xl px-10 mt-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Edit Projects</h1>
          <Link
            href={"/dashboard"}
            className="flex items-center gap-2 underline"
          >
            Back To Dashboard{" "}
            <span className="text-lg">
              <FaLongArrowAltRight />
            </span>
          </Link>
        </div>
        <EditForm />
      </div>
    </ProtectedRoute>
  );
}
