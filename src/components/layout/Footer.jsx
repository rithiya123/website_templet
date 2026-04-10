// src/components/layout/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Shield,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUp,
  Home,
  Globe,
  Info,
  Users,
  FileText,
  Building2,
} from "lucide-react";
import Container from "../ui/Container";
import { useFooter } from "../../hooks/useFooter";
import { useHeader } from "../../hooks/useHeader";
import logoImage from "../../images/logo.png";

const Footer = () => {
  const [currentLang, setCurrentLang] = useState("km");
  const location = useLocation();

  const { 
    loading: footerLoading, 
    contact, 
    email, 
    address,
    copyright,
    mapUrl 
  } = useFooter(currentLang);

  const { logo: apiLogo, loading: headerLoading } = useHeader(currentLang);

  const loading = footerLoading || headerLoading;

  // Same email validation as Header
  const hasValidEmail = email && email.trim() !== '';

  const getEmbedMapUrl = (url) => {
    if (!url) return '';
    if (url.includes('/embed')) return url;
    return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6539446787106!2d104.920614!3d11.576647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951434d493e03%3A0xb1a605e9a569ec8b!2sMinistry%20of%20Economy%20and%20Finance%20of%20Cambodia!5e0!3m2!1sen!2skh!4v1774153266478!5m2!1sen!2skh';
  };

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const translations = {
    km: {
      address: "អាសយដ្ឋាន",
      email: "អ៊ីមែល",
      quickLinks: "តំណភ្ជាប់រហ័ស",
      home: "ទំព័រដើម",
      news: "ព័ត៌មាន និង ព្រឹត្តិការណ៍",
      about: "អំពីអគ្គនាយកដ្ឋាន",
      legal: "លិខិតបទដ្ឋានគតិយុត្ត",
      aboutSub2: "តួនាទី និងភារកិច្ច",
      aboutSub3: "សារអគ្គនាយក",
      backToTop: "ត្រលប់ទៅកំពូល",
      location: "ទីតាំង",
      viewMap: "មើលផែនទីធំ",
      contactUs: "ទំនាក់ទំនង",
    },
    en: {
      address: "Address",
      email: "Email",
      quickLinks: "Quick Links",
      home: "Home",
      news: "News & Events",
      about: "About Department",
      legal: "Legal Documents",
      aboutSub2: "Roles & Responsibilities",
      aboutSub3: "Director's Message",
      backToTop: "Back to top",
      location: "Location",
      viewMap: "View larger map",
      contactUs: "Contact Us",
    },
  };

  const t = translations[currentLang];

  const quickLinksList = [
    { label: t.home, path: "/", icon: <Home size={14} /> },
    { label: t.news, path: "/news", icon: <Globe size={14} /> },
    { label: t.about, path: "/about", icon: <Info size={14} /> },
    { label: t.legal, path: "/legal", icon: <FileText size={14} /> },
  ];

  const aboutSubLinks = [
    { label: t.aboutSub2, path: "/about/roles", icon: <Shield size={12} /> },
    { label: t.aboutSub3, path: "/about/director-message", icon: <Info size={12} /> },
  ];

  if (loading) {
    return (
      <footer className="bg-gradient-to-b from-[#1B5E20] to-[#0D3310] text-white">
        <Container className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-32 bg-white/10 rounded animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className="bg-gradient-to-b from-[#1B5E20] to-[#0D3310] text-white relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#4CAF50] hover:bg-[#2E7D32] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group z-10"
        aria-label={t.backToTop}
      >
        <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex flex-col items-start gap-3 group">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                <img
                  src={apiLogo || logoImage}
                  alt={currentLang === "km" ? contact.titleKh : contact.titleEn}
                  className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.src = logoImage; }}
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg leading-tight text-white break-words">
                  {currentLang === "km" ? contact.titleKh : contact.titleEn}
                </h3>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white flex items-center text-base sm:text-lg">
              <span className="w-8 h-0.5 bg-[#4CAF50] mr-2"></span>
              {t.contactUs}
            </h4>

            <div className="space-y-4">
              {/* Address - Always show if exists */}
              {(address.km || address.en) && (
                <div className="flex items-start space-x-3 group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4CAF50] transition-colors flex-shrink-0">
                    <MapPin size={16} className="text-[#4CAF50] group-hover:text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-green-300 mb-1">{t.address}</p>
                    <p className="text-sm text-green-100 leading-relaxed break-words">
                      {currentLang === "km" ? address.km : address.en}
                    </p>
                  </div>
                </div>
              )}

              {/* Email - Only show if valid (same condition as Header) */}
              {hasValidEmail && (
                <div className="flex items-start space-x-3 group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4CAF50] transition-colors flex-shrink-0">
                    <Mail size={16} className="text-[#4CAF50] group-hover:text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-green-300 mb-1">{t.email}</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-green-100 hover:text-white transition-colors break-words"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white flex items-center text-base sm:text-lg">
              <span className="w-8 h-0.5 bg-[#4CAF50] mr-2"></span>
              {t.quickLinks}
            </h4>

            <ul className="space-y-3">
              {quickLinksList.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="group flex items-center text-sm text-green-200 hover:text-white transition-colors">
                    <ChevronRight size={14} className="mr-2 text-[#4CAF50] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span className="break-words">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-6 h-px bg-[#4CAF50]"></span>
                <span className="text-xs text-green-300 font-medium uppercase tracking-wider">
                  {t.about}
                </span>
              </div>
              <ul className="space-y-2 pl-2">
                {aboutSubLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="group flex items-center text-sm text-green-300 hover:text-white transition-colors">
                      <span className="mr-2 text-[#4CAF50] group-hover:translate-x-0.5 transition-transform">•</span>
                      <span className="break-words">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white flex items-center text-base sm:text-lg">
              <span className="w-8 h-0.5 bg-[#4CAF50] mr-2"></span>
              {t.location}
            </h4>

            <div className="bg-white/10 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={getEmbedMapUrl(mapUrl)}
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="w-full h-full"
              ></iframe>
            </div>

            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-green-300 hover:text-white transition-colors group"
              >
                <span className="break-words">{t.viewMap}</span>
                <ChevronRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-green-300 text-center md:text-left break-words">
              {currentLang === "km" ? copyright.textKh : copyright.textEn}
              <span className="block mt-1 text-green-400 font-medium">
                {currentLang === "km" ? copyright.belowKh : copyright.belowEn}
              </span>
            </p>

            <div className="flex items-center space-x-3 text-xs">
              <div className="flex items-center space-x-2 text-green-400">
                <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full animate-pulse"></span>
                <span>{currentLang === "km" ? "ភាសាខ្មែរ" : "English"}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;