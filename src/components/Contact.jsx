// components/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Contact = () => {
  const { getBgClass, getTextClass, getSecondaryTextClass, getCardBgClass, isDarkMode } = useGlobalContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Refs for animation
  const headerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const contactInfoRefs = useRef([]);

  const [animated, setAnimated] = useState({
    header: false,
    left: false,
    right: false,
    contactInfo: []
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            if (entry.target === headerRef.current) {
              setAnimated((prev) => ({ ...prev, header: true }));
            }
            
            // Animate left content
            if (entry.target === leftContentRef.current) {
              setAnimated((prev) => ({ ...prev, left: true }));
            }
            
            // Animate right content
            if (entry.target === rightContentRef.current) {
              setAnimated((prev) => ({ ...prev, right: true }));
            }

            // Animate contact info items
            if (entry.target.classList.contains('contact-info-item')) {
              const index = contactInfoRefs.current.indexOf(entry.target);
              if (index !== -1) {
                setAnimated((prev) => ({
                  ...prev,
                  contactInfo: [...prev.contactInfo, index]
                }));
              }
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe left content
    if (leftContentRef.current) {
      observer.observe(leftContentRef.current);
    }

    // Observe right content
    if (rightContentRef.current) {
      observer.observe(rightContentRef.current);
    }

    // Observe contact info items
    contactInfoRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'leabsamchhay993@gmail.com', action: 'mailto:leabsamchhay993@gmail.com' },
    { icon: '📱', label: 'Phone', value: '0884461539', action: 'tel:+855884461539' },
    { icon: '🐙', label: 'GitHub', value: 'YourGitHubUsername', action: 'https://github.com/leab-samchhay' }, 
  ];

  const getInputClass = () => {
    return isDarkMode
      ? 'w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition'
      : 'w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition';
  };

  return (
    <section id="contact" className={`py-20 px-4 transition-colors duration-300 ${getBgClass()}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header with animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 transform ${
            animated.header
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className={`mt-4 ${getSecondaryTextClass()}`}>
            Have a project in mind? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column with animation */}
          <div 
            ref={leftContentRef}
            className={`transition-all duration-700 delay-300 transform ${
              animated.left
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${getTextClass()}`}>Let's Talk</h3>
            <p className={`mb-8 ${getSecondaryTextClass()}`}>
              I'm currently available for freelance work and full-time positions. 
              Feel free to reach out if you have any questions or just want to connect!
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  ref={(el) => (contactInfoRefs.current[index] = el)}
                  className={`contact-info-item flex cursor-pointer items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:shadow-md transition-all duration-500 transform ${
                    animated.contactInfo.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-5"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${getTextClass()}`}>{info.label}</h4>
                    {info.action ? (
                      <a href={info.action} className={`hover:text-purple-600 dark:hover:text-purple-400 transition ${getSecondaryTextClass()}`}>
                        {info.value}
                      </a>
                    ) : (
                      <p className={getSecondaryTextClass()}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column (Form) with animation */}
          <div 
            ref={rightContentRef}
            className={`bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-0.5 transition-all duration-700 delay-300 transform ${
              animated.right
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className={`rounded-2xl p-6 ${getCardBgClass()}`}>
              <h3 className={`text-2xl font-bold mb-6 ${getTextClass()}`}>Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={getInputClass()}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={getInputClass()}
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={getInputClass()}
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${getInputClass()} resize-none`}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full cursor-pointer py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                {isSubmitted && (
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-center animate-fade-in">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;