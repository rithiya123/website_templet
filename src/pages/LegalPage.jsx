// src/pages/LegalPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  Home,
  ChevronRight,
  FileText,
  Download,
  Share2,
  Printer,
  Search,
  Filter,
  Calendar,
  Eye,
  Star,
  BookOpen,
  Scale,
  Gavel,
  Shield,
  Award,
  Clock,
  Users,
  Building2,
  Globe,
  Mail,
  Phone,
  MapPin,
  X,
  ChevronDown,
  ChevronUp,
  File,
  FileArchive,
  FileCheck,
  FileSignature,
  Landmark,
  ScrollText,
  Newspaper,
  BookMarked,
  FolderOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container.jsx';

const LegalPage = () => {
  const [currentLang, setCurrentLang] = useState('km');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedDoc, setExpandedDoc] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

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
    if (showDetail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDetail]);

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
      print: 'បោះពុម្ព',
      view: 'មើល',
      viewDetails: 'មើលលម្អិត',
      readMore: 'អានបន្ត',
      back: 'ត្រលប់ក្រោយ',
      publishedDate: 'ថ្ងៃចេញផ្សាយ',
      effectiveDate: 'ថ្ងៃចូលជាធរមាន',
      department: 'ស្ថាប័ន',
      fileSize: 'ទំហំឯកសារ',
      format: 'ទម្រង់',
      pages: 'ទំព័រ',
      description: 'សេចក្តីសង្ខេប',
      keywords: 'ពាក្យគន្លឹះ',
      related: 'ឯកសារពាក់ព័ន្ធ',
      
      // Categories
      royalDecree: 'ព្រះរាជក្រឹត្យ',
      subDecree: 'អនុក្រឹត្យ',
      prakas: 'ប្រកាស',
      directive: 'សេចក្តីណែនាំ',
      law: 'ច្បាប់',
      regulation: 'បទប្បញ្ញត្តិ',
      circular: 'សារាចរ',
      decision: 'សេចក្តីសម្រេច',
      
      // Stats
      totalDocs: 'ឯកសារសរុប',
      updated: 'ធ្វើបច្ចុប្បន្នភាព',
      categories_count: 'ប្រភេទ',
      downloads: 'ទាញយក',
      
      // Contact
      contact: 'ទំនាក់ទំនងបន្ថែម',
      contactDesc: 'សម្រាប់ព័ត៌មានបន្ថែម សូមទំនាក់ទំនង',
      email: 'legal@prison.gov.kh',
      phone: '023 123 456'
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
      print: 'Print',
      view: 'View',
      viewDetails: 'View Details',
      readMore: 'Read More',
      back: 'Back',
      publishedDate: 'Published Date',
      effectiveDate: 'Effective Date',
      department: 'Department',
      fileSize: 'File Size',
      format: 'Format',
      pages: 'Pages',
      description: 'Description',
      keywords: 'Keywords',
      related: 'Related Documents',
      
      // Categories
      royalDecree: 'Royal Decree',
      subDecree: 'Sub-Decree',
      prakas: 'Prakas',
      directive: 'Directive',
      law: 'Law',
      regulation: 'Regulation',
      circular: 'Circular',
      decision: 'Decision',
      
      // Stats
      totalDocs: 'Total Documents',
      updated: 'Updated',
      categories_count: 'Categories',
      downloads: 'Downloads',
      
      // Contact
      contact: 'Further Contact',
      contactDesc: 'For more information, please contact',
      email: 'legal@prison.gov.kh',
      phone: '023 123 456'
    }
  };

  const t = translations[currentLang];

  // Legal documents data
  const legalDocuments = [
    {
      id: 1,
      title: {
        km: 'ព្រះរាជក្រឹត្យ ស្តីពីការរៀបចំ និងការប្រព្រឹត្តទៅនៃអគ្គនាយកដ្ឋានពន្ធនាគារ',
        en: 'Royal Decree on the Organization and Functioning of the General Department of Prisons'
      },
      category: 'royalDecree',
      number: 'ន.០២/២២៣',
      date: '១៥ មីនា ២០២២',
      dateEn: 'March 15, 2022',
      effectiveDate: '១ មេសា ២០២២',
      effectiveDateEn: 'April 1, 2022',
      department: 'ព្រះបរមរាជវាំង',
      departmentEn: 'Royal Palace',
      fileSize: '2.4 MB',
      format: 'PDF',
      pages: 45,
      icon: <ScrollText size={24} />,
      description: {
        km: 'ព្រះរាជក្រឹត្យនេះ កំណត់អំពីរចនាសម្ព័ន្ធ តួនាទី និងភារកិច្ចរបស់អគ្គនាយកដ្ឋានពន្ធនាគារ ព្រមទាំងការរៀបចំ និងការប្រព្រឹត្តទៅនៃស្ថាប័ននេះ។',
        en: 'This Royal Decree defines the structure, roles and responsibilities of the General Department of Prisons, as well as the organization and functioning of this institution.'
      },
      keywords: ['រចនាសម្ព័ន្ធ', 'ពន្ធនាគារ', 'ក្រឹត្យ'],
      downloads: 1250,
      views: 3450
    },
    {
      id: 2,
      title: {
        km: 'អនុក្រឹត្យ ស្តីពីការគ្រប់គ្រងពន្ធនាគារ',
        en: 'Sub-Decree on Prison Management'
      },
      category: 'subDecree',
      number: 'អន.៤៥/២២៣',
      date: '២០ ឧសភា ២០២២',
      dateEn: 'May 20, 2022',
      effectiveDate: '១ មិថុនា ២០២២',
      effectiveDateEn: 'June 1, 2022',
      department: 'ទីស្តីការគណៈរដ្ឋមន្ត្រី',
      departmentEn: 'Council of Ministers',
      fileSize: '1.8 MB',
      format: 'PDF',
      pages: 32,
      icon: <FileText size={24} />,
      description: {
        km: 'អនុក្រឹត្យនេះ កំណត់អំពីគោលការណ៍ នីតិវិធី និងវិធានការនានាក្នុងការគ្រប់គ្រងពន្ធនាគារ រួមទាំងសិទ្ធិ និងកាតព្វកិច្ចរបស់អ្នកទោស។',
        en: 'This Sub-Decree defines the principles, procedures and measures in prison management, including the rights and obligations of prisoners.'
      },
      keywords: ['គ្រប់គ្រង', 'ពន្ធនាគារ', 'នីតិវិធី'],
      downloads: 980,
      views: 2100
    },
    {
      id: 3,
      title: {
        km: 'ប្រកាស ស្តីពីការបណ្តុះបណ្តាលវិជ្ជាជីវៈសម្រាប់អ្នកទោស',
        en: 'Prakas on Vocational Training for Prisoners'
      },
      category: 'prakas',
      number: 'ប្រ.១២/២២៣',
      date: '១០ កញ្ញា ២០២២',
      dateEn: 'September 10, 2022',
      effectiveDate: '១ តុលា ២០២២',
      effectiveDateEn: 'October 1, 2022',
      department: 'អគ្គនាយកដ្ឋានពន្ធនាគារ',
      departmentEn: 'General Department of Prisons',
      fileSize: '1.2 MB',
      format: 'PDF',
      pages: 28,
      icon: <BookOpen size={24} />,
      description: {
        km: 'ប្រកាសនេះ កំណត់អំពីកម្មវិធីបណ្តុះបណ្តាលវិជ្ជាជីវៈសម្រាប់អ្នកទោស ដើម្បីពង្រឹងជំនាញ និងលទ្ធភាពទទួលបានការងារក្រោយរំដោះខ្លួន។',
        en: 'This Prakas defines vocational training programs for prisoners to strengthen skills and employability after release.'
      },
      keywords: ['បណ្តុះបណ្តាល', 'វិជ្ជាជីវៈ', 'អ្នកទោស'],
      downloads: 750,
      views: 1560
    },
    {
      id: 4,
      title: {
        km: 'សេចក្តីណែនាំ ស្តីពីការអប់រំកែប្រែអ្នកទោស',
        en: 'Directive on Prisoner Rehabilitation Education'
      },
      category: 'directive',
      number: 'សណ.០៨/២២៣',
      date: '៥ ធ្នូ ២០២២',
      dateEn: 'December 5, 2022',
      effectiveDate: '១ មករា ២០២៣',
      effectiveDateEn: 'January 1, 2023',
      department: 'អគ្គនាយកដ្ឋានពន្ធនាគារ',
      departmentEn: 'General Department of Prisons',
      fileSize: '0.9 MB',
      format: 'PDF',
      pages: 18,
      icon: <FileCheck size={24} />,
      description: {
        km: 'សេចក្តីណែនាំនេះ ផ្តល់គោលការណ៍ណែនាំស្តីពីការអប់រំកែប្រែអ្នកទោស ដើម្បីជួយសម្រួលដល់ការសម្របខ្លួនរបស់ពួកគេក្នុងសង្គម។',
        en: 'This Directive provides guidelines on prisoner rehabilitation education to facilitate their reintegration into society.'
      },
      keywords: ['អប់រំកែប្រែ', 'អ្នកទោស', 'ណែនាំ'],
      downloads: 620,
      views: 1230
    },
    {
      id: 5,
      title: {
        km: 'ច្បាប់ ស្តីពីរបបពន្ធនាគារ',
        en: 'Law on Prison Regime'
      },
      category: 'law',
      number: 'ច.០៣/២០២១',
      date: '១០ មេសា ២០២១',
      dateEn: 'April 10, 2021',
      effectiveDate: '១ ឧសភា ២០២១',
      effectiveDateEn: 'May 1, 2021',
      department: 'រដ្ឋសភា',
      departmentEn: 'National Assembly',
      fileSize: '3.2 MB',
      format: 'PDF',
      pages: 78,
      icon: <Scale size={24} />,
      description: {
        km: 'ច្បាប់នេះ កំណត់អំពីរបបគ្រប់គ្រងពន្ធនាគារ សិទ្ធិអ្នកទោស វិន័យ និងការព្យាបាល។',
        en: 'This Law defines the prison management regime, prisoner rights, discipline and treatment.'
      },
      keywords: ['ច្បាប់', 'របប', 'ពន្ធនាគារ'],
      downloads: 2150,
      views: 5670
    },
    {
      id: 6,
      title: {
        km: 'បទប្បញ្ញត្តិ ស្តីពីការទៅសួរសុខទុក្ខអ្នកទោស',
        en: 'Regulation on Prisoner Visitation'
      },
      category: 'regulation',
      number: 'ប.០៦/២០២៣',
      date: '១៥ កុម្ភៈ ២០២៣',
      dateEn: 'February 15, 2023',
      effectiveDate: '១ មីនា ២០២៣',
      effectiveDateEn: 'March 1, 2023',
      department: 'អគ្គនាយកដ្ឋានពន្ធនាគារ',
      departmentEn: 'General Department of Prisons',
      fileSize: '0.8 MB',
      format: 'PDF',
      pages: 15,
      icon: <File size={24} />,
      description: {
        km: 'បទប្បញ្ញត្តិនេះ កំណត់អំពីនីតិវិធី និងលក្ខខណ្ឌនៃការទៅសួរសុខទុក្ខអ្នកទោស។',
        en: 'This Regulation defines the procedures and conditions for prisoner visitation.'
      },
      keywords: ['សួរសុខទុក្ខ', 'អ្នកទោស', 'នីតិវិធី'],
      downloads: 890,
      views: 1780
    }
  ];

  const categories = [
    { id: 'all', label: t.all, icon: <FolderOpen size={16} /> },
    { id: 'royalDecree', label: t.royalDecree, icon: <ScrollText size={16} /> },
    { id: 'subDecree', label: t.subDecree, icon: <FileText size={16} /> },
    { id: 'prakas', label: t.prakas, icon: <FileSignature size={16} /> },
    { id: 'directive', label: t.directive, icon: <FileCheck size={16} /> },
    { id: 'law', label: t.law, icon: <Scale size={16} /> },
    { id: 'regulation', label: t.regulation, icon: <BookMarked size={16} /> }
  ];

  const years = ['all', '2023', '2022', '2021', '2020'];

  // Filter documents
  const filteredDocs = legalDocuments.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || doc.date.includes(selectedYear);
    const matchesSearch = doc.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesYear && matchesSearch;
  });

  const handleViewDetails = (doc) => {
    setSelectedDoc(doc);
    setShowDetail(true);
  };

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : <FileText size={16} />;
  };

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.label : category;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Breadcrumb */}
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
                <span className="text-primary-600 font-medium">{t.title}</span>
              </nav>
            </div>

            <div className="flex items-center space-x-1">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Download size={16} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Share2 size={16} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Printer size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Page Header */}
      <Container className="py-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-primary-600 mb-3">
            <Scale size={16} />
            <span className="text-xs font-medium uppercase tracking-wider">{t.title}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">{t.title}</h1>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
            {currentLang === 'km' 
              ? 'បណ្តុំឯកសារច្បាប់ និងបទប្បញ្ញត្តិស្តីពីការគ្រប់គ្រងពន្ធនាគារ'
              : 'Collection of laws and regulations on prison management'
            }
          </p>
          <div className="w-12 h-0.5 bg-primary-600 mt-4"></div>
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
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-600 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
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
                          ? 'bg-primary-600 text-white'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
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
                          ? 'bg-primary-600 text-white'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
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
          {filteredDocs.length} {t.totalDocs}
        </p>
      </Container>

      {/* Documents List */}
      <Container className="pb-12">
        <div className="space-y-3">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleViewDetails(doc)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                    {doc.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                        {getCategoryLabel(doc.category)}
                      </span>
                      <span className="text-xs text-gray-400">{doc.number}</span>
                    </div>
                    <h3 className="text-base font-medium text-gray-900 mb-2">
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

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle download
                    }}
                  >
                    <Download size={16} className="text-gray-500" />
                  </button>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Stats Section */}
      <div className="bg-gray-50 border-t border-gray-100">
        <Container className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-light text-primary-600 mb-1">{legalDocuments.length}</div>
              <div className="text-xs text-gray-500">{t.totalDocs}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-primary-600 mb-1">{categories.length - 1}</div>
              <div className="text-xs text-gray-500">{t.categories_count}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-primary-600 mb-1">២០២៣</div>
              <div className="text-xs text-gray-500">{t.updated}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-primary-600 mb-1">៦,៤៥០+</div>
              <div className="text-xs text-gray-500">{t.downloads}</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-8">
        <div className="max-w-3xl mx-auto text-center bg-white border border-gray-200 rounded-xl p-8">
          <div className="mb-4">
            <Scale size={24} className="text-primary-400 mx-auto" />
          </div>
          <h3 className="text-base font-medium text-gray-900 mb-2">{t.contact}</h3>
          <p className="text-xs text-gray-500 mb-4">{t.contactDesc}</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            <a href={`mailto:${t.email}`} className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700">
              <Mail size={14} />
              <span>{t.email}</span>
            </a>
            <a href={`tel:${t.phone}`} className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700">
              <Phone size={14} />
              <span>{t.phone}</span>
            </a>
          </div>
        </div>
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
                    className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    <span className="text-sm">{t.back}</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Download size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Share2 size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Printer size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Document Details */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-primary-100 rounded-xl text-primary-600">
                    {selectedDoc.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
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
                    <Calendar size={16} className="text-primary-600 mb-2" />
                    <div className="text-xs text-gray-500">{t.publishedDate}</div>
                    <div className="text-sm font-medium text-gray-900">{selectedDoc.date}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Clock size={16} className="text-primary-600 mb-2" />
                    <div className="text-xs text-gray-500">{t.effectiveDate}</div>
                    <div className="text-sm font-medium text-gray-900">{selectedDoc.effectiveDate}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Building2 size={16} className="text-primary-600 mb-2" />
                    <div className="text-xs text-gray-500">{t.department}</div>
                    <div className="text-sm font-medium text-gray-900">{selectedDoc.department}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <FileText size={16} className="text-primary-600 mb-2" />
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

                {/* Download Section */}
                <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText size={24} className="text-primary-600" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{selectedDoc.title[currentLang]}</h4>
                        <p className="text-xs text-gray-500">{selectedDoc.format} • {selectedDoc.fileSize}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
                      <Download size={14} />
                      <span>{t.download}</span>
                    </button>
                  </div>
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