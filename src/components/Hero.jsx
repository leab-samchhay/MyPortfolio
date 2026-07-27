// components/Hero.jsx
import React from "react";
import profile from '../assets/profile.png'
import { useGlobalContext } from "../contexts/GlobalContext";

/* -------------------- Data -------------------- */
const STATS = [
  { value: "6 Month", label: "Years Experience" },
  { value: "3+", label: "Projects Done" },
  { value: "0+", label: "Happy Clients" },
];

/* -------------------- Component -------------------- */
const Hero = () => {
  const {
    getBgClass,
    graydient,
    herograydient,
    getTextClass,
    getSecondaryTextClass,
    getBorderClass,
  } = useGlobalContext();

  /* -------------------- Helpers -------------------- */
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* -------------------- Render -------------------- */
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${herograydient()}`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center ">
        {/* Avatar */}
        <div className=" anikey photo-wrap inline-block mb-6 p-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
          <div className={`rounded-full w-70 h-70 overflow-hidden flex items-center justify-center p-2 ${getBgClass()}`}>
            <img src={profile} alt="" className="image w-full h-full object-cover rounded-full"/>
            
          </div>
        </div>

        {/* Heading */}
        <h1 className={`text-5xl flex gap-4 items-center justify-center animate-pulse sm:text-6xl lg:text-7xl font-bold mb-4 ${getTextClass()}`}>
          <span>Leab</span>
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Samchhay
          </span>
        </h1>

        <p className={`text-xl sm:text-2xl mb-6 ${getSecondaryTextClass()}`}>
          My gaol is to become a Full Stack Developer 
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 rounded-full font-semibold text-white cursor-pointer
            bg-gradient-to-r from-purple-600 to-blue-500
            transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-full font-semibold cursor-pointer
            border-2 border-purple-600 dark:border-purple-400
            text-purple-600 dark:text-purple-400
            transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 pt-8 border-t ${getBorderClass()}`}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="transition transform hover:scale-105"
            >
              <div className={`text-2xl font-bold ${getTextClass()}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${getSecondaryTextClass()}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;