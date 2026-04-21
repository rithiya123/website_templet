// src/components/layout/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { 
  X, ChevronDown, Home, Globe, ChevronRight, 
  Info, Users, Building2, FileText, Shield,
  Mail, Menu, BarChart3, BookOpen, FileCheck, ScrollText, Megaphone
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo.jsx';
import { useHeader } from '../../hooks/useHeader';
import { useFooterEmail } from '../../hooks/useFooterEmail';

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [currentLang, setCurrentLang] = useState('km');

  // Fetch header data for title and logo
  const { 
    loading: headerLoading, 
    orgNameFull, 
    orgNameShort, 
    logo 
  } = useHeader(currentLang);

  // Fetch email from footer
  const { email: footerEmail, loading: emailLoading } = useFooterEmail();
  
  const hasValidEmail = footerEmail && footerEmail.trim() !== '' && footerEmail !== '...';

  // Menu items configuration
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
      id: 'about',
      label: 'អំពីអគ្គនាយកដ្ឋាន', 
      labelEn: 'ABOUT DEPARTMENT',
      path: '/about',
      icon: Info,
      dropdown: true,
      subItems: {
        km: [
          { label: 'រចនាសម្ព័ន្ធនៃការគ្រប់គ្រង', path: '/about/management' },
          { label: 'តួនាទី និងភារកិច្ច', path: '/about/roles' },
          { label: 'សារអគ្គនាយក', path: '/about/director-message' }
        ],
        en: [
          { label: 'Management Structure', path: '/about/management' },
          { label: 'Roles & Responsibilities', path: '/about/roles' },
          { label: "Director's Message", path: '/about/director-message' }
        ]
      }
    },
    { 
      id: 'news',
      label: 'ព័ត៌មាន និង ព្រឹត្តិការណ៍', 
      labelEn: 'NEWS & EVENTS',
      path: '/news',
      icon: Globe,
      dropdown: true,
      subItems: {
        km: [
          { label: 'ព័ត៌មាន', path: '/news' },
          { label: 'កម្រងរូបភាព', path: '/news/photos' },
          { label: 'កម្រងវីដេអូ', path: '/news/videos' },
        ],
        en: [
          { label: 'News', path: '/news' },
          { label: 'Photo Gallery', path: '/news/photos' },
          { label: 'Video Gallery', path: '/news/videos' },
        ]
      }
    },
    
    { 
      id: 'legal',
      label: 'លិខិតបទដ្ឋានគតិយុត្ត', 
      labelEn: 'LEGAL DOCUMENTS',
      path: '/legal',
      icon: FileText,
      dropdown: true,
      subItems: {
        km: [
          { label: 'ច្បាប់', path: '/legal/law' },
          { label: 'អនុក្រឹត្យ', path: '/legal/sub-decree' },
          { label: 'សារាចរ', path: '/legal/circular' },
          { label: 'ប្រកាស', path: '/legal/declaration' },
        ],
        en: [
          { label: 'Law', path: '/legal/law' },
          { label: 'Sub-Decree', path: '/legal/sub-decree' },
          { label: 'Circular', path: '/legal/circular' },
          { label: 'Declaration', path: '/legal/declaration' },
        ]
      }
    },
    { 
      id: 'reports',
      label: 'របាយការណ៍', 
      labelEn: 'REPORTS',
      path: '/reports',
      icon: BarChart3,
      dropdown: false,
      // subItems: {
      //   km: [
      //     { label: 'របាយការណ៍ប្រចាំឆ្នាំ', path: '/reports/annual' },
      //     { label: 'របាយការណ៍ប្រចាំត្រីមាស', path: '/reports/quarterly' },
      //     { label: 'របាយការណ៍ស្ថិតិ', path: '/reports/statistics' },
      //     { label: 'របាយការណ៍សកម្មភាព', path: '/reports/activities' },
      //   ],
      //   en: [
      //     { label: 'Annual Report', path: '/reports/annual' },
      //     { label: 'Quarterly Report', path: '/reports/quarterly' },
      //     { label: 'Statistics Report', path: '/reports/statistics' },
      //     { label: 'Activity Report', path: '/reports/activities' },
      //   ]
      // }
    },
  ];

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
      {/* Desktop Navigation - Large screens (lg and up) */}
      <nav className="hidden lg:flex items-center justify-between">
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
                    } else {
                      setActiveDropdown(activeDropdown === item.id ? null : item.id);
                    }
                  }}
                  className={`flex items-center px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'text-[#2E7D32] bg-[#4CAF50] bg-opacity-10' 
                      : 'text-gray-600 hover:text-[#2E7D32] hover:bg-[#4CAF50] hover:bg-opacity-5'
                  }`}
                >
                  <item.icon size={16} className="mr-1 lg:mr-2" />
                  <span className="hidden lg:inline">{getTranslatedLabel(item)}</span>
                  <span className="lg:hidden">{getTranslatedLabel(item)}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      size={12} 
                      className={`ml-1 transition-all duration-300 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {item.dropdown && (
                  <div 
                    className={`
                      absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-[#4CAF50] border-opacity-20 py-2
                      transition-all duration-300 ease-out transform origin-top
                      ${activeDropdown === item.id 
                        ? 'opacity-100 scale-100 translate-y-0 visible' 
                        : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                      }
                    `}
                    style={{ zIndex: 9999 }}
                  >
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-[#4CAF50] border-opacity-20 transform rotate-45"></div>
                    
                    {item.subItems[currentLang].map((subItem, i) => {
                      const isSubActive = subItem.path === location.pathname;
                      
                      return (
                        <button
                          key={i}
                          onClick={() => handleNavigation(subItem.path)}
                          className={`
                            block w-full text-left px-4 py-2.5 text-sm transition-all duration-200 
                            hover:pl-6 hover:bg-[#4CAF50] hover:bg-opacity-5
                            ${isSubActive
                              ? 'text-[#2E7D32] bg-[#4CAF50] bg-opacity-10 font-medium'
                              : 'text-gray-600 hover:text-[#2E7D32]'
                            }
                          `}
                        >
                          <div className="flex items-center">
                            <ChevronRight 
                              size={12} 
                              className={`mr-2 transition-all duration-200 ${
                                isSubActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                              }`} 
                            />
                            {subItem.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Tablet Navigation - Medium screens (md to lg) */}
      <nav className="hidden md:flex lg:hidden items-center justify-start overflow-visible">
        <div className="flex items-center space-x-1 min-w-max relative">
          {menuItems.map((item) => {
            const isActive = isItemActive(item);
            
            return (
              <div key={item.id} className="relative">
                <button
                  onClick={() => {
                    if (!item.dropdown) {
                      handleNavigation(item.path);
                    } else {
                      setActiveDropdown(activeDropdown === item.id ? null : item.id);
                    }
                  }}
                  className={`flex items-center px-2 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'text-[#2E7D32] bg-[#4CAF50] bg-opacity-10' 
                      : 'text-gray-600 hover:text-[#2E7D32] hover:bg-[#4CAF50] hover:bg-opacity-5'
                  }`}
                >
                  <item.icon size={14} className="mr-1" />
                  <span className="truncate max-w-[100px]">{getTranslatedLabel(item)}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      size={10} 
                      className={`ml-1 transition-all duration-300 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {item.dropdown && activeDropdown === item.id && (
                  <>
                    <div 
                      className="fixed inset-0"
                      style={{ zIndex: 9998 }}
                      onClick={() => setActiveDropdown(null)}
                    />
                    <div 
                      className="fixed bg-white rounded-xl shadow-xl border border-[#4CAF50] border-opacity-20 py-2"
                      style={{ 
                        zIndex: 9999,
                        minWidth: '200px',
                        maxWidth: '250px',
                        top: 'auto',
                        left: 'auto',
                      }}
                      ref={(el) => {
                        if (el) {
                          const btn = el.parentElement?.querySelector('button');
                          if (btn) {
                            const rect = btn.getBoundingClientRect();
                            el.style.top = `${rect.bottom + 8}px`;
                            el.style.left = `${rect.left}px`;
                          }
                        }
                      }}
                    >
                      {item.subItems[currentLang].map((subItem, i) => {
                        const isSubActive = subItem.path === location.pathname;
                        
                        return (
                          <button
                            key={i}
                            onClick={() => handleNavigation(subItem.path)}
                            className={`
                              block w-full text-left px-4 py-2.5 text-sm transition-all duration-200 
                              hover:pl-6 hover:bg-[#4CAF50] hover:bg-opacity-5
                              ${isSubActive
                                ? 'text-[#2E7D32] bg-[#4CAF50] bg-opacity-10 font-medium'
                                : 'text-gray-600 hover:text-[#2E7D32]'
                              }
                            `}
                          >
                            {subItem.label}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation - Small screens (below md) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen && setMobileMenuOpen(true)}
          className="p-2 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            style={{ zIndex: 9998 }}
            onClick={closeMobileMenu}
          />

          <div 
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto overflow-x-hidden animate-in slide-in-from-right duration-300 custom-scrollbar"
            style={{ zIndex: 9999 }}
          >
            <div className="sticky top-0 bg-white z-10 p-4 border-b border-[#4CAF50] border-opacity-10">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <Logo variant="default" showText={false} logoSrc={logo} className="w-10 h-10" />
                </div>
                
                <div className="flex-1 min-w-0 pt-0.9">
                  <h4 className="font-small text-[#2E7D32] text-sm leading-tight break-words">
                    {!headerLoading && orgNameFull ? orgNameFull : (currentLang === 'km' 
                      ? 'អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោង' 
                      : 'General Department of Resettlement')
                    }
                  </h4>
                  <p className="text-xs text-[#4CAF50] mt-1">
                    {currentLang === 'km' ? 'ម៉ឺនុយមេ' : 'Main Menu'}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <button 
                    onClick={closeMobileMenu}
                    className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-full transition-all duration-200 active:scale-95"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 pb-20">
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = isItemActive(item);
                  
                  return (
                    <div key={item.id} className="transform transition-all duration-200">
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(item.id)}
                            className={`
                              w-full flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-200
                              ${isActive 
                                ? 'text-[#2E7D32] bg-[#4CAF50] bg-opacity-10' 
                                : 'text-gray-700 hover:bg-[#4CAF50] hover:bg-opacity-5'
                              }
                              active:scale-98
                            `}
                          >
                            <div className="flex items-center flex-1 min-w-0 gap-2">
                              <item.icon 
                                size={18} 
                                className={`flex-shrink-0 transition-all duration-200 ${
                                  isActive ? 'text-[#4CAF50] scale-110' : 'text-gray-500'
                                }`} 
                              />
                              <span className="text-sm font-medium break-words text-left flex-1">
                                {getTranslatedLabel(item)}
                              </span>
                            </div>
                            <ChevronDown 
                              size={16} 
                              className={`ml-2 flex-shrink-0 transition-all duration-300 ${
                                mobileDropdownOpen[item.id] ? 'rotate-180' : ''
                              } ${isActive ? 'text-[#4CAF50]' : 'text-gray-400'}`} 
                            />
                          </button>

                          <div 
                            className={`
                              ml-11 mt-1 space-y-0.5 overflow-hidden transition-all duration-300 ease-in-out
                              ${mobileDropdownOpen[item.id] 
                                ? 'max-h-96 opacity-100' 
                                : 'max-h-0 opacity-0'
                              }
                            `}
                          >
                            {item.subItems[currentLang].map((subItem, i) => {
                              const isSubActive = subItem.path === location.pathname;
                              
                              return (
                                <button
                                  key={i}
                                  onClick={() => handleNavigation(subItem.path)}
                                  className={`
                                    w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200
                                    transform hover:translate-x-1
                                    ${isSubActive
                                      ? 'text-[#2E7D32] bg-[#4CAF50] bg-opacity-10'
                                      : 'text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-5'
                                    }
                                  `}
                                >
                                  <div className="flex items-center gap-2">
                                    <ChevronRight 
                                      size={12} 
                                      className={`flex-shrink-0 transition-all duration-200 ${
                                        isSubActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                                      }`} 
                                    />
                                    <span className="break-words">{subItem.label}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </>
                      ) : (
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className={`
                            w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200
                            ${isActive 
                              ? 'text-[#2E7D32] bg-[#4CAF50] bg-opacity-10' 
                              : 'text-gray-700 hover:bg-[#4CAF50] hover:bg-opacity-5'
                            }
                            active:scale-98 hover:translate-x-1
                          `}
                        >
                          <item.icon 
                            size={18} 
                            className={`mr-3 flex-shrink-0 transition-all duration-200 ${
                              isActive ? 'text-[#4CAF50] scale-110' : 'text-gray-500'
                            }`} 
                          />
                          <span className="text-sm font-medium flex-1 text-left break-words">
                            {getTranslatedLabel(item)}
                          </span>
                          <ChevronRight 
                            size={14} 
                            className={`flex-shrink-0 transition-all duration-200 ${
                              isActive ? 'text-[#4CAF50] translate-x-1' : 'text-gray-400'
                            }`} 
                          />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Contact Info - Email only from API */}
              <div className="mt-6 pt-4 border-t border-[#4CAF50] border-opacity-10 animate-in fade-in duration-500 delay-100">
                <p className="text-xs text-[#4CAF50] mb-3 px-3 font-medium">Contact</p>
                <div className="space-y-2 px-3">
                  {!emailLoading && hasValidEmail && (
                    <a 
                      href={`mailto:${footerEmail}`}
                      className="flex items-center text-sm text-gray-600 hover:text-[#2E7D32] transition-all duration-200 group hover:translate-x-1"
                    >
                      <Mail size={14} className="mr-3 text-[#4CAF50] flex-shrink-0 group-hover:text-[#2E7D32] group-hover:scale-110 transition-all duration-200" />
                      <span className="group-hover:font-medium break-words">{footerEmail}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in-from-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        .animate-in {
          animation-duration: 0.3s;
          animation-fill-mode: both;
        }
        
        .fade-in {
          animation-name: fade-in;
        }
        
        .slide-in-from-right {
          animation-name: slide-in-from-right;
        }
        
        .active\\:scale-98:active {
          transform: scale(0.98);
        }
        
        .break-words {
          word-break: break-word;
          overflow-wrap: break-word;
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4CAF50 #e5e7eb;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4CAF50;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2E7D32;
        }
      `}</style>
    </>
  );
};

export default Navigation;