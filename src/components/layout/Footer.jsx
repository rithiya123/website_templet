// src/components/layout/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Heart
} from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const translations = {
    km: {
      brand: 'អគ្គនាយកដ្ឋានពន្ធនាគារ',
      brandSub: 'រាជរដ្ឋាភិបាលកម្ពុជា',
      address: 'អាសយដ្ឋាន',
      phone: 'ទូរស័ព្ទ',
      email: 'អ៊ីមែល',
      hours: 'ម៉ោងធ្វើការ',
      hoursDetail: 'ច័ន្ទ - សុក្រ: ៧:៣០ ព្រឹក - ៥:៣០ ល្ងាច',
      quickLinks: 'តំណភ្ជាប់រហ័ស',
      home: 'ទំព័រដើម',
      news: 'ព័ត៌មាន',
      about: 'អំពីយើង',
      contact: 'ទំនាក់ទំនង',
      legal: 'ឯកសារច្បាប់',
      structure: 'រចនាសម្ព័ន្ធ',
      followUs: 'តាមដានយើង',
      copyright: 'រក្សាសិទ្ធិគ្រប់យ៉ាង',
      backToTop: 'ត្រលប់ទៅកំពូល',
      madeWith: 'បង្កើតឡើងដោយក្តីស្រឡាញ់',
    },
    en: {
      brand: 'General Department of Prisons',
      brandSub: 'Royal Government of Cambodia',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Working Hours',
      hoursDetail: 'Monday - Friday: 7:30 AM - 5:30 PM',
      quickLinks: 'Quick Links',
      home: 'Home',
      news: 'News',
      about: 'About Us',
      contact: 'Contact',
      legal: 'Legal Documents',
      structure: 'Structure',
      followUs: 'Follow Us',
      copyright: 'All rights reserved',
      backToTop: 'Back to top',
      madeWith: 'Made with',
    }
  };

  const t = translations[currentLang];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: Send, href: '#', label: 'Telegram', color: 'hover:text-sky-500' },
    { icon: MessageCircle, href: '#', label: 'Messenger', color: 'hover:text-blue-600' },
  ];

  const quickLinks = [
    { label: t.home, path: '/' },
    { label: t.news, path: '/news' },
    { label: t.about, path: '/about' },
    { label: t.contact, path: '/contact' },
    { label: t.legal, path: '/legal' },
    { label: t.structure, path: '/structure' },
  ];

  const contactInfo = {
    address: {
      km: 'អគារលេខ៣០៨ មហាវិថីព្រះមុនីវង្ស ភ្នំពេញ',
      en: 'Building 308, Preah Monivong Blvd, Phnom Penh'
    },
    phone: '+855 71 258 0896',
    email: 'info@gdp.gov.kh',
  };

  return (
    <footer className="bg-primary-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label={t.backToTop}
      >
        <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Main Footer */}
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-700 p-2.5 rounded-lg">
                <Shield className="h-8 w-8 text-primary-100" />
              </div>
              <div>
                <h3 className="font-semibold text-lg leading-tight text-white">
                  {t.brand}
                </h3>
                <p className="text-sm text-primary-300 mt-1">
                  {t.brandSub}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-primary-200 leading-relaxed">
              {currentLang === 'km' 
                ? 'អគ្គនាយកដ្ឋានពន្ធនាគារប្តេជ្ញាផ្តល់សេវាកម្មប្រកបដោយតម្លាភាព យុត្តិធម៌ និងប្រសិទ្ធភាព'
                : 'The General Department of Prisons is committed to providing transparent, fair, and efficient services.'
              }
            </p>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-primary-300 mb-3">{t.followUs}</h4>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-primary-800 p-2.5 rounded-lg text-primary-300 hover:text-white hover:bg-primary-700 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white flex items-center text-lg">
              <span className="w-8 h-0.5 bg-primary-500 mr-2"></span>
              {t.contact}
            </h4>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-800 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
                  <MapPin size={16} className="text-primary-300" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 mb-1">{t.address}</p>
                  <p className="text-sm text-primary-100">
                    {currentLang === 'km' ? contactInfo.address.km : contactInfo.address.en}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-800 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
                  <Phone size={16} className="text-primary-300" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 mb-1">{t.phone}</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-sm text-primary-100 hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-800 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
                  <Mail size={16} className="text-primary-300" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 mb-1">{t.email}</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-primary-100 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-800 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
                  <Clock size={16} className="text-primary-300" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 mb-1">{t.hours}</p>
                  <p className="text-sm text-primary-100">{t.hoursDetail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white flex items-center text-lg">
              <span className="w-8 h-0.5 bg-primary-500 mr-2"></span>
              {t.quickLinks}
            </h4>
            
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-sm text-primary-200 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} className="mr-2 text-primary-500 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Preview Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white flex items-center text-lg">
              <span className="w-8 h-0.5 bg-primary-500 mr-2"></span>
              {currentLang === 'km' ? 'ទីតាំង' : 'Location'}
            </h4>
            
            <div className="bg-primary-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.773015555563!2d104.88098731462015!3d11.56584759178617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095173761d4a53%3A0x2d9b4a5c7b5d3c0!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1620000000000!5m2!1sen!2skh"
                width="100%"
                height="150"
                style={{ border: 0, filter: 'grayscale(50%)' }}
                allowFullScreen=""
                loading="lazy"
                title="GDP Location"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
            
            <a
              href="https://maps.google.com/?q=Phnom+Penh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-primary-300 hover:text-white transition-colors group"
            >
              <span>{currentLang === 'km' ? 'មើលផែនទីធំ' : 'View larger map'}</span>
              <ChevronRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-primary-400 text-center md:text-left">
              © {new Date().getFullYear()} {t.brand}. {t.copyright}.
            </p>

            {/* Made with love */}
            <p className="text-xs text-primary-500 flex items-center">
              {t.madeWith} <Heart size={12} className="mx-1 text-red-500 fill-red-500 animate-pulse" /> 
              {currentLang === 'km' ? 'នៅកម្ពុជា' : 'in Cambodia'}
            </p>

            {/* Language indicator */}
            <div className="flex items-center space-x-2 text-xs text-primary-500">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              <span>{currentLang === 'km' ? 'ភាសាខ្មែរ' : 'English'}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;  