// contexts/GlobalContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within GlobalProvider');
  }
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('bgTheme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleBgTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem('bgTheme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      localStorage.setItem('bgTheme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  const [graydient,setGraydient] = useState("bg-gradient-to-t from-purple-600 to-blue-500")

  const getBgClass = () => {
    return isDarkMode ? 'bg-black' : 'bg-white';
  };
  
  const herograydient = () => {
    return isDarkMode ? ' bg-black' : 'bg-gradient-to-t from-white to-purple-400';
  }

  const getTextClass = () => {
    return isDarkMode ? 'text-blue-500' : 'text-gray-900';
  };

  const getNavbarBgClass = () => {
    return isDarkMode ? 'bg-black' : 'bg-white';
  };

  const getCardBgClass = () => {
    return isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  };

  const getBorderClass = () => {
    return isDarkMode ? 'border-gray-800' : 'border-gray-200';
  };

  const getSecondaryTextClass = () => {
    return isDarkMode ? 'text-gray-400' : 'text-gray-600';
  };

  const value = {
    isDarkMode,
    graydient,
    herograydient,
    toggleBgTheme,
    getBgClass,
    getTextClass,
    getNavbarBgClass,
    getCardBgClass,
    getBorderClass,
    getSecondaryTextClass,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;