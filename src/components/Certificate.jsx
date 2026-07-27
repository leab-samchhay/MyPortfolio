import { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import certificateBBU from '../assets/bbu.jpg';
import certificateETECT from '../assets/c++.jpg';
import certificateADDBOOK from '../assets/work.jpg';

const Certificate = () => {
  const { getBgClass, getTextClass, getSecondaryTextClass, getCardBgClass, isDarkMode } = useGlobalContext();
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Refs for animation
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const certRefs = useRef([]);
  const viewAllRef = useRef(null);
  const imageRef = useRef(null);

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
            if (entry.target === sectionRef.current) {
              setAnimated((prev) => ({ ...prev, section: true }));
            }
            if (entry.target === headerRef.current) {
              setAnimated((prev) => ({ ...prev, header: true }));
            }
            if (entry.target.classList.contains('cert-card')) {
              const index = certRefs.current.indexOf(entry.target);
              if (index !== -1) {
                setAnimated((prev) => ({
                  ...prev,
                  certificates: [...prev.certificates, index]
                }));
              }
            }
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    certRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    if (viewAllRef.current) observer.observe(viewAllRef.current);

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const certificates = [
    {
      id: 1,
      title: 'Certificate of Outstanding StudentCertificate',
      issuer: 'Build Bright University',
      date: '2024-2025',
      icon: '🎓',
      color: 'from-purple-600 to-blue-500',
      description: '',
      skills: [],
      certificateImage: certificateBBU,
      credentialId: 'BBU-WD-2024-001',
      details: ''
    },
    {
      id: 2,
      title: 'C++ Programming',
      issuer: 'ETECT Training Center',
      date: '2025',
      icon: '⚡',
      color: 'from-blue-600 to-cyan-500',
      description: '',
      skills: [],
      certificateImage: certificateETECT,
      credentialId: 'ETECT-CPP-2023-002',
      details: ''
    },
    {
      id: 3,
      title: 'Taught Microsoft Office ',
      issuer: 'AddBook Training',
      date: '2026',
      icon: '📚',
      color: 'from-green-500 to-teal-500',
      description: '',
      skills: ['Teamwork', 'Communication', 'Leadership'],
      certificateImage: certificateADDBOOK,
      credentialId: 'AB-PD-2024-003',
      details: ''
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  // Download certificate image
  const downloadCertificate = async (cert) => {
    setIsDownloading(true);
    try {
      const response = await fetch(cert.certificateImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading certificate:', error);
      window.open(cert.certificateImage, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  // Zoom functions
  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
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
              My Certificates
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
                className={`cert-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform ${
                  animated.certificates.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                } ${getCardBgClass()} hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(cert)}
              >
                {/* Certificate Image Preview */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={cert.certificateImage} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-lg">
                    {cert.date}
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${getTextClass()}`}>
                        {cert.title}
                      </h3>
                      <p className={`text-sm ${getSecondaryTextClass()}`}>
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-3xl">{cert.icon}</span>
                  </div>

                  <p className={`text-sm mb-3 leading-relaxed line-clamp-2 ${getSecondaryTextClass()}`}>
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Certificate Viewer */}
      {isModalOpen && selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[95vh] rounded-2xl shadow-2xl animate-scaleIn bg-white dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetZoom}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 hover:rotate-90"
                >
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative p-4 bg-gray-50 dark:bg-gray-800/50">
              <div className="relative overflow-auto max-h-[65vh] flex items-center justify-center">
                <img 
                  ref={imageRef}
                  src={selectedCert.certificateImage} 
                  alt={selectedCert.title}
                  className="object-contain transition-transform duration-300"
                  style={{ 
                    transform: `scale(${zoomLevel})`,
                    maxHeight: '65vh',
                    width: 'auto'
                  }}
                />
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-md rounded-full px-3 py-2">
                <button
                  onClick={zoomOut}
                  className="p-1.5 hover:bg-white/20 rounded-full transition text-white"
                  title="Zoom Out"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-white text-sm font-medium min-w-[50px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  className="p-1.5 hover:bg-white/20 rounded-full transition text-white"
                  title="Zoom In"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div className="w-px h-6 bg-white/20" />
                <button
                  onClick={resetZoom}
                  className="p-1.5 hover:bg-white/20 rounded-full transition text-white text-xs px-2"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Credential ID: <span className="font-mono">{selectedCert.credentialId}</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {selectedCert.details}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold transition-all duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => downloadCertificate(selectedCert)}
                  disabled={isDownloading}
                  className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isDownloading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Certificate;