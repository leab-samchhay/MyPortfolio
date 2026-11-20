import { FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';

const SOCIALS = [
    {
        label: 'GitHub',
        href: 'https://github.com/leab-samchhay',
        icon: <FaGithub className="text-xl" />,
        external: true,
    },
    {
        label: 'Telegram',
        href: 'http://t.me/Chhay027',
        icon: <FaTelegram className="text-xl" />,
        external: true,
    },
    {
        label: 'Email',
        href: 'mailto:leabsamchhay993@gmail.com',
        icon: <FaEnvelope className="text-xl" />,
    },
];

const FooterPage = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative w-full overflow-hidden bg-[#07101d] px-4 pb-8 pt-12 sm:px-6 lg:px-8">
            {/* បន្ទាត់ gradient ខាងលើ */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d2ff]/60 to-transparent"
            />
            {/* ពន្លឺផ្ទៃខាងក្រោយ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[#00d2ff]/10 blur-3xl"
            />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">
                {/* Logo */}
                <div className="text-center">
                    <p className="text-xl font-bold text-white sm:text-2xl">
                        <span className="bg-gradient-to-r from-[#00d2ff] to-blue-500 bg-clip-text text-transparent">
                            Leab
                        </span>{' '}
                        Samchhay
                    </p>
                    <p className="mt-1 text-sm text-white/50">Full Stack Web Developer in the making</p>
                </div>

                {/* Social Contacts */}
                <ul className="flex items-center gap-3">
                    {SOCIALS.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                aria-label={item.label}
                                {...(item.external
                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                    : {})}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-[#00d2ff] hover:to-blue-500 hover:text-[#07101d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
                            >
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Copyright & Tech Stack + Back to top */}
                <div className="flex w-full flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
                    <div className="text-white/50">
                        <p className="text-sm font-medium">
                            © {new Date().getFullYear()} Leab Samchhay. All rights reserved.
                        </p>
                        <p className="mt-1 text-xs text-white/40">Built with React & Tailwind CSS</p>
                    </div>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md transition-colors duration-300 hover:border-[#00d2ff]/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
                    >
                        Back to top
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;