"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // function to style active vs normal links
  const linkClass = (path: string) =>
    `relative font-medium transition-colors pb-1 border-b-2 ${
      pathname === path
        ? "font-bold border-white text-white"
        : "border-transparent text-white hover:text-[#8690a0c2] hover:border-[#8690a0c2]"
    }`;

  return (
    <header className="bg-[#071936] border-b border-white text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
              <Image
                src="/uniben-logo.png"
                alt="UNIBEN Logo"
                width={48}
                height={48}
                className="rounded"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight">
                UNIBEN Journal of Science, Technology and Innovation
              </h1>
              <p className="text-sm text-[#8690a0c2] font-medium">Archives</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:text-sm lg:flex items-center gap-6">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/current-issue" className={linkClass("/current-issue")}>
              Current Issue
            </Link>
            <Link href="/archives" className={linkClass("/archives")}>
              Archives
            </Link>
            <Link href="/for-authors" className={linkClass("/for-authors")}>
              For Authors
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>

            {/* 🔍 Search Icon */}
            <Link
              href="/search"
              className={`flex items-center transition-colors pb-1 border-b-2 ${
                pathname === "/search"
                  ? "font-bold border-white text-white"
                  : "border-transparent text-white hover:text-[#8690a0c2] hover:border-[#8690a0c2]"
              }`}
              aria-label="Advanced Search"
            >
              <Search size={22} />
            </Link>

            <Link
              href="/submission"
              className="bg-white text-[#071936] px-6 py-2 rounded-full font-semibold hover:bg-[#8690a0c2] transition-all shadow-lg hover:shadow-xl"
            >
              Submit Manuscript
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center p-2 text-white hover:text-[#8690a0c2] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#071936] border-t border-[#8690a0c2]/20 absolute right-0 top-20 w-3/4 sm:w-1/2 rounded-bl-xl shadow-lg animate-slide-down">
          <nav className="flex flex-col p-6 space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>
            <Link
              href="/current-issue"
              onClick={() => setIsOpen(false)}
              className={linkClass("/current-issue")}
            >
              Current Issue
            </Link>
            <Link
              href="/archives"
              onClick={() => setIsOpen(false)}
              className={linkClass("/archives")}
            >
              Archives
            </Link>
            <Link
              href="/for-authors"
              onClick={() => setIsOpen(false)}
              className={linkClass("/for-authors")}
            >
              For Authors
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={linkClass("/about")}
            >
              About
            </Link>

            {/* 🔍 Mobile Search */}
            <Link
              href="/search"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 pb-1 border-b-2 ${
                pathname === "/search"
                  ? "font-bold border-white text-white"
                  : "border-transparent text-white hover:text-[#8690a0c2] hover:border-[#8690a0c2]"
              }`}
            >
              <Search size={20} /> Advanced Search
            </Link>

            <Link
              href="/submission"
              onClick={() => setIsOpen(false)}
              className="bg-white text-[#071936] px-6 py-2 rounded-full font-semibold hover:bg-[#8690a0c2] transition-all shadow-lg hover:shadow-xl text-center"
            >
              Submit Manuscript
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
