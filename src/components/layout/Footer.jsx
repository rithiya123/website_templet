// src/components/layout/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Facebook,
  Youtube,
  Send,
  MessageCircle,
  ArrowUp,
  Home,
  Globe,
  Info,
  Users,
  FileText,
  Building2,
} from "lucide-react";
import Container from "../ui/Container";
import logoImage from "../../images/logo.png";

const Footer = () => {
  const [currentLang, setCurrentLang] = useState("km");
  const location = useLocation();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const translations = {
    km: {
      brand: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      address: "អាសយដ្ឋាន",
      phone: "ទូរស័ព្ទ",
      email: "អ៊ីមែល",
      workingDays: "ថ្ងៃបម្រើការងារ",
      quickLinks: "តំណភ្ជាប់រហ័ស",
      home: "ទំព័រដើម",
      news: "ព័ត៌មាន",
      about: "អំពីអគ្គនាយកដ្ឋាន",
      contact: "ទំនាក់ទំនង",
      legal: "លិខិតបទដ្ឋានគតិយុត្ត",
      structure: "រចនាសម្ព័ន្ធគ្រប់គ្រង",
      aboutSub1: "ប្រវត្តិអគ្គនាយកដ្ឋាន",
      aboutSub2: "តួនាទី និងភារកិច្ច",
      aboutSub3: "សារអគ្គនាយក",
      followUs: "តាមដានយើង",
      copyright: "រក្សាសិទ្ធដោយ",
      backToTop: "ត្រលប់ទៅកំពូល",
      location: "ទីតាំង",
      viewMap: "មើលផែនទីធំ",
    },
    en: {
      brand: "General Department of Project Impact Resolution",
      address: "Address",
      phone: "Phone",
      email: "Email",
      workingDays: "Working Days",
      quickLinks: "Quick Links",
      home: "Home",
      news: "News",
      about: "About Department",
      contact: "Contact",
      legal: "Legal Documents",
      structure: "Management Structure",
      aboutSub1: "Department History",
      aboutSub2: "Roles & Responsibilities",
      aboutSub3: "Director's Message",
      followUs: "Follow Us",
      copyright: "All rights reserved",
      backToTop: "Back to top",
      location: "Location",
      viewMap: "View larger map",
    },
  };

  const t = translations[currentLang];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: Send, href: "#", label: "Telegram", color: "hover:text-sky-500" },
    {
      icon: MessageCircle,
      href: "#",
      label: "Messenger",
      color: "hover:text-blue-600",
    },
  ];

  // Quick Links
  const quickLinks = [
    { label: t.home, path: "/", icon: <Home size={14} /> },
    { label: t.news, path: "/news", icon: <Globe size={14} /> },
    { label: t.structure, path: "/management", icon: <Users size={14} /> },
    { label: t.legal, path: "/legal", icon: <FileText size={14} /> },
  ];

  // About sub-links
  const aboutSubLinks = [
    {
      label: t.aboutSub1,
      path: "/about/history",
      icon: <Building2 size={12} />,
    },
    { label: t.aboutSub2, path: "/about/roles", icon: <Shield size={12} /> },
    {
      label: t.aboutSub3,
      path: "/about/director-message",
      icon: <Info size={12} />,
    },
  ];

  const contactInfo = {
    address: {
      km: "ផ្លូវលេខ ៩២ សង្កាត់វត្តភ្នំ ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ, 120211",
      en: "Street 92, Wat Phnom Sangkat, Doun Penh Khan, Phnom Penh, 120211",
    },
    phone: "(+855) xx xxx xxxx",
    email: "xxx@mef.gov.kh",
    workingDays: {
      km: "ថ្ងៃចន្ទ – ថ្ងៃសុក្រ",
      en: "Monday – Friday",
    },
  };

  return (
    <footer className="bg-gradient-to-b from-[#1B5E20] to-[#0D3310] text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#4CAF50] hover:bg-[#2E7D32] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group z-10"
        aria-label={t.backToTop}
      >
        <ArrowUp
          size={18}
          className="group-hover:-translate-y-1 transition-transform"
        />
      </button>

      {/* Main Footer */}
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            {/* Logo and Title */}
            <div className="flex flex-col items-start gap-3 group">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                <img
                  src={logoImage}
                  alt="GDPIR Logo"
                  className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg leading-tight text-white break-words">
                  {t.brand}
                </h3>
               
              </div>
            </div>

            {/* Social Links */}
            {/* <div>
              <h4 className="text-xs sm:text-sm font-medium text-green-300 mb-3 uppercase tracking-wider">
                {t.followUs}
              </h4>
              <div className="flex items-center space-x-2 sm:space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 p-2.5 rounded-xl text-green-300 hover:text-white hover:bg-[#4CAF50] transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="sm:w-4 sm:h-4" />
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Address Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white flex items-center text-base sm:text-lg">
              <span className="w-8 h-0.5 bg-[#4CAF50] mr-2"></span>
              {t.address}
            </h4>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4CAF50] transition-colors flex-shrink-0">
                  <MapPin
                    size={16}
                    className="text-[#4CAF50] group-hover:text-white"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-green-300 mb-1">{t.address}</p>
                  <p className="text-sm text-green-100 leading-relaxed break-words">
                    {currentLang === "km"
                      ? contactInfo.address.km
                      : contactInfo.address.en}
                  </p>
                </div>
              </div>

              {/* Phone */}
              {/* <div className="flex items-start space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4CAF50] transition-colors flex-shrink-0">
                  <Phone
                    size={16}
                    className="text-[#4CAF50] group-hover:text-white"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-green-300 mb-1">{t.phone}</p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm text-green-100 hover:text-white transition-colors break-words"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div> */}

              {/* Email */}
              <div className="flex items-start space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4CAF50] transition-colors flex-shrink-0">
                  <Mail
                    size={16}
                    className="text-[#4CAF50] group-hover:text-white"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-green-300 mb-1">{t.email}</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-green-100 hover:text-white transition-colors break-words"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Working Days */}
              {/* <div className="flex items-start space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4CAF50] transition-colors flex-shrink-0">
                  <Clock
                    size={16}
                    className="text-[#4CAF50] group-hover:text-white"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-green-300 mb-1">{t.workingDays}</p>
                  <p className="text-sm text-green-100 break-words">
                    {currentLang === "km"
                      ? contactInfo.workingDays.km
                      : contactInfo.workingDays.en}
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white flex items-center text-base sm:text-lg">
              <span className="w-8 h-0.5 bg-[#4CAF50] mr-2"></span>
              {t.quickLinks}
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-sm text-green-200 hover:text-white transition-colors"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-2 text-[#4CAF50] group-hover:translate-x-1 transition-transform flex-shrink-0"
                    />
                    <span className="break-words">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* About Sub-links */}
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
                    <Link
                      to={link.path}
                      className="group flex items-center text-sm text-green-300 hover:text-white transition-colors"
                    >
                      <span className="mr-2 text-[#4CAF50] group-hover:translate-x-0.5 transition-transform">
                        •
                      </span>
                      <span className="break-words">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Preview Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white flex items-center text-base sm:text-lg">
              <span className="w-8 h-0.5 bg-[#4CAF50] mr-2"></span>
              {t.location}
            </h4>

            <div className="bg-white/10 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3908.6539446787106!2d104.920614!3d11.576647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951434d493e03%3A0xb1a605e9a569ec8b!2sMinistry%20of%20Economy%20and%20Finance%20of%20Cambodia!5e0!3m2!1sen!2skh!4v1774153266478!5m2!1sen!2skh"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ministry of Economy and Finance Location Map"
                className="w-full h-full"
              ></iframe>
            </div>

            <a
              href="https://maps.google.com/?q=Phnom+Penh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-green-300 hover:text-white transition-colors group"
            >
              <span className="break-words">{t.viewMap}</span>
              <ChevronRight
                size={12}
                className="ml-1 group-hover:translate-x-1 transition-transform flex-shrink-0"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-green-300 text-center md:text-left break-words">
               © {new Date().getFullYear()} {t.copyright}
              <span className="block mt-1 text-green-400 font-medium">
                {t.brand}
              </span>
            </p>

            {/* Language indicator with decorative elements */}
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