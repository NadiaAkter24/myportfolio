import React from "react";
import Sidebar from "./components/Sidebar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import AcademicProjects from "./components/AcademicProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:ml-64">
        <AboutMe />
        <Education />
        <Skills />
        <Experience />
        <Certificates />
        <AcademicProjects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
