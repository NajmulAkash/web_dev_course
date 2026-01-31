import React from 'react'

function Portfolios() {
  return (
   <>
      <div className="bg-gray-950 text-white font-sans">
      
      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8">
        <img
          src=""
          className="w-64 h-64 rounded-full border-4 border-blue-500"
          alt="profile"
        />
        <div>
          <h1 className="text-5xl font-bold">Your Name</h1>
          <p className="text-blue-400 text-xl mt-3">
            React Developer | Tailwind CSS Expert
          </p>
          <p className="text-gray-400 mt-4 max-w-lg">
            Main ek passionate frontend developer hoon jo modern, fast
            aur beautiful websites React aur Tailwind CSS ke sath banata hoon.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 leading-8">
          Main self-motivated web developer hoon jise clean UI aur smooth UX
          banana pasand hai. Mujhe React components, responsive layouts
          aur modern design systems par kaam karna aata hai.
          <br /><br />
          Mera focus hamesha performance, accessibility aur user-friendly
          design par hota hai.
        </p>
      </section>

      {/* SKILLS */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Tailwind", "JavaScript", "HTML", "CSS", "Git"].map(skill => (
              <div
                key={skill}
                className="bg-gray-800 py-4 rounded-lg text-center hover:bg-blue-600 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img src="" alt="" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="text-gray-400 mt-2">
                React aur Tailwind CSS se banaya gaya modern portfolio.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img src="" alt="" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">Landing Page</h3>
              <p className="text-gray-400 mt-2">
                Fully responsive landing page with animations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <p className="text-gray-300">
            • Frontend Developer – Freelance (2024 – Present) <br />
            • React Projects & UI Design Work <br />
            • Real-world responsive websites
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400">yourname@gmail.com</p>
        <p className="text-gray-400">LinkedIn | GitHub</p>
      </section>

      <footer className="text-center text-gray-500 py-6">
        © 2026 Your Name. All rights reserved.
      </footer>
    </div>
   </>
  )
}

export default Portfolios