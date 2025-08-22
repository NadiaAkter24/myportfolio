import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C#", "Kotlin", "Python", "OOP", "Software Development", "Programming", "TypeScript", "R"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "React.js", "Node.js", "User Interface Design", "Front-End Development", "UED (User Experience Design)", "Next.js", "Responsive Design", "Bootstrap"]
    },
    {
      title: "Software Engineering & AI",
      skills: ["AI Software Development", "Agile Methodologies", "Software Design", "Requirements Engineering", "UML", "Software Project Management", "Redefining Software Development Roles in the AI Era", "SDLC (Software Development Life Cycle)", "REST API Design", "Microservices Architecture", "UX Design", "Jest"]
    },
    {
      title: "Database Management",
      skills: ["SQL", "MongoDB", "Microsoft SQL Server", "Oracle", "PostgreSQL", "Firebase", "NoSQL"]
    },
    {
      title: "Mobile Development",
      skills: ["Android Studio", "Kotlin", "Advanced UI/UX Design", "Flutter"]
    },
    {
      title: "Software Testing",
      skills: ["Test Automation", "Quality Assurance", "Software Testing Tools", "Unit Testing", "Integration Testing", "Selenium", "Jest"]
    },
    {
      title: "Networking & IT Support",
      skills: ["Network Protocols", "Socket Programming", "Client-Server Applications", "Network Administration", "Technical Support", "Help Desk Support", "Troubleshooting", "IT Service Desk Operations", "CompTIA IT Fundamentals (FC0-U61)", "Active Directory", "Windows/Linux Administration", "Git"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (S3, DynamoDB)", "CI/CD", "Docker", "Jenkins", "Azure DevOps", "GitHub Actions", "Cloud Deployment", "Vercel"]
    },
    {
      title: "Data Analysis & Visualization",
      skills: ["Data Analysis", "Microsoft Excel", "Tableau", "Data Visualization", "Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "Predictive Analytics"]
    },
    {
      title: "CRM & Office Administration",
      skills: ["Customer Relationship Management (CRM)", "Administrative Assistance", "Office Administration", "Administrative Processes", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Teams", "Google Chat", "Jira", "Slack"]
    },
    {
      title: "Professional & Career Development",
      skills: ["Career Path Planning", "Problem Solving & Troubleshooting", "Customer Service", "Soft Skills", "Data Science", "Agile Software Development", "Time Management"]
    },
    {
      title: "Core Competencies & Attributes",
      skills: ["Organization", "Multitasking", "Communication", "Interpersonal Skills", "Attention to Detail", "Teamwork", "Dependability", "Positive Attitude", "Adaptability", "Critical Thinking"]
    },
  ];

  return (
    <section id="skills" className="min-h-screen p-6 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">
        Skills & Competencies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:bg-gray-700 transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-purple-500 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
