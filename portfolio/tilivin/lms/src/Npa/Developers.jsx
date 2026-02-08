import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from '../Image/najmul.png'

function DevelopersCard() {
  return (
    <section className="bg-gray-800 py-16"id="Developers">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Developer <span className="text-indigo-500">Profile</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm">
            Building modern and responsive web applications
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-center">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md
                          shadow-lg hover:shadow-indigo-500/20 transition">

            {/* Avatar */}
            <div className="flex justify-center">
              <img
                src={Image}
                alt="Developer"
                className="w-28 h-28 rounded-full border-4 border-indigo-500"
              />
            </div>

            {/* Info */}
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-white">
                Najmul Akash
              </h3>
              <p className="text-indigo-400 text-sm mt-1">
                Frontend Developer (React)
              </p>

              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Passionate frontend developer focused on crafting
                clean, user-friendly and responsive interfaces.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["React", "Tailwind", "JavaScript", "UI/UX"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-gray-800
                             text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex justify-center gap-6 mt-6 text-xl">
              <a href="#" className="hover:text-indigo-400 transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DevelopersCard;
