"use client";

import { FaCalendarAlt, FaBoxOpen } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import SignOutButton from "@/components/auth/SingOut";


export default function Dashboard() {


  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-7xl px-10 pt-16">
        <div className="flex justify-between items-center">
          <h1 className="pb-4 text-3xl">Dashboard</h1>
          <SignOutButton />
        </div>
        <hr className="border-gray-200" />
        <ul className="flex gap-8 pt-8">
          <Link
            href={"/dashboard/events"}
            className="flex w-full max-w-96 cursor-pointer flex-col items-center gap-6 rounded-md border border-gray-200 bg-[#fafafa] p-6 transition-all hover:bg-gray-200"
          >
            <p className="text-2xl">Events</p>
            <span className="text-[120px] text-blue-500">
              <FaCalendarAlt />
            </span>
            <p className="text-center">
              Create, Update, and Delete club events.
            </p>
          </Link>
          <Link
            href={"/dashboard/projects"}
            className="flex w-full max-w-96 cursor-pointer flex-col items-center gap-6 rounded-md border border-gray-200 bg-[#fafafa] p-6 transition-all hover:bg-gray-200"
          >
            <p className="text-2xl">Projects</p>
            <span className="text-[120px] text-blue-500">
              <BsPcDisplay />
            </span>
            <p className="text-center">
              Create, Update, and Delete club projects.
            </p>
          </Link>
          <Link
            href={"/dashboard/inventory"}
            className="flex w-full max-w-96 cursor-pointer flex-col items-center gap-6 rounded-md border border-gray-200 bg-[#fafafa] p-6 transition-all hover:bg-gray-200"
          >
            <p className="text-2xl">Inventory</p>
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
