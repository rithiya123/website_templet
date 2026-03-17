// src/pages/ContactPage.jsx
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Copy,
  ExternalLink,
  Building2,
  Users,
  FileText,
  HelpCircle,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";

const ContactPage = () => {
  const [currentLang, setCurrentLang] = useState("km");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [copied, setCopied] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

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

  // Translations
  const translations = {
    km: {
      pageTitle: "ទំនាក់ទំនង",
      pageSubtitle: "មធ្យោបាយទំនាក់ទំនងជាមួយអគ្គនាយកដ្ឋានពន្ធនាគារ",
      home: "ទំព័រដើម",
      form: {
        title: "ផ្ញើសារ",
        name: "ឈ្មោះពេញ",
        email: "អាសយដ្ឋានអ៊ីមែល",
        phone: "លេខទូរស័ព្ទ",
        subject: "ប្រធានបទ",
        message: "ខ្លឹមសារ",
        send: "ផ្ញើសារ",
        sending: "កំពុងផ្ញើ...",
        success: "សាររបស់លោកអ្នកត្រូវបានផ្ញើដោយជោគជ័យ",
        error: "សូមទោស មានបញ្ហាបច្ចេកទេស។ សូមព្យាយាមម្តងទៀត",
      },
      info: {
        title: "ព័ត៌មានទំនាក់ទំនង",
        address: "អាសយដ្ឋាន",
        phone: "ទូរស័ព្ទ",
        email: "អ៊ីមែល",
        fax: "ទូរសារ",
        hours: "ម៉ោងធ្វើការ",
        hoursDetail: "ច័ន្ទ - សុក្រ: ៧:៣០ ព្រឹក - ៥:៣០ ល្ងាច",
        closed: "បិទថ្ងៃសៅរ៍ អាទិត្យ និងថ្ងៃបុណ្យសាសនា",
        viewMap: "មើលផែនទី",
        copy: "ចម្លង",
        copied: "បានចម្លង",
      },
      departments: {
        title: "នាយកដ្ឋាន",
        general: "នាយកដ្ឋានទូទៅ",
        admin: "នាយកដ្ឋានរដ្ឋបាល",
        finance: "នាយកដ្ឋានហិរញ្ញវត្ថុ",
        legal: "នាយកដ្ឋានច្បាប់",
        hr: "នាយកដ្ឋានធនធានមនុស្ស",
      },
      faq: {
        title: "សំណួរពេញនិយម",
        q1: "តើត្រូវចំណាយពេលប៉ុន្មានដើម្បីទទួលបានការឆ្លើយតប?",
        a1: "ជាទូទៅ យើងឆ្លើយតបក្នុងរយៈពេល ៣ ថ្ងៃធ្វើការ។",
        q2: "តើខ្ញុំអាចស្នើសុំឯកសារផ្លូវការតាមអ៊ីមែលបានទេ?",
        a2: "បាទ/ចាស។ សូមផ្ញើសំណើមកកាន់ info@gdp.gov.kh",
        q3: "តើត្រូវធ្វើដូចម្តេចដើម្បីស្នើសុំជួបជាមួយថ្នាក់ដឹកនាំ?",
        a3: "សូមទាក់ទងមកកាន់លេខទូរស័ព្ទ ០៧១ ២៥៨ ០៨៩៦ ដើម្បីធ្វើការណាត់ជួប",
        q4: "តើអគ្គនាយកដ្ឋានមានសេវាកម្មអ្វីខ្លះ?",
        a4: "យើងខ្ញុំផ្តល់សេវាកម្មព័ត៌មាន ការចេញឯកសារ និងការផ្តល់ប្រឹក្សាពាក់ព័ន្ធនឹងពន្ធនាគារ",
      },
      map: {
        title: "ទីតាំង",
      },
    },
    en: {
      pageTitle: "Contact Us",
      pageSubtitle: "Ways to contact the General Department of Prisons",
      home: "Home",
      form: {
        title: "Send a Message",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Your message has been sent successfully",
        error: "Sorry, a technical error occurred. Please try again",
      },
      info: {
        title: "Contact Information",
        address: "Address",
        phone: "Phone",
        email: "Email",
        fax: "Fax",
        hours: "Office Hours",
        hoursDetail: "Monday - Friday: 7:30 AM - 5:30 PM",
        closed: "Closed on Saturdays, Sundays and Public Holidays",
        viewMap: "View Map",
        copy: "Copy",
        copied: "Copied",
      },
      departments: {
        title: "Departments",
        general: "General Department",
        admin: "Administration",
        finance: "Finance",
        legal: "Legal",
        hr: "Human Resources",
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "How long does it take to get a response?",
        a1: "We typically respond within 3 business days.",
        q2: "Can I request official documents via email?",
        a2: "Yes. Please send your request to info@gdp.gov.kh",
        q3: "How to request a meeting with leadership?",
        a3: "Please call 071 258 0896 to schedule an appointment",
        q4: "What services does the department provide?",
        a4: "We provide information services, document issuance, and consultation related to prisons",
      },
      map: {
        title: "Location",
      },
    },
  };

  const t = translations[currentLang];

  // Contact information
  const contactInfo = {
    address: {
      km: "អគារលេខ៣០៨ មហាវិថីព្រះមុនីវង្ស សង្កាត់បឹងព្រលឹត ខណ្ឌឫស្សីកែវ រាជធានីភ្នំពេញ",
      en: "Building 308, Preah Monivong Blvd, Sangkat Boeng Prolit, Khan Russey Keo, Phnom Penh",
    },
    phone: "+855 71 258 0896",
    email: "info@gdp.gov.kh",
    fax: "+855 23 123 456",
  };

  const departments = [
    { id: "general", name: t.departments.general, phone: "071 258 0896" },
    { id: "admin", name: t.departments.admin, phone: "071 258 0897" },
    { id: "finance", name: t.departments.finance, phone: "071 258 0898" },
    { id: "legal", name: t.departments.legal, phone: "071 258 0899" },
    { id: "hr", name: t.departments.hr, phone: "071 258 0900" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-white">
      {/* Header with Breadcrumb - Matching LegalPage */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-40">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Home size={18} className="text-gray-500" />
              </Link>
              
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm">
                <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors">
                  {t.home}
                </Link>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-primary-600 font-medium">{t.pageTitle}</span>
              </nav>
            </div>

            <div className="flex items-center space-x-1">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Page Header - Clean */}
      <div className="bg-white border-b border-gray-100">
        <Container className="py-12">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-gray-500 mb-3">
              <Phone size={16} />
              <span className="text-xs font-medium uppercase tracking-wider">{t.pageTitle}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">{t.pageTitle}</h1>
            <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
              {t.pageSubtitle}
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h2 className="font-medium text-gray-700 flex items-center text-sm">
                  <Building2 size={16} className="mr-2 text-gray-500" />
                  {t.info.title}
                </h2>
              </div>
              <div className="p-5 space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">{t.info.address}</p>
                    <p className="text-sm text-gray-700">
                      {currentLang === "km" ? contactInfo.address.km : contactInfo.address.en}
                    </p>
                    <button
                      onClick={() => handleCopy(
                        currentLang === "km" ? contactInfo.address.km : contactInfo.address.en,
                        "address"
                      )}
                      className="text-xs text-gray-500 hover:text-gray-700 mt-1 flex items-center"
                    >
                      <Copy size={10} className="mr-1" />
                      {copied === "address" ? t.info.copied : t.info.copy}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">{t.info.phone}</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-700 hover:text-gray-900">
                      {contactInfo.phone}
                    </a>
                    <button
                      onClick={() => handleCopy(contactInfo.phone, "phone")}
                      className="text-xs text-gray-500 hover:text-gray-700 mt-1 flex items-center"
                    >
                      <Copy size={10} className="mr-1" />
                      {copied === "phone" ? t.info.copied : t.info.copy}
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">{t.info.email}</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-700 hover:text-gray-900">
                      {contactInfo.email}
                    </a>
                    <button
                      onClick={() => handleCopy(contactInfo.email, "email")}
                      className="text-xs text-gray-500 hover:text-gray-700 mt-1 flex items-center"
                    >
                      <Copy size={10} className="mr-1" />
                      {copied === "email" ? t.info.copied : t.info.copy}
                    </button>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex items-start space-x-3">
                  <FileText size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{t.info.fax}</p>
                    <p className="text-sm text-gray-700">{contactInfo.fax}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 pt-3 border-t border-gray-100">
                  <Clock size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{t.info.hours}</p>
                    <p className="text-sm text-gray-700">{t.info.hoursDetail}</p>
                    <p className="text-xs text-gray-500 mt-1">{t.info.closed}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h2 className="font-medium text-gray-700 flex items-center text-sm">
                  <Users size={16} className="mr-2 text-gray-500" />
                  {t.departments.title}
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {departments.map((dept) => (
                  <div key={dept.id} className="p-3 hover:bg-gray-50 transition-colors">
                    <p className="text-sm font-medium text-gray-800">{dept.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{dept.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h2 className="font-medium text-gray-700 flex items-center text-sm">
                  <Send size={16} className="mr-2 text-gray-500" />
                  {t.form.title}
                </h2>
              </div>

              <div className="p-6">
                {formStatus === "success" && (
                  <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700 text-xs">
                    <CheckCircle size={14} className="mr-2" />
                    {t.form.success}
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700 text-xs">
                    <AlertCircle size={14} className="mr-2" />
                    {t.form.error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        {t.form.name} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        {t.form.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      {t.form.subject} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      {t.form.message} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "sending" ? t.form.sending : t.form.send}
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h2 className="font-medium text-gray-700 flex items-center text-sm">
                  <MapPin size={16} className="mr-2 text-gray-500" />
                  {t.map.title}
                </h2>
              </div>
              <div className="p-6">
                <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.773015555563!2d104.88098731462015!3d11.56584759178617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095173761d4a53%3A0x2d9b4a5c7b5d3c0!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1620000000000!5m2!1sen!2skh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="GDP Location Map"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-3 text-right">
                  <a
                    href="https://maps.google.com/?q=Phnom+Penh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-gray-600 hover:text-gray-900"
                  >
                    {t.info.viewMap}
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h2 className="font-medium text-gray-700 flex items-center text-sm">
              <HelpCircle size={16} className="mr-2 text-gray-500" />
              {t.faq.title}
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === item ? null : item)}
                    className="w-full flex items-center justify-between p-3 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-800">{t.faq[`q${item}`]}</span>
                    <ChevronRight
                      size={14}
                      className={`text-gray-400 transition-transform ${
                        activeFaq === item ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  
                  {activeFaq === item && (
                    <div className="px-3 pb-3 text-sm text-gray-600 bg-gray-50">
                      {t.faq[`a${item}`]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;