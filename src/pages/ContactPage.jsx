import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const CONTACT_LINKS = [
    {
        id: "email",
        label: "Email",
        value: "leabsamchhay993@gmail.com",
        href: "mailto:leabsamchhay993@gmail.com",
        icon: "📧",
        accent: "from-blue-500 to-cyan-400",
        wide: true,
    },
    {
        id: "phone",
        label: "Phone",
        value: "0884461539",
        href: "tel:+855884461539",
        icon: "📱",
        accent: "from-emerald-400 to-teal-500",
    },
    {
        id: "github",
        label: "GitHub",
        value: "leab-samchhay",
        href: "https://github.com/leab-samchhay",
        icon: "🐙",
        accent: "from-purple-500 to-pink-500",
        external: true,
    },
];

const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder-white/30 transition-all duration-300 focus:border-blue-400/60 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30";

const ContactPage = () => {
    const reduceMotion = useReducedMotion();

    // បង្កើត State សម្រាប់ផ្ទុកទិន្នន័យ Form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // អនុគមន៍សម្រាប់ចាប់យកទិន្នន័យពេលវាយបញ្ចូល
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // អនុគមន៍សម្រាប់ផ្ញើសារទៅ Telegram
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // ⚠️ សូមផ្លាស់ប្តូរ Token និង Chat ID ខាងក្រោមនេះជារបស់អ្នក
        const BOT_TOKEN = "8928717094:AAHHONBmdH_Dmqit0cJjDxe2W-bGcqu0F6U"; 
        const CHAT_ID = "5659154049";
        
        // ទម្រង់សារដែលនឹងត្រូវផ្ញើចូល Telegram
        const textMessage = `📬 <b>New Message from Portfolio</b>\n\n👤 <b>Name:</b> ${formData.name}\n📧 <b>Email:</b> ${formData.email}\n💬 <b>Message:</b>\n${formData.message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: textMessage,
                    parse_mode: "HTML", // អនុញ្ញាតឱ្យប្រើ Bold, Italic ក្នុងសារ
                }),
            });

            if (response.ok) {
                alert("សាររបស់អ្នកត្រូវបានផ្ញើជោគជ័យ! 🎉");
                setFormData({ name: "", email: "", message: "" }); // សម្អាត Form វិញ
            } else {
                alert("មានបញ្ហាក្នុងការផ្ញើសារ សូមព្យាយាមម្តងទៀត។ ❌");
            }
        } catch (error) {
            console.error("Error sending message to Telegram:", error);
            alert("មានបញ្ហាបណ្តាញ មិនអាចផ្ញើសារបានទេ។ ❌");
        } finally {
            setIsSubmitting(false);
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.12, ease: "easeOut" },
        }),
    };

    return (
        <section
            id="Contact"
            className="relative overflow-hidden bg-[#07101d] px-4 py-16 text-neutral-200 sm:px-6 sm:py-20 lg:px-8"
        >
            {/* ពន្លឺផ្ទៃខាងក្រោយ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-96 sm:w-96"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : -30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mb-10 text-center sm:mb-14"
                >
                    <h2 className="bg-gradient-to-r from-white/60 via-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                        Contact Me
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
                    <p className="mx-auto mt-4 max-w-xl text-sm text-white/50 sm:text-base">
                        Have a project or an opportunity in mind? Send me a message and I will get back to you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
                    {/* Contact info */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {CONTACT_LINKS.map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariant}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`group relative ${item.wide ? "sm:col-span-2" : ""}`}
                            >
                                <div
                                    aria-hidden="true"
                                    className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50`}
                                />
                                <a
                                    href={item.href}
                                    {...(item.external
                                        ? { target: "_blank", rel: "noopener noreferrer" }
                                        : {})}
                                    className={`relative flex h-full items-center gap-4 rounded-3xl border border-white/10 bg-[#0b1626] p-5 transition-transform duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 group-hover:-translate-y-1 sm:p-6 ${
                                        item.wide ? "" : "flex-col text-center sm:flex-row sm:text-left lg:flex-col lg:text-center xl:flex-row xl:text-left"
                                    }`}
                                >
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-2xl shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <span aria-hidden="true">{item.icon}</span>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm text-white/50">{item.label}</p>
                                        <p className="break-all text-base font-medium text-white sm:text-lg">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="relative"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 opacity-20 blur-md"
                        />
                        {/* បន្ថែម onSubmit function ទៅកាន់ form */}
                        <form
                            onSubmit={handleSubmit}
                            className="relative flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#0b1626] p-6 sm:p-8"
                        >
                            <h3 className="text-xl font-semibold text-white sm:text-2xl">
                                Send a Message
                            </h3>

                            <div>
                                <label htmlFor="name" className="mb-2 ml-1 block text-sm text-white/60">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 ml-1 block text-sm text-white/60">
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    placeholder="john@example.com"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 ml-1 block text-sm text-white/60">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can I help you?"
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            <motion.button
                                whileHover={reduceMotion || isSubmitting ? undefined : { scale: 1.02 }}
                                whileTap={reduceMotion || isSubmitting ? undefined : { scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 px-5 py-3.5 font-semibold text-white shadow-lg shadow-black/30 transition-all duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting && (
                                    <svg
                                        className="h-4 w-4 animate-spin"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        />
                                    </svg>
                                )}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;