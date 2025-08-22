import React from "react";

function Certificates() {
  const certificates = [
    "Building a Safe, Respectful, and Inclusive Workplace for Crew – Hamburger University Online – March 21, 2024",
    "Workplace Violence Prevention (Crew) – Hamburger University Online – March 21, 2024",
    "CompTIA IT Fundamentals (FC0-U61) Cert Prep 1: Computer Basics, Hardware, and Operating Systems – LinkedIn – July 2025",
    "Customer Service: Problem-Solving and Troubleshooting – LinkedIn – July 2025",
    "IT Help Desk for Beginners – LinkedIn – July 2025",
    "Redefining Software Development Roles in the AI Era – LinkedIn – July 2025",
    "Admin Essentials for Smart Office Management – LinkedIn – July 2025",
    "Administrative Professional Foundations – LinkedIn – July 2025",
    "HTML & CSS: Creating Forms by Clarissa Paterson – LinkedIn – Aug 2025",
    "Deploying Java Applications to AWS by Semirah Dolan – LinkedIn – Aug 2025",
    "Learning Excel: Data Analysis – LinkedIn – Aug 2025",
    "Windows 11 for IT Support: Troubleshooting Basics by Brien Posey – LinkedIn – Aug 2025",
    "Everybody's Introduction to Tableau by Tim Ngwena – LinkedIn – Aug 2025",
    "Introduction to Career Skills in Software Development by Annyce Davis – LinkedIn – Aug 2025",
    "The Non-Technical Skills of Effective Data Scientists – LinkedIn – July 2025",
    "CRM Basics: Unlock Business Growth through Relationships – LinkedIn – July 2025",
    "Deploying Java Applications to AWS – LinkedIn – Aug 2025",
    "UX Design: 1 Overview – LinkedIn – Aug 2025",
    "Agile Software Development by Shashi Shekhar – LinkedIn – Aug 2025",
    "A Standalone Project: Create a Website for Online Burger Orders Using React.js by SkillUp Online – LinkedIn – Aug 2025",
    "Python Object-Oriented Programming by Joe Marini – LinkedIn – Aug 2025",
    "Software Development Life Cycle (SDLC) by Shashi Shekhar – LinkedIn – Aug 2025",
    "Career Essentials in Software Development by Microsoft and LinkedIn – LinkedIn – Aug 2025",
    "Google Cloud Foundation by Mark Jonshin – LinkedIn – Aug 2025",
    "Introduction to Gemini for Google Workspace by Google Cloud – LinkedIn – Aug 2025",
    "Microsoft Power BI Data Analyst Associate (PL-300) Cert Prep by Microsoft Press and Chris Sorensen – LinkedIn – Aug 2025",
    "Angular Essential Training by Derek Peruo – LinkedIn – Aug 2025"
  ];

  return (
  <section id="certificates" className="min-h-screen p-6 bg-gray-800 text-white">
    <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
      Certificates & Courses
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificates.map((cert, idx) => (
        <div
          key={idx}
          className="bg-gray-900 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          {/* Highlight certificate name in purple */}
          <p className="text-purple-300 font-semibold mb-1">{cert.split("–")[0]}</p>
          {/* Platform and date in smaller gray text */}
          <p className="text-gray-400 text-sm">{cert.split("–").slice(1).join("–")}</p>
        </div>
      ))}
    </div>
  </section>
);
}

export default Certificates;
