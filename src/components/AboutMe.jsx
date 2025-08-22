import React from "react";
import { FaGithub, FaLinkedin, FaDatabase, FaServer, FaAws, FaCode } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiPython, SiTailwindcss } from "react-icons/si";
import profilePic from "../assets/profile.jpg";

function AboutMe() {
  const mySkills = [
    { name: "React", icon: <SiReact className="text-purple-400 w-6 h-6" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-400 w-6 h-6" /> },
    { name: "Java", icon: <FaCode className="text-red-500 w-6 h-6" /> }, // fallback
    { name: "Python", icon: <SiPython className="text-yellow-400 w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 w-6 h-6" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400 w-6 h-6" /> },
    { name: "Database", icon: <FaDatabase className="text-blue-500 w-6 h-6" /> },
    { name: "Backend", icon: <FaServer className="text-gray-400 w-6 h-6" /> },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-gray-200 p-6 gap-10 pt-20"
    >
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <img
          src={profilePic}
          alt="Nadia Akter"
          className="w-48 h-48 rounded-full border-4 border-purple-600 object-cover shadow-lg"
        />
      </div>

      {/* Info & Skills */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">Welcome!</h2>
        <h1 className="text-5xl font-bold mb-4 text-white">It's Nadia Akter</h1>

        {/* Contact Info */}
        <p className="text-lg mb-2">
          Email:{" "}
          <a
            href="mailto:nadia780akter@gmail.com"
            className="text-purple-300 hover:text-purple-500 underline"
          >
            nadia780akter@gmail.com
          </a>
        </p>
        <p className="text-lg mb-4">
          Phone:{" "}
          <a
            href="tel:+14374221810"
            className="text-purple-300 hover:text-purple-500 underline"
          >
            +1 437-422-1810
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mb-6 text-3xl">
          <a
            href="https://github.com/nadiaakter24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nadia-akter-8692142a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* About Description */}
        <p className="text-gray-300 text-lg mb-6">
          I am a recent Advanced Diploma graduate in Software Engineering
          Technology from Centennial College, Toronto. I am a versatile{" "}
          <span className="text-purple-400 font-semibold">
            junior developer, full-stack developer, data analyst, and IT support
            professional
          </span>{" "}
          with expertise in frontend and backend development (React, Node.js,
          Spring Boot, Java), cloud deployment (AWS, Azure DevOps), software
          testing, and CI/CD pipelines. I have hands-on experience in building
          responsive, secure, and user-friendly applications. I am passionate
          about delivering clean, efficient solutions and contributing my
          technical skills and problem-solving abilities to a dynamic IT or
          software development team.
        </p>

        {/* Skills with Icons */}
        <div className="flex flex-wrap gap-4">
          {mySkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center text-sm text-gray-200"
            >
              <div className="mb-1">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
