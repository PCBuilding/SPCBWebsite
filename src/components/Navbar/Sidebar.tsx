"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  LayoutDashboard,
  FileText,
  Settings,
  ChevronLeft,
  Calendar,
  PackageOpen,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  className = "",
  isCollapsed,
  onCollapse,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Events", href: "/dashboard/events", icon: Calendar },
    { name: "Projects", href: "/dashboard/projects", icon: FileText },
    { name: "Inventory", href: "/dashboard/inventory", icon: PackageOpen },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const isLinkActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button - Only show when menu is closed */}
      {!isMobileMenuOpen && (
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed left-4 top-24 z-50 rounded-md bg-gray-700 p-2 text-white hover:bg-gray-600 lg:hidden"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-full bg-gray-700 text-white transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-48"
        } ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 ${className}`}
      >
        {/* Logo Area */}
        <div className="flex h-20 items-center justify-between border-b border-gray-600 px-4">
          {isCollapsed ? (
            <span className="text-xl font-bold"></span>
          ) : (
            <span className="ml-9 text-xl font-bold">Admin</span>
          )}
          {/* Collapse Button (Desktop only) */}
          <button
            onClick={() => onCollapse(!isCollapsed)}
            className="hidden rounded-full border border-gray-600 bg-gray-700 p-1 text-white hover:bg-gray-600 lg:flex"
          >
            <ChevronLeft
              className={`transform transition-transform ${isCollapsed ? "rotate-180" : ""}`}
            />
          </button>
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
                      : "hover:bg-gray-600"
                  } `}
                >
                  <item.icon size={20} />
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
