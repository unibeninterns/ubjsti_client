"use client";

import Link from "next/link";

export default function Header() {
  return (
  <footer className="bg-white border-t border-[#071936c2] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[#06142b] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href=""
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/current-issue"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Current Issue
                  </Link>
                </li>
                <li>
                  <Link
                    href="/archives"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Archives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-authors"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    For Authors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#06142b] mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Journal Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/editorial-board"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Editorial Board
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Policies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#06142b] mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/for-authors"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Author Guidelines
                  </Link>
                </li>
                <li>
                  <Link
                    href="/peer-review"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Peer Review Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ethics"
                    className="text-gray-600 hover:text-[#06142b]"
                  >
                    Publication Ethics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#06142b] mb-4">Contact</h3>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:journalst@uniben.edu"
                  className="hover:text-[#06142b]"
                >
                  journalst@uniben.edu
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Address:</strong>
                <br />
                University of Benin
                <br />
                Benin City, Nigeria
              </p>
            </div>
          </div>
          <div className="border-t border-[#071936c2] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>
              © {new Date().getFullYear()} University of Benin — UNIBEN Journal
              of Science, Technology and Innovation
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#06142b]">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#06142b]">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-[#06142b]">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
      );
    }