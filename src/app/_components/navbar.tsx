import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="h-32 w-full px-96 pt-8">
      <div className="flex justify-between bg-red-100">
        <div>
          <h1 className="text-2xl font-bold">
            ALKADHIM JOURNAL FOR COMPUTER SCIENCE
          </h1>
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            {/* here Goes the form sub */}
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <nav className="flex justify-between pt-4">
        <div>
          <ul className="flex justify-center">
            <li className="mx-4">HOME</li>
            <li className="mx-4">ARCHIVES</li>
            <li className="mx-4">ANNOUNCEMENTS</li>
            <DropDownMenu />
            <li className="mx-4">CONTACT</li>
          </ul>
        </div>
        <div>cfhj</div>
      </nav>
    </div>
  );
}

function DropDownMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild autoFocus>
          <li className="mx-2 flex">
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
          </li>
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
