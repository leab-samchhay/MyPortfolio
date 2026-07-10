// components/Certificate.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Certificate = () => {
  const { getBgClass, getTextClass, getSecondaryTextClass, getCardBgClass, isDarkMode } = useGlobalContext();

  // Refs for animation
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const certRefs = useRef([]);
  const viewAllRef = useRef(null);

  const [animated, setAnimated] = useState({
    section: false,
    header: false,
    certificates: [],
    viewAll: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section
            if (entry.target === sectionRef.current) {
              setAnimated((prev) => ({ ...prev, section: true }));
            }

            // Animate header
            if (entry.target === headerRef.current) {
              setAnimated((prev) => ({ ...prev, header: true }));
            }

            // Animate certificate cards
            if (entry.target.classList.contains('cert-card')) {
              const index = certRefs.current.indexOf(entry.target);
              if (index !== -1) {
                setAnimated((prev) => ({
                  ...prev,
                  certificates: [...prev.certificates, index]
                }));
              }
            }

            // Animate view all button
            if (entry.target === viewAllRef.current) {
              setAnimated((prev) => ({ ...prev, viewAll: true }));
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe elements
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    certRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    if (viewAllRef.current) observer.observe(viewAllRef.current);

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      id: 1,
      title: 'Frontend Development',
      issuer: 'Build Bright University',
      date: '2024',
      icon: '💻',
      color: 'from-purple-500 to-pink-500',
      description: 'Completed advanced frontend development course covering React, JavaScript, and responsive design.',
      skills: ['React', 'JavaScript', 'Tailwind CSS'],
      image: 'https://img.freepik.com/free-vector/certificate-template_23-2148870064.jpg',
      credentialId: 'BBU-FE-2024-001'
    },
    {
      id: 2,
      title: 'Web Design Professional',
      issuer: 'Build Bright University',
      date: '2024',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      description: 'Professional certification in web design, UX/UI principles, and modern design patterns.',
      skills: ['Figma', 'UX/UI', 'Design Systems'],
      image: 'https://img.freepik.com/free-vector/modern-certificate-template_23-2148870065.jpg',
      credentialId: 'BBU-WD-2024-002'
    },
    {
      id: 3,
      title: 'Database Management',
      issuer: 'Build Bright University',
      date: '2024',
      icon: '🗄️',
      color: 'from-green-500 to-teal-500',
      description: 'Comprehensive database management certification covering SQL Server, OracleDB, and PostgreSQL.',
      skills: ['SQL Server', 'OracleDB', 'PostgreSQL'],
      image: 'https://img.freepik.com/free-vector/certificate-background-template_23-2148870066.jpg',
      credentialId: 'BBU-DB-2024-003'
    },
    {
      id: 4,
      title: 'Microsoft Office Specialist',
      issuer: 'Microsoft',
      date: '2023',
      icon: '📊',
      color: 'from-orange-500 to-red-500',
      description: 'Certified Microsoft Office Specialist with expertise in Word, Excel, and PowerPoint applications.',
      skills: ['Word', 'Excel', 'PowerPoint'],
      image: 'https://img.freepik.com/free-vector/certificate-template-design_23-2148870067.jpg',
      credentialId: 'MOS-2023-004'
    },
    {
      id: 5,
      title: 'Full Stack Development',
      issuer: 'Build Bright University',
      date: '2024',
      icon: '🚀',
      color: 'from-indigo-500 to-purple-500',
      description: 'Full stack development certification covering frontend and backend technologies for web applications.',
      skills: ['React', 'Node.js', 'MongoDB'],
      image: 'https://img.freepik.com/free-vector/certificate-background_23-2148870068.jpg',
      credentialId: 'BBU-FS-2024-005'
    },
  ];

  return (
    <section 
      id="certificates" 
      ref={sectionRef}
      className={`py-20 px-4 transition-colors duration-300 ${getBgClass()}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-800 transform ${
            animated.header
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Certificates
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full transition-all duration-1000 ${
            animated.header ? "w-20" : "w-0"
          }`} />
          <p className={`mt-4 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            animated.header ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${getSecondaryTextClass()}`}>
            Professional certifications and achievements that reflect my skills and expertise
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              ref={(el) => (certRefs.current[index] = el)}
              className={`cert-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                animated.certificates.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              } ${getCardBgClass()} hover:-translate-y-2 hover:scale-[1.02] group`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Certificate Image */}
              <div className={`h-40 bg-gradient-to-r ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative z-10 text-center text-white">
                  <div className="text-5xl mb-2">{cert.icon}</div>
                  <h4 className="text-lg font-bold">{cert.title}</h4>
                  <p className="text-sm opacity-90">{cert.issuer}</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                  {cert.date}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${getTextClass()}`}>
                      {cert.title}
                    </h3>
                    <p className={`text-sm ${getSecondaryTextClass()}`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className={`text-sm mb-4 leading-relaxed ${getSecondaryTextClass()}`}>
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential ID */}
                <div className={`text-xs ${getSecondaryTextClass()} mb-4 font-mono`}>
                  Credential ID: {cert.credentialId}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Certificate
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          ref={viewAllRef}
          className={`text-center mt-12 transition-all duration-800 delay-500 transform ${
            animated.viewAll
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <button className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group">
            <span className="flex items-center gap-2">
              View All Certificates
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificate;