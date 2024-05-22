"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const NavLinks = [
  { title: "Home", url: "/" },
  { title: "archives", url: "/archives" },
  { title: "announcements", url: "/announcements" },
  { title: "Contact", url: "/contact" },
];

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">ALKADHIM JOURNAL FOR CS</h1>
          </div>
          <div className="hidden space-x-4 md:flex">
            <SignedOut>
              <SignInButton>
                <span className="cursor-pointer rounded-md px-3 py-2 text-lg font-semibold hover:bg-blue-700">
                  Sign In
                </span>
              </SignInButton>
              <SignUpButton>
                <span className="cursor-pointer rounded-md px-3 py-2 text-lg font-semibold hover:bg-blue-700">
                  Register
                </span>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              {/* here Goes the form sub */}
              <UserButton />
            </SignedIn>
            <button className="space-x-4" onClick={() => setTheme("dark")}>
              Button
            </button>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-blue-700 md:hidden">
          {NavLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="block px-4 py-2 text-sm hover:bg-blue-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}

      <div className="mx-auto bg-blue-300 px-4 text-white shadow-md">
        <div className="hidden space-x-4 md:flex">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className="rounded-md px-3 py-2 hover:bg-blue-700"
            >
              {link.title}
            </Link>
          ))}
          <DropDownMenu />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

function DropDownMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex rounded-md px-3 py-2 hover:bg-blue-700">
            ABOUT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <ul>
            <li>EDITORIAL BOARD</li>
            <li>EDITORIAL POLICY</li>
            <li>PEER REVIEW PROCESS</li>
            <li>OPEN ACCESS POLICY</li>
            <li>INDEXING & ABSTRACTING</li>
            <li>PLAGIARISM POLICY</li>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
