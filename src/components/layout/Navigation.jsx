// src/components/layout/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { 
  X, ChevronDown, Home, Globe, ChevronRight, 
  Info, Users, Building2, FileText, Phone, Shield,
  Award, Clock, MapPin, Mail, Star
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo.jsx';

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [currentLang, setCurrentLang] = useState('km');



  // Menu items configuration with corrected paths
  const menuItems = [
    { 
      id: 'home',
      label: 'ទំព័រដើម', 
      labelEn: 'HOME',
      path: '/',
      icon: Home,
      dropdown: false
    },
    { 
      id: 'news',
      label: 'ព័ត៌មាន', 
      labelEn: 'NEWS',
      path: '/news',
      icon: Globe,
      dropdown: false
    },
    { 
      id: 'about',
      label: 'អំពីអគ្គនាយកដ្ឋាន', 
      labelEn: 'ABOUT DEPARTMENT',
      path: '/about',
      icon: Info,
      dropdown: true,
      subItems: {
        km: [
          { label: 'ប្រវត្តិអគ្គនាយកដ្ឋាន', path: '/about/history' },
          { label: 'ចក្ខុវិស័យ និងបេសកកម្ម', path: '/about/vision-mission' },
          { label: 'តួនាទី និងភារកិច្ច', path: '/about/roles' },
          { label: 'សារអគ្គនាយក', path: '/about/director-message' }
        ],
        en: [
          { label: 'Department History', path: '/about/history' },
          { label: 'Vision & Mission', path: '/about/vision-mission' },
          { label: 'Roles & Responsibilities', path: '/about/roles' },
          { label: "Director's Message", path: '/about/director-message' }
        ]
      }
    },
    { 
      id: 'management',
      label: 'រចនាសម្ព័ន្ធនៃការគ្រប់គ្រង', 
      labelEn: 'MANAGEMENT STRUCTURE',
      path: '/management', 
      icon: Users,
      dropdown: false
    },
    { 
      id: 'leadership',
      label: 'រចនាសម្ព័ន្ធស្ថាប័ន', 
      labelEn: 'ORGANIZATIONAL STRUCTURE',
      path: '/leadership', 
      icon: Building2,
      dropdown: false
    },
    { 
      id: 'legal',
      label: 'លិខិតបទដ្ឋានគតិយុត្ត', 
      labelEn: 'LEGAL DOCUMENTS',
      path: '/legal',
      icon: FileText,
      dropdown: false
      
    },
    { 
      id: 'contact',
      label: 'ទំនាក់ទំនង', 
      labelEn: 'CONTACT',
      path: '/contact',
      icon: Phone,
      dropdown: false
    }
  ];

  // Language effect
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

  const getTranslatedLabel = (item) => {
    if (currentLang === 'km') {
      return item.label;
    }
    return item.labelEn;
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    setActiveDropdown(null);
    setMobileDropdownOpen({});
  };

  const closeMobileMenu = () => {
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileDropdown = (itemId) => {
    setMobileDropdownOpen(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const isItemActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.subItems) {
      return item.subItems[currentLang].some(subItem => subItem.path === location.pathname);
    }
    return false;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {menuItems.map((item) => {
            const isActive = isItemActive(item);
            
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => {
                    if (!item.dropdown) {
                      handleNavigation(item.path);
                    }
                  }}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-primary-700 bg-primary-50' 
                      : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  <item.icon size={18} className="mr-2" />
                  <span>{getTranslatedLabel(item)}</span>
                  {item.dropdown && (
                    <ChevronDown size={14} className={`ml-1 transition-transform ${
                      activeDropdown === item.id ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.id && (
                  <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                    
                    {item.subItems[currentLang].map((subItem, i) => {
                      const isSubActive = subItem.path === location.pathname;
                      
                      return (
                        <button
                          key={i}
                          onClick={() => handleNavigation(subItem.path)}
                          className={`block w-full text-left px-4 py-2.5 text-sm transition-all duration-200 hover:pl-6 ${
                            isSubActive
                              ? 'text-primary-700 bg-primary-50 font-medium'
                              : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                          }`}
                        >
                          {subItem.label}
                        </button>
                      );
                    })}
                    
                    <div className="border-t border-gray-100 mt-2 pt-2 px-3">
                      <button 
                        onClick={() => handleNavigation(item.path)}
                        className="block w-full text-xs text-center text-primary-600 hover:text-primary-700 py-1"
                      >
                        {currentLang === 'km' ? 'មើលទាំងអស់ →' : 'View All →'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop right section - Removed Login button */}
      </nav>

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Menu Panel - Floating Card */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl z-50 overflow-hidden md:hidden">
            
            {/* Header with Logo */}
            <div className="p-5 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Logo variant="default" showText={false} className="w-8 h-8" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {currentLang === 'km' ? 'អគ្គនាយកដ្ឋានពន្ធនាគារ' : 'GDP'}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {currentLang === 'km' ? 'ម៉ឺនុយមេ' : 'Main Menu'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Menu Items - Clean List */}
            <div className="p-5 max-h-[60vh] overflow-y-auto">
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = isItemActive(item);
                  
                  return (
                    <div key={item.id}>
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(item.id)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                              isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center">
                              <item.icon size={18} className={`mr-3 ${isActive ? 'text-primary-600' : 'text-gray-500'}`} />
                              <span className="text-sm font-medium">{getTranslatedLabel(item)}</span>
                            </div>
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-200 ${
                                mobileDropdownOpen[item.id] ? 'rotate-180' : ''
                              } ${isActive ? 'text-primary-600' : 'text-gray-400'}`} 
                            />
                          </button>

                          {/* Submenu */}
                          {mobileDropdownOpen[item.id] && (
                            <div className="ml-9 mt-1 space-y-0.5">
                              {item.subItems[currentLang].map((subItem, i) => {
                                const isSubActive = subItem.path === location.pathname;
                                
                                return (
                                  <button
                                    key={i}
                                    onClick={() => handleNavigation(subItem.path)}
                                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                                      isSubActive
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                  >
                                    {subItem.label}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                            isActive 
                              ? 'text-primary-600 bg-primary-50' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <item.icon size={18} className={`mr-3 ${isActive ? 'text-primary-600' : 'text-gray-500'}`} />
                          <span className="text-sm font-medium flex-1 text-left">{getTranslatedLabel(item)}</span>
                          <ChevronRight size={14} className={isActive ? 'text-primary-600' : 'text-gray-400'} />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Contact Info - Simple */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-3 px-3">Contact</p>
                <div className="space-y-2 px-3">
                  <a href="tel:0712580896" className="flex items-center text-sm text-gray-600 hover:text-primary-600">
                    <Phone size={14} className="mr-3 text-gray-400" />
                    071 258 0896
                  </a>
                  <a href="mailto:info@gdp.gov.kh" className="flex items-center text-sm text-gray-600 hover:text-primary-600">
                    <Mail size={14} className="mr-3 text-gray-400" />
                    info@gdp.gov.kh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;