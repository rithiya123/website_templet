// src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Container from "../ui/Container.jsx";
import Navigation from "./Navigation.jsx";
import LanguageSwitcher from "../shared/LanguageSwitcher.jsx";
import Logo from "../ui/Logo.jsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("km");
  const location = useLocation();

  // Add smooth scroll function
  const smoothScrollTo = (elementId, offset = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Add hash link smooth scroll handler
  useEffect(() => {
    const handleHashLinkClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.hash && target.hash.startsWith("#")) {
        const elementId = target.hash.substring(1);
        const element = document.getElementById(elementId);

        if (element) {
          e.preventDefault();
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 80;
          smoothScrollTo(elementId, headerHeight);

          // Update URL without jumping - using window.history instead of history
          window.history.pushState(null, null, target.hash);
        }
      }
    };

    document.addEventListener("click", handleHashLinkClick);

    // Handle initial hash on page load
    if (window.location.hash) {
      setTimeout(() => {
        const elementId = window.location.hash.substring(1);
        if (document.getElementById(elementId)) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 80;
          smoothScrollTo(elementId, headerHeight);
        }
      }, 100);
    }

    return () => document.removeEventListener("click", handleHashLinkClick);
  }, []);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };

    window.addEventListener("languagechange", handleLanguageChange);

    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setCurrentLang(savedLang);
    }

    return () =>
      window.removeEventListener("languagechange", handleLanguageChange);
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    };
  }, [mobileMenuOpen]);

  // Translations
  const translations = {
    km: {
      hotline: "ទូរស័ព្ទបន្ទាន់",
      welcome:
        "សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      department: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      departmentShort: "អ.ដ.ផ",
      phone: "(+855) xx xxx xxxx",
      quickLinks: "តំណភ្ជាប់រហ័ស",
      contactUs: "ទំនាក់ទំនងយើងខ្ញុំ",
      aboutUs: "អំពីយើងខ្ញុំ",
      announcements: "សេចក្តីជូនដំណឹង",
      faq: "សំណួរពេញនិយម",
    },
    en: {
      hotline: "Hotline",
      welcome:
        "Welcome to the official website of the General Department of Resettlement!",
      department: "General Department of Resettlement",
      departmentShort: "អ.ដ.ផ",
      phone: "(+855) xx xxx xxxx",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      aboutUs: "About Us",
      announcements: "Announcements",
      faq: "FAQ",
    },
  };

  const t = translations[currentLang];

  // Get current page from location pathname
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    return path.substring(1);
  };

  return (
    <>
      {/* Top Bar - Green gradient */}
      <div
        className={`bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white py-1.5 sm:py-2 hidden md:block transition-all duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <LanguageSwitcher variant="minimal" />
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
              <a
                href="tel:+855xxxxxxxx"
                className="flex items-center space-x-1.5 sm:space-x-2 text-xs group"
              >
                <span className="p-1 sm:p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Phone
                    size={10}
                    className="text-white/80 group-hover:text-white sm:w-3 sm:h-3"
                  />
                </span>
                <span className="text-white/80 group-hover:text-white font-medium text-[11px] sm:text-xs">
                  {t.phone}
                </span>
              </a>
              <a
                href="mailto:info@gdpir.gov.kh"
                className="flex items-center space-x-1.5 sm:space-x-2 text-xs group"
              >
                <span className="p-1 sm:p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Mail
                    size={10}
                    className="text-white/80 group-hover:text-white sm:w-3 sm:h-3"
                  />
                </span>
                <span className="text-white/80 group-hover:text-white font-medium text-[11px] sm:text-xs">
                  xxxx@mef.gov.kh
                </span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-2 border-b border-green-100"
            : "bg-white shadow-sm py-3 sm:py-4 border-b border-transparent"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center gap-3 sm:gap-4">
            {/* Logo - Link to home */}
            <Link
              to="/"
              className="flex-shrink-0 group max-w-[70%] sm:max-w-full"
            >
              <Logo
                variant="default"
                showText={true}
                departmentName={t.department}
                departmentShort={t.departmentShort}
              />
            </Link>

            {/* Desktop Actions - Removed e-service button */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              {/* E-service button removed */}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <Menu
                  size={20}
                  className="relative z-10 sm:w-[22px] sm:h-[22px]"
                />
              </button>
            </div>
          </div>

          {/* Welcome Message */}
          <div
            className={`hidden md:block transition-all duration-500 ease-in-out overflow-hidden ${
              scrolled
                ? "max-h-0 opacity-0 mt-0"
                : "max-h-20 opacity-100 mt-3 sm:mt-4"
            }`}
          >
            <div className="bg-green-50 rounded-lg p-2 sm:p-3 border border-green-100">
              <p className="text-xs sm:text-sm text-green-800 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 animate-pulse flex-shrink-0"></span>
                <span className="font-light line-clamp-1">{t.welcome}</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div
              className={`transition-all duration-500 transform ${
                scrolled ? "mt-2" : "mt-3 sm:mt-4"
              }`}
            >
              <Navigation currentPage={getCurrentPage()} />
            </div>
          </div>
        </Container>

        {/* Progress bar - Green gradient */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#4CAF50] via-[#2E7D32] to-[#4CAF50] transition-all duration-300 ease-out ${
            scrolled ? "w-full" : "w-0"
          }`}
        ></div>
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
