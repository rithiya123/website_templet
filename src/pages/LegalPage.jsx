// src/pages/LegalPage.jsx
import React, { useState, useEffect } from 'react';
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
  Grid,
  List,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container.jsx';

// Import PDF files
import larSopPdf from '../images/pdf/LAR-SOP-Final-13032018.pdf';
import expropriationLawPdf from '../images/pdf/expropriation-law-kh.pdf';
import cam98711Pdf from '../images/pdf/cam98711.pdf';

const LegalPage = () => {
  const [currentLang, setCurrentLang] = useState('km');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
    if (showDetail || showShareModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDetail, showShareModal]);

  const translations = {
    km: {
      title: 'លិខិតបទដ្ឋានគតិយុត្ត',
      home: 'ទំព័រដើម',
      search: 'ស្វែងរកឯកសារ...',
      filter: 'តម្រង',
      all: 'ទាំងអស់',
      categories: 'ប្រភេទ',
      year: 'ឆ្នាំ',
      download: 'ទាញយក',
      share: 'ចែករំលែក',
      view: 'មើល',
      viewDetails: 'មើលលម្អិត',
      back: 'ត្រលប់ក្រោយ',
      publishedDate: 'ថ្ងៃចេញផ្សាយ',
      effectiveDate: 'ថ្ងៃចូលជាធរមាន',
      department: 'ស្ថាប័ន',
      fileSize: 'ទំហំឯកសារ',
      format: 'ទម្រង់',
      pages: 'ទំព័រ',
      description: 'សេចក្តីសង្ខេប',
      keywords: 'ពាក្យគន្លឹះ',
      viewPdf: 'បើកមើល PDF',
      shareVia: 'ចែករំលែកតាម',
      copyLink: 'ចម្លងតំណ',
      copied: 'បានចម្លង!',
      close: 'បិទ',
      totalDocs: 'ឯកសារសរុប',
      page: 'ទំព័រ',
      of: 'នៃ',
      results: 'លទ្ធផល',
      gridView: 'ទម្រង់ក្រឡា',
      listView: 'ទម្រង់បញ្ជី',
      
      // Categories
      law: 'ច្បាប់',
      procedure: 'នីតិវិធី',
      directive: 'សេចក្តីណែនាំ',
      regulation: 'បទប្បញ្ញត្តិ',
      standard: 'ស្តង់ដារ'
    },
    en: {
      title: 'Legal Documents',
      home: 'Home',
      search: 'Search documents...',
      filter: 'Filter',
      all: 'All',
      categories: 'Categories',
      year: 'Year',
      download: 'Download',
      share: 'Share',
      view: 'View',
      viewDetails: 'View Details',
      back: 'Back',
      publishedDate: 'Published Date',
      effectiveDate: 'Effective Date',
      department: 'Department',
      fileSize: 'File Size',
      format: 'Format',
      pages: 'Pages',
      description: 'Description',
      keywords: 'Keywords',
      viewPdf: 'View PDF',
      shareVia: 'Share via',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      close: 'Close',
      totalDocs: 'Total Documents',
      page: 'Page',
      of: 'of',
      results: 'results',
      gridView: 'Grid View',
      listView: 'List View',
      
      // Categories
      law: 'Law',
      procedure: 'Procedure',
      directive: 'Directive',
      regulation: 'Regulation',
      standard: 'Standard'
    }
  };

  const t = translations[currentLang];

  // Legal documents data with 3 sample PDFs
  const legalDocuments = [
    {
      id: 1,
      title: {
        km: 'នីតិវិធីប្រតិបត្តិស្តីពីការទិញយកដីធ្លី និងការផ្លាស់ទីលំនៅដោយមិនមានឆន្ទៈ (LAR)',
        en: 'Land Acquisition and Resettlement (LAR) Standard Operating Procedure'
      },
      category: 'procedure',
      number: 'LAR-SOP-001',
      date: '13 មីនា 2018',
      dateEn: 'March 13, 2018',
      effectiveDate: '13 មីនា 2018',
      effectiveDateEn: 'March 13, 2018',
      department: 'អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍',
      departmentEn: 'General Department of Project Impact Resolution',
      fileSize: '2.8 MB',
      format: 'PDF',
      pages: 85,
      pdfFile: larSopPdf,
      icon: <FileText size={24} />,
      description: {
        km: 'ឯកសារនេះបង្ហាញពីនីតិវិធីប្រតិបត្តិស្តង់ដារសម្រាប់ការទិញយកដីធ្លី និងការផ្លាស់ទីលំនៅដោយមិនមានឆន្ទៈ ដើម្បីធានាបាននូវយុត្តិធម៌ និងតម្លាភាពក្នុងការអនុវត្តគម្រោងអភិវឌ្ឍន៍។',
        en: 'This document presents the standard operating procedure for land acquisition and involuntary resettlement to ensure fairness and transparency in the implementation of development projects.'
      },
      keywords: ['LAR', 'ទិញយកដីធ្លី', 'ផ្លាស់ទីលំនៅ', 'SOP'],
      downloads: 2450,
      views: 5670
    },
    {
      id: 2,
      title: {
        km: 'ច្បាប់ស្តីពីការបូកសរុបទុនបម្រុងក្នុងការបណ្តេញយកដីធ្លី',
        en: 'Law on Expropriation'
      },
      category: 'law',
      number: 'ច្បាប់លេខ ០៣/២០១០',
      date: '១៥ កុម្ភៈ ២០១០',
      dateEn: 'February 15, 2010',
      effectiveDate: '១ មីនា ២០១០',
      effectiveDateEn: 'March 1, 2010',
      department: 'រដ្ឋសភា',
      departmentEn: 'National Assembly',
      fileSize: '1.5 MB',
      format: 'PDF',
      pages: 45,
      pdfFile: expropriationLawPdf,
      icon: <Scale size={24} />,
      description: {
        km: 'ច្បាប់នេះកំណត់អំពីគោលការណ៍ នីតិវិធី និងសំណងសម្រាប់ការបូកសរុបទុនបម្រុងក្នុងការបណ្តេញយកដីធ្លី ដើម្បីប្រយោជន៍សាធារណៈ។',
        en: 'This law defines the principles, procedures and compensation for expropriation for public benefit.'
      },
      keywords: ['បូកសរុប', 'ទុនបម្រុង', 'បណ្តេញយកដី', 'សំណង'],
      downloads: 3150,
      views: 8230
    },
    {
      id: 3,
      title: {
        km: 'អនុសាសន៍ស្តីពីការអនុវត្តគម្រោងអភិវឌ្ឍន៍ប្រកបដោយចីរភាព',
        en: 'Recommendation on Sustainable Development Project Implementation'
      },
      category: 'directive',
      number: 'CAM-98711',
      date: '២០ មិថុនា ២០១៩',
      dateEn: 'June 20, 2019',
      effectiveDate: '១ កក្កដា ២០១៩',
      effectiveDateEn: 'July 1, 2019',
      department: 'ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ',
      departmentEn: 'Ministry of Economy and Finance',
      fileSize: '1.2 MB',
      format: 'PDF',
      pages: 32,
      pdfFile: cam98711Pdf,
      icon: <FileCheck size={24} />,
      description: {
        km: 'ឯកសារនេះផ្តល់អនុសាសន៍ និងគោលការណ៍ណែនាំសម្រាប់ការអនុវត្តគម្រោងអភិវឌ្ឍន៍ប្រកបដោយចីរភាព ដោយគិតគូរដល់ផលប៉ះពាល់សេដ្ឋកិច្ច សង្គម និងបរិស្ថាន។',
        en: 'This document provides recommendations and guidelines for sustainable development project implementation, considering economic, social and environmental impacts.'
      },
      keywords: ['អនុសាសន៍', 'គម្រោងអភិវឌ្ឍន៍', 'ចីរភាព'],
      downloads: 1890,
      views: 4320
    }
  ];

  const categories = [
    { id: 'all', label: t.all, icon: <FolderOpen size={16} /> },
    { id: 'law', label: t.law, icon: <Scale size={16} /> },
    { id: 'procedure', label: t.procedure, icon: <FileText size={16} /> },
    { id: 'directive', label: t.directive, icon: <FileCheck size={16} /> },
    { id: 'regulation', label: t.regulation, icon: <BookMarked size={16} /> },
    { id: 'standard', label: t.standard, icon: <FileSignature size={16} /> }
  ];

  const years = ['all', '2023', '2022', '2021', '2020', '2019', '2018'];

  // Filter documents
  const filteredDocs = legalDocuments.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || doc.date.includes(selectedYear);
    const matchesSearch = doc.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesYear && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredDocs.length / itemsPerPage);
  const paginatedDocs = filteredDocs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDetails = (doc) => {
    setSelectedDoc(doc);
    setShowDetail(true);
  };

  const handleDownload = (pdfFile, title) => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPdf = (pdfFile) => {
    window.open(pdfFile, '_blank');
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
    let shareUrl = '';

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=500');
  };

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : <FileText size={16} />;
  };

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.label : category;
  };

  // Grid View Component
  const GridView = ({ items }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((doc) => (
        <div
          key={doc.id}
          className="bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#4CAF50] transition-all duration-300 overflow-hidden cursor-pointer group"
          onClick={() => handleViewDetails(doc)}
        >
          <div className="p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#4CAF50]">
                {doc.icon}
              </div>
              <span className="text-xs font-medium text-[#2E7D32] bg-[#4CAF50] bg-opacity-10 px-2 py-0.5 rounded-full">
                {getCategoryLabel(doc.category)}
              </span>
            </div>
            
            <h3 className="text-base font-medium text-gray-900 mb-2 leading-relaxed line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
              {doc.title[currentLang]}
            </h3>
            
            <div className="flex items-center text-xs text-gray-500 mb-3">
              <Calendar size={12} className="mr-1" />
              <span>{doc.date}</span>
              <span className="mx-2">•</span>
              <FileText size={12} className="mr-1" />
              <span>{doc.format}</span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {doc.description[currentLang]}
            </p>
            
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <button 
                  className="p-1.5 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(doc);
                  }}
                >
                  <Share2 size={14} className="text-gray-400 hover:text-[#2E7D32]" />
                </button>
                <button 
                  className="p-1.5 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(doc.pdfFile, doc.title[currentLang]);
                  }}
                >
                  <Download size={14} className="text-gray-400 hover:text-[#2E7D32]" />
                </button>
              </div>
              <span className="text-xs text-[#4CAF50] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                {t.viewDetails}
                <ChevronRightIcon size={12} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // List View Component
  const ListView = ({ items }) => (
    <div className="space-y-3">
      {items.map((doc) => (
        <div
          key={doc.id}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-[#4CAF50] transition-all cursor-pointer group"
          onClick={() => handleViewDetails(doc)}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#4CAF50]">
                {doc.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-medium text-[#2E7D32] bg-[#4CAF50] bg-opacity-10 px-2 py-0.5 rounded-full">
                    {getCategoryLabel(doc.category)}
                  </span>
                  <span className="text-xs text-gray-400">{doc.number}</span>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors">
                  {doc.title[currentLang]}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                  <span className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {doc.date}
                  </span>
                  <span className="flex items-center">
                    <FileText size={12} className="mr-1" />
                    {doc.format} • {doc.fileSize}
                  </span>
                  <span className="flex items-center">
                    <Eye size={12} className="mr-1" />
                    {doc.views}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare(doc);
                }}
              >
                <Share2 size={16} className="text-gray-500 hover:text-[#2E7D32]" />
              </button>
              <button 
                className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(doc.pdfFile, doc.title[currentLang]);
                }}
              >
                <Download size={16} className="text-gray-500 hover:text-[#2E7D32]" />
              </button>
              <ChevronRightIcon size={18} className="text-gray-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Breadcrumb */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-40">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-5 rounded-lg transition-colors"
              >
                <Home size={18} className="text-gray-500" />
              </Link>
              
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm">
                <Link to="/" className="text-gray-500 hover:text-[#2E7D32] transition-colors">
                  {t.home}
                </Link>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-[#2E7D32] font-medium">{t.title}</span>
              </nav>
            </div>
          </div>
        </Container>
      </div>

      {/* Page Header */}
      <Container className="py-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-[#4CAF50] mb-3">
            <Scale size={16} />
            <span className="text-xs font-medium uppercase tracking-wider">{t.title}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">{t.title}</h1>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
            {currentLang === 'km' 
              ? 'បណ្តុំឯកសារច្បាប់ និងបទប្បញ្ញត្តិស្តីពីការដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោង'
              : 'Collection of laws and regulations on project impact resolution'
            }
          </p>
          <div className="w-12 h-0.5 bg-[#4CAF50] mt-4"></div>
        </div>
      </Container>

      {/* Total Documents Count */}
      <Container className="pb-4">
        <div className="flex items-center justify-between">
          <div className="bg-[#4CAF50] bg-opacity-10 rounded-lg px-4 py-2">
            <span className="text-sm font-medium text-[#2E7D32]">
              {t.totalDocs}: {filteredDocs.length}
            </span>
          </div>
        </div>
      </Container>

      {/* Search and Filter Bar */}
      <Container className="pb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-colors"
            />
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-white text-[#2E7D32] shadow-sm"
                  : "text-gray-500 hover:text-[#2E7D32]"
              }`}
              title={t.gridView}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-white text-[#2E7D32] shadow-sm"
                  : "text-gray-500 hover:text-[#2E7D32]"
              }`}
              title={t.listView}
            >
              <List size={18} />
            </button>
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
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">{t.categories}</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-5'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">{t.year}</label>
                <div className="flex flex-wrap gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                        selectedYear === year
                          ? 'bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-5'
                      }`}
                    >
                      {year === 'all' ? t.all : year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>

      {/* Results Info */}
      <Container className="py-2">
        <p className="text-xs text-gray-500">
          {t.page} {currentPage} {t.of} {totalPages || 1} • {filteredDocs.length} {t.results}
        </p>
      </Container>

      {/* Documents Grid/List */}
      <Container className="pb-8">
        {paginatedDocs.length > 0 ? (
          viewMode === "grid" ? (
            <GridView items={paginatedDocs} />
          ) : (
            <ListView items={paginatedDocs} />
          )
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញឯកសារ</h3>
            <p className="text-gray-500 mb-4">សូមព្យាយាមស្វែងរកម្តងទៀត</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                currentPage === 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]'
              }`}
            >
              <ChevronLeft size={16} />
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
                  className={`w-9 h-9 rounded-lg font-medium border ${
                    currentPage === pageNum
                      ? 'bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white border-transparent'
                      : 'border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                currentPage === totalPages
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]'
              }`}
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        )}
      </Container>

      {/* Detail Modal */}
      {showDetail && selectedDoc && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 z-10 py-4 mb-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowDetail(false)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-[#2E7D32] transition-colors group"
                  >
                    <ChevronRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm">{t.back}</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleShare(selectedDoc)}
                      className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <Share2 size={16} className="text-gray-500 hover:text-[#2E7D32]" />
                    </button>
                    <button 
                      onClick={() => handleDownload(selectedDoc.pdfFile, selectedDoc.title[currentLang])}
                      className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <Download size={16} className="text-gray-500 hover:text-[#2E7D32]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Document Details */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-[#4CAF50] bg-opacity-10 rounded-xl text-[#4CAF50]">
                    {selectedDoc.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-medium text-[#2E7D32] bg-[#4CAF50] bg-opacity-10 px-2 py-0.5 rounded-full">
                        {getCategoryLabel(selectedDoc.category)}
                      </span>
                      <span className="text-xs text-gray-400">{selectedDoc.number}</span>
                    </div>
                    <h2 className="text-2xl font-medium text-gray-900 mb-2">
                      {selectedDoc.title[currentLang]}
                    </h2>
                  </div>
                </div>

                {/* Meta Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Calendar size={16} className="text-[#4CAF50] mb-2" />
                    <div className="text-xs text-gray-500">{t.publishedDate}</div>
                    <div className="text-sm font-medium text-gray-900">{selectedDoc.date}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Clock size={16} className="text-[#4CAF50] mb-2" />
                    <div className="text-xs text-gray-500">{t.effectiveDate}</div>
                    <div className="text-sm font-medium text-gray-900">{selectedDoc.effectiveDate}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Building2 size={16} className="text-[#4CAF50] mb-2" />
                    <div className="text-xs text-gray-500">{t.department}</div>
                    <div className="text-sm font-medium text-gray-900">{selectedDoc.department}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <FileText size={16} className="text-[#4CAF50] mb-2" />
                    <div className="text-xs text-gray-500">{t.format}</div>
                    <div className="text-sm font-medium text-gray-900">{selectedDoc.format} • {selectedDoc.fileSize} • {selectedDoc.pages} {t.pages}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">{t.description}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedDoc.description[currentLang]}
                  </p>
                </div>

                {/* Keywords */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">{t.keywords}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoc.keywords.map((keyword, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download & View Section */}
                <div className="bg-[#4CAF50] bg-opacity-5 rounded-lg p-6 border border-[#4CAF50] border-opacity-20">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText size={24} className="text-[#4CAF50]" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{selectedDoc.title[currentLang]}</h4>
                        <p className="text-xs text-gray-500">{selectedDoc.format} • {selectedDoc.fileSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => handleViewPdf(selectedDoc.pdfFile)}
                        className="px-4 py-2 bg-white border border-[#4CAF50] text-[#2E7D32] text-sm rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center space-x-2"
                      >
                        <Eye size={14} />
                        <span>{t.viewPdf}</span>
                      </button>
                      <button 
                        onClick={() => handleDownload(selectedDoc.pdfFile, selectedDoc.title[currentLang])}
                        className="px-4 py-2 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white text-sm rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                      >
                        <Download size={14} />
                        <span>{t.download}</span>
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
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{t.shareVia}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-3">
              {/* Social Media Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleShareToSocial('facebook')}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#0e63c9] transition-colors"
                >
                  <Facebook size={18} />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
                <button
                  onClick={() => handleShareToSocial('twitter')}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#0c8ed9] transition-colors"
                >
                  <Twitter size={18} />
                  <span className="text-sm font-medium">Twitter</span>
                </button>
                <button
                  onClick={() => handleShareToSocial('linkedin')}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#005e8c] transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </button>
                <button
                  onClick={() => handleShareToSocial('telegram')}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#26A5E4] text-white rounded-lg hover:bg-[#1e8fc7] transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm font-medium">Telegram</span>
                </button>
              </div>
              
              {/* Copy Link */}
              <div className="border-t border-gray-100 pt-4 mt-2">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={`${window.location.origin}/legal/${selectedDoc.id}`}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600"
                    />
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-colors flex items-center space-x-2"
                  >
                    {copySuccess ? <Check size={16} /> : <Copy size={16} />}
                    <span className="text-sm">{copySuccess ? t.copied : t.copyLink}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalPage;