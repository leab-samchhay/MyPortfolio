import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ទិន្នន័យ Skills (ប្តូរ key `person` ទៅ `level` ឲ្យសមនឹងអត្ថន័យ)
const categories = {
    frontend: {
        label: "Frontend",
        accent: "from-blue-500 via-cyan-400 to-teal-400",
        skills: [
            { id: 1, name: "HTML & CSS", level: 85 },
            { id: 2, name: "JavaScript", level: 60 },
            { id: 3, name: "React JS", level: 85 },
            { id: 4, name: "Tailwind CSS", level: 80 },
        ],
    },
    backend: {
        label: "Backend",
        accent: "from-purple-500 via-fuchsia-500 to-pink-500",
        skills: [
            { id: 5, name: "PHP", level: 70 },
            { id: 6, name: "ASP.NET Core", level: 70 },
            { id: 7, name: "C#/OOP", level: 70 },
            { id: 8, name: "SQL Server", level: 80 },
            { id: 9, name: "Laravel", level: 80 },
            { id: 10, name: "MySQL", level: 80 },
            
        ],
    },
    tool: {
        label: "Tool",
        accent: "from-emerald-400 via-teal-400 to-cyan-400",
        skills: [
            { id: 10, name: "Git/GitHub", level: 70 },
            { id: 11, name: "Visual Studio Code", level: 80 },
            { id: 12, name: "Responsive Design", level: 70 },
            { id: 13, name: "Postman", level: 70 },
            { id: 14, name: "Intellij", level: 70 },
            { id: 15, name: "JetBrains Rider", level: 70 },
        ],
    },
};

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("frontend");
    const reduceMotion = useReducedMotion();

    const active = categories[activeCategory];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <section
            id="Skills"
            className="relative overflow-hidden bg-[#07101d] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
            {/* ពន្លឺផ្ទៃខាងក្រោយ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-96 sm:w-96"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : -30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mb-10 text-center sm:mb-12"
                >
                    <h2 className="bg-gradient-to-r from-white/60 via-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                        Technical Skills
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
                    <p className="mx-auto mt-4 max-w-xl text-sm text-white/50 sm:text-base">
                        Technologies and tools I use to build web applications.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div
                    role="tablist"
                    aria-label="Skill categories"
                    className="mx-auto mb-8 grid w-full max-w-md grid-cols-3 gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md sm:mb-10"
                >
                    {Object.entries(categories).map(([key, cat]) => {
                        const isActive = activeCategory === key;
                        return (
                            <button
                                key={key}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveCategory(key)}
                                className={`relative rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:px-6 ${
                                    isActive ? "text-white" : "text-white/50 hover:text-white"
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="skill-tab"
                                        transition={
                                            reduceMotion
                                                ? { duration: 0 }
                                                : { type: "spring", stiffness: 400, damping: 30 }
                                        }
                                        className={`absolute inset-0 cursor-pointer rounded-full bg-gradient-to-r ${cat.accent} shadow-lg shadow-black/30`}
                                    />
                                )}
                                <span className="relative cursor-pointer">{cat.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Skills */}
                <motion.div
                    key={activeCategory}
                    role="tabpanel"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-x-10 gap-y-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-8 md:grid-cols-2"
                >
                    {active.skills.map((item) => (
                        <motion.div key={item.id} variants={itemVariants} className="w-full">
                            <div className="mb-2 flex items-end justify-between gap-3">
                                <h3 className="text-base font-semibold text-white/90 sm:text-lg">
                                    {item.name}
                                </h3>
                                <span
                                    className={`bg-gradient-to-r ${active.accent} bg-clip-text text-base font-bold text-transparent sm:text-lg`}
                                >
                                    {item.level}%
                                </span>
                            </div>

                            <div
                                role="progressbar"
                                aria-label={item.name}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={item.level}
                                className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/10"
                            >
                                <motion.div
                                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${active.accent}`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: reduceMotion ? 0 : 1,
                                        delay: reduceMotion ? 0 : 0.2,
                                        ease: "easeOut",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;