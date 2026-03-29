// src/pages/LegalPage.jsx
import React, { useState, useEffect } from "react";
import {
  Home,
  ChevronRight,
  FileText,
  Download,
  Share2,
  Search,
  Filter,
  Calendar,
  Eye,
  Scale,
  Clock,
  Building2,
  X,
  FileCheck,
  FileSignature,
  ScrollText,
  BookMarked,
  FolderOpen,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Check,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import Image from "../images/logo_white.png";
// Import PDF files - Khmer and English versions for each document
import larSopPdfKh from "../images/pdf/2_GDR SOP Final_Khmer-WG_Clean_titles_Anukrit_26_4_2023.pdf";
import larSopPdfEn from "../images/pdf/3_GDR SOP Final_English-WG_Clean_titles_Anukrit_26_4_2023.pdf";
import expropriationLawPdf from "../images/pdf/expropriation-law-kh.pdf";
import cam98711Pdf from "../images/pdf/cam98711.pdf";

// Import PDF thumbnails
import larSopThumbnail from "../images/pdf/thumbnails/Lor.jpg";
import expropriationThumbnail from "../images/pdf/thumbnails/expropriation-thumbnail.jpg";
import cam98711Thumbnail from "../images/pdf/thumbnails/cam98711-thumbnail.png";

const LegalPage = () => {
  const [currentLang, setCurrentLang] = useState("km");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  useEffect(() => {
    if (showDetail || showShareModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showDetail, showShareModal]);

  const translations = {
    km: {
      title: "លិខិតបទដ្ឋានគតិយុត្ត",
      home: "ទំព័រដើម",
      search: "ស្វែងរកឯកសារ...",
      filter: "តម្រង",
      all: "ទាំងអស់",
      categories: "ប្រភេទ",
      year: "ឆ្នាំ",
      download: "ទាញយក",
      downloadKh: "ទាញយកជាភាសាខ្មែរ",
      downloadEn: "ទាញយកជាភាសាអង់គ្លេស",
      share: "ចែករំលែក",
      view: "មើល",
      viewDetails: "មើលលម្អិត",
      back: "ត្រលប់ក្រោយ",
      publishedDate: "ថ្ងៃចេញផ្សាយ",
      effectiveDate: "ថ្ងៃចូលជាធរមាន",
      department: "ស្ថាប័ន",
      fileSize: "ទំហំឯកសារ",
      format: "ទម្រង់",
      pages: "ទំព័រ",
      description: "សេចក្តីសង្ខេប",
      keywords: "ពាក្យគន្លឹះ",
      viewPdf: "បើកមើល PDF",
      shareVia: "ចែករំលែកតាម",
      copyLink: "ចម្លងតំណ",
      copied: "បានចម្លង!",
      close: "បិទ",
      totalDocs: "ឯកសារសរុប",
      page: "ទំព័រ",
      of: "នៃ",
      results: "លទ្ធផល",
      runningText:
        "សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ • WELCOME TO THE OFFICIAL WEBSITE •",

      // Categories
      law: "ច្បាប់",
      procedure: "នីតិវិធី",
      directive: "សេចក្តីណែនាំ",
      regulation: "បទប្បញ្ញត្តិ",
      standard: "ស្តង់ដារ",
    },
    en: {
      title: "Legal Documents",
      home: "Home",
      search: "Search documents...",
      filter: "Filter",
      all: "All",
      categories: "Categories",
      year: "Year",
      download: "Download",
      downloadKh: "Download in Khmer",
      downloadEn: "Download in English",
      share: "Share",
      view: "View",
      viewDetails: "View Details",
      back: "Back",
      publishedDate: "Published Date",
      effectiveDate: "Effective Date",
      department: "Department",
      fileSize: "File Size",
      format: "Format",
      pages: "Pages",
      description: "Description",
      keywords: "Keywords",
      viewPdf: "View PDF",
      shareVia: "Share via",
      copyLink: "Copy Link",
      copied: "Copied!",
      close: "Close",
      totalDocs: "Total Documents",
      page: "Page",
      of: "of",
      results: "results",
      runningText:
        "WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PROJECT IMPACT RESOLUTION • សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ •",

      // Categories
      law: "Law",
      procedure: "Procedure",
      directive: "Directive",
      regulation: "Regulation",
      standard: "Standard",
    },
  };

  const t = translations[currentLang];

  // Helper function to get PDF file based on language
  const getPdfFile = (doc, language) => {
    if (doc.pdfFiles) {
      return language === "km" ? doc.pdfFiles.kh : doc.pdfFiles.en;
    }
    return doc.pdfFile;
  };

  // Helper function to get filename based on language
  const getFileName = (doc, language) => {
    if (language === "km") {
      return doc.title.km;
    } else {
      return doc.title.en;
    }
  };

  // Legal documents data - Updated to match LegalSection structure
  const legalDocuments = [
    {
      id: 1,
      title: {
        km: "Land Acquisition and Involuntary Resettlement",
        en: "Land Acquisition and Involuntary Resettlement",
      },
      category: "procedure",
      date: "13 មីនា 2018",
      dateEn: "March 13, 2018",
      effectiveDate: "13 មីនា 2018",
      effectiveDateEn: "March 13, 2018",
      department: {
        km: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
        en: "General Department of Project Impact Resolution",
      },
      fileSize: "2.8 MB",
      format: "PDF",
      pages: 85,
      pdfFiles: {
        kh: larSopPdfKh,
        en: larSopPdfEn,
      },
      thumbnail: larSopThumbnail,
      icon: <FileText size={20} />,
      description: {
        km: "អនុក្រឹត្យ ស្តីពី ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិ សម្រាប់ការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ដែលទទួលបានហិរញ្ញប្បទានពីដៃគូអភិវឌ្ឍន៍ ក្នុងព្រះរាជាណាចក្រកម្ពុជា",
        en: "Royal Decree on Standard Operating Procedure for Project Impact Resolution for Development Projects Financed by Development Partners in the Kingdom of Cambodia",
      },
      keywords: ["LAR", "ទិញយកដីធ្លី", "ផ្លាស់ទីលំនៅ", "SOP"],
      downloads: 2450,
      views: 5670,
    },
    {
      id: 2,
      title: {
        km: "ច្បាប់ ស្តីពី អស្សាមិករណ៍",
        en: "LAW ON EXPROPRIATION",
      },
      category: "law",
      date: "១៥ កុម្ភៈ ២០១០",
      dateEn: "February 15, 2010",
      effectiveDate: "១ មីនា ២០១០",
      effectiveDateEn: "March 1, 2010",
      department: {
        km: "រដ្ឋសភា",
        en: "National Assembly",
      },
      fileSize: "1.5 MB",
      format: "PDF",
      pages: 45,
      pdfFile: expropriationLawPdf,
      thumbnail: expropriationThumbnail,
      icon: <Scale size={20} />,
      description: {
        km: "បទប្បញ្ញត្តិទូទៅ",
        en: "General Law",
      },
      keywords: ["បូកសរុប", "ទុនបម្រុង", "បណ្តេញយកដី", "សំណង"],
      downloads: 3150,
      views: 8230,
    },
    {
      id: 3,
      title: {
        km: "LAW ON EXPROPRIATION",
        en: "LAW ON EXPROPRIATION",
      },
      category: "directive",
      date: "២០ មិថុនា ២០១៩",
      dateEn: "June 20, 2019",
      effectiveDate: "១ កក្កដា ២០១៩",
      effectiveDateEn: "July 1, 2019",
      department: {
        km: "ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ",
        en: "Ministry of Economy and Finance",
      },
      fileSize: "1.2 MB",
      format: "PDF",
      pages: 32,
      pdfFile: cam98711Pdf,
      thumbnail: cam98711Thumbnail,
      icon: <FileCheck size={20} />,
      description: {
        km: "We Preahkaruna Preahbath Samdach Preah Boromneath Norodom Sihamoni Samanphoum Cheatsasna Rakhatkhaateya Khmemrarothreas Puthibthreathoreamohaksat Khemreachnea Samohopheas Kampuchekreachroathboranaksanti Sopheakmonglea Sereivibolea Khemarasreypreas Preah Chao Krong Kampuchea Thipdey",
        en: "We Preahkaruna Preahbath Samdach Preah Boromneath Norodom Sihamoni Samanphoum Cheatsasna Rakhatkhaateya Khmemrarothreas Puthibthreathoreamohaksat Khemreachnea Samohopheas Kampuchekreachroathboranaksanti Sopheakmonglea Sereivibolea Khemarasreypreas Preah Chao Krong Kampuchea Thipdey",
      },
      keywords: ["អនុសាសន៍", "គម្រោងអភិវឌ្ឍន៍", "ចីរភាព"],
      downloads: 1890,
      views: 4320,
    },
  ];

  const categories = [
    { id: "all", label: t.all, icon: <FolderOpen size={16} /> },
    { id: "law", label: t.law, icon: <Scale size={16} /> },
    { id: "procedure", label: t.procedure, icon: <FileText size={16} /> },
    { id: "directive", label: t.directive, icon: <FileCheck size={16} /> },
    { id: "regulation", label: t.regulation, icon: <BookMarked size={16} /> },
    { id: "standard", label: t.standard, icon: <FileSignature size={16} /> },
  ];

  const years = ["all", "2023", "2022", "2021", "2020", "2019", "2018"];

  // Filter documents
  const filteredDocs = legalDocuments.filter((doc) => {
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const matchesYear =
      selectedYear === "all" || doc.date.includes(selectedYear);
    const matchesSearch =
      doc.title[currentLang]
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      doc.description[currentLang]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesYear && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredDocs.length / itemsPerPage);
  const paginatedDocs = filteredDocs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleViewDetails = (doc) => {
    setSelectedDoc(doc);
    setShowDetail(true);
  };

  const handleViewPdf = (pdfFile) => {
    window.open(pdfFile, "_blank");
  };

  const handleDownload = (doc, language) => {
    const pdfFile = getPdfFile(doc, language);
    const fileName = getFileName(doc, language);
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (doc) => {
    setSelectedDoc(doc);
    setShowShareModal(true);
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/legal/${selectedDoc?.id}`;
    navigator.clipboard.writeText(url);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleShareToSocial = (platform) => {
    const url = `${window.location.origin}/legal/${selectedDoc?.id}`;
    const title = selectedDoc?.title[currentLang];
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=500");
  };

  const getCategoryIcon = (category) => {
    const cat = categories.find((c) => c.id === category);
    return cat ? cat.icon : <FileText size={16} />;
  };

  const getCategoryLabel = (category) => {
    const cat = categories.find((c) => c.id === category);
    return cat ? cat.label : category;
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "law":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "procedure":
        return "bg-green-50 text-green-700 border-green-200";
      case "directive":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  // Responsive List View Component - Thumbnail left, text right on all devices
  const ListView = ({ items }) => (
    <div className="space-y-4">
      {items.map((doc) => (
        <div
          key={doc.id}
          className="bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-[#4CAF50] transition-all duration-300 cursor-pointer group"
          onClick={() => handleViewDetails(doc)}
        >
          <div className="flex p-4 sm:p-5">
            {/* PDF Thumbnail - Always on left */}
            <div className="relative w-28 sm:w-32 h-36 sm:h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 mr-3 sm:mr-5 shadow-md">
              <img
                src={doc.thumbnail}
                alt={doc.title[currentLang]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-1.5 py-0.5 rounded-md text-[10px] font-medium shadow-lg">
                PDF
              </div>
              <div className="absolute bottom-2 left-2">
                <span
                  className={`inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-md text-[10px] font-medium ${getCategoryColor(doc.category)}`}
                >
                  {getCategoryIcon(doc.category)}
                  <span className="hidden sm:inline">
                    {getCategoryLabel(doc.category)}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center text-xs text-gray-400 mb-2">
                <Calendar size={12} className="mr-1 flex-shrink-0" />
                <span className="truncate">
                  {t.publishedDate}:{" "}
                  {currentLang === "km" ? doc.date : doc.dateEn}
                </span>
              </div>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors line-clamp-2">
                {doc.title[currentLang]}
              </h3>

              <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                {doc.description[currentLang]}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <FileText size={10} />
                  {doc.format} • {doc.fileSize}
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={10} />
                  {doc.views}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(doc, "km");
                  }}
                  className="flex items-center justify-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] sm:text-xs rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <Download size={10} className="sm:w-3 sm:h-3" />
                  <span className="hidden xs:inline">{t.downloadKh}</span>
                  <span className="xs:hidden">ខ្មែរ</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(doc, "en");
                  }}
                  className="flex items-center justify-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-green-500 text-green-600 text-[10px] sm:text-xs rounded-lg hover:bg-green-50 transition-all duration-200 font-medium"
                >
                  <Download size={10} className="sm:w-3 sm:h-3" />
                  <span className="hidden xs:inline">{t.downloadEn}</span>
                  <span className="xs:hidden">EN</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(doc);
                  }}
                  className="flex items-center justify-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 text-gray-600 text-[10px] sm:text-xs rounded-lg hover:border-green-500 hover:text-green-600 transition-all duration-200"
                >
                  <Share2 size={10} className="sm:w-3 sm:h-3" />
                  <span className="hidden xs:inline">{t.share}</span>
                  <span className="xs:hidden">ចែក</span>
                </button>
              </div>

              <div className="flex items-center justify-end pt-2 border-t border-gray-100">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewDetails(doc);
                  }}
                  className="flex items-center space-x-1 text-[10px] sm:text-xs text-green-600 hover:text-green-700 font-medium group/btn"
                >
                  <span>{t.viewDetails}</span>
                  <ChevronRightIcon
                    size={10}
                    className="sm:w-3 sm:h-3 group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Responsive Category Filter Component
  const CategoryFilters = () => (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setSelectedCategory(cat.id)}
          className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs transition-colors ${
            selectedCategory === cat.id
              ? "bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-5"
          }`}
        >
          <span className="hidden sm:inline">{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );

  // Responsive Year Filter Component
  const YearFilters = () => (
    <div className="flex flex-wrap gap-2">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => setSelectedYear(year)}
          className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
            selectedYear === year
              ? "bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-5"
          }`}
        >
          {year === "all" ? t.all : year}
        </button>
      ))}
    </div>
  );

  function runningText() {
    function logo() {
      return (
        <img
          src={Image}
          style={{
            height: "20px",
            width: "20px",
            objectFit: "cover",
            display: "inline", // Add this
          }}
        />
      );
    }
    return (
      <>
        {/* ✅ RUNNING TEXT FIXED UNDER HEADER */}

        <div
          className="
            running-text-bar
            sticky
            top-[72px]
            md:top-[140px]
            w-full
            z-40
            overflow-hidden
          bg-gradient-to-r from-[#2E7D32]/80 to-[#4CAF50]/80
            shadow-lg
          "
        >
          <div className="animate-marquee whitespace-nowrap py-2 md:py-3">
            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} អនុក្រឹត្យ ស្តីពី
              ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិសម្រាប់ការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ដែលទទួលបានហិរញ្ញប្បទានពីដៃគូអភិវឌ្ឍន៍
              ក្នុងព្រះណាចក្រកម្ពុជា
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} ច្បាប់ស្តីពី អស្សាមិករណ៍
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} LAW ON EXPROPRIATION
            </span>
            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} អនុក្រឹត្យ ស្តីពី
              ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិសម្រាប់ការងារដោះស្រាយភលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ដែលទទួលបានហិរញ្ញប្បទានពីដៃគូអភិវឌ្ឍន៍
              ក្នុងព្រះណាចក្រកម្ពុជា •
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} ច្បាប់ស្តីពី អស្សាមិករណ៍
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} LAW ON EXPROPRIATION
            </span>
          </div>
        </div>

        {/* ✅ MARQUEE CSS */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: inline-block;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Running Text - Responsive */}
      {runningText()}

      {/* Global Banner - Responsive */}
      <GlobalBanner
        title={t.title}
        subtitle={
          currentLang === "km"
            ? "បណ្តុំឯកសារច្បាប់ និងបទប្បញ្ញត្តិ"
            : "Collection of laws and regulations"
        }
        height="h-[150px] sm:h-[180px] md:h-[250px] lg:h-[350px]"
        showBreadcrumb={true}
      />

      {/* Total Documents Count - Responsive */}
      <Container className="py-4 sm:py-6 pt-6 sm:pt-8">
        <div className="flex items-center justify-between">
          <div className="bg-[#4CAF50] bg-opacity-10 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
            <span className="text-xs sm:text-sm font-medium text-[#2E7D32]">
              {t.totalDocs}: {filteredDocs.length}
            </span>
          </div>
        </div>
      </Container>

      {/* Search and Filter Bar - Responsive */}
      <Container className="pb-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-colors"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-5 transition-colors"
          >
            <Filter size={14} />
            <span>{t.filter}</span>
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">
                  {t.categories}
                </label>
                <CategoryFilters />
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">
                  {t.year}
                </label>
                <YearFilters />
              </div>
            </div>
          </div>
        )}
      </Container>

      {/* Results Info - Responsive */}
      <Container className="py-2">
        <p className="text-xs text-gray-500">
          {t.page} {currentPage} {t.of} {totalPages || 1} •{" "}
          {filteredDocs.length} {t.results}
        </p>
      </Container>

      {/* Documents List */}
      <Container className="pb-8">
        {paginatedDocs.length > 0 ? (
          <ListView items={paginatedDocs} />
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              រកមិនឃើញឯកសារ
            </h3>
            <p className="text-gray-500 mb-4">សូមព្យាយាមស្វែងរកម្តងទៀត</p>
          </div>
        )}

        {/* Pagination - Responsive */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border ${
                currentPage === 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]"
              }`}
            >
              <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
            </button>

            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg font-medium border text-xs sm:text-sm ${
                    currentPage === pageNum
                      ? "bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white border-transparent"
                      : "border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]"
              }`}
            >
              <ChevronRightIcon size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        )}
      </Container>

      {/* Detail Modal - Responsive */}
      {showDetail && selectedDoc && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen px-3 sm:px-4 py-4 sm:py-8">
            <div className="max-w-4xl mx-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 z-10 py-3 sm:py-4 mb-4 sm:mb-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowDetail(false)}
                    className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-[#2E7D32] transition-colors group"
                  >
                    <ChevronRight
                      size={16}
                      className="rotate-180 group-hover:-translate-x-1 transition-transform sm:w-5 sm:h-5"
                    />
                    <span className="text-xs sm:text-sm">{t.back}</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleShare(selectedDoc)}
                      className="p-1.5 sm:p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <Share2
                        size={14}
                        className="text-gray-500 hover:text-[#2E7D32] sm:w-4 sm:h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Document Details */}
              <div className="space-y-4 sm:space-y-6">
                {/* Header with Thumbnail */}
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                  <div className="relative w-40 sm:w-56 h-48 sm:h-72 bg-gray-100 rounded-xl overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0">
                    <img
                      src={selectedDoc.thumbnail}
                      alt={selectedDoc.title[currentLang]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-medium">
                      PDF
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(selectedDoc.category)}`}
                      >
                        {getCategoryLabel(selectedDoc.category)}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                      {selectedDoc.title[currentLang]}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mb-4">
                      {selectedDoc.description[currentLang]}
                    </p>
                  </div>
                </div>

                {/* Meta Info Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <Calendar
                      size={14}
                      className="text-[#4CAF50] mb-1 sm:mb-2 sm:w-4 sm:h-4"
                    />
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      {t.publishedDate}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                      {currentLang === "km"
                        ? selectedDoc.date
                        : selectedDoc.dateEn}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <Clock
                      size={14}
                      className="text-[#4CAF50] mb-1 sm:mb-2 sm:w-4 sm:h-4"
                    />
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      {t.effectiveDate}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                      {currentLang === "km"
                        ? selectedDoc.effectiveDate
                        : selectedDoc.effectiveDateEn}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <Building2
                      size={14}
                      className="text-[#4CAF50] mb-1 sm:mb-2 sm:w-4 sm:h-4"
                    />
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      {t.department}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2">
                      {selectedDoc.department[currentLang]}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <FileText
                      size={14}
                      className="text-[#4CAF50] mb-1 sm:mb-2 sm:w-4 sm:h-4"
                    />
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      {t.format}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                      {selectedDoc.format} • {selectedDoc.fileSize} •{" "}
                      {selectedDoc.pages} {t.pages}
                    </div>
                  </div>
                </div>

                {/* Keywords */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                    {t.keywords}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedDoc.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] sm:text-xs text-gray-600"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download & View Section */}
                <div className="bg-[#4CAF50] bg-opacity-5 rounded-lg p-4 sm:p-6 border border-[#4CAF50] border-opacity-20">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FileText
                        size={20}
                        className="text-[#4CAF50] sm:w-6 sm:h-6"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-1">
                          {selectedDoc.title[currentLang]}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-gray-500">
                          {selectedDoc.format} • {selectedDoc.fileSize}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <button
                        onClick={() =>
                          handleViewPdf(getPdfFile(selectedDoc, currentLang))
                        }
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#4CAF50] text-[#2E7D32] text-xs sm:text-sm rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center space-x-1 sm:space-x-2"
                      >
                        <Eye size={12} className="sm:w-4 sm:h-4" />
                        <span>{t.viewPdf}</span>
                      </button>
                      <button
                        onClick={() => handleDownload(selectedDoc, "km")}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white text-xs sm:text-sm rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-1 sm:space-x-2"
                      >
                        <Download size={12} className="sm:w-4 sm:h-4" />
                        <span className="hidden xs:inline">{t.downloadKh}</span>
                        <span className="xs:hidden">ខ្មែរ</span>
                      </button>
                      <button
                        onClick={() => handleDownload(selectedDoc, "en")}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 border border-[#4CAF50] text-[#2E7D32] text-xs sm:text-sm rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center space-x-1 sm:space-x-2"
                      >
                        <Download size={12} className="sm:w-4 sm:h-4" />
                        <span className="hidden xs:inline">{t.downloadEn}</span>
                        <span className="xs:hidden">EN</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && selectedDoc && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-4 sm:p-6 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-900">
                {t.shareVia}
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={18} className="text-gray-500 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button
                  onClick={() => handleShareToSocial("facebook")}
                  className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#0e63c9] transition-colors"
                >
                  <Facebook size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    Facebook
                  </span>
                </button>
                <button
                  onClick={() => handleShareToSocial("twitter")}
                  className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#0c8ed9] transition-colors"
                >
                  <Twitter size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    Twitter
                  </span>
                </button>
                <button
                  onClick={() => handleShareToSocial("linkedin")}
                  className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#005e8c] transition-colors"
                >
                  <Linkedin size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    LinkedIn
                  </span>
                </button>
                <button
                  onClick={() => handleShareToSocial("telegram")}
                  className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#26A5E4] text-white rounded-lg hover:bg-[#1e8fc7] transition-colors"
                >
                  <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    Telegram
                  </span>
                </button>
              </div>

              <div className="border-t border-gray-100 pt-3 sm:pt-4 mt-2">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={`${window.location.origin}/legal/${selectedDoc.id}`}
                      readOnly
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-lg text-xs sm:text-sm bg-gray-50 text-gray-600"
                    />
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-colors flex items-center space-x-1 sm:space-x-2"
                  >
                    {copySuccess ? (
                      <Check size={14} className="sm:w-4 sm:h-4" />
                    ) : (
                      <Copy size={14} className="sm:w-4 sm:h-4" />
                    )}
                    <span className="text-xs sm:text-sm">
                      {copySuccess ? t.copied : t.copyLink}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: inline-block;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 60s;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .animate-marquee {
            animation-duration: 50s;
          }
        }

        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LegalPage;
