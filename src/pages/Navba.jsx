import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'framer-motion';

const Navba = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const reduceMotion = useReducedMotion();
    const [activeMenu, setActiveMenu] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // ម៉ឺនុយលើទូរស័ព្ទ
    const navItems = ['Home', 'About', 'Projects', 'Contact', 'Certificate'];

    // របារវឌ្ឍនភាព Scroll នៅខាងក្រោម Navbar
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ចុច Esc ដើម្បីបិទម៉ឺនុយលើទូរស័ព្ទ
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);

    // ពិនិត្យផ្លូវ URL ដើម្បី Update Active Menu និង Scroll ទៅកាន់ផ្នែកដែលបានជ្រើសរើស
    useEffect(() => {
        if (location.pathname === '/certificate' || location.pathname === '/certificates') {
            setActiveMenu('Certificate');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (location.pathname === '/') {
            if (location.state?.scrollTo) {
                const targetId = location.state.scrollTo;
                setActiveMenu(targetId);
                setTimeout(() => {
                    if (targetId === 'Home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                setActiveMenu('Home');
            }
        }
    }, [location]);

    const handleMenuClick = (item) => {
        setActiveMenu(item);
        setIsOpen(false);

        if (item === 'Certificate') {
            if (location.pathname !== '/certificate') {
                navigate('/certificate');
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            // ប្រសិនបើកំពុងនៅទំព័រ Certificate ហើយចង់ត្រឡប់ទៅផ្នែកផ្សេងនៅ HomePage
            if (location.pathname !== '/') {
                navigate('/', { state: { scrollTo: item } });
            } else {
                if (item === 'Home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const handleLogoClick = () => {
        setActiveMenu('Home');
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
                isScrolled || isOpen
                    ? 'border-white/10 bg-[#07101d]/70 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl'
                    : 'border-transparent bg-[#07101d]'
            }`}
        >
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-12">
                {/* Logo */}
                <button
                    type="button"
                    onClick={handleLogoClick}
                    aria-label="Go to home"
                    className="rounded-lg text-lg font-bold text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] sm:text-xl md:text-2xl"
                >
                    <span className="bg-gradient-to-r from-[#00d2ff] to-blue-500 bg-clip-text text-transparent">
                        Leab
                    </span>{' '}
                    Samchhay
                </button>

                {/* Desktop links */}
                <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md md:flex">
                    {navItems.map((item) => {
                        const isActive = activeMenu === item;
                        return (
                            <li key={item}>
                                <button
                                    type="button"
                                    onClick={() => handleMenuClick(item)}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`relative rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] lg:px-5 lg:text-base ${
                                        isActive ? 'text-[#07101d]' : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            transition={
                                                reduceMotion
                                                    ? { duration: 0 }
                                                    : { type: 'spring', stiffness: 400, damping: 32 }
                                            }
                                            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d2ff] to-blue-400 shadow-[0_0_20px_rgba(0,210,255,0.35)]"
                                        />
                                    )}
                                    <span className="relative">{item}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Hamburger (ទូរស័ព្ទ) */}
                <button
                    type="button"
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                        className="overflow-hidden md:hidden"
                    >
                        <ul className="flex flex-col gap-1 px-4 pb-4 pt-1 sm:px-6">
                            {navItems.map((item) => {
                                const isActive = activeMenu === item;
                                return (
                                    <li key={item}>
                                        <button
                                            type="button"
                                            onClick={() => handleMenuClick(item)}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] ${
                                                isActive
                                                    ? 'bg-gradient-to-r from-[#00d2ff] to-blue-400 text-[#07101d]'
                                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            }`}
                                        >
                                            {item}
                                            {isActive && (
                                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#07101d]" />
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* របារវឌ្ឍនភាព Scroll */}
            <motion.div
                aria-hidden="true"
                style={{ scaleX: progress }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#00d2ff] via-blue-500 to-purple-500"
            />
        </nav>
    );
};

export default Navba;