import React from "react";

// components/Navbar.js
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-xl font-bold">
          ChatSync
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8 items-center">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/forums" className="hover:text-gray-400">
            Forums
          </Link>
          <Link href="/chat" className="hover:text-gray-400">
            UserChat
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <li className="flex justify-center items-center h-auto w-auto">
            <UserButton />
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
