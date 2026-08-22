// import { useEffect, useRef, useState } from "react";

// const EDUCATION_INFO = [
//     { icon: "🎓", text: "(2012 - 2018) : Finished Primary school at Srah Kak Koh Primary school." },
//     { icon: "🎓", text: "(2018 - 2024) : Studied at Hun Sen Sandek High school and completed Bacc II successfully at Hun Sen Sandek High school." },
//     { icon: "🎓", text: "(2024 - Present) : I am studying at Build Bright University." },
//     { icon: "💼", text: "6 Month : Taught Microsoft Office applications including Microsoft Word, Excel, PowerPoint" },
// ];

// const AboutPage = () => {

//     // Refs for animation
//     const headerRef = useRef(null);
//     const introRef = useRef(null);
//     const infoItemsRef = useRef([]);

//     const [animated, setAnimated] = useState({
//         header: false,
//         intro: false,
//         info: [],
//     });

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         // Animate header
//                         if (entry.target === headerRef.current) {
//                             setAnimated((prev) => ({ ...prev, header: true }));
//                         }
                        
//                         // Animate intro text
//                         if (entry.target === introRef.current) {
//                             setAnimated((prev) => ({ ...prev, intro: true }));
//                         }

//                         // Animate info items
//                         if (entry.target.classList.contains('info-item')) {
//                             const index = infoItemsRef.current.indexOf(entry.target);
//                             if (index !== -1) {
//                                 setAnimated((prev) => ({
//                                     ...prev,
//                                     info: [...prev.info, index]
//                                 }));
//                             }
//                         }
//                     }
//                 });
//             },
//             {
//                 threshold: 0.2,
//                 rootMargin: "0px 0px -50px 0px",
//             }
//         );

//         // Observe elements
//         if (headerRef.current) observer.observe(headerRef.current);
//         if (introRef.current) observer.observe(introRef.current);
//         infoItemsRef.current.forEach((item) => {
//             if (item) observer.observe(item);
//         });

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section
//             className="py-20 px-4 transition-colors duration-300 bg-[#07101d]"
//         >
//             <div className="max-w-4xl flex gap-4 mx-auto">
                

//                 <div className="space-y-10">
//                     <div className='rounded-2xl p-8  shadow-xl border bg-white/5 backdrop-blur-md border-2 border-white/10'>
//                         <h3 className='text-2xl font-bold mb-8 text-center gap-2 text-blue-500'>
//                             📚 Education & Background
//                         </h3>
                        
//                         <div className="space-y-4">
//                             {EDUCATION_INFO.map((item, i) => (
//                                 <div
//                                     key={i}
//                                     ref={(el) => (infoItemsRef.current[i] = el)}
//                                     className={`info-item flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-md border-2 border-blue-800  hover:shadow-md hover:-translate-y-1 transition-all duration-500 transform ${
//                                         animated.info.includes(i)
//                                             ? "opacity-100 translate-x-0"
//                                             : "opacity-0 -translate-x-10"
//                                     }`}
//                                     style={{ transitionDelay: `${i * 150}ms` }}
//                                 >
//                                     <span className="text-3xl mt-1">{item.icon}</span>
//                                     <p className='text-lg leading-relaxed text-white'>
//                                         {item.text}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>

//                 <div>
//                     <header
//                         ref={headerRef}
//                         className={`text-center mb-16 transition-all duration-700 transform ${
//                             animated.header
//                                 ? "opacity-100 translate-y-0"
//                                 : "opacity-0 translate-y-10"
//                         }`}
//                     >
//                         <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
//                             About Me
//                         </h2>
//                         <div className="w-60 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
                        
//                     </header>

//                     {/* Introduction Section */}
//                     <div
//                         ref={introRef}
//                         className={`rounded-2xl p-8 bg-white/5 backdrop-blur-md border-2 border-blue-800 shadow-lg transition-all duration-700 delay-200 transform ${
//                             animated.intro
//                                 ? "opacity-100 translate-y-0"
//                                 : "opacity-0 translate-y-10"
//                         }`}
//                     >
//                         <p className={`text-lg leading-relaxed text-center font-medium text-blue-600 dark:text-blue-400`}>
//                             I am currently a third-year student at Build Bright University, majoring in Information Technology and specializing in Programming. I am seeking an opportunity to apply my technical skills and knowledge to contribute to the development of innovative software solutions.
//                         </p>
//                     </div>
//                 </div>


//             </div>
//         </section>
//     );
// };

// export default AboutPage;

import { motion } from "framer-motion";

// ទាញទិន្នន័យមកខាងក្រៅ ដើម្បីបង្កើន Performance (ជៀសវាង Re-rendering)
const EDUCATION_INFO = [
    { icon: "🎓", text: "(2018 - 2024) : Studied and completed Bacc II successfully at Hun Sen Sandek High school." },
    { icon: "🎓", text: "(2024 - Present) : I am studying at Build Bright University." },
    { icon: "💼", text: "6 Months : Taught Microsoft Office applications including Word, Excel, and PowerPoint at Add book computer center." },
];

const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1, 
        y: 0, 
        transition: {
            duration: 0.25,
            delay: index * 0.2 
        }
    })
};

const AboutPage = () => {
    return (
        <div id="About" className="grid grid-cols-1 md:grid-cols-2 p-10 gap-7 bg-[#07101d] ">
            <div className=" text-center ">
                <div className="space-y-4">
                    <motion.div
                        initial = {{opacity:0, y: -100}}
                        whileInView={{opacity:1, y:0, transition : {duration : 1}}}
                        viewport={{once : false , amount: 0.3}}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/50 to-white bg-clip-text text-transparent mb-1">
                            About Me
                        </h2>
                        <div className="w-30 h-1 bg-gradient-to-r from-white/50 to-black/40 mx-auto rounded-full" />

                    </motion.div>
                    <motion.div
                        initial = {{opacity:0 , x:-200}}
                        whileInView={{opacity:1 , x:0 , transition:{duration: 1}}}
                        viewport={{once: false , amount: 0.3}}
                    >
                        <div className="w-full md:h-99 lg:h-79 text-3xl font-bold bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg">
                            <p className={`text-lg leading-relaxed text-center font-medium text-white p-4 dark:text-blue-400`}>
                            I am currently a third-year student at Build Bright University, majoring in Information Technology and specializing in Programming. I am seeking an opportunity to apply my technical skills and knowledge to contribute to the development of innovative software solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full overflow-hidden "
            >
                <motion.div
                    initial = {{opacity:0, x: 200}}
                    whileInView={{opacity:1, x:0, transition : {duration : 1}}}
                    viewport={{once : false , amount: 0.3}}
                    className="text-center mb-4"
                >
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/50 to-white bg-clip-text text-transparent mb-1">
                        Education & Background
                    </h2>
                    <div className="w-70 h-1 bg-gradient-to-r from-white/50 to-black/40 mx-auto rounded-full" />

                </motion.div>
                <div className="grid grid-cols-1 gap-6">
                    {EDUCATION_INFO.map((item, index) => (
                        <motion.div
                            key={index} 
                            variants={boxVariants}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex gap-4  items-center bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-lg shadow-sm"
                        >
                            <div className="text-3xl">
                                {item.icon}
                            </div>
                            <div className="text-xl leading-relaxed text-white">
                                {item.text}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            
            
        </div>
    );
}

export default AboutPage;