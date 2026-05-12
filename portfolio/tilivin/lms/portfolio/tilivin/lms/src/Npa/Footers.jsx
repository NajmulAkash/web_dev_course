import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
function Footers() {
  return (
    <>
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Your <span className="text-indigo-500">Najmul Akash</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Passionate developer crafting modern & responsive web experiences.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">About</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white mb-4">
            Connect With Me
          </h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/NajmulAkash" className="hover:text-indigo-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FaTwitter />
            </a>
            <a href="najmulbalghari23@gmail.com" className="hover:text-indigo-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm text-white">
        © {new Date().getFullYear()} Najmul Akash. All rights reserved.
      </div>
    </footer>

  </>
  );
}

export default Footers;
