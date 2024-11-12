"use client";

import { FaCalendarAlt, FaBoxOpen } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import Link from "next/link";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import SignOutButton from "@/components/admin/auth/SingOut";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-16 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
          <h1 className="text-2xl sm:text-3xl">Dashboard</h1>
          <SignOutButton />
        </div>
        <hr className="my-4 border-gray-200" />
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <Link
            href="/dashboard/events"
            className="flex flex-col items-center gap-4 rounded-md border border-gray-200 bg-[#fafafa] p-4 transition-all hover:bg-gray-200 sm:gap-6 sm:p-6"
          >
            <p className="text-xl sm:text-2xl">Events</p>
            <span className="text-6xl text-blue-500 sm:text-[120px]">
              <FaCalendarAlt />
            </span>
            <p className="text-center text-sm sm:text-base">
              Create, Update, and Delete club events.
            </p>
          </Link>
          <Link
            href="/dashboard/projects"
            className="flex flex-col items-center gap-4 rounded-md border border-gray-200 bg-[#fafafa] p-4 transition-all hover:bg-gray-200 sm:gap-6 sm:p-6"
          >
            <p className="text-xl sm:text-2xl">Projects</p>
            <span className="text-6xl text-blue-500 sm:text-[120px]">
              <BsPcDisplay />
            </span>
            <p className="text-center text-sm sm:text-base">
              Create, Update, and Delete club projects.
            </p>
          </Link>
          <Link
            href="/dashboard/inventory"
            className="flex flex-col items-center gap-4 rounded-md border border-gray-200 bg-[#fafafa] p-4 transition-all hover:bg-gray-200 sm:gap-6 sm:p-6"
          >
            <p className="text-xl sm:text-2xl">Inventory</p>
            <span className="text-6xl text-blue-500 sm:text-[120px]">
              <FaBoxOpen />
            </span>
            <p className="text-center text-sm sm:text-base">
              Create, Update, and Delete club inventory.
            </p>
          </Link>
        </ul>
      </div>
    </ProtectedRoute>
  );
}
