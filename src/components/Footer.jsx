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
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className={`text-sm mb-4 ${getSecondaryTextClass()}`}>
              Creating beautiful and functional web experiences that make a difference.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <span className="text-sm">🐦</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <span className="text-sm">💼</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <span className="text-sm">📷</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <span className="text-sm">💻</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className={`font-semibold text-lg mb-4 ${getTextClass()}`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm transition-colors ${getSecondaryTextClass()} hover:text-purple-600 dark:hover:text-purple-400`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className={`font-semibold text-lg mb-4 ${getTextClass()}`}>Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className={`text-sm ${getSecondaryTextClass()}`}>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className={`font-semibold text-lg mb-4 ${getTextClass()}`}>Newsletter</h4>
            <p className={`text-sm mb-3 ${getSecondaryTextClass()}`}>
              Subscribe to get updates on my latest projects
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className={`flex-1 px-3 py-2 rounded-l-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                  getBgClass() === 'bg-white' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'bg-gray-800 text-white'
                }`}
              />
              <button className="px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-r-lg text-sm font-semibold text-white hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className={`border-t mt-8 pt-8 text-center ${getBorderClass()}`}>
          <p className={`text-sm ${getSecondaryTextClass()}`}>
            © {currentYear} John Doe. All rights reserved.
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