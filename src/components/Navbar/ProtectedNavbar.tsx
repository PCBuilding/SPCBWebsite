"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ProtectedNavbar() {
  const [view, setView] = useState<"client" | "admin">("admin");
  return (
    <nav className="flex items-center justify-between bg-gray-600 p-6 text-white">
      <Link href="/" className="text-2xl font-semibold tracking-tight">
        The Society of PC Building
      </Link>
      <div className="flex items-center gap-7">
        <div className="flex gap-7">
          {view === "client" ? (
            <>
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/events">Events</Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/dashboard/projects">Projects</Link>
              <Link href="/edit-events">Events</Link>
              <Link href="/edit-events">Inventory</Link>
            </>
          )}
        </div>
        <select
          value={view}
          onChange={(e) => setView(e.target.value as "client" | "admin")}
          className="rounded-md px-4 py-1 text-[#242424]"
        >
          <option value="admin">Admin View</option>
          <option value="client">Client View</option>
        </select>
      </div>
    </nav>
  );
}
