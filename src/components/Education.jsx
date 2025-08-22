import React from "react";

function Education() {
  const courses = [
    "Programming 1",
    "Software Engineering Fundamentals",
    "Web Interface Design",
    "Functions & Number Systems",
    "Programming 2",
    "Discrete Mathematics",
    "College Communications 1 (ESL)",
    "Introduction to Database Concepts",
    "Client-Side Web Development",
    "Software Requirements Engineering",
    "Unix/Linux Operating Systems",
    "Advanced Database Concepts",
    "Java Programming",
    "Web Application Development",
    "Software Systems Design",
    "Advanced Business Communications",
    "Programming 3",
    "Software Testing & Quality Assurance",
    "Linear Algebra & Statistics",
    "Networking for Software Developers",
    "Mobile Application Development",
    "Data Structures and Algorithms",
    "Software Development Project 1",
    "Business & Entrepreneurship - SET",
    "Enterprise Application Development",
    "API Engineering & Cloud Computing",
    "Software Security",
    "Data Warehousing & Predictive Analytics",
    "IT Project Management",
    "Emerging Technologies",
    "Software Project 2",
    "Enterprise Systems Integration",
    "DevOps Implementation",
    "Employment Skills II",
    "ILP: Leadership/Contemporary Workplaces",
  ];

  return (
    <section id="education" className="min-h-screen p-6 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">Education</h2>

      {/* Advanced Diploma */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-purple-400">
          Advanced Diploma in Software Engineering Technology
        </h3>
        <p className="text-lg mb-1">
          Centennial College, Toronto, Ontario, Canada | GPA: 3.392 (Cumulative)
        </p>
        <p className="italic mb-2">January 2023 – April 2025</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Throughout my education at Centennial College, I developed a strong foundation in programming, web development, and software engineering principles. My coursework equipped me with the skills to build secure and reliable applications, apply data structures and algorithms effectively, and collaborate efficiently within Agile development environments.</li>
        </ul>

        <p className="font-semibold mb-2">Relevant Courses Completed:</p>
        <div className="flex flex-wrap gap-2">
          {courses.map((course, idx) => (
            <span
              key={idx}
              className="bg-purple-300 text-gray-900 text-sm px-3 py-1 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </div>

      {/* High School */}
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-purple-400">
          High School Diploma, IGCSE and GCE
        </h3>
        <p className="text-lg mb-1">
          Bangladesh International School Dammam, Saudi Arabia
        </p>
        <p className="italic mb-2">January 2011 – August 2022</p>
        <p className="mb-2">
          Completed High school with a focus on Mathematics, Physics, Chemistry, and Biology.
        </p>
        <ul className="list-disc ml-6">
          <li>Physics (A*)</li>
          <li>Chemistry (A*)</li>
          <li>Biology (A*)</li>
          <li>Mathematics (A*)</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
