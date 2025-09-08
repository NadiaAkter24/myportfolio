import React from "react";

function Certificates() {
  const certificates = [
    {
      title: "Building a Safe, Respectful, and Inclusive Workplace for Crew",
      provider: "Hamburger University Online",
      date: "March 21, 2024",
      logo: "/myportfolio/files/hamburger_university_logo.jpeg",
    },
    {
      title: "Workplace Violence Prevention (Crew)",
      provider: "Hamburger University Online",
      date: "March 21, 2024",
      logo: "/myportfolio/files/hamburger_university_logo.jpeg",
    },
    {
      title: "Impact Mentoring (Mentor or Mentee)",
      provider: "Ten Thousand Coffees",
      date: "Issued Aug 2025",
      logo: "/myportfolio/files/ten_thousand_coffees_logo.jpeg",
    },
    {
      title: "Ten Thousand Coffees Member",
      provider: "Ten Thousand Coffees",
      date: "Issued Mar 2025 · Expires Mar 2026",
      logo: "/myportfolio/files/ten_thousand_coffees_logo.jpeg",
    },
    {
      title:
        "CompTIA IT Fundamentals (FC0-U61) Cert Prep 1: Computer Basics, Hardware, and Operating Systems",
      provider: "LinkedIn",
      date: "July 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Customer Service: Problem-Solving and Troubleshooting",
      provider: "LinkedIn",
      date: "July 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "IT Help Desk for Beginners",
      provider: "LinkedIn",
      date: "July 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Redefining Software Development Roles in the AI Era",
      provider: "LinkedIn",
      date: "July 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Admin Essentials for Smart Office Management",
      provider: "LinkedIn",
      date: "July 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Administrative Professional Foundations",
      provider: "LinkedIn",
      date: "July 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "HTML & CSS: Creating Forms by Clarissa Paterson",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Deploying Java Applications to AWS by Semirah Dolan",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Learning Excel: Data Analysis",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title:
        "Windows 11 for IT Support: Troubleshooting Basics by Brien Posey",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Everybody's Introduction to Tableau by Tim Ngwena",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title:
        "Introduction to Career Skills in Software Development by Annyce Davis",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "The Non-Technical Skills of Effective Data Scientists",
      provider: "LinkedIn",
      date: "July 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "CRM Basics: Unlock Business Growth through Relationships",
      provider: "LinkedIn",
      date: "July 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Deploying Java Applications to AWS",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "UX Design: 1 Overview",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Agile Software Development by Shashi Shekhar",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title:
        "A Standalone Project: Create a Website for Online Burger Orders Using React.js by SkillUp Online",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Python Object-Oriented Programming by Joe Marini",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Software Development Life Cycle (SDLC) by Shashi Shekhar",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title: "Career Essentials in Software Development by Microsoft & LinkedIn",
      provider: "LinkedIn + Microsoft",
      date: "Aug 2025",
      logo: "/myportfolio/files/microsoft_logo.jpeg",
    },
    {
      title: "Google Cloud Foundation by Mark Jonshin",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title:
        "Introduction to Gemini for Google Workspace by Google Cloud",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
    {
      title:
        "Microsoft Power BI Data Analyst Associate (PL-300) Cert Prep by Microsoft Press and Chris Sorensen",
      provider: "LinkedIn + Microsoft",
      date: "Aug 2025",
      logo: "/myportfolio/files/microsoft_logo.jpeg",
    },
    {
      title: "Angular Essential Training by Derek Peruo",
      provider: "LinkedIn",
      date: "Aug 2025",
      logo: "/myportfolio/files/linkedin_logo.jpeg",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen p-6 bg-gray-800 text-white"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
        Certificates & Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-4 rounded-lg shadow-md hover:bg-gray-700 transition flex items-center space-x-4"
          >
            <img
              src={cert.logo}
              alt={`${cert.provider} logo`}
              className="w-12 h-12 object-contain rounded"
            />
            <div>
              <p className="text-purple-300 font-semibold mb-1">
                {cert.title}
              </p>
              <p className="text-gray-400 text-sm">
                {cert.provider} – {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
