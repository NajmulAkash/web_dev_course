import React from "react";

function Sidebar() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <div className="w-64 h-screen bg-blue-600 text-white p-5">

        <h1 className="text-2xl font-bold mb-6">
          My Sidebar
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
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">
          Main Content
        </h1>
      </div>

    </div>
  );
}

export default Sidebar;