"use client";

import { BsFillGearFill, BsFillPlusSquareFill } from "react-icons/bs";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function projects() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-7xl px-10 pt-16">
        <h1 className="pb-4 text-3xl">Dashboard</h1>
        <hr className="border-gray-200" />
        <ul className="flex gap-8 pt-8">
          <Link
            href={"/dashboard/projects/add"}
            className="flex w-full max-w-96 cursor-pointer flex-col items-center gap-6 rounded-md border border-gray-200 bg-[#fafafa] p-6 transition-all hover:bg-gray-200"
          >
            <p className="text-2xl">Add Projects</p>
            <span className="text-[120px] text-blue-500">
              <BsFillPlusSquareFill />
            </span>
            <p className="text-center">
              Add new club projects
            </p>
          </Link>
          <Link
            href={"/dashboard/projects/edit"}
            className="flex w-full max-w-96 cursor-pointer flex-col items-center gap-6 rounded-md border border-gray-200 bg-[#fafafa] p-6 transition-all hover:bg-gray-200"
          >
            <p className="text-2xl">Edit/Delete Projects</p>
            <span className="text-[120px] text-blue-500">
              <BsFillGearFill />
            </span>
            <p className="text-center">
              Update and Delete club projects.
            </p>
          </Link>
          
        </ul>
      </div>
    </ProtectedRoute>
  );
}