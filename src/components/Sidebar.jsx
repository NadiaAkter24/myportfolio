import React, { useState, useEffect } from "react";

function Sidebar() {
  const navItems = [
    "About",
    "Education",
    "Skills",
    "Experience",
    "Certificates",
    "Projects",
    "Contact",
  ];

  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(item.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-md"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-200 shadow-lg p-6 transform transition-transform duration-300 z-40 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-8">Nadia Akter</h2>
        <nav>
          <ul className="space-y-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors duration-200 ${
                    active === item.toLowerCase()
                      ? "text-purple-500 font-semibold"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                  onClick={() => {
                    setActive(item.toLowerCase());
                    setMenuOpen(false); // close menu on mobile
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
