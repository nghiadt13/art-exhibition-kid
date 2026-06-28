"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LazyImage from "@/components/lazy-image";

const navLinks = [
  { label: "Về dự án", href: "/#about" },
  { label: "Phòng tranh", href: "/gallery" },
  { label: "Câu chuyện", href: "/artists" },
];

export default function TopNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/#about") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center w-full h-20">
        {/* Logo - far left */}
        <Link
          className="flex items-center pl-6 md:pl-12"
          href="/"
        >
          <LazyImage
            src="/logo.webp"
            alt="Điều Em Muốn"
            className="h-16 md:h-20 w-auto object-contain py-1"
            noWrapper={true}
            loading="eager"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 pr-6 md:pr-12">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                className={
                  active
                    ? "text-primary font-bold text-sm relative after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2.5px] after:bg-primary after:rounded-full font-body"
                    : "text-on-surface-variant hover:text-primary transition-colors font-body text-sm font-semibold"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
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
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                className={
                  active
                    ? "block py-3 px-3 text-primary font-bold bg-primary/5 rounded-xl text-sm font-body"
                    : "block py-3 px-3 text-on-surface-variant hover:text-primary transition-colors font-body text-sm font-semibold"
                }
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
