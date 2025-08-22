import React from "react";

function AcademicProjects() {
  const projects = [
    {
      name: "Personal Portfolio Website",
      tech: "React.js, Tailwind CSS, Vite",
      description: "Developed a responsive personal portfolio website using React.js and Vite. Frontend styled with Tailwind CSS. Includes interactive sidebar, skills section with icons, and project cards. Ready for deployment on GitHub Pages, Vercel, or Netlify.",
      //link: "https://nadiaakter24.github.io/myprotfolio/"
    },
    {
      name: "Realistic Calculator",
      tech: "HTML, CSS, JavaScript",
      description: "Created a web-based calculator featuring realistic UI design and smooth user interactions.",
      link: "https://nadiaakter24.github.io/realistic-calculator/"
    },
    {
      name: "Bug Smash Game",
      tech: "JavaScript, HTML5 Canvas",
      description: "Developed an interactive browser game focusing on event handling, animations, and game logic.",
      link: "https://nadiaakter24.github.io/bug-smash-game/"
    },
    {
      name: "Snake Frenzy",
      tech: "JavaScript, HTML5 Canvas, Responsive Design",
      description: "Built a classic snake game with a unique twist, fully optimized for desktop and mobile devices.",
      link: "https://nadiaakter24.github.io/Snake-Frenzy/"
    },
    {
      name: "Gym Management Web Application",
      tech: "React, Spring Boot, MySQL",
      description: "Full-stack platform with secure login, trainer-client assignment, workout scheduling, and notifications."
    },
     {
      name: "Doctor Appointment Mobile App",
      tech: "Android, Kotlin, Firebase",
      description: "Streamlined doctor bookings with real-time database, authentication, and user-friendly UI."
    },
    {
      name: "Multithreaded Java Desktop App",
      tech: "Java, JDBC",
      description: " Created a responsive desktop app with form-based UI, enabling efficient multithreaded data processing and dynamic database interaction. "
    },
    {
      name: "Cloud-Based API Service",
      tech: "AWS S3, DynamoDB, Node.js",
      description: "Deployed secure and scalable RESTful APIs with AWS services for file storage and NoSQL database integration."
    },
    {
      name: " Movie Listing and Booking App",
      tech: "AWS, Visual Studio Code",
      description: "  Developed a web application for browsing and booking movies. Integrated backend services using AWS and used Visual Studio Code for development and deployment with a clean and responsive UI. "
    },
    {
      name: "Mobile Store Web App",
      tech: "React, Node.js",
      description: "Online store with dynamic product listings, shopping cart functionality, and RESTful APIs for order processing."
    },
    {
      name: "Iris Flower Prediction App",
      tech: "TensorFlow.js, React, Express.js",
      description: "Full-stack app that trains a neural network on the iris dataset and displays real-time predictions."
    },
    {
      name: "Environmental Impact Summarizer",
      tech: "JavaScript, AI APIs",
      description: "Summarizes environmental news articles using GPT/Gemini API in a JS UI."
    },
    {
      name: "Break-and-Enter Risk Classifier",
      tech: "Python, Pandas, Matplotlib, Scikit-learn",
      description: "Analyzed Toronto police data to identify high-risk neighborhoods for break-and-enter incidents."
    },
    // Add other projects similarly...
     {
      name: "Software Security Analysis",
      tech: "DVWA, XAMPP, Kali Linux",
      description: "Worked on real-world vulnerabilities including SQL injection, command injection, and XSS. Documented exploits and applied security fixes based on OWASP guidelines. "
    },

     {
      name: "DevOps Pipeline Implementation",
      tech: "Jenkins, Git, Azure DevOps",
      description: "Configured CI/CD pipelines to automate testing and deployment. Integrated Git for version control and used DevOps boards for task management and team collaboration. "
    },

     {
      name: "Library Management System",
      tech: "Spring WebFlux, MongoDB, Thymeleaf",
      description: "Created a reactive web app with CRUD features, form validation, and NoSQL storage. Implemented modular design and REST endpoints for seamless user interaction. "
    },

     {
      name: "Camunda BPMN Automation",
      tech: " REST Connectors, Kafka Integration ",
      description: "Designed a BPMN process using Camunda Cloud with REST connector tasks to retrieve data and publish it to a Kafka topic. Took part in workflow orchestration and integration with mock APIs.."
    },

     {
      name: " Azure DevOps Boards Implementation ",
      tech: " Work Items, Git Integration ",
      description: "Created structured Agile artifacts including Epics, Features, User Stories, and Tasks. Linked these to Git branches and pull requests to streamline collaborative project workflows. ."
    },

     {
      name: "  Environmental Impact Summarizer ",
      tech: " JavaScript, AI APIs ",
      description: "Implemented a summarizer tool using GPT/Gemini API in a JavaScript UI. Parsed environmental news articles and generated brief summaries with clear formatting and links ."
    },


  ];

 return (
  <section id="projects" className="min-h-screen p-6 bg-gray-800 text-white">
    <h2 className="text-4xl font-bold mb-8 text-center">Projects & Academic Work</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-gray-900 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
          <p className="text-purple-300 italic mb-2">{project.tech}</p>
          <p className="text-gray-300 mb-2">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 hover:underline"
            >
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

}

export default AcademicProjects;
