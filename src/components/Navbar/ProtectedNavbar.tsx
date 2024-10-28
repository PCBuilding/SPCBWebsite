import Link from "next/link";
import React from "react";

export default function ProtectedNavbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-600 p-6 text-white">
      <Link href="/" className="text-2xl font-semibold tracking-tight">
        The Society of PC Building
      </Link>
      <div className="flex gap-7">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/dashboard/projects">Edit Projects</Link>
        <Link href="/edit-events">Edit Events</Link>
        <Link href="/edit-events">Inventory</Link>
      </div>
    </nav>
  );
}
