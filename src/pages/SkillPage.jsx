
import { useState } from 'react';
import { motion } from 'framer-motion';

// ១. ទិន្នន័យគំរូ (Mock Data) សម្រាប់ធ្វើតេស្ត
const skillsData = {
    frontend: [
        { id: 1, name: 'HTML & CSS', person: 85 },
        { id: 2, name: 'JavaScrip', person: 60 },
        { id: 3, name: 'React JS', person: 85 },
        { id: 4, name: 'Tailwind CSS', person: 80 },
        
    ],
    backend: [
        { id: 5, name: 'PHP', person: 70 },
        { id: 6, name: 'Laravel', person: 80 },
        { id: 7, name: 'C#/ASP.NET', person: 55 },
        { id: 8, name: 'MySql', person: 80 },
    ],
    tool: [
        { id: 9, name: 'Git/GitHub', person: 70 },
        { id: 10, name: 'Visual Studio Code', person: 80 },
        { id: 11, name: 'Responsive Design', person: 70 },
    ],
};

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // ធ្វើឲ្យលោតផុសចេញមកម្តងមួយៗ
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <div className=" bg-[#07101d] p-5 md:p-10 items-center justify-center">
            <motion.div
                initial = {{opacity:0, y: -100}}
                whileInView={{opacity:1, y:0, transition : {duration : 1}}}
                viewport={{once : false , amount: 0.3}}
                className='my-9 text-center'
            >
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/50 to-white bg-clip-text text-transparent mb-1">
                    Technical Skills
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-white/50 to-black/40 mx-auto rounded-full" />

            </motion.div>

            <div className="w-full">
            
                <div className="flex gap-4 mb-10 justify-center">
                    <button
                        onClick={() => setActiveCategory('frontend')}
                        className={`px-4 md:px-6 py-2 cursor-pointer rounded-sm md:rounded-full font-semibold transition-colors ${
                        activeCategory === 'frontend' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                    >
                        Frontend Skills
                    </button>
                    <button
                        onClick={() => setActiveCategory('backend')}
                        className={`px-4 md:px-6 py-2 cursor-pointer rounded-sm md:rounded-full font-semibold transition-colors ${
                        activeCategory === 'backend' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                    >
                        Backend Skills
                    </button>
                    <button
                        onClick={() => setActiveCategory('tool')}
                        className={`px-4 md:px-15 cursor-pointer py-2 rounded-sm md:rounded-full font-semibold transition-colors ${
                        activeCategory === 'tool' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-800  text-slate-400 hover:text-white'
                        }`}
                    >
                        Tool
                    </button>
                </div>

                <motion.div
                    key={activeCategory} 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex-col gap-6 w-full"
                >
                        
                    {skillsData[activeCategory].map((item) => (
                        <motion.div key={item.id} variants={itemVariants} className="w-full">
                            <div className="flex justify-between items-end mb-2">
                                <h1 className="text-white/90 font-semibold text-lg tracking-wide">{item.name}</h1>
                                <h1 className="text-blue-400 font-bold text-lg">{item.person}%</h1>
                            </div>

                            <div className="relative w-full h-2.5 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                                    initial={{ width: '0%' }}
                                    whileInView={{ width: `${item.person}%` }} // រត់ភាគរយពេល Scroll មកដល់
                                    viewport={{ once: false }}
                                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default SkillsSection;
