"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image
import { UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/clerk-react";

const Navbar = ({ logoSrc = "/logo.png", logoAlt = "ChatSync" }) => {

  // const user = useUser()
  // console.log(user.user)
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {" "}
          {/* Wrap logo and title in a flex container */}
          {logoSrc && (
            <div className="relative h-8 w-10 mr-2">
              {" "}
              {/* Logo container with margin */}
              <Image src={logoSrc} alt={logoAlt || "Logo"} layout="fill" />
            </div>
          )}
          <span className="text-xl font-bold">ChatSync</span>{" "}
          {/* Title as a span */}
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
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
