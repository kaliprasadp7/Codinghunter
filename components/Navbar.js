import React from "react";
import Link from "next/link";
  


const Navbar = () => {
  return (
    <nav className="w-full flex justify-between py-5 px-24 bg-white shadow-md">
        <h1 className="logo text-4xl font-bold">CodingHunter</h1>
      <ul className="flex gap-8 text-2xl font-medium cursor-pointer"> 
        <Link href="/">
        <li className="hover:text-blue-600">Home</li>
      </Link>
      <Link href="/about">
        <li className="hover:text-blue-600">About</li>
      </Link>
      <Link href="/blog">
        <li className="hover:text-blue-600">Blog</li>
      </Link>
      <Link href="/contact">
        <li className="hover:text-blue-600">Contact</li>
      </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
