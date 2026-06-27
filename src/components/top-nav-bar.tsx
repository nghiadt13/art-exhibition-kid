"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Về dự án", href: "/#about" },
  { label: "Phòng tranh", href: "/gallery" },
  { label: "Câu chuyện", href: "/artists" },
];

export default function TopNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center w-full h-20">
        {/* Logo - far left */}
        <Link
          className="flex items-center pl-6 md:pl-12"
          href="/"
        >
          <img
            src="/logo.png"
            alt="Điều Em Muốn"
            className="h-20 md:h-24 w-auto object-contain py-1"
          />
        </Link>

        {/* Desktop Nav - far right */}
        <div className="hidden md:flex items-center gap-8 pr-6 md:pr-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm font-semibold"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary pr-6 md:pr-12"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-outline-variant px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="block py-3 text-on-surface-variant hover:text-primary transition-colors font-body text-sm font-semibold"
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
