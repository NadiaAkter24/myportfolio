import React from "react";

function Experience() {
  const workExperiences = [
    {
      title: "Web Developer (Internship) – BonniePet, Remote (Toronto, ON)",
      logo: "/myportfolio/files/bonnipet_logo.jpg",
      date: "Jan 2025 – Present",
      responsibilities: [
        "Developed and enhanced the BonniePet website using Vite, JavaScript, Tailwind CSS, and modern frontend tools",
        "Built responsive and visually appealing web pages with HTML5, CSS3, and Tailwind CSS",
        "Implemented interactive features and dynamic content for smooth user experience",
        "Collaborated with the team to optimize website functionality, accessibility, and performance",
        "Used Git/GitHub for version control and project management",
        "Tested and debugged frontend code to ensure cross-browser compatibility"
      ]
    },
    {
      title: "Co-op Student – LinkedIn & Web Management Assistant – Career Advisory Canada (Remote)",
      logo: "/myportfolio/files/career_advisory_canada.jpeg",
      date: "Nov 2022 – Sep 2025",
      responsibilities: [
        "Managed LinkedIn content and responded to client messages and inquiries promptly",
        "Coordinated webinars and updated website content to improve user experience",
        "Developed templates and resources to enhance client communication and engagement",
        "Reviewed and provided feedback on resumes to support client career development"
      ]
    },
    {
      title: "Digital Marketing Microtasks – Acadium (Remote)",
      logo: "/myportfolio/files/acadiumofficial_logo.jpeg",
      date: "Jul 2025 – Present",
      responsibilities: [
        "Completed diverse microtasks including branded art, logo creation, LinkedIn banners, and keyword research",
        "Designed marketing materials and created artist branding toolkits",
        "Supported video marketing campaigns and gained experience in brand strategy"
      ]
    },
    {
      title: "IT & Software Support – Academic & Freelance Projects",
      logo: null,
      date: "Jan 2022 – Present",
      responsibilities: [
        "Provided troubleshooting for software, OS, and hardware issues for peers and clients",
        "Assisted in software installation, upgrades, and configuration",
        "Maintained documentation for recurring issues to improve support efficiency",
        "Supported end-users in system access and account management"
      ]
    }
  ];

  const simulations = [
    {
      title: "Hewlett Packard Enterprise Software Engineering Job Simulation – Forage",
      logo: "/myportfolio/files/theforage_logo.jpeg",
      date: "Sep 2025",
      responsibilities: [
        "Wrote a proposal for a RESTful web service to manage employee data",
        "Built a Spring Boot web server handling HTTP requests and JSON uploads",
        "Developed and ran unit tests with JUnit & Mockito to evaluate application performance",
        "Skills Learned: RESTful Web Development, Spring Boot, JUnit, Mockito, JSON, HTTP Requests"
      ]
    },
    {
      title: "Boston Consulting Group (BCG) Data Science Job Simulation – Forage",
      logo: "/myportfolio/files/theforage_logo.jpeg",
      date: "Sep 2025",
      responsibilities: [
        "Conducted customer churn analysis using Python (Pandas, NumPy)",
        "Designed a random forest model achieving 50% recall for churn prediction",
        "Delivered executive summary with actionable insights for client strategy",
        "Skills Learned: Data Analysis, EDA, Data Visualization, Machine Learning, Client Communication"
      ]
    }
  ];

  const otherExperiences = [
    {
      title: "Crew Member – McDonald’s, Scarborough, ON",
      logo: "/myportfolio/files/mcdonalds_logo.jpeg",
      date: "Nov 2022 – August 2025",
      responsibilities: [
        "Delivered excellent customer service in a fast-paced environment, handling 200+ transactions daily",
        "Assisted customers with inquiries, complaints, and order modifications",
        "Processed cash, card, and digital payments accurately",
        "Trained new employees and maintained workflow efficiency"
      ]
    },
    {
      title: "Call Center Customer Service Representative – Saudi Arabia",
      logo: null,
      date: "Jan 2020 – Dec 2021",
      responsibilities: [
        "Handled inbound calls, resolved inquiries, and provided accurate information",
        "Maintained CRM records and ensured timely follow-up of requests",
        "Met service level and quality targets while managing high-volume calls",
        "Supported training and workflow of new staff"
      ]
    },
    {
      title: "Office Assistant / Co-op – Abdullah Khaled Al Hamra General Contracting, Saudi Arabia",
      logo: null,
      date: "Jan 2018 – Dec 2020",
      responsibilities: [
        "Performed administrative tasks including scheduling appointments, drafting official correspondence, and organizing records",
        "Managed spreadsheets and maintained accurate project data for reporting and progress tracking",
        "Supported internal reporting processes by preparing summaries and status updates for management",
        "Coordinated communication between departments, contractors, and external partners to ensure workflow efficiency",
        "Assisted in document filing, invoice handling, and procurement support for ongoing projects",
        "Utilized tools such as Microsoft Excel, Word, PowerPoint, and Google Docs/Sheets to prepare reports, manage documentation, and streamline office operations",
        "Gained comprehensive experience in general office administration, ensuring smooth day-to-day workflow"
      ]
    },
    {
      title: "Sales Associate – Abqaiq Mall, Saudi Arabia",
      logo: null,
      date: "Jan 2018 – Dec 2020",
      responsibilities: [
        "Assisted customers with product selection, purchases, and inquiries while maintaining excellent customer service standards",
        "Processed cash, card, and digital transactions accurately, balancing registers at closing",
        "Resolved customer complaints effectively, ensuring high satisfaction and repeat business",
        "Supported merchandising activities including restocking, product display, and inventory organization",
        "Met individual and store sales targets consistently in a fast-paced retail environment"
      ]
    },
    {
      title: "Tutor – Bangladesh International School, Dammam, Saudi Arabia",
      logo: null,
      date: "Jan 2017 – Sep 2022",
      responsibilities: [
        "Delivered personalized one-on-one tutoring in Physics, Chemistry, and Mathematics for high school students",
        "Developed tailored lesson plans and practice exercises to strengthen student understanding of complex concepts",
        "Helped students improve exam performance and study techniques through consistent mentoring",
        "Monitored academic progress, provided feedback, and adjusted teaching strategies to meet learning goals",
        "Encouraged problem-solving, critical thinking, and self-confidence in students to build independent learning skills"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen p-6 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Professional & Industry Experience
      </h2>

      {/* Work Experience */}
      <h3 className="text-3xl font-semibold mb-6 text-purple-400 text-center">
        Work Experience
      </h3>
      <div className="space-y-8 mb-12">
        {workExperiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-md flex items-start space-x-4">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.title}
                className="w-12 h-12 object-contain rounded"
              />
            )}
            <div>
              <h4 className="text-2xl font-semibold mb-2">{exp.title}</h4>
              {exp.date && <p className="text-gray-400 mb-2">{exp.date}</p>}
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Job Simulations & Virtual Experience */}
      <h3 className="text-3xl font-semibold mb-6 text-purple-400 text-center">
        Job Simulations & Virtual Experience
      </h3>
      <div className="space-y-8 mb-12">
        {simulations.map((exp, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-md flex items-start space-x-4">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.title}
                className="w-12 h-12 object-contain rounded"
              />
            )}
            <div>
              <h4 className="text-2xl font-semibold mb-2">{exp.title}</h4>
              {exp.date && <p className="text-gray-400 mb-2">{exp.date}</p>}
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Other Work Experience */}
      <h3 className="text-3xl font-semibold mb-6 text-purple-400 text-center">
        Other Work Experience
      </h3>
      <div className="space-y-8">
        {otherExperiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-md flex items-start space-x-4">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.title}
                className="w-12 h-12 object-contain rounded"
              />
            )}
            <div>
              <h4 className="text-2xl font-semibold mb-2">{exp.title}</h4>
              {exp.date && <p className="text-gray-400 mb-2">{exp.date}</p>}
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
