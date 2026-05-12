


import React from "react";
import { FaReact , FaHtml5 , FaCss3Alt , FaJs , FaGitAlt , FaNodeJs } from "react-icons/fa";

const About = () => {
    const skills = [
        {name: "React" , icon: <FaReact classname="text-blue-400 w-8 h-8"/>},
        {name: "HTML5" , icon: <FaHtml5 classname="text-orange-400 w-8 h-8"/>},
        {name: "CSS3" , icon: <FaCss3Alt classname="text-blue-600 w-8 h-8"/>},
        {name: "JavaScript" , icon: <FaJs classname="text-yellow-400 w-8 h-8"/>},
        {name: "Git" , icon: <FaGitAlt classname="text-red-400 w-8 h-8"/>},
        {name: "Node.js" , icon: <FaNodeJs classname="text-green-400 w-8 h-8"/>},
        
    ];
    return (
        <section id="About" className="py-20 text-white bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
                <div className="mb-8 md:mb-0 md:flex-shrink-0">
                <img src="src/Image/najmul.png" alt="najmul" className="w-48 h-48 rounded-full border-green-400 shadow-xl mx-auto md:mx-0" />
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4 relative inline-block">About Me</h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    I am a professional Web Developer with skills in designing, developing, and maintaining modern, responsive, and user-friendly websites and web applications. I have experience working with front-end technologies like HTML, CSS, JavaScript, React, and Tailwind CSS, as well as understanding back-end concepts and databases. I focus on clean code, attractive UI/UX design, and performance optimization to deliver high-quality digital solutions. My goal is to build efficient, scalable, and visually appealing web products that meet client and user needs.
                </p>

                <h3 className="text-2xl font-semibold mb-4">SKILLS</h3>

                <div className="grid grid-cols-3 md:grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
                    {skills.map((skills , i) => (
                        <div
                        key={i}
                        className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform text-3xl"
                        >
                            {skills.icon}
                            
                        </div>
                    ))}

                </div>
            </div>
            </div>

        </section>
    );
};
export default About;