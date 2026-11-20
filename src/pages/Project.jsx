import { motion, useReducedMotion } from "framer-motion";
import ASP from "../assets/ASP.png";
import AppWeather from "../assets/AppWeather.png";
import caculate from "../assets/image.png";

const projectFrontend = [
    {
        id: 1,
        title: "Calculate && Grade",
        description: "A web app with a standard calculator tab and a grade tab that asks for the number of subjects, takes each score, then shows total, average, Pass/Fail and grade.",
        tech: ["HTML", "CSS", "Javascript"],
        demo: "https://form-three-liart.vercel.app/",
        image: caculate,
    },
    {
        id: 2,
        title: "APP Weather",
        description: "earch for any city worldwide to get current weather conditions and forecast",
        tech: ["HTML", "CSS", "Javascript"],
        demo: "https://weather-app.chhay.workers.dev/",
        image: AppWeather,
    },
    {
        id: 3,
        title: "Static Shoes E-Commerce Website",
        description: "Frontend show product (Shoes) for sale.",
        tech: ["HTML", "Tailwind", "Javascript"],
        demo: "https://nike-shoes-bice.vercel.app/",
        image: "https://i.pinimg.com/1200x/ed/58/f8/ed58f8d2f741c6d3aa4725996ebebad1.jpg",
    },
    {
        id: 4,
        title: "E-Commerce Static Website",
        description: "Frontend show product (Clothes) for sale.",
        tech: ["HTML", "Tailwind", "Javascript"],
        demo: "https://leab-samchhay.github.io/E-commerce-website-sale-clothes/",
        image: "https://i.pinimg.com/1200x/1f/16/c6/1f16c64605f86bc33bdeec5f934dc24a.jpg",
    },
    {
        id: 5,
        title: "E-Commerce Static Website",
        description: "Frontend show product (Phone and Computer) for sale.",
        tech: ["HTML", "Tailwind", "Reactjs"],
        demo: "https://tesreact-kappa.vercel.app/",
        image: "https://i.pinimg.com/736x/59/3d/a9/593da92a18d6b617bf6e556debbff061.jpg",
    },
    {
        id: 6,
        title: "E-Commerce Static Website",
        description: "Frontend show product (Food) for sale.",
        tech: ["HTML", "Tailwind", "Reactjs"],
        demo: "https://restaurant-sandy-seven.vercel.app/",
        image: "https://i.pinimg.com/1200x/85/ce/e1/85cee14750e778f55332467dfa307f58.jpg",
    },
];

const projectBackend = [
    {
        id: 1,
        title: "E-Commerce System",
        description:
            "E-commerce System built using HTML, Bootstrap, JavaScript, Laravel, and MySQL. The system includes: Dashboard, Product Management, Sales Management",
        tech: ["HTML", "Bootstrap", "Javascript", "Laravel", "MySQL"],
        demo: "https://github.com/leab-samchhay/TeamProject",
        image: "https://i.pinimg.com/1200x/db/80/35/db80351a523c9bc70a57c9145e7d9b6d.jpg",
    },
    {
        id: 2,
        title: "Academic Project Build API + React.js",
        description:
            "Collaborated with a university instructor to create an Apartment Management System using ASP.NET (C#), React.js, and Oracle Database.",
        tech: ["React.js", "ASP.NET", "Oracle Database"],
        demo: "https://github.com/leab-samchhay/Apartment_Backend_api",
        image: ASP,
    },
    {
        id: 3,
        title: "Library Management System",
        description:
            "Developed a library management system. Implemented book management, member management, borrowing, and return processes.",
        tech: ["React.js", "Laravel", "MySQL Database"],
        demo: "https://library.chhay.workers.dev/login",
        image: "https://i.pinimg.com/736x/c8/cb/d3/c8cbd3d8ce4cccde74e60c7b24cefa5f.jpg",
    },
];

// Section មួយៗ (Frontend / Backend) ប្រើ Component តែមួយដើម្បីកុំឲ្យកូដស្ទួន
const ProjectSection = ({ title, subtitle, projects, accent, glow, reduceMotion }) => {
    const cardVariant = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.12, ease: "easeOut" },
        }),
    };

    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : -30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                viewport={{ once: true, amount: 0.5 }}
                className="mb-10 text-center sm:mb-12"
            >
                <h2 className="bg-gradient-to-r from-white/60 via-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                    {title}
                </h2>
                <div className={`mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r ${accent}`} />
                <p className="mx-auto mt-4 max-w-xl text-sm text-white/50 sm:text-base">{subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {projects.map((item, index) => {
                    const isGithub = item.demo.includes("github.com");
                    return (
                        <motion.article
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariant}
                            custom={index}
                            viewport={{ once: true, amount: 0.2 }}
                            className="group relative"
                        >
                            {/* ពន្លឺព័ទ្ធជុំវិញ Card */}
                            <div
                                aria-hidden="true"
                                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${accent} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50`}
                            />

                            <div className="relative flex h-135 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1626] transition-transform duration-500 group-hover:-translate-y-1">
                                {/* រូបភាព */}
                                <a
                                    href={item.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${item.title}`}
                                    className="relative block aspect-[16/10] w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="h-full w-full p-1 rounded-t-3xl object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-[#0b1626]/20 to-transparent" />

                                    {/* Badge បង្ហាញប្រភេទ */}
                                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                                        {isGithub ? "Source code" : "Live site"}
                                    </span>
                                </a>

                                {/* ខ្លឹមសារ */}
                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                                        {item.description}
                                    </p>

                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {item.tech.map((tech) => (
                                            <li
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={item.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-6 cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${accent} px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.98] sm:mt-auto sm:pt-2.5`}
                                    >
                                        {isGithub ? "View Code" : "Live Demo"}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 17L17 7M17 7H8M17 7v9"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    );
};

const Project = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="Projects"
            className="relative overflow-hidden bg-[#07101d] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
            {/* ពន្លឺផ្ទៃខាងក្រោយ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-96 sm:w-96"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl space-y-20 sm:space-y-28">
                <ProjectSection
                    title="Project Frontend"
                    subtitle="Responsive websites built with HTML, Tailwind and React."
                    projects={projectFrontend}
                    accent="from-blue-500 via-cyan-400 to-teal-400"
                    reduceMotion={reduceMotion}
                />
                <ProjectSection
                    title="Project Backend"
                    subtitle="Full-stack systems with Laravel, ASP.NET and databases."
                    projects={projectBackend}
                    accent="from-purple-500 via-fuchsia-500 to-pink-500"
                    reduceMotion={reduceMotion}
                />
            </div>
        </section>
    );
};

export default Project;