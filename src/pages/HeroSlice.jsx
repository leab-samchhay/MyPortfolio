import profile from '../assets/profile.png';
import { FaTelegram , FaGithub} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HeroSlice = () => {
    return (
        <section id="Home" className="min-h-screen bg-[#07101d] flex justify-center items-center p-6 md:p-12 overflow-hidden font-sans">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
                
                {/* --- Left Column: Image & Glowing Blob --- */}
                <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] flex-shrink-0 mt-10 md:mt-0">
                    <div className="absolute inset-0 bg-[#00d2ff] hover:rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-[0_0_80px_rgba(0,210,255,0.4)] overflow-hidden flex items-end justify-center z-10 transition-all duration-500  rounded-[50%_50%_50%_50%/50%_50%_50%_50%]">
                        <img 
                            src={profile} 
                            alt="Leab Samchhay" 
                            className="w-full h-full object-cover object-center" 
                        />
                    </div>
                    <div className="absolute -inset-6 border-[2px] border-white/20 rounded-[50%_50%_40%_60%/60%_40%_60%_40%] z-0 pointer-events-none animate-[spin_10s_linear_infinite_reverse]" />
                </div>
                
                {/* --- Right Column: Text Content --- */}
                <div className="flex-1 flex flex-col items-center md:items-start text-left gap-4">
                    
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-white tracking-wide koulen-regular ">
                        សូមស្វាគមន៍មកកាន់ Portfolio របស់ខ្ញុំ
                    </h1>
                    
                    {/* 2. កន្លែងលោតអក្សរ Animation */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-1 flex flex-wrap items-center gap-2 koulen-regular ">
                        <span >ខ្ញុំបាទឈ្មោះ</span>
                        <span className="text-[#00d2ff]">
                            <TypeAnimation
                                sequence={[
                                    'លាប សំឆាយ', // វាយអក្សរនេះ
                                    2000,        // ផ្អាក 2 វិនាទី
                                    '',          // លុបអក្សរវិញ (Erase the text)
                                    1000,        // ផ្អាក 1 វិនាទី មុននឹងវាយម្តងទៀត
                                    // 'Web Developer', // 💡 Tip: You can also replace the empty string with a job title!
                                    // 2000
                                ]}
                                wrapper="span"
                                speed={50} // ល្បឿនវាយអក្សរ
                                repeat={Infinity} // ឲ្យវាលោតជារង្វង់រហូត
                                cursor={true} // បង្ហាញសញ្ញារបារលោតៗ (|)
                            />
                        </span>
                    </h2>
                    
                    <p className="text-gray-300 text-xs md:text-sm lg:text-base max-w-lg leading-relaxed mt-2 khmer-regular">
                        ខ្ញុំបាទឈ្មោះ លាប សំឆាយ ជានិស្សិតឆ្នាំទី ៣ នៃសាកលវិទ្យាល័យ បៀលប្រាយ និង ធ្លាប់ធ្វើគ្រូបង្រៀនកុំព្យូទ័រ នៅមជ្ឈមណ្ឌល AddBook Computer Center ។

                        <p>
                            ហើយក្ដីស្រមៃរបស់ខ្ញុំគឺចង់ក្លាយជា Full Stack Web Developer មួយរូបដែលមានជំនាញល្អ និងមានសមត្ថភាពក្នុងការអភិវឌ្ឍគេហទំព័របានទាំងមូល។
                        </p>

                        
                    </p>
                    
                    <div className="flex gap-4 mt-4">
                        <a href="http://t.me/Chhay027" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#00d2ff]/10 flex items-center justify-center rounded transition-all duration-300 hover:-translate-y-1 hover:bg-[#00d2ff] group cursor-pointer">
                            <FaTelegram  className="text-[#00d2ff] text-xl group-hover:text-[#07101d]" />
                        </a>
                        <a href="https://github.com/leab-samchhay" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#00d2ff]/10 flex items-center justify-center rounded transition-all duration-300 hover:-translate-y-1 hover:bg-[#00d2ff] group cursor-pointer">
                            <FaGithub className="text-[#00d2ff] text-xl group-hover:text-[#07101d]" />
                        </a>
                        
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                        <a href="#Projects">
                            <button className="px-8 cursor-pointer py-2.5 rounded bg-[#00d2ff] text-[#07101d] font-bold text-sm md:text-base hover:bg-[#00b4d8] transition-colors duration-300 shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                                My project
                            </button>
                        </a>
                        <a href="#Contact">
                            <button className="px-8 cursor-pointer py-2.5 rounded bg-transparent border-2 border-[#00d2ff] text-[#00d2ff] font-bold text-sm md:text-base hover:bg-[#00d2ff]/10 transition-colors duration-300">
                                Contact Me
                            </button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default HeroSlice;