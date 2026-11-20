import profile from '../assets/profile.png';
import { FaTelegram, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion, useReducedMotion } from 'framer-motion';

const SOCIALS = [
    { label: 'Telegram', href: 'http://t.me/Chhay027', icon: <FaTelegram className="text-xl" /> },
    { label: 'GitHub', href: 'https://github.com/leab-samchhay', icon: <FaGithub className="text-xl" /> },
];

const HeroSlice = () => {
    const reduceMotion = useReducedMotion();

    // ចលនាចូលតែមួយលើកពេលទំព័រផ្ទុក: រូបភាពមកមុន រួចអក្សរចេញមកម្តងមួយៗ
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section
            id="Home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07101d] px-4 pb-16 pt-28 font-sans sm:px-6 md:px-10 md:pt-24 lg:px-12"
        >
            {/* ពន្លឺផ្ទៃខាងក្រោយ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#00d2ff]/15 blur-3xl sm:h-96 sm:w-96"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-purple-600/15 blur-3xl sm:h-96 sm:w-96"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative flex w-full max-w-6xl flex-col items-center justify-between gap-12 md:flex-row md:gap-16 lg:gap-20"
            >
                {/* --- Left Column: Image & Glowing Blob --- */}
                <motion.div
                    variants={itemVariants}
                    className="relative h-64 w-64 flex-shrink-0 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[400px] lg:w-[400px]"
                >
                    {/* ជុំវិញវិល (Rotating ring) */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-5 z-0 animate-[spin_12s_linear_infinite_reverse] rounded-[50%_50%_40%_60%/60%_40%_60%_40%] border-2 border-dashed border-white/20 motion-reduce:animate-none sm:-inset-6"
                    />
                    {/* ពន្លឺ gradient ក្រោយរូប */}
                    <div
                        aria-hidden="true"
                        className="absolute -inset-1 z-0 rounded-[50%] bg-gradient-to-br from-[#00d2ff] via-blue-500 to-purple-500 opacity-60 blur-2xl"
                    />
                    {/* រូបភាព */}
                    <div className="absolute inset-0 z-10 flex items-end justify-center overflow-hidden rounded-[50%_50%_50%_50%/50%_50%_50%_50%] border-4 border-white/10 bg-gradient-to-br from-[#00d2ff] to-blue-500 shadow-[0_0_80px_rgba(0,210,255,0.35)] transition-all duration-500 hover:rounded-[40%_60%_70%_30%/40%_50%_60%_50%]">
                        <img
                            src={profile}
                            alt="Leab Samchhay"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </motion.div>

                {/* --- Right Column: Text Content --- */}
                <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left">
                    <motion.h1
                        variants={itemVariants}
                        className="koulen-regular text-lg font-bold tracking-wide text-white/80 md:text-xl lg:text-2xl"
                    >
                        សូមស្វាគមន៍មកកាន់ Portfolio របស់ខ្ញុំ
                    </motion.h1>

                    {/* កន្លែងលោតអក្សរ Animation */}
                    <motion.h2
                        variants={itemVariants}
                        className="koulen-regular flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-lg font-bold text-white sm:text-4xl md:justify-start lg:text-5xl"
                    >
                        <span className='text-3xl'>ខ្ញុំបាទឈ្មោះ</span>
                        <span className="min-h-[1.3em] text-[#00d2ff] text-4xl">
                            <TypeAnimation
                                sequence={[
                                    'លាប សំឆាយ', // វាយអក្សរនេះ
                                    2000,        // ផ្អាក 2 វិនាទី
                                    '',          // លុបអក្សរវិញ (Erase the text)
                                    1000,        // ផ្អាក 1 វិនាទី មុននឹងវាយម្តងទៀត
                                ]}
                                wrapper="span"
                                speed={50} // ល្បឿនវាយអក្សរ
                                repeat={Infinity} // ឲ្យវាលោតជារង្វង់រហូត
                                cursor={true} // បង្ហាញសញ្ញារបារលោតៗ (|)
                            />
                        </span>
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="khmer-regular mt-1 max-w-xl space-y-3 text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg"
                    >
                        <p>
                            ខ្ញុំបាទឈ្មោះ លាប សំឆាយ ជានិស្សិតឆ្នាំទី ៣ នៃសាកលវិទ្យាល័យ បៀលប្រាយ និង ធ្លាប់ធ្វើគ្រូបង្រៀនកុំព្យូទ័រ នៅមជ្ឈមណ្ឌល AddBook Computer Center ។
                        </p>
                        <p>
                            ហើយក្ដីស្រមៃរបស់ខ្ញុំគឺចង់ក្លាយជា Full Stack Web Developer មួយរូបដែលមានជំនាញល្អ និងមានសមត្ថភាពក្នុងការអភិវឌ្ឍគេហទំព័របានទាំងមូល។
                        </p>
                    </motion.div>

                    {/* Social */}
                    <motion.div variants={itemVariants} className="mt-2 flex gap-3">
                        {SOCIALS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#00d2ff] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[#00d2ff] hover:text-[#07101d] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
                    >
                        <a
                            href="#Projects"
                            className="rounded-xl bg-gradient-to-r from-[#00d2ff] to-blue-500 px-8 py-3 text-center text-sm font-bold text-[#07101d] shadow-[0_0_20px_rgba(0,210,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.98] md:text-base"
                        >
                            My project
                        </a>
                        <a
                            href="#Contact"
                            className="rounded-xl border border-[#00d2ff]/60 bg-white/5 px-8 py-3 text-center text-sm font-bold text-[#00d2ff] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00d2ff]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.98] md:text-base"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSlice;