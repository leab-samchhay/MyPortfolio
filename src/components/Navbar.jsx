// components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

/* -------------------- Data -------------------- */
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/* -------------------- Icons -------------------- */
const SunIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

/* -------------------- Component -------------------- */
const Navbar = () => {
  const {
    isDarkMode,
    toggleBgTheme,
    getNavbarBgClass,
    getSecondaryTextClass,
    getBorderClass,
  } = useGlobalContext();

  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* -------------------- Scroll Spy -------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;
        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------- Helpers -------------------- */
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const themeBtnClass = `w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110 ${
    isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-700"
  }`;

  /* -------------------- Render -------------------- */
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 shadow-lg transition ${getNavbarBgClass()}`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2  text-sm font-medium group ${
                  activeSection === item.id
                    ? "text-purple-600 dark:text-purple-400 cursor-pointer"
                    : `${getSecondaryTextClass()} hover:text-green-600 cursor-pointer`
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}

            <button onClick={toggleBgTheme} className={themeBtnClass}>
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 cursor-pointer" />
              ) : (
                <MoonIcon className="w-5 cursor-pointer h-5" />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleBgTheme} className={themeBtnClass}>
              {isDarkMode ? (
                <SunIcon className="w-4 h-4" />
              ) : (
                <MoonIcon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded ${getSecondaryTextClass()}`}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${getBorderClass()}`}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={` block w-full px-4 py-3 text-left cursor-pointer ${
                  activeSection === item.id
                    ? "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                  : getSecondaryTextClass()
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;