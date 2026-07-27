// components/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

/* -------------------- Data -------------------- */
const SKILLS = [
  { name: "React", level: 80, icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { name: "JavaScript", level: 65, icon: "📘", color: "from-blue-600 to-indigo-600" },
  { name: "Tailwind CSS", level: 90, icon: "🎨", color: "from-teal-400 to-cyan-500" },
  { name: "Sql Server", level: 70, icon: "🍃", color: "from-green-600 to-lime-600" },
  { name: "Oracledb", level: 50, icon: "🅾️", color: "from-blue-600 to-indigo-600" },
  { name: "Pogressql", level: 50, icon: "🅿️", color: "from-teal-400 to-cyan-500" },
];

const HOBBIES = ["📚 Reading", "🧑‍💻 Learn Code", "🔎 Research", "📸 Photography"];

/* -------------------- Component -------------------- */
const About = () => {
  const {
    getBgClass,
    getTextClass,
    getSecondaryTextClass,
    getCardBgClass,
    isDarkMode,
  } = useGlobalContext();

  // Refs for animation
  const headerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const infoItemsRef = useRef([]);
  const skillItemsRef = useRef([]);
  const hobbyItemsRef = useRef([]);

  const [animated, setAnimated] = useState({
    header: false,
    left: false,
    right: false,
    info: [],
    skills: [],
    hobbies: []
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            if (entry.target === headerRef.current) {
              setAnimated((prev) => ({ ...prev, header: true }));
            }
            
            // Animate left content
            if (entry.target === leftContentRef.current) {
              setAnimated((prev) => ({ ...prev, left: true }));
            }
            
            // Animate right content
            if (entry.target === rightContentRef.current) {
              setAnimated((prev) => ({ ...prev, right: true }));
            }

            // Animate info items
            if (entry.target.classList.contains('info-item')) {
              const index = infoItemsRef.current.indexOf(entry.target);
              if (index !== -1) {
                setAnimated((prev) => ({
                  ...prev,
                  info: [...prev.info, index]
                }));
              }
            }

            // Animate skill items
            if (entry.target.classList.contains('skill-item')) {
              const index = skillItemsRef.current.indexOf(entry.target);
              if (index !== -1) {
                setAnimated((prev) => ({
                  ...prev,
                  skills: [...prev.skills, index]
                }));
              }
            }

            // Animate hobby items
            if (entry.target.classList.contains('hobby-item')) {
              const index = hobbyItemsRef.current.indexOf(entry.target);
              if (index !== -1) {
                setAnimated((prev) => ({
                  ...prev,
                  hobbies: [...prev.hobbies, index]
                }));
              }
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe left content
    if (leftContentRef.current) {
      observer.observe(leftContentRef.current);
    }

    // Observe right content
    if (rightContentRef.current) {
      observer.observe(rightContentRef.current);
    }

    // Observe info items
    infoItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // Observe skill items
    skillItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // Observe hobby items
    hobbyItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`py-20 px-4 transition-colors duration-300 ${getBgClass()}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* ---------- Header ---------- */}
        <header
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 transform ${
            animated.header
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${getSecondaryTextClass()}`}>
            Get to know me better and discover what drives my passion for development
          </p>
        </header>

        {/* ---------- Content ---------- */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div
            ref={leftContentRef}
            className={`space-y-6 transition-all duration-700 delay-300 transform ${
              animated.left
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Description */}
            <div className={`rounded-2xl p-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20`}>
              <p className={`text-lg leading-relaxed mb-4 text-blue-500 ${getTextClass()}`}>
                I am currently a third-year student at Build Bright University, majoring in Information Technology and specializing in Programming. I am seeking an opportunity to apply my technical skills and knowledge to contribute to the development of innovative software solutions.
              </p>
            </div>

            {/* Info */}
            {[
              { icon: "🎓", text: "(2012 - 2018) : Finished Primary school at Srah Kak Koh Primary school." },
              { icon: "🎓", text: "(2018 - 2024) : Studied at Hun Sen Sandek Hight school and completed Bacc II successfully at Hun Sen Sandek Hight school." },
              { icon: "🎓", text: "(2024 - Present) : I am studying at Build Bright University." },
              { icon: "💼", text: "6 Month : Taught Microsoft Office applications including Microsoft Word, Excel, PowerPoint" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (infoItemsRef.current[i] = el)}
                className={`info-item flex cursor-pointer items-center gap-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-500 transform ${
                  animated.info.includes(i)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-5"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className={getTextClass()}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Right - Skills */}
          <div
            ref={rightContentRef}
            className={`rounded-2xl space-y-1 p-0.5 bg-gradient-to-r from-purple-600 to-blue-500 shadow-xl transition-all duration-700 delay-300 transform ${
              animated.right
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className={`rounded-2xl p-6 ${getCardBgClass()}`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${getTextClass()}`}>
                💪 My Skills
              </h3>

              <div className="space-y-5">
                {SKILLS.map((skill, index) => (
                  <div
                    key={skill.name}
                    ref={(el) => (skillItemsRef.current[index] = el)}
                    className={`skill-item group transition-all duration-700 transform ${
                      animated.skills.includes(index)
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className={`font-semibold flex items-center gap-2 ${getTextClass()}`}>
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-3 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ${
                          animated.skills.includes(index)
                            ? "scale-x-100"
                            : "scale-x-0"
                        } origin-left`}
                        style={{ 
                          width: `${skill.level}%`,
                          transformOrigin: 'left'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hobbies */}
            <div className={`rounded-2xl p-6 ${getCardBgClass()}`}>
              <div className="space-y-5">
                <div>
                  <h3 className={`font-semibold mb-3 ${getTextClass()}`}>
                    Hobbies & Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {HOBBIES.map((hobby, i) => (
                      <span
                        key={i}
                        ref={(el) => (hobbyItemsRef.current[i] = el)}
                        className={`hobby-item px-3 py-1 rounded-full text-sm font-medium
                        bg-purple-100 dark:bg-purple-900/30
                        text-purple-700 dark:text-purple-300
                        transition-all duration-500 transform ${
                          animated.hobbies.includes(i)
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75"
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;