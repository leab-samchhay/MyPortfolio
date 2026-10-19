import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navba = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);
    const navItems = ['Home', 'About', 'Projects', 'Contact', 'Certificate'];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 py-5 flex justify-around items-center border-b border-transparent ${
            isScrolled 
                ? 'bg-[#07101d]/60 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-white/10' 
                : 'bg-[#07101d]'
        }`}>
            <div className="w-full max-w-7xl px-4 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <div 
                    onClick={handleLogoClick}
                    className="text-sm md:text-2xl font-bold text-white cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                    <span className="text-[#00d2ff]">Leab</span> Samchhay
                </div>

                {/* Navigation Links */}
                <ul className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-16">
                    {navItems.map((item) => (
                        <li 
                            key={item}
                            onClick={() => handleMenuClick(item)}
                            className="relative cursor-pointer group"
                        >
                            {/* អក្សរ Menu */}
                            <span 
                                className={`text-sm sm:text-base md:text-lg font-semibold tracking-wide transition-colors duration-300 ${
                                    activeMenu === item 
                                        ? 'text-[#00d2ff]' 
                                        : 'text-gray-400 hover:text-gray-200' 
                                }`}
                            >
                                {item}
                            </span>

                            {/* បន្ទាត់ Gradient នៅខាងក្រោមអក្សរ (បង្ហាញតែពេល Active ប៉ុណ្ណោះ) */}
                            {activeMenu === item && (
                                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#00d2ff] rounded-full" />
                            )}
                            
                            {/* Hover Effect (លោតបន្ទាត់ព្រាលៗពេលយើងយក Mouse ទៅដាក់លើ Menu ផ្សេង) */}
                            {activeMenu !== item && (
                                <div className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gray-500 rounded-full transition-all duration-300 group-hover:w-full opacity-50" />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navba;