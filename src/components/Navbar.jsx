// src/components/Sidebar.jsx
import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open/close toggle
  const [activeMenu, setActiveMenu] = useState(null); // Active submenu

  const menuItems = [
    { title: "About Me", href: "#about" },
    { title: "Education", href: "#education" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { 
      title: "Projects", 
      submenu: [
        { title: "Academic Projects", href: "#academic-projects" },
        { title: "Personal Projects", href: "#personal-projects" }
      ] 
    },
    { title: "Certificates", href: "#certificates" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
      <div className="flex items-center justify-between p-4 border-b">
        {isOpen && <h1 className="text-xl font-bold text-gray-800">Nadia Akter</h1>}
        <button 
          className="text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "⏴" : "⏵"}
        </button>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, idx) => (
          <div key={idx}>
            <button
              onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-100 text-gray-800 font-medium focus:outline-none"
            >
              <span>{item.title}</span>
              {item.submenu && <span>{activeMenu === idx ? "▲" : "▼"}</span>}
            </button>
            {item.submenu && activeMenu === idx && isOpen && (
              <div className="pl-6 bg-gray-50">
                {item.submenu.map((sub, subIdx) => (
                  <a
                    key={subIdx}
                    href={sub.href}
                    className="block py-2 px-4 hover:bg-gray-200 text-gray-700"
                  >
                    {sub.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
