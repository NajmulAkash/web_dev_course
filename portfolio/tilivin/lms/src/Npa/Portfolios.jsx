import React from 'react'
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 shadow z-50 ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">
          MyPortfolio
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-teal-500 cursor-pointer text-white">Home</li>
          <li className="hover:text-teal-500 cursor-pointer text-white">About</li>
          <li className="hover:text-teal-500 cursor-pointer text-white">Projects</li>
          <li className="hover:text-teal-500 cursor-pointer text-white">Contact</li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-3 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
