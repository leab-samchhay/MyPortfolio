import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
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

    return (
        <div id="Contact" className="min-h-screen bg-[#07101d] overflow-hidden text-neutral-200 py-20 px-4 sm:px-6 font-sans flex items-center justify-center">
            <div className="w-full mx-auto">
                
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/50 to-white bg-clip-text text-transparent mb-4">
                        Contact Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-neutral-900 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mx-2 md:mx-10">
                    
                    {/* Left Column: Contact Info (រក្សាទុកដូចដើម) */}
                    <div className="flex flex-col gap-6">
                        <motion.div 
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <a 
                                href="mailto:leabsamchhay993@gmail.com"
                                rel="noreferrer"
                                className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 p-8 w-full rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-3xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                    📧
                                </div>
                                <div className="flex flex-col justify-center sm:mt-2">
                                    <p className="text-sm text-neutral-400 mb-1">Email</p>
                                    <p className="text-lg sm:text-xl font-medium text-white break-all">leabsamchhay993@gmail.com</p>
                                </div>
                            </a>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            >
                                <a 
                                    href="tel:+855884461539"
                                    rel="noreferrer"
                                    className="group flex flex-col items-center justify-center gap-4 p-8 h-full rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
                                >
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                        📱
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400 mb-1">Phone</p>
                                        <p className="text-lg font-medium text-white">0884461539</p>
                                    </div>
                                </a>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <a 
                                    href="https://github.com/leab-samchhay"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col items-center justify-center gap-4 p-8 h-full rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
                                >
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                        🐙
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400 mb-1">GitHub</p>
                                        <p className="text-lg font-medium text-white">leab-samchhay</p>
                                    </div>
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* បន្ថែម onSubmit function ទៅកាន់ form */}
                        <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col gap-6">
                            <h2 className="text-2xl font-semibold text-white mb-2">Send a Message</h2>
                            
                            <div>
                                <label className="block text-sm text-neutral-400 mb-2 ml-1">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm text-neutral-400 mb-2 ml-1">Your Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm text-neutral-400 mb-2 ml-1">Message</label>
                                <textarea 
                                    rows="4" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can I help you?" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                                ></textarea>
                            </div>
                            
                            {/* ប្តូរ type="button" ទៅជា type="submit" */}
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                disabled={isSubmitting}
                                className={`mt-2 w-full cursor-pointer bg-white text-neutral-950 font-bold rounded-2xl px-5 py-4 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-neutral-200'}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                    
                </div>
            </div>
        </div>
    );
}

export default ContactPage;