import React from "react";

function Layout() {
  return (
    <div className="h-screen flex flex-col">

      {/* Navbar */}
      <div className="w-full h-14 bg-blue-500 text-white flex items-center px-6">
        <h1 className="text-xl font-bold">
          My Website
        </h1>
      </div>

      {/* Sidebar + Content Section */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="w-64 bg-blue-600 text-white p-5">

          <h1 className="text-2xl font-bold mb-6">
            Sidebar
          </h1>

          <ul className="space-y-4">

            <li className="hover:bg-blue-800 p-2 rounded">
              Home
            </li>

            <li className="hover:bg-blue-800 p-2 rounded">
              About
            </li>

            <li className="hover:bg-blue-800 p-2 rounded">
              Courses
            </li>

            <li className="hover:bg-blue-800 p-2 rounded">
              Contact
            </li>

          </ul>

        </div>

        {/* Content */}
        <div className="flex-1 p-10 bg-red-600">
          <div className="w-1/2 bg-gray-500 h-40
          "></div>
          <div></div>
        </div>

      </div>

    </div>
  );
}

export default Layout;