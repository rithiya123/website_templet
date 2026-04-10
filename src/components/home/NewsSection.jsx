// src/components/home/NewsSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar, ChevronRight, Eye, Heart, ArrowLeft, Share2,
  Facebook, Twitter, Linkedin, Link2, X, ChevronLeft, ChevronRightIcon,
  Zap, Newspaper
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNews } from '../../hooks/useNews';
import defaultImg from '../../images/defuat_img.jpg';

const NewsSection = ({ onViewAll }) => {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState('km');
  const [selectedNews, setSelectedNews] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [shareModal, setShareModal] = useState(false);
  
  // Pagination state
  const [leftPage, setLeftPage] = useState(1);
  const [rightPage, setRightPage] = useState(1);

  // Fetch news for left column (featured + grid) - 4 items
  const { 
    loading: leftLoading, 
    news: leftNews,
    totalPages: leftTotalPages,
    categories
  } = useNews({ page: leftPage, limit: 4 });

  // Fetch news for right column (recent list) - 5 items, different page offset
  const { 
    loading: rightLoading, 
    news: rightNews,
    totalPages: rightTotalPages
  } = useNews({ page: rightPage, limit: 5 });

  const loading = leftLoading || rightLoading;

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
    if (showDetail || showLightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDetail, showLightbox]);

  const translations = {
    km: {
      title: 'ព័ត៌មានថ្មីៗ',
      viewAll: 'មើលទាំងអស់',
      readMore: 'អានបន្ត',
      share: 'ចែករំលែក',
      views: 'មើល',
      back: 'ត្រលប់ក្រោយ',
      related: 'ព័ត៌មានពាក់ព័ន្ធ',
      likes: 'ចូលចិត្ត',
      shareVia: 'ចែករំលែកតាមរយៈ',
      copyLink: 'ចម្លងតំណ',
      copied: 'បានចម្លង!',
      viewImages: 'មើលរូបភាពទាំងអស់',
      close: 'បិទ',
      recentNews: 'ព័ត៌មានថ្មីៗ',
      published: 'ចេញផ្សាយ',
      event: 'ព្រឹត្តិការណ៍',
      news: 'ព័ត៌មាន',
      announcement: 'សេចក្តីជូនដំណឹង',
      other: 'ផ្សេងៗ',
    },
    en: {
      title: 'Latest News',
      viewAll: 'View All',
      readMore: 'Read More',
      share: 'Share',
      views: 'views',
      back: 'Back',
      related: 'Related News',
      likes: 'Likes',
      shareVia: 'Share via',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      viewImages: 'View All Images',
      close: 'Close',
      recentNews: 'Recent News',
      published: 'Published',
      event: 'Event',
      news: 'News',
      announcement: 'Announcement',
      other: 'Other',
    }
  };

  const t = translations[currentLang];

  // Regular function to get category display name
  const getCategoryLabel = (categoryKey) => {
    // Default fallbacks
    const defaults = {
      event: currentLang === 'km' ? 'ព្រឹត្តិការណ៍' : 'Event',
      news: currentLang === 'km' ? 'ព័ត៌មាន' : 'News',
      announcement: currentLang === 'km' ? 'សេចក្តីជូនដំណឹង' : 'Announcement',
      other: currentLang === 'km' ? 'ផ្សេងៗ' : 'Other',
    };
    
    if (!categories || !Array.isArray(categories)) {
      return defaults[categoryKey] || categoryKey;
    }
    
    const categoryObj = categories.find(cat => cat[categoryKey]);
    if (categoryObj && categoryObj[categoryKey]) {
      return categoryObj[categoryKey][currentLang] || defaults[categoryKey] || categoryKey;
    }
    
    return defaults[categoryKey] || categoryKey;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    
    if (currentLang === 'km') {
      const khmerMonths = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
      const day = date.getDate();
      const month = khmerMonths[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    }
    
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleReadMore = (news) => {
    setSelectedNews(news);
    setShowDetail(true);
    setSelectedImageIndex(null);
    window.scrollTo(0, 0);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedNews(null);
    setSelectedImageIndex(null);
  };

  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
    setShowLightbox(true);
  };

  const handleCloseLightbox = () => {
    setShowLightbox(false);
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedNews && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedNews && selectedImageIndex < selectedNews.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t.copied);
  };

  const handleViewAll = () => {
    navigate('/news');
  };

  // Get left column data (featured + remaining)
  const featuredNews = leftNews[0] || null;
  const remainingNews = leftNews.slice(1, 4);

  // List Item Component for Right Side
  const ListItem = ({ item, onClick }) => {
    const title = currentLang === 'km' ? item.titleKh : item.titleEn;
    const mainImage = item.mainImage || defaultImg;
    
    return (
      <div
        className="group cursor-pointer border-b border-gray-100 last:border-0 py-3 transition-all duration-300 hover:bg-gray-50 rounded-lg px-2"
        onClick={() => onClick(item)}
      >
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = defaultImg; }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full">
                {getCategoryLabel(item.category)}
              </span>
              <span className="text-[10px] text-gray-400 flex items-center gap-1">
                <Calendar size={8} />
                {formatDate(item.publishedDate)}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
              {title}
            </h3>
            <div className="flex items-center gap-3 mt-1 text-[10px] text-gray-400">
              <span className="flex items-center gap-1"><Eye size={8} />{item.views || 0}</span>
              <span className="flex items-center gap-1"><Heart size={8} />{item.likes || 0}</span>
            </div>
          </div>
          <ChevronRight size={16} className="text-gray-400 flex-shrink-0 group-hover:text-green-600 transition-colors" />
        </div>
      </div>
    );
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="h-96 bg-gray-200 rounded-xl animate-pulse mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border p-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="py-3">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 bg-gray-200 rounded-lg animate-pulse"></div>
                      <div className="flex-1">
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-1"></div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-green-600 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {t.title}
              </h2>
            </div>
            <button 
              onClick={handleViewAll}
              className="flex items-center text-sm text-green-600 hover:text-green-700 transition-colors group font-medium"
            >
              {t.viewAll}
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Featured + Grid */}
          <div className="lg:col-span-2">
            {featuredNews && (
              <div 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 mb-6"
                onClick={() => handleReadMore(featuredNews)}
              >
                <div className="relative h-96 overflow-hidden bg-gray-100">
                  <img 
                    src={featuredNews.mainImage || defaultImg} 
                    alt={currentLang === 'km' ? featuredNews.titleKh : featuredNews.titleEn}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = defaultImg; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-full shadow-md flex items-center gap-1">
                      <Zap size={12} />
                      <span>{getCategoryLabel(featuredNews.category)}</span>
                    </span>
                  </div>

                  {featuredNews.images && featuredNews.images.length > 1 && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-md flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {featuredNews.images.length}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Calendar size={10} />
                        <span>{formatDate(featuredNews.publishedDate)}</span>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight line-clamp-2">
                      {currentLang === 'km' ? featuredNews.titleKh : featuredNews.titleEn}
                    </h3>
                    <p className="text-white/80 text-sm mt-2 line-clamp-2">
                      {currentLang === 'km' ? featuredNews.summaryKh : featuredNews.summaryEn}
                    </p>
                    <button className="mt-3 flex items-center gap-1 text-white text-sm font-medium hover:underline">
                      {t.readMore} <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {remainingNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                  onClick={() => handleReadMore(item)}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={item.mainImage || defaultImg} 
                      alt={currentLang === 'km' ? item.titleKh : item.titleEn}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = defaultImg; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-green-600 text-white text-xs font-medium rounded-full shadow-md flex items-center gap-1">
                        <Zap size={10} />
                        <span>{getCategoryLabel(item.category)}</span>
                      </span>
                    </div>

                    {item.images && item.images.length > 1 && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-md flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {item.images.length}
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Calendar size={10} />
                      <span>{formatDate(item.publishedDate)}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-800 mb-2 leading-relaxed line-clamp-2">
                      {currentLang === 'km' ? item.titleKh : item.titleEn}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                      {currentLang === 'km' ? item.summaryKh : item.summaryEn}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <button className="flex items-center gap-1 text-xs text-green-600 hover:text-green-700 font-medium">
                        {t.readMore} <ChevronRight size={12} />
                      </button>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Eye size={12} />{item.views || 0}</span>
                        <span className="flex items-center gap-1"><Heart size={12} />{item.likes || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Left Pagination */}
            {leftTotalPages > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                <button
                  onClick={() => setLeftPage(p => Math.max(1, p - 1))}
                  disabled={leftPage === 1}
                  className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="px-4 py-2 text-sm text-gray-600">
                  {leftPage} / {leftTotalPages}
                </span>
                <button
                  onClick={() => setLeftPage(p => Math.min(leftTotalPages, p + 1))}
                  disabled={leftPage === leftTotalPages}
                  className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Recent News List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <Newspaper size={18} className="text-green-600" />
                  <h3 className="text-base font-semibold text-gray-800">
                    {t.recentNews}
                  </h3>
                </div>
                {/* Right Pagination */}
                {rightTotalPages > 1 && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setRightPage(p => Math.max(1, p - 1))}
                      disabled={rightPage === 1}
                      className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="text-xs text-gray-500">{rightPage}/{rightTotalPages}</span>
                    <button
                      onClick={() => setRightPage(p => Math.min(rightTotalPages, p + 1))}
                      disabled={rightPage === rightTotalPages}
                      className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>
              <div className="p-2">
                {rightNews.map((item) => (
                  <ListItem key={item.id} item={item} onClick={handleReadMore} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Detail Modal */}
      {showDetail && selectedNews && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between">
                <button onClick={handleCloseDetail} className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors group">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">{t.back}</span>
                </button>
                <button onClick={() => setShareModal(true)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 bg-gray-100">
              <img 
                src={selectedNews.mainImage || defaultImg} 
                alt={currentLang === 'km' ? selectedNews.titleKh : selectedNews.titleEn} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = defaultImg; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-lg shadow-lg">
                  {getCategoryLabel(selectedNews.category)}
                </span>
              </div>
              {selectedNews.images && selectedNews.images.length > 1 && (
                <div className="absolute top-6 right-6">
                  <span className="px-2.5 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {selectedNews.images.length}
                  </span>
                </div>
              )}
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  {currentLang === 'km' ? selectedNews.titleKh : selectedNews.titleEn}
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-100">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar size={14} className="text-green-600" />
                <span>{formatDate(selectedNews.publishedDate)}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Eye size={14} className="text-green-600" />
                <span>{selectedNews.views || 0} {t.views}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Heart size={14} className="text-green-600" />
                <span>{selectedNews.likes || 0} {t.likes}</span>
              </div>
            </div>
            <div 
              className="prose prose-sm max-w-none mb-8 text-gray-600 leading-relaxed" 
              dangerouslySetInnerHTML={{ 
                __html: currentLang === 'km' ? selectedNews.contentKh : selectedNews.contentEn 
              }} 
            />
            {selectedNews.images && selectedNews.images.length > 1 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t.viewImages}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedNews.images.slice(0, 8).map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleOpenLightbox(idx)} 
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-gray-100"
                    >
                      <img 
                        src={img} 
                        alt={`${currentLang === 'km' ? selectedNews.titleKh : selectedNews.titleEn} - ${idx + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.src = defaultImg; }}
                      />
                      {idx === 7 && selectedNews.images.length > 8 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-medium">+{selectedNews.images.length - 8}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3">{t.shareVia}</h3>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Facebook size={14} />
                </button>
                <button className="w-8 h-8 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center">
                  <Twitter size={14} />
                </button>
                <button className="w-8 h-8 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
                  <Linkedin size={14} />
                </button>
                <button onClick={handleCopyLink} className="w-8 h-8 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center">
                  <Link2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {showLightbox && selectedNews && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center">
          <button onClick={handleCloseLightbox} className="absolute top-4 right-4 z-10 text-white hover:text-gray-300">
            <X size={32} />
          </button>
          <button 
            onClick={handlePrevImage} 
            disabled={selectedImageIndex === 0} 
            className={`absolute left-4 z-10 text-white hover:text-gray-300 ${selectedImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <ChevronLeft size={48} />
          </button>
          <button 
            onClick={handleNextImage} 
            disabled={selectedImageIndex === selectedNews.images.length - 1} 
            className={`absolute right-4 z-10 text-white hover:text-gray-300 ${selectedImageIndex === selectedNews.images.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <ChevronRightIcon size={48} />
          </button>
          <div className="max-w-[90vw] max-h-[90vh]">
            <img 
              src={selectedNews.images[selectedImageIndex]} 
              alt={`${currentLang === 'km' ? selectedNews.titleKh : selectedNews.titleEn} - ${selectedImageIndex + 1}`} 
              className="max-w-full max-h-[90vh] object-contain"
              onError={(e) => { e.target.src = defaultImg; }}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {selectedNews.images.length}
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {shareModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-5 max-w-sm w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-900">{t.shareVia}</h3>
              <button onClick={() => setShareModal(false)} className="p-1 hover:bg-gray-100 rounded-lg">
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <button className="flex flex-col items-center space-y-1 p-2 hover:bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <Facebook size={16} />
                </div>
                <span className="text-[10px] text-gray-500">Facebook</span>
              </button>
              <button className="flex flex-col items-center space-y-1 p-2 hover:bg-sky-50 rounded-lg">
                <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center">
                  <Twitter size={16} />
                </div>
                <span className="text-[10px] text-gray-500">Twitter</span>
              </button>
              <button className="flex flex-col items-center space-y-1 p-2 hover:bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center">
                  <Linkedin size={16} />
                </div>
                <span className="text-[10px] text-gray-500">LinkedIn</span>
              </button>
              <button onClick={handleCopyLink} className="flex flex-col items-center space-y-1 p-2 hover:bg-gray-100 rounded-lg">
                <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
                  <Link2 size={16} />
                </div>
                <span className="text-[10px] text-gray-500">{t.copyLink}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;