
// // import React, { useState } from 'react'
// // function Navbar() {
// //     const [isopen, setIsOpen] =useState(false)
// //   return (
// //     <>
// //     <nav className='bg-purple-500'>
// //         <div className='h-16 flex items-center justify-between'>
// //             <div className='text-3xl font-bold text-white px-10'>Logo</div>
// //             <div className='hidden sm:block'>
// //                 <a href="" className='text-2xl px-4 text-gray-100 hover:text-gray-900'>Home</a>
// //                 <a href="" className='text-2xl px-4 text-gray-100 hover:text-gray-900'>About</a>
// //                 <a href="" className='text-2xl px-4 text-gray-100 hover:text-gray-900'>Service</a>
// //                 <a href="" className='text-2xl px-4 text-gray-100 hover:text-gray-900'>Contact</a>
// //             </div>
// //         </div>
// //          <div className={`${isopen ? "block" : "hidden"} sm:hidden bg-gray-100 space-y-2 pb-4`}>
// //                 <a href="" className='text-2xl px-4 text-gray-600 block'>Home</a>
// //                 <a href="" className='text-2xl px-4 text-gray-600 block'>About</a>
// //                 <a href="" className='text-2xl px-4 text-gray-600 block '>Service</a>
// //                 <a href="" className='text-2xl px-4 text-gray-600 block '>Contact</a>
// //                             <Link className="hover:text-purple-400 transition" to="/projects">Projects</Link>

                
                     
// //             </div>
// //             <button className='' onClick={()=>setIsOpen(!isopen)}>Open</button>
       
// //     </nav>
// //     </>
// //   )
// // }

// // export default Navbar


// // import React, { useState } from "react";
// // import { Menu, X } from "lucide-react";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   const navItems = [
// //     { name: "Home", link: "#" },
// //     { name: "About", link: "#" },
// //     { name: "Service", link: "#" },
// //     { name: "Contact", link: "#" },
// //   ];

// //   return (
// //     <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="text-2xl font-bold text-purple-600 cursor-pointer">
// //             MyLogo
// //           </div>

// //           {/* Desktop Menu */}
// //           <nav className="hidden md:flex space-x-8">
// //             {navItems.map((item, i) => (
// //               <a
// //                 key={i}
// //                 href={item.link}
// //                 className="text-gray-700 hover:text-purple-600 font-medium transition"
// //               >
// //                 {item.name}
// //               </a>
// //             ))}
// //           </nav>

// //           {/* Mobile Button */}
// //           <button
// //             className="md:hidden text-gray-700"
// //             onClick={() => setOpen(!open)}
// //           >
// //             {open ? <X size={28} /> : <Menu size={28} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {open && (
// //         <div className="md:hidden bg-white shadow-lg">
// //           <div className="flex flex-col space-y-4 px-6 py-4">
// //             {navItems.map((item, i) => (
// //               <a
// //                 key={i}
// //                 href={item.link}
// //                 className="text-gray-700 hover:text-purple-600 font-medium"
// //                 onClick={() => setOpen(false)}
// //               >
// //                 {item.name}
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }


// // Navbar.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Service", path: "/service" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold text-purple-600">
//             MyLogo
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex space-x-8">
//             {navItems.map((item, i) => (
//               <Link
//                 key={i}
//                 to={item.path}
//                 className="text-gray-700 hover:text-purple-600 font-medium transition"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Button */}
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="flex flex-col space-y-4 px-6 py-4">
//             {navItems.map((item, i) => (
//               <Link
//                 key={i}
//                 to={item.path}
//                 className="text-gray-700 hover:text-purple-600 font-medium"
//                 onClick={() => setOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }





// Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Service", id: "service" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-purple-600">
            MyLogo
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}






