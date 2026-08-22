import { motion } from "framer-motion"
import ASP from "../assets/ASP.png"
const Project = () => {
    const projectFrontend = [
        {
            id: 1,
            title: 'Static Shoes E-Commerce Website',
            description: 'Frontend show product (Shoes) for sale.',
            tech: ['HTML', 'Tailwind', 'Javascript'],
            demo: "https://nike-shoes-bice.vercel.app/",  
            category: 'frontend',
            image: 'https://i.pinimg.com/1200x/ed/58/f8/ed58f8d2f741c6d3aa4725996ebebad1.jpg',
        },
        {
            id: 2,
            title: 'E-Commerce Static Website',
            description: 'Frontend show product (Clothes) for sale.',
            tech: ['HTML', 'Tailwind', 'Javascript'],
            demo: "https://leab-samchhay.github.io/E-commerce-website-sale-clothes/",  
            category: 'frontend',
            image: 'https://i.pinimg.com/1200x/1f/16/c6/1f16c64605f86bc33bdeec5f934dc24a.jpg',
        },
        {
            id: 3,
            title: 'E-Commerce Static Website',
            description: 'Frontend show product (Phone and Computer ) for sale.',
            tech: ['HTML', 'Tailwind', 'Reactjs'],
            demo: "https://tesreact-kappa.vercel.app/",
            category: 'frontend',
            image: 'https://i.pinimg.com/736x/59/3d/a9/593da92a18d6b617bf6e556debbff061.jpg',
        },
        {
            id: 4,
            title: 'E-Commerce Static Website',
            description: 'Frontend show product ( Food ) for sale.',
            tech: ['HTML', 'Tailwind', 'Reactjs'],
            demo: "https://restaurant-sandy-seven.vercel.app/",
            category: 'frontend',
            image: 'https://i.pinimg.com/1200x/85/ce/e1/85cee14750e778f55332467dfa307f58.jpg',
        },
        
    ]

    const projectBackend = [
        {
            id: 1,
            title: 'E-Commerce System',
            description: 'E-commerce System built using HTML, Bootstrap, JavaScript, Laravel, and MySQL. The system includes: Dashboard, Product Management, Sales Management',
            tech: ['HTML', 'bootsrap', 'Javascript','laravel','mysql'],
            demo: "https://github.com/leab-samchhay/TeamProject",  
            category: 'Backend',
            image: 'https://i.pinimg.com/1200x/db/80/35/db80351a523c9bc70a57c9145e7d9b6d.jpg'
        },
        {
            id: 2,
            title: 'Academic Project Build API + React.js',
            description: '•	Collaborated with a university instructor to create an Apartment Management System using ASP.NET (C#), React.js, and Oracle Database.',
            tech: ['React.js', 'ASP.NET', 'Oracle Database'],
            demo: "https://github.com/leab-samchhay/Apartment",  
            category: 'Backend',
            image: ASP
        },
        
    ]

    const boxVariant = {
        hidden : { opacity : 0, y: 50 },
        visible: (index) =>({
            opacity: 1 , y:0, transition : {
                duration : 0.3 ,
                delay : index * 0.2
            }
        })
    }

    return (

        <div id="Projects" className=" bg-[#07101d] p-10 space-y-16">
            <div>
                <motion.div
                    initial = {{opacity:0, y: -100}}
                    whileInView={{opacity:1, y:0, transition : {duration : 1}}}
                    viewport={{once : false , amount: 0.5}}
                    className="text-center mb-8"
                >
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/50 to-white bg-clip-text text-transparent mb-1">
                        Project Frontend
                    </h2>
                    <div className="w-46 h-1 bg-gradient-to-r from-white/50 to-black/40 mx-auto rounded-full" />

                </motion.div>

                <motion.div
                    initial = {{opacity : 0 , y: 200 }}
                    animate = {{opacity : 1 , y: 1 , transition : {duration : 0.25}}}
                    className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl"
                >
                    {projectFrontend.map((item,index) => (
                        <motion.div
                            key={index}
                            initial = "hidden"
                            whileInView="visible"
                            variants={boxVariant}
                            custom={index}
                            viewport={{once: true , amount: 0.5}}
                            
                        >
                            <div className="bg-white/10 rounded-lg backdrop-blur-md cursor-pointer border-2 border-white/20 h-full flex flex-col">
                                <div className="relative overflow-hidden group h-50 shrink-0">
                                    <img src={item.image} alt="Project"  className="rounded-t-lg w-full h-full object-cover group-hover:scale-110 duration-400"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="my-5 px-5 space-y-2 flex-1">
                                    <h1 className="text-blue-500 text-xl font-medium">{item.title}</h1>
                                    <p className="text-white/50 text-sm">{item.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {item.tech?.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4 mx-4 mt-auto">
                                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className="block">
                                        <button className="bg-blue-500/50 hover:bg-blue-500 transition-colors duration-500 backdrop-blur-2xl w-full py-2 cursor-pointer rounded-lg text-white font-medium">
                                            Live Demo
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div>
                <motion.div
                    initial = {{opacity:0, y: -100}}
                    whileInView={{opacity:1, y:0, transition : {duration : 1}}}
                    viewport={{once : false , amount: 0.5}}
                    className="text-center mb-8"
                >
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/50 to-white bg-clip-text text-transparent mb-1">
                        Project Backend
                    </h2>
                    <div className="w-46 h-1 bg-gradient-to-r from-white/50 to-black/40 mx-auto rounded-full" />

                </motion.div>

                <motion.div
                    initial = {{opacity : 0 , y: 200 }}
                    animate = {{opacity : 1 , y: 1 , transition : {duration : 2}}}
                    className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl"
                >
                    {projectBackend.map((item,index) => (
                        <motion.div
                            key={index}
                            initial = "hidden"
                            whileInView="visible"
                            variants={boxVariant}
                            custom={index}
                            viewport={{once: true , amount: 0.5}}
                            
                        >
                            <div className="bg-white/10 rounded-lg backdrop-blur-md cursor-pointer border-2 border-white/20 h-full flex flex-col">
                                <div className="relative overflow-hidden group h-50 shrink-0">
                                    <img src={item.image} alt="Project"  className="rounded-t-lg w-full h-full object-cover group-hover:scale-110 duration-400"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="my-5 px-5 space-y-2 flex-1">
                                    <h1 className="text-blue-500 text-xl font-medium">{item.title}</h1>
                                    <p className="text-white/50 text-sm">{item.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {item.tech?.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4 mx-4 mt-auto">
                                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className="block">
                                        <button className="bg-blue-500/50 hover:bg-blue-500 transition-colors duration-500 backdrop-blur-2xl w-full py-2 cursor-pointer rounded-lg text-white font-medium">
                                            Live Demo
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Project