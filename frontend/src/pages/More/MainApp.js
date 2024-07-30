// MainApp.js
import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Sidebar from './components/Sidebar/Sidebar';

const MainApp = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const updateTheme = (language) => {
    switch (language) {
      case 'en':
        setTheme('english-theme');
        break;
      case 'es':
        setTheme('spanish-theme');
        break;
      case 'hi':
        setTheme('hindi-theme');
        break;
      case 'fr':
        setTheme('french-theme');
        break;
      case 'ta':
        setTheme('tamil-theme');
        break;
      case 'pt':
        setTheme('portuguese-theme');
        break;
      case 'bn':
        setTheme('bengali-theme');
        break;
      default:
        setTheme('default');
    }
  };

  return (
    <div className={`main-app ${theme}`}>
      <Sidebar updateTheme={updateTheme} />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default MainApp;
