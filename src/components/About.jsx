// components/About.jsx
import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

/* -------------------- Data -------------------- */
const SKILLS = [
  { name: "React", level: 90, icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { name: "JavaScript", level: 70, icon: "📘", color: "from-blue-600 to-indigo-600" },
  { name: "Tailwind CSS", level: 90, icon: "🎨", color: "from-teal-400 to-cyan-500" },
  { name: "Sql Server", level: 80, icon: "🍃", color: "from-green-600 to-lime-600" },
  { name: "Oracledb", level: 80, icon: "🅾️", color: "from-blue-600 to-indigo-600" },
  { name: "Pogressql", level: 80, icon: "🅿️", color: "from-teal-400 to-cyan-500" },
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

  return (
    <section
      id="about"
      className={`py-20 px-4 transition-colors duration-300 ${getBgClass()}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* ---------- Header ---------- */}
        <header className="text-center mb-12">
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
          <div className="space-y-6">
            {/* Description */}
            <div className={`rounded-2xl p-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 `}>
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
                className="flex cursor-pointer items-center gap-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className={getTextClass()}>{item.text}</span>
              </div>
            ))}

            
          </div>

          {/* Right - Skills */}
          <div className="rounded-2xl space-y-1 p-0.5 bg-gradient-to-r from-purple-600 to-blue-500 shadow-xl">
            <div className={`rounded-2xl p-6 ${getCardBgClass()}`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${getTextClass()}`}>
                💪 My Skills
              </h3>

              <div className="space-y-5">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="group">
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
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
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
                        className="px-3 py-1 rounded-full text-sm font-medium
                        bg-purple-100 dark:bg-purple-900/30
                        text-purple-700 dark:text-purple-300"
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