"use client";

import { FaCalendarAlt, FaBoxOpen } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-7xl px-10 pt-16">
        <h1 className="pb-4 text-3xl">Dashboard</h1>
        <hr className="border-gray-200" />
        <ul className="flex gap-8 pt-8">
          <Link
            href={"/projects"}
            className="flex w-full max-w-96 cursor-pointer flex-col items-center gap-6 rounded-md border border-gray-200 bg-[#fafafa] p-6 transition-all hover:bg-gray-200"
          >
            <p className="text-2xl">Edit Events</p>
            <span className="text-[120px] text-blue-500">
              <FaCalendarAlt />
            </span>
            <p className="text-center">
              Create, Update, and Delete club events.
            </p>
          </Link>
          <Link
            href={"/projects"}
            className="flex w-full max-w-96 cursor-pointer flex-col items-center gap-6 rounded-md border border-gray-200 bg-[#fafafa] p-6 transition-all hover:bg-gray-200"
          >
            <p className="text-2xl">Edit Projects</p>
            <span className="text-[120px] text-blue-500">
              <BsPcDisplay />
            </span>
            <p className="text-center">
              Create, Update, and Delete club projects.
            </p>
          </Link>
          <Link
            href={"/projects"}
            className="flex w-full max-w-96 cursor-pointer flex-col items-center gap-6 rounded-md border border-gray-200 bg-[#fafafa] p-6 transition-all hover:bg-gray-200"
          >
            <p className="text-2xl">Edit Inventory</p>
            <span className="text-[120px] text-blue-500">
              <FaBoxOpen />
            </span>
            <p className="text-center">
              Create, Update, and Delete club inventory.
            </p>
          </Link>
        </ul>
      </div>
    </ProtectedRoute>
  );
}
