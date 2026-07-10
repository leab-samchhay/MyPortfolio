// components/Footer.jsx
import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Footer = () => {
  const { getBgClass, getTextClass, getSecondaryTextClass, getBorderClass } = useGlobalContext();
  const currentYear = new Date().getFullYear();
 
 
  
 

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