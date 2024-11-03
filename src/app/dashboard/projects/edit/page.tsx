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
        <Link href={"/dashboard/projects"} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all" >
          Back{" "}
          <span className="text-lg">
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
      <EditForm />
    </ProtectedRoute>
  );
}
