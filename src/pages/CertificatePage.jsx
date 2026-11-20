import { useState, useEffect, useCallback } from "react";
import bbu from "../assets/bbu.jpg";
import etect from "../assets/c++.jpg";
import work from "../assets/work.jpg";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const certificates = [
    {
        id: 1,
        title: "Certificate of Outstanding Student",
        issuer: "Build Bright University",
        date: "2024-2025",
        icon: "🎓",
        color: "from-purple-500 to-blue-500",
        description: "Awarded for outstanding academic performance.",
        skills: [],
        image: bbu,
    },
    {
        id: 2,
        title: "C++ Programming",
        issuer: "Studied C++ programming",
        date: "2025",
        icon: "⚡",
        color: "from-blue-500 to-cyan-400",
        description: "Completed comprehensive C++ programming course.",
        skills: ["C++", "OOP", "Data Structures"],
        image: etect,
    },
    {
        id: 3,
        title: "Microsoft Office Instructor",
        issuer: "AddBook Training",
        date: "2025-2026",
        icon: "📚",
        color: "from-emerald-400 to-teal-500",
        description: "Taught Microsoft Office fundamentals to students.",
        skills: ["Teamwork", "Communication"],
        image: work,
    },
];

const CertificatePage = () => {
    // ទុក index ជំនួស object ដើម្បីងាយស្រួលធ្វើប៊ូតុង Previous / Next
    const [selectedIndex, setSelectedIndex] = useState(null);
    const reduceMotion = useReducedMotion();

    const selectedCert = selectedIndex !== null ? certificates[selectedIndex] : null;

    const close = useCallback(() => setSelectedIndex(null), []);
    const next = useCallback(
        () => setSelectedIndex((i) => (i === null ? i : (i + 1) % certificates.length)),
        []
    );
    const prev = useCallback(
        () =>
            setSelectedIndex((i) =>
                i === null ? i : (i - 1 + certificates.length) % certificates.length
            ),
        []
    );

    // Esc បិទ, ព្រួញឆ្វេង/ស្តាំ ប្តូរ Certificate, ហើយបិទ scroll ផ្ទៃខាងក្រោយពេលបើក Modal
    useEffect(() => {
        if (selectedIndex === null) return;

        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [selectedIndex, close, next, prev]);

    const cardVariant = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.12, ease: "easeOut" },
        }),
    };

    return (
        <section
            id="Certificate"
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

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : -30 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                    className="mb-10 text-center sm:mb-14"
                >
                    <h2 className="bg-gradient-to-r from-white/60 via-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                        Certificates
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
                    <p className="mx-auto mt-4 max-w-xl text-sm text-white/50 sm:text-base">
                        {certificates.length} certificates from study, training and teaching.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                    {certificates.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariant}
                            custom={index}
                            viewport={{ once: true, amount: 0.2 }}
                            className="group relative"
                        >
                            {/* ពន្លឺព័ទ្ធជុំវិញ Card ពេល hover តាមពណ៌នីមួយៗ */}
                            <div
                                aria-hidden="true"
                                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${item.color} opacity-20 blur-md transition-opacity duration-500 group-hover:opacity-70`}
                            />

                            <div className="relative flex h-135 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1626] transition-transform duration-500 group-hover:-translate-y-1">
                                {/* រូបភាព */}
                                <button
                                    type="button"
                                    onClick={() => setSelectedIndex(index)}
                                    aria-label={`View ${item.title}`}
                                    className="relative block aspect-[4/3] w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover p-1 rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-[#0b1626]/20 to-transparent" />

                                    {/* Badge */}
                                    <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                                        <span aria-hidden="true">{item.icon}</span>
                                        {item.date}
                                    </span>

                                    {/* Hint */}
                                    <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                                            ចុចដើម្បីមើលពេញ
                                        </span>
                                    </span>
                                </button>

                                {/* ខ្លឹមសារ */}
                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`mt-1 bg-gradient-to-r ${item.color} bg-clip-text text-sm font-medium text-transparent`}
                                    >
                                        {item.issuer}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                                        {item.description}
                                    </p>

                                    {item.skills.length > 0 && (
                                        <ul className="mt-4 flex flex-wrap gap-2">
                                            {item.skills.map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => setSelectedIndex(index)}
                                        className={`mt-5 cursor-pointer w-full rounded-xl bg-gradient-to-r ${item.color} px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.98] sm:mt-auto sm:pt-2.5`}
                                    >
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-4"
                        onClick={close}
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedCert.title}
                    >
                        <motion.div
                            initial={{ y: reduceMotion ? 0 : 60, opacity: 0, scale: 0.97 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: reduceMotion ? 0 : 60, opacity: 0, scale: 0.97 }}
                            transition={{ type: "spring", damping: 28, stiffness: 300 }}
                            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-white/15 bg-[#0b1626] shadow-2xl sm:rounded-3xl lg:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* ប៊ូតុងបិទ */}
                            <button
                                type="button"
                                onClick={close}
                                aria-label="Close"
                                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors duration-300 hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                ✕
                            </button>

                            {/* រូបភាពធំ */}
                            <div className="relative flex min-h-[220px] flex-1 items-center justify-center bg-black/40 p-3 sm:p-6 lg:basis-3/5">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={selectedCert.id}
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="max-h-[45vh] w-full rounded-lg object-contain shadow-lg lg:max-h-[75vh]"
                                    />
                                </AnimatePresence>

                                {/* Prev / Next */}
                                <button
                                    type="button"
                                    onClick={prev}
                                    aria-label="Previous certificate"
                                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4"
                                >
                                    ‹
                                </button>
                                <button
                                    type="button"
                                    onClick={next}
                                    aria-label="Next certificate"
                                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4"
                                >
                                    ›
                                </button>
                            </div>

                            {/* ព័ត៌មានលម្អិត */}
                            <div className="flex flex-col overflow-y-auto p-5 sm:p-8 lg:basis-2/5 lg:justify-center">
                                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                                    <span aria-hidden="true">{selectedCert.icon}</span>
                                    {selectedCert.date}
                                </span>

                                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                                    {selectedCert.title}
                                </h3>
                                <p
                                    className={`mt-1 bg-gradient-to-r ${selectedCert.color} bg-clip-text font-medium text-transparent`}
                                >
                                    {selectedCert.issuer}
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                                    {selectedCert.description}
                                </p>

                                {selectedCert.skills.length > 0 && (
                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {selectedCert.skills.map((skill) => (
                                            <li
                                                key={skill}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <a
                                    href={selectedCert.image}
                                    download={`${selectedCert.title.replace(/\s+/g, "_")}_Certificate.jpg`}
                                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${selectedCert.color} px-6 py-3 font-semibold text-white shadow-lg shadow-black/30 transition-all duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.98]`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                        />
                                    </svg>
                                    Save & Download
                                </a>

                                <p className="mt-4 text-center text-xs text-white/30">
                                    {selectedIndex + 1} / {certificates.length}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CertificatePage;