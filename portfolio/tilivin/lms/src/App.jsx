// import React from 'react'
// import Navbar from './Home task/Navbar'
// import { Routes, Route } from "react-router-dom";

// function Home() {
//   return <h1>Home Page</h1>;
// }
// function About() {
//   return <h1>About Page</h1>;
// }
// function Service() {
//   return <h1>Service Page</h1>;
// }
// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import Navbar from './Home task/Navbar'

export default function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Home Section</h1>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl font-bold">About Section</h1>
      </section>

      <section id="service" className="h-screen flex items-center justify-center bg-green-100">
        <h1 className="text-4xl font-bold">Service Section</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-purple-100">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
    </>
  );
}