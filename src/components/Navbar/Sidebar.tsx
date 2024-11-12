"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  ChevronLeft,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/dashboard/projects", icon: FileText },
    { name: "Team", href: "/dashboard/team", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const isLinkActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed left-4 top-4 z-50 rounded-md bg-gray-800 p-2 text-white lg:hidden"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"} ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 ${className} `}
      >
        {/* Collapse Button (Desktop only) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 hidden rounded-full border border-gray-600 bg-gray-800 p-1 text-white lg:flex"
        >
          <ChevronLeft
            className={`transform transition-transform ${isCollapsed ? "rotate-180" : ""}`}
          />
        </button>

        {/* Logo Area */}
        <div className="flex h-16 items-center justify-center border-b border-gray-700">
          {isCollapsed ? (
            <span className="text-xl font-bold">L</span>
          ) : (
            <span className="text-xl font-bold">Logo</span>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="space-y-2 px-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center rounded-md px-3 py-2 transition-colors ${
                    isLinkActive(item.href)
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700"
                  } `}
                >
                  <item.icon size={20} />
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
