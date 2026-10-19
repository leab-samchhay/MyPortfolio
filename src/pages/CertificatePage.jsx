import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bbu from "../assets/bbu.jpg";
import etect from "../assets/c++.jpg";
import work from "../assets/work.jpg";
import { motion, AnimatePresence } from "framer-motion";

const CertificatePage = () => {
    const navigate = useNavigate();
    // ប្រើ State សម្រាប់ចាប់យក Certificate ណាដែល User បានចុច
    const [selectedCert, setSelectedCert] = useState(null);

    const projectBackend = [
        {
            id: 1,
            title: 'Certificate of Outstanding Student',
            issuer: 'Build Bright University',
            date: '2024-2025',
            icon: '🎓',
            color: 'from-purple-600 to-blue-500',
            description: 'Awarded for outstanding academic performance.',
            image: bbu, // ប្រើរូបភាពដែលបាន Import
        },
        {
            id: 2,
            title: 'C++ Programming',
            issuer: 'Studied C++ programming',
            date: '2025',
            icon: '⚡',
            color: 'from-blue-600 to-cyan-500',
            description: 'Completed comprehensive C++ programming course.',
            skills: ['C++', 'OOP', 'Data Structures'],
            image: etect,
        },
        {
            id: 3,
            title: 'Microsoft Office Instructor',
            issuer: 'AddBook Training',
            date: '2025-2026',
            icon: '📚',
            color: 'from-green-500 to-teal-500',
            description: 'Taught Microsoft Office fundamentals to students.',
            skills: ['Teamwork', 'Communication'],
            image: work,
        },
    ];

    const boxVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1, y: 0, transition: {
                duration: 0.3,
                delay: index * 0.2
            }
        })
    };

    return (
        <div id="Certificate" className="bg-[#07101d] min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                {/* Back to Home Button */}
                <div className="mb-6">
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#00d2ff] bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                    >
                        <span>←</span> Back to Home
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    className="text-center mb-8"
                >
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/50 to-white bg-clip-text text-transparent mb-1">
                        Certificates
                    </h2>
                    <div className="w-30 h-1 bg-gradient-to-r from-white/50 to-black/40 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-2xl max-w-7xl mx-auto"
                >
                    {projectBackend.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={boxVariant}
                            custom={index}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="bg-white/10 rounded-lg backdrop-blur-md border-2 border-white/20 h-full flex flex-col justify-between">
                                <div>
                                    <div className="relative overflow-hidden group h-48 cursor-pointer" onClick={() => setSelectedCert(item)}>
                                        {/* បង្ហាញរូបភាព Certificate លើ Card */}
                                        <img src={item.image} alt={item.title} className="rounded-t-lg object-cover w-full h-full group-hover:scale-110 duration-500" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-lg">ចុចដើម្បីមើលពេញ</span>
                                        </div>
                                    </div>
                                    <div className="my-5 px-5 space-y-1">
                                        <h1 className="text-blue-500 text-xl font-medium">{item.title}</h1>
                                        <h2 className="text-white/50 mb-2 text-sm">{item.issuer} • {item.date}</h2>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4 pt-2">
                                            {item.skills?.map((skill, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-100">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="pb-4 px-4 mt-auto">
                                    <button 
                                        onClick={() => setSelectedCert(item)}
                                        className="bg-blue-500/50 hover:bg-blue-500 duration-500 backdrop-blur-2xl w-full py-2 cursor-pointer rounded-lg text-white font-medium"
                                    >
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal Section */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedCert(null)} // ចុចផ្ទៃខាងក្រៅដើម្បីបិទ
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#0f172a] border border-white/20 p-4 md:p-6 rounded-2xl w-full max-w-4xl relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // ការពារកុំឲ្យបិទនៅពេលចុចចំ Modal
                        >
                            {/* ប៊ូតុងបិទ (X) */}
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 cursor-pointer right-4 bg-white/10 hover:bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col items-center">
                                {/* រូបភាព Certificate ធំ */}
                                <img 
                                    src={selectedCert.image} 
                                    alt={selectedCert.title} 
                                    className="w-full max-h-[60vh] object-contain rounded-lg shadow-lg bg-black/20"
                                />

                                <div className="mt-6 text-center w-full">
                                    <h2 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h2>
                                    <p className="text-white/60 mb-1">{selectedCert.issuer}</p>

                                    {/* ប៊ូតុង Download */}
                                    <div className="flex justify-center gap-4">
                                        <a 
                                            href={selectedCert.image} 
                                            download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.jpg`}
                                            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Save & Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CertificatePage;