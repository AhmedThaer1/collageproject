"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";

const NavLinks = [
  { title: "Current", url: "/" },
  { title: "Archives", url: "/archives" },
  { title: "Announcements", url: "/announcements" },
  { title: "Contact", url: "/contact" },
];

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-[#1151A2] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">LOGO</h1>
            <h1 className="text-2xl font-bold">ALKADHIM JOURNAL FOR CS</h1>
          </div>
          <div className="hidden space-x-4 md:flex md:items-center md:justify-center">
            <SignedOut>
              <SignInButton mode="modal">
                <span className="cursor-pointer rounded-md px-3 py-2 text-lg font-semibold hover:bg-blue-700">
                  Sign In
                </span>
              </SignInButton>
              <SignUpButton mode="modal">
                <span className="cursor-pointer rounded-md bg-white px-3 py-2 text-lg font-semibold text-black transition-all ease-in-out hover:bg-blue-700 hover:text-white">
                  Register
                </span>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModeButton />
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
          <Dropdown />
        </div>
      )}

      <div className="mx-auto bg-[#1151A2] text-white shadow-md md:px-4 lg:px-4 xl:px-60">
        <div className="hidden space-x-4 md:flex">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className="rounded-md px-3 py-2 hover:bg-[var(--PrimaryForWhite)] dark:hover:bg-[var(--AccentForDark)]"
            >
              {link.title}
            </Link>
          ))}
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

export function ModeButton() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="bg-white text-black dark:bg-slate-900 dark:text-white"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black text-white">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer hover:bg-white hover:text-black"
        >
          <span className="h-full w-full hover:bg-white hover:text-black">
            Light
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:bg-white hover:text-black"
        >
          <span className="h-full w-full hover:bg-white hover:text-black">
            Dark
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer hover:bg-white hover:text-black"
        >
          <span className="h-full w-full hover:bg-white hover:text-black">
            System
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Dropdown() {
  return (
    <div className="group relative flex cursor-pointer rounded-md px-3 py-2 hover:bg-[var(--PrimaryForWhite)] dark:hover:bg-[var(--AccentForDark)] md:items-center md:justify-center">
      <div className="flex items-center justify-between">
        <a className="menu-hover pr-2 text-white">About</a>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      <div className="invisible absolute top-10 z-50 flex w-[250px] flex-col items-center justify-center bg-gray-100 px-4 py-1 text-gray-800 shadow-xl group-hover:visible">
        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          ABOUT THE JOURNAL
        </a>

        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          AUTHOR GUIDES
        </a>

        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          EDITORIAL TEAM
        </a>

        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          PRIVACY STATEMENT
        </a>

        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          PUBLISHER WEBSITE
        </a>
      </div>
    </div>
  );
}
