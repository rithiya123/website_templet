// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import Navigation from './Navigation.jsx';
import LanguageSwitcher from '../shared/LanguageSwitcher.jsx';
import Logo from '../ui/Logo.jsx';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('km');
  const location = useLocation();

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };

    window.addEventListener('languagechange', handleLanguageChange);
    
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setCurrentLang(savedLang);
    }

    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  // Handle scroll effect with throttle for performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    };
  }, [mobileMenuOpen]);

  // Translations
  const translations = {
    km: {
      hotline: 'ទូរស័ព្ទបន្ទាន់',
      eservice: 'សេវាកម្មអេឡិចត្រូនិក',
      welcome: 'សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានពន្ធនាគារ',
      irc: 'អ.ព.ន.',
      phone: '០៧១ ២៥៨ ០៨៩៦',
      quickLinks: 'តំណភ្ជាប់រហ័ស',
      contactUs: 'ទំនាក់ទំនងយើងខ្ញុំ',
      aboutUs: 'អំពីយើងខ្ញុំ',
      announcements: 'សេចក្តីជូនដំណឹង',
      faq: 'សំណួរពេញនិយម'
    },
    en: {
      hotline: 'Hotline',
      eservice: 'e-Services',
      welcome: 'Welcome to the official website of the General Department of Prisons!',
      irc: 'GDP',
      phone: '071 258 0896',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      aboutUs: 'About Us',
      announcements: 'Announcements',
      faq: 'FAQ'
    }
  };

  const t = translations[currentLang];

  // Get current page from location pathname
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1);
  };

  return (
    <>
      {/* Top Bar - Matching e-service button gradient */}
      <div className={`bg-gradient-to-r from-primary-700 to-primary-600 text-white py-2 hidden md:block transition-all duration-300 ${
        scrolled ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-75"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-150"></span>
              </div>
              <span className="text-xs text-white/80 font-light tracking-wide">
                {currentLang === 'km' ? 'ដំណើរការ 24/7' : 'Operating 24/7'}
              </span>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="tel:0712580896" className="flex items-center space-x-2 text-xs group">
                <span className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Phone size={12} className="text-white/80 group-hover:text-white" />
                </span>
                <span className="text-white/80 group-hover:text-white font-medium">{t.phone}</span>
              </a>
              <a href="mailto:info@gdp.gov.kh" className="flex items-center space-x-2 text-xs group">
                <span className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Mail size={12} className="text-white/80 group-hover:text-white" />
                </span>
                <span className="text-white/80 group-hover:text-white font-medium">info@gdp.gov.kh</span>
              </a>
              
              <div className="border-l border-white/20 pl-4">
                <LanguageSwitcher variant="minimal" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-primary-100' 
          : 'bg-white shadow-sm py-4 border-b border-transparent'
      }`}>
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo - Link to home */}
            <Link to="/" className="flex-1 md:flex-none group">
              <Logo variant="default" showText={true} />
            </Link>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="relative px-6 py-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary-700 to-primary-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 group">
                <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{t.eservice}</span>
                  <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full">New</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 bg-gradient-to-r from-primary-700 to-primary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <Menu size={22} className="relative z-10" />
              </button>
            </div>
          </div>

          {/* Welcome Message */}
          <div className={`hidden md:block transition-all duration-500 ease-in-out overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-20 opacity-100 mt-3'
          }`}>
            <div className="bg-primary-50 rounded-lg p-3 border border-primary-100">
              <p className="text-sm text-primary-800 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
                <span className="font-light">{t.welcome}</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`transition-all duration-500 transform ${
              scrolled ? 'mt-2' : 'mt-4'
            }`}>
              <Navigation currentPage={getCurrentPage()} />
            </div>
          </div>
        </Container>

        {/* Progress bar */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600 transition-all duration-300 ease-out ${
          scrolled ? 'w-full' : 'w-0'
        }`}></div>
      </header>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <Navigation 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
          currentPage={getCurrentPage()}
        />
      )}
    </>
  );
};

export default Header;