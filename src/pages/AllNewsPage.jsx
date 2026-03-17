// src/pages/AllNewsPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar, ChevronRight, Eye, Clock, 
  Download, Share2, User, MessageCircle,
  FileText, ArrowLeft, Search, X,
  ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp,
  Printer, Link2, Tag, Layers, Home
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link
import Container from '../components/ui/Container.jsx';
import defaultImg from '../images/defuat_img.jpg';

const AllNewsPage = () => {
  // All useState hooks at the top
  const [currentLang, setCurrentLang] = useState('km');
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const itemsPerPage = 9;

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

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { id: 'all', label: { km: 'ទាំងអស់', en: 'All News' }, icon: <Layers size={14} />, count: 24 },
    { id: 'announcement', label: { km: 'សេចក្តីជូនដំណឹង', en: 'Announcements' }, count: 8 },
    { id: 'event', label: { km: 'ព្រឹត្តិការណ៍', en: 'Events' }, count: 6 },
    { id: 'news', label: { km: 'ព័ត៌មាន', en: 'News' }, count: 10 }
  ];

  const sortOptions = [
    { id: 'latest', label: { km: 'ថ្មីបំផុត', en: 'Latest' } },
    { id: 'popular', label: { km: 'ពេញនិយម', en: 'Most Popular' } }
  ];

  const translations = {
    km: {
      title: 'ព័ត៌មានទាំងអស់',
      home: 'ទំព័រដើម',
      search: 'ស្វែងរកព័ត៌មាន...',
      filter: 'តម្រង',
      sort: 'តម្រៀបតាម',
      readMore: 'អានបន្ត',
      views: 'មើល',
      back: 'ត្រលប់ក្រោយ',
      comments: 'មតិយោបល់',
      shareVia: 'ចែករំលែក',
      copyLink: 'ចម្លងតំណ',
      copied: 'បានចម្លង!',
      page: 'ទំព័រ',
      of: 'នៃ',
      results: 'លទ្ធផល',
      author: 'អ្នកនិពន្ធ',
      published: 'ចេញផ្សាយ',
      related: 'ព័ត៌មានពាក់ព័ន្ធ',
      share: 'ចែករំលែក',
      clearAll: 'សម្អាតទាំងអស់',
      noNews: 'រកមិនឃើញព័ត៌មាន',
      tryAgain: 'សូមព្យាយាមស្វែងរកម្តងទៀត'
    },
    en: {
      title: 'All News',
      home: 'Home',
      search: 'Search news...',
      filter: 'Filter',
      sort: 'Sort by',
      readMore: 'Read More',
      views: 'views',
      back: 'Back',
      comments: 'Comments',
      shareVia: 'Share',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      page: 'Page',
      of: 'of',
      results: 'results',
      author: 'Author',
      published: 'Published',
      related: 'Related News',
      share: 'Share',
      clearAll: 'Clear All',
      noNews: 'No news found',
      tryAgain: 'Please try searching again'
    }
  };

  const t = translations[currentLang];

  // Generate news items
  const allNews = Array.from({ length: 24 }, (_, index) => {
    const categories_list = ['announcement', 'event', 'news'];
    const category = categories_list[index % 3];
    
    return {
      id: index + 1,
      title: {
        km: index % 2 === 0 
          ? `សេចក្តីជូនដំណឹងស្តីពីការកែសម្រួលពន្ធ ${index + 1}`
          : `អង្គភាពពន្ធនាគាររៀបចំសិក្ខាសាលាស្តីពីការគ្រប់គ្រង ${index + 1}`,
        en: index % 2 === 0
          ? `Notice on Tax Adjustment ${index + 1}`
          : `Prison Department Organizes Management Workshop ${index + 1}`
      },
      date: new Date(2026, 2, 25 - index).toLocaleDateString(currentLang === 'km' ? 'km' : 'en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: category,
      views: Math.floor(Math.random() * 5000) + 1000,
      comments: Math.floor(Math.random() * 100) + 10,
      image: defaultImg,
      summary: {
        km: `ព័ត៌មានលម្អិតនៃសេចក្តីប្រកាសព័ត៌មានលេខ ${index + 1} ស្តីពីការងាររបស់អគ្គនាយកដ្ឋានពន្ធនាគារ...`,
        en: `Details of press release No. ${index + 1} regarding the work of the General Department of Prisons...`
      },
      author: {
        km: 'នាយកដ្ឋានព័ត៌មាន',
        en: 'Information Department'
      },
      content: {
        km: `
          <div class="space-y-4">
            <p class="text-lg leading-relaxed">អគ្គនាយកដ្ឋានពន្ធនាគារបានចេញសេចក្តីជូនដំណឹងស្តីពីការងាររដ្ឋបាលពន្ធនាគារប្រចាំឆ្នាំ២០២៦។</p>
            
            <h3 class="text-xl font-bold mt-6 mb-3">ព័ត៌មានលម្អិត</h3>
            <p>ការងារនេះធ្វើឡើងក្នុងគោលបំណងលើកកម្ពស់ប្រសិទ្ធភាពការងាររដ្ឋបាលពន្ធនាគារ។</p>
            
            <h3 class="text-xl font-bold mt-6 mb-3">ចំណុចសំខាន់ៗ</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>ពង្រឹងប្រព័ន្ធគ្រប់គ្រងពន្ធនាគារ</li>
              <li>បណ្តុះបណ្តាលមន្រ្តីជំនាញ</li>
              <li>កែលម្អសេវាកម្មព័ត៌មាន</li>
            </ul>
          </div>
        `,
        en: `
          <div class="space-y-4">
            <p class="text-lg leading-relaxed">The General Department of Prisons has issued a notice regarding prison administration work for the year 2026.</p>
            
            <h3 class="text-xl font-bold mt-6 mb-3">Details</h3>
            <p>This initiative aims to improve the efficiency of prison administration work.</p>
            
            <h3 class="text-xl font-bold mt-6 mb-3">Key Points</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Strengthen prison management system</li>
              <li>Train specialized officers</li>
              <li>Improve information services</li>
            </ul>
          </div>
        `
      }
    };
  });

  // Filter and sort news
  const filteredNews = allNews.filter(item => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'popular') return b.views - a.views;
    return new Date(b.date) - new Date(a.date);
  });

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleReadMore = (news) => {
    setSelectedNews(news);
    setShowDetail(true);
    window.scrollTo(0, 0);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedNews(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t.copied);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveTab('all');
    setSortBy('latest');
    setCurrentPage(1);
  };

  // Related news (excluding current)
  const relatedNews = allNews
    .filter(item => item.id !== selectedNews?.id)
    .slice(0, 3);

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Header with Breadcrumb - New Design */}
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

      {/* Page Header */}
      <div className="bg-white border-b border-gray-100">
        <Container className="py-12">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-gray-500 mb-3">
              <FileText size={16} />
              <span className="text-xs font-medium uppercase tracking-wider">{t.title}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
              {t.title}
            </h1>
            <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
              {currentLang === 'km' 
                ? 'ព័ត៌មានថ្មីៗ និងសេចក្តីប្រកាសព័ត៌មានពីអគ្គនាយកដ្ឋានពន្ធនាគារ'
                : 'Latest news and announcements from the General Department of Prisons'}
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-12">
        {/* Search and Filter Bar */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 transition-colors text-sm"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 whitespace-nowrap">{t.sort}:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 bg-white text-sm"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label[currentLang]}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(searchQuery || activeTab !== 'all') && (
              <button
                onClick={clearFilters}
                className="px-4 py-2.5 text-sm text-primary-600 hover:text-primary-700 border border-primary-300 rounded-lg hover:bg-primary-50 transition-colors"
              >
                {t.clearAll}
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {cat.label[currentLang]}
                {cat.count > 0 && (
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    activeTab === cat.id ? 'bg-primary-500 text-white' : 'bg-gray-300 text-gray-700'
                  }`}>
                    {cat.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            {t.page} {currentPage} {t.of} {totalPages} • {filteredNews.length} {t.results}
          </p>
        </div>

        {/* News Grid */}
        {paginatedNews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedNews.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-primary-200 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleReadMore(item)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title[currentLang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded border border-gray-200">
                      {item.category === 'announcement' 
                        ? (currentLang === 'km' ? 'សេចក្តីជូនដំណឹង' : 'Announcement')
                        : item.category === 'event'
                        ? (currentLang === 'km' ? 'ព្រឹត្តិការណ៍' : 'Event')
                        : (currentLang === 'km' ? 'ព័ត៌មាន' : 'News')
                      }
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar size={12} className="mr-1" />
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <Eye size={12} className="mr-1" />
                    <span>{item.views}</span>
                  </div>

                  <h3 className="text-base font-medium text-gray-900 mb-2 leading-relaxed line-clamp-2 min-h-[3rem] group-hover:text-primary-700 transition-colors">
                    {item.title[currentLang]}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.summary[currentLang]}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500 flex items-center">
                      <User size={12} className="mr-1" />
                      {item.author[currentLang]}
                    </span>
                    
                    <span className="text-xs text-primary-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      {t.readMore}
                      <ChevronRightIcon size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No Results
          <div className="text-center py-16">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t.noNews}</h3>
            <p className="text-gray-500 mb-4">{t.tryAgain}</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
            >
              {t.clearAll}
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                currentPage === 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-primary-100 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg font-medium border ${
                  currentPage === page
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'border-gray-300 text-gray-600 hover:bg-primary-100 hover:border-primary-300 hover:text-primary-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                currentPage === totalPages
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-primary-100 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        )}
      </Container>

      {/* News Detail Modal */}
      {showDetail && selectedNews && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Sticky Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleCloseDetail}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">{t.back}</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => window.print()}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
                  >
                    <Printer size={18} />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
                  >
                    <Link2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {/* Hero Image */}
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8 bg-gray-100">
              <img
                src={selectedNews.image}
                alt={selectedNews.title[currentLang]}
                className="w-full h-full object-cover"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded border border-gray-200">
                  {selectedNews.category === 'announcement'
                    ? (currentLang === 'km' ? 'សេចក្តីជូនដំណឹង' : 'Announcement')
                    : selectedNews.category === 'event'
                    ? (currentLang === 'km' ? 'ព្រឹត្តិការណ៍' : 'Event')
                    : (currentLang === 'km' ? 'ព័ត៌មាន' : 'News')
                  }
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 leading-tight">
              {selectedNews.title[currentLang]}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{selectedNews.author[currentLang]}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{selectedNews.date}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Eye size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{selectedNews.views} {t.views}</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-sm max-w-none mb-12 text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: selectedNews.content[currentLang] }} />
            </div>

            {/* Share */}
            <div className="mb-12 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-4">{t.shareVia}</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center space-x-2"
                >
                  <Link2 size={16} />
                  <span>{t.copyLink}</span>
                </button>
              </div>
            </div>

            {/* Related News */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium mb-6">{t.related}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedNews.map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer border border-gray-200 rounded-lg hover:shadow-md hover:border-primary-200 transition-all overflow-hidden"
                    onClick={() => handleReadMore(item)}
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title[currentLang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-700 line-clamp-2 mb-1">
                        {item.title[currentLang]}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center">
                        <Calendar size={10} className="mr-1" />
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllNewsPage;