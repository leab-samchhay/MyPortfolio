import { motion } from "framer-motion";
import { FaUser, FaMale, FaCalendarAlt, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const EDUCATION_INFO = [
    { icon: "🎓", text: "(2024 - Present) : I am studying at Build Bright University." },
    { icon: "🎓", text: "(July – September 2026) : I have completed a Full-Stack Web Development course at ICT Professional Training Center." },
    { icon: "🎓", text: "(2018 - 2024) : Studied and completed Bacc II successfully at Hun Sen Sandek High school." },
    { icon: "💼", text: "6 Months : Taught Microsoft Office applications including Word, Excel, and PowerPoint at Add book computer center." },
];

const PERSONAL_DETAILS = [
    {
        icon: <FaUser className="text-[#00d2ff]" />,
        label: "Name",
        value: "Leab Samchhay",
    },
    {
        icon: <FaMale className="text-[#00d2ff] text-lg" />,
        label: "Sex",
        value: "Male",
    },
    {
        icon: <FaCalendarAlt className="text-[#00d2ff]" />,
        label: "Date of Birth",
        value: "27, 01, 2007",
    },
    {
        icon: <FaGlobe className="text-[#00d2ff]" />,
        label: "Nationality",
        value: "Cambodian",
    },
    {
        icon: <FaMapMarkerAlt className="text-[#00d2ff]" />,
        label: "Place of Birth",
        value: "Sandek Commune, Batheay District, Kampong Cham Province",
        colSpan: "sm:col-span-2",
    },
];

const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
        opacity: 1, 
        y: 0, 
        transition: {
            duration: 0.3,
            delay: index * 0.15 
        }
    })
};

const AboutPage = () => {
    return (
        <section id="About" className="bg-[#07101d] py-16 px-4 sm:px-8 lg:px-12">
            <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                
                {/* Column 1: About Me & Personal Details */}
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-center mb-6"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/60 to-white bg-clip-text text-transparent mb-1">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-white/20 mx-auto rounded-full" />
                    </motion.div>

                    {/* Card Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <div className="h-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
                            {/* Ambient Glow */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

                            {/* Summary Text */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20 mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse"></span>
                                    Profile Summary
                                </div>
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-left font-normal text-gray-300">
                                    I am currently a third-year student at <span className="text-white font-medium">Build Bright University</span>, majoring in <span className="text-white font-medium">Information Technology</span> and specializing in <span className="text-[#00d2ff] font-medium">Programming</span>. I am seeking an opportunity to apply my technical skills and knowledge to contribute to the development of innovative software solutions.
                                </p>
                            </div>

                            {/* Decorative Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent my-6" />

                            {/* Personal Details Structured Grid */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide flex items-center gap-2">
                                        <span className="text-[#00d2ff]">✦</span> Personal Details
                                    </h3>
                                    <span className="text-xs text-gray-400 font-mono">Info</span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                                    {PERSONAL_DETAILS.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00d2ff]/40 hover:bg-white/[0.06] transition-all duration-300 group/item ${item.colSpan || ''}`}
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-[#00d2ff]/10 border border-[#00d2ff]/20 flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                                                    {item.label}
                                                </p>
                                                <p className="text-sm font-medium text-white truncate sm:whitespace-normal">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Column 2: Education & Background */}
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-center mb-6"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/60 to-white bg-clip-text text-transparent mb-1">
                            Education & Background
                        </h2>
                        <div className="w-36 h-1 bg-gradient-to-r from-[#00d2ff] to-white/20 mx-auto rounded-full" />
                    </motion.div>

                    {/* Education Items List */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col justify-between space-y-4"
                    >
                        {EDUCATION_INFO.map((item, index) => (
                            <motion.div
                                key={index} 
                                variants={boxVariants}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                className="flex gap-4 items-center bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#00d2ff]/40 p-4 sm:p-5 rounded-2xl shadow-sm transition-all duration-300 group hover:bg-white/[0.06]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#00d2ff]/10 border border-[#00d2ff]/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div className="text-sm sm:text-base leading-relaxed text-gray-200 group-hover:text-white transition-colors text-left">
                                    {item.text}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
            </div>
        </section>
    );
};

export default AboutPage;