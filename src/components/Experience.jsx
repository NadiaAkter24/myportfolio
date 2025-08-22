import React from "react";

function Experience() {
  const experiences = [
    {
      title: "IT & Software Support – Academic & Freelance Projects",
      date: "Nov 2022 – Present",
      responsibilities: [
        "Provided troubleshooting for software, OS, and hardware issues for peers and clients",
        "Assisted in software installation, upgrades, and configuration",
        "Maintained documentation for recurring issues to improve support efficiency",
        "Supported end-users in system access and account management"
      ]
    },
    {
      title: "Co-op Student – LinkedIn & Web Management Assistant | Career Advisory Canada",
      date: "Nov 2022 – Present (Remote) Jul 2025 - Sep 2025",
      responsibilities: [
        "Managed LinkedIn content, responding to client messages and inquiries promptly",
        "Coordinated webinars and updated website content, improving user experience",
        "Developed templates and resources to enhance client communication and engagement"
      ]
    },
    {
      title: "Crew Member – McDonald’s, Scarborough, ON",
      date: "Jan 2017 –  april 2025",
      responsibilities: [
        "Delivered excellent customer service in a fast-paced environment handling 200+ transactions daily",
        "Assisted customers with inquiries, complaints, and order modifications",
        "Processed cash, card, and digital payments accurately",
        "Trained new employees and maintained workflow efficiency"
      ]
    },
    {
      title: "Call Center Customer Service Representative – Saudi Arabia",
       date: "  Jan 2020 – Dec 2021",
      responsibilities: [
        "Handled inbound calls, resolved inquiries, and provided accurate information",
        "Maintained CRM records and ensured timely follow-up of requests",
        "Met service level and quality targets while managing high-volume calls",
        "Supported training and workflow of new staff"
      ]
    },
    {
      title: "Office Assistant / Co-op – Abdullah Khaled Al Hamra General Contracting, Saudi Arabia",
      date: "Jan 2018 – Dec 2020",
      responsibilities: [
        "Performed administrative tasks, scheduled appointments, and maintained correspondence",
        "Managed spreadsheets, tracked project data, and supported internal reporting"
      ]
    },
    {
      title: "Sales Associate – Abqaiq Mall, Saudi Arabia",
      date: "  Jan 2017 – Dec 2019 ",
      responsibilities: [
        "Assisted customers with product selection, transactions, and inquiries",
        "Resolved complaints efficiently while ensuring high customer satisfaction"
      ]
    },
    {
      title: "Private Tutor – Bangladesh International School, Dammam, Saudi Arabia",
      date: "  Jan 2019 – Sep 2022 ",
      responsibilities: [
        "Delivered one-on-one tutoring in Physics, Chemistry, and Mathematics"
      ]
    },
    {
      title: "Industry & Research Experience",
      roles: [
        {
          role: "Research Assistant – Centennial College ARIES Lab",
          responsibilities: [
            "Assisted in full-stack development using Angular and Node.js",
            "Contributed to coding, testing, debugging, and collaborative version control"
          ]
        },
        {
          role: "Programming Intern – MyHealth Centre",
          responsibilities: [
            "Developed software in C, C++, Python for embedded systems",
            "Applied secure coding, debugging, and system optimization"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen p-6 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Professional & Industry Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
            {exp.date && <p className="text-gray-400 mb-2">{exp.date}</p>}
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {exp.responsibilities && exp.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
            </ul>

            {/* For nested roles under Industry & Research */}
            {exp.roles &&
              exp.roles.map((role, i) => (
                <div key={i} className="mt-4">
                  <h4 className="text-xl font-semibold">{role.role}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    {role.responsibilities.map((res, j) => (
                      <li key={j}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
