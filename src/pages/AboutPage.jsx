import { motion, useReducedMotion } from "framer-motion";
import { FaUser, FaMale, FaCalendarAlt, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

// Timeline: ទិន្នន័យតាមលំដាប់ពេលវេលា
const TIMELINE = [
    {
        icon: "🎓",
        period: "2024 - Present",
        title: "Build Bright University",
        text: "Currently studying Information Technology, specializing in Programming.",
        type: "Education",
        accent: "from-blue-500 to-cyan-400",
    },
    {
        icon: "🎓",
        period: "July – September 2026",
        title: "ICT Professional Training Center",
        text: "Completed a Full-Stack Web Development course.",
        type: "Course",
        accent: "from-purple-500 to-pink-500",
    },
    {
        icon: "🎓",
        period: "2018 - 2024",
        title: "Hun Sen Sandek High School",
        text: "Studied and completed Bacc II successfully.",
        type: "Education",
        accent: "from-blue-500 to-cyan-400",
    },
    {
        icon: "💼",
        period: "6 Months",
        title: "Add Book Computer Center",
        text: "Taught Microsoft Office applications including Word, Excel, and PowerPoint.",
        type: "Work",
        accent: "from-emerald-400 to-teal-500",
    },
];

const PERSONAL_DETAILS = [
    { icon: <FaUser />, label: "Name", value: "Leab Samchhay" },
    { icon: <FaMale className="text-lg" />, label: "Sex", value: "Male" },
    { icon: <FaCalendarAlt />, label: "Date of Birth", value: "27, 01, 2007" },
    { icon: <FaGlobe />, label: "Nationality", value: "Cambodian" },
    {
        icon: <FaMapMarkerAlt />,
        label: "Place of Birth",
        value: "Sandek Commune, Batheay District, Kampong Cham Province",
        colSpan: "sm:col-span-2",
    },
];

const SectionHeader = ({ title, reduceMotion }) => (
    <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : -30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-8 text-center"
    >
        <h2 className="bg-gradient-to-r from-white/60 via-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            {title}
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
    </motion.div>
);

const AboutPage = () => {
    const reduceMotion = useReducedMotion();

    const itemVariant = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.12, ease: "easeOut" },
        }),
    };

    return (
        <section
            id="About"
            className="relative overflow-hidden bg-[#07101d] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
            {/* ពន្លឺផ្ទៃខាងក្រោយ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-96 sm:w-96"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-10">
                {/* Column 1: About Me */}
                <div className="flex flex-col">
                    <SectionHeader title="About Me" reduceMotion={reduceMotion} />

                    <motion.div
                        initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="group relative flex-1"
                    >
                        {/* ពន្លឺព័ទ្ធជុំវិញ Card */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 opacity-15 blur-md transition-opacity duration-500 group-hover:opacity-40"
                        />

                        <div className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0b1626] p-6 sm:p-8">
                            {/* Profile */}
                            <div className="flex items-center gap-4">
                                <div
                                    aria-hidden="true"
                                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 text-xl font-bold text-[#07101d] shadow-lg shadow-blue-500/20 sm:h-20 sm:w-20 sm:text-2xl"
                                >
                                    LS
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                                        Leab Samchhay
                                    </h3>
                                    <p className="mt-1 flex items-center gap-2 text-sm text-white/60">
                                        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                                        Information Technology student
                                    </p>
                                </div>
                            </div>

                            {/* Summary */}
                            <p className="mt-6 text-left text-sm leading-relaxed text-white/70 sm:text-base">
                                I am currently a third-year student at{" "}
                                <span className="font-medium text-white">Build Bright University</span>,
                                majoring in{" "}
                                <span className="font-medium text-white">Information Technology</span>{" "}
                                and specializing in{" "}
                                <span className="font-medium text-cyan-300">Programming</span>. I am
                                seeking an opportunity to apply my technical skills and knowledge to
                                contribute to the development of innovative software solutions.
                            </p>

                            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                            {/* Personal Details */}
                            <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">
                                Personal Details
                            </h3>

                            <dl className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
                                {PERSONAL_DETAILS.map((item) => (
                                    <div
                                        key={item.label}
                                        className={`group/item flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] ${
                                            item.colSpan || ""
                                        }`}
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-transform duration-300 group-hover/item:scale-105">
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <dt className="text-xs font-medium text-white/50">
                                                {item.label}
                                            </dt>
                                            <dd className="break-words text-sm font-medium text-white">
                                                {item.value}
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </motion.div>
                </div>

                {/* Column 2: Education & Background */}
                <div className="flex flex-col">
                    <SectionHeader title="Education & Background" reduceMotion={reduceMotion} />

                    <ol className="relative flex-1 space-y-5 pl-0 sm:space-y-6">
                        {/* បន្ទាត់ Timeline */}
                        <div
                            aria-hidden="true"
                            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent"
                        />

                        {TIMELINE.map((item, index) => (
                            <motion.li
                                key={item.title}
                                variants={itemVariant}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="group relative flex gap-4"
                            >
                                {/* ចំណុច Timeline */}
                                <div
                                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-xl shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <span aria-hidden="true">{item.icon}</span>
                                </div>

                                {/* Card */}
                                <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-[#0b1626] p-4 text-left transition-colors duration-300 hover:border-white/25 sm:p-5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span
                                            className={`bg-gradient-to-r ${item.accent} bg-clip-text text-sm font-semibold text-transparent`}
                                        >
                                            {item.period}
                                        </span>
                                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/60">
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;