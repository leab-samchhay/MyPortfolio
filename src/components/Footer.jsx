// components/Footer.jsx
import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Footer = () => {
  const { getBgClass, getTextClass, getSecondaryTextClass, getBorderClass } = useGlobalContext();
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];
  
  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Consulting'
  ];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`transition-colors duration-300 border-t ${getBorderClass()} ${getBgClass()}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">

        
        <div className={`border-t mt-8 pt-8 text-center ${getBorderClass()}`}>
          <p className={`text-sm ${getSecondaryTextClass()}`}>
            © {currentYear} Leab Samchhay. All rights reserved.
          </p>
          <p className={`text-xs mt-2 ${getSecondaryTextClass()}`}>
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;