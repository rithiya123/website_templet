// src/components/home/NewsSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar, ChevronRight, Eye, Star, TrendingUp, Clock, 
  Download, Share2, User, MessageCircle, Bookmark,
  FileText, Heart, ArrowLeft, Printer,
  Facebook, Twitter, Linkedin, Link2, X, Filter,
  Sparkles, Award, Zap, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import defaultImg from '../../images/defuat_img.jpg';

const NewsSection = ({ onViewAll }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [currentLang, setCurrentLang] = useState('km');
  const [selectedNews, setSelectedNews] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [savedItems, setSavedItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [shareModal, setShareModal] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  // Lock body scroll when detail is open
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

  const categories = [
    { id: 'all', label: { km: 'ទាំងអស់', en: 'All News' }, icon: <Sparkles size={14} />, count: 12, color: 'from-gray-600 to-gray-700' },
    { id: 'announcement', label: { km: 'សេចក្តីជូនដំណឹង', en: 'Announcements' }, icon: <Award size={14} />, count: 4, color: 'from-amber-500 to-orange-500' },
    { id: 'event', label: { km: 'ព្រឹត្តិការណ៍', en: 'Events' }, icon: <Zap size={14} />, count: 3, color: 'from-green-500 to-emerald-500' },
    { id: 'news', label: { km: 'ព័ត៌មាន', en: 'News' }, icon: <Globe size={14} />, count: 5, color: 'from-blue-500 to-indigo-500' }
  ];

  const translations = {
    km: {
      title: 'ព័ត៌មានថ្មីៗ',
      viewAll: 'មើលទាំងអស់',
      readMore: 'អានបន្ត',
      share: 'ចែករំលែក',
      download: 'ទាញយក',
      views: 'មើល',
      back: 'ត្រលប់ក្រោយ',
      related: 'ព័ត៌មានពាក់ព័ន្ធ',
      comments: 'មតិយោបល់',
      likes: 'ចូលចិត្ត',
      save: 'រក្សាទុក',
      author: 'អ្នកនិពន្ធ',
      shareVia: 'ចែករំលែកតាមរយៈ',
      copyLink: 'ចម្លងតំណ',
      copied: 'បានចម្លង!',
      filter: 'តម្រង',
      loadMore: 'ផ្ទុកបន្ថែម',
      featured: 'ព័ត៌មានពិសេស',
      featuredDesc: 'សូមតាមដានព័ត៌មានថ្មីៗ និងការផ្សព្វផ្សាយពីអគ្គនាយកដ្ឋានពន្ធនាគារ'
    },
    en: {
      title: 'Latest News',
      viewAll: 'View All',
      readMore: 'Read More',
      share: 'Share',
      download: 'Download',
      views: 'views',
      back: 'Back',
      related: 'Related News',
      comments: 'Comments',
      likes: 'Likes',
      save: 'Save',
      author: 'Author',
      shareVia: 'Share via',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      filter: 'Filter',
      loadMore: 'Load More',
      featured: 'Featured News',
      featuredDesc: 'Stay updated with the latest news and announcements from the General Department of Prisons'
    }
  };

  const t = translations[currentLang];

  // Generate news items
  const enhancedNews = Array.from({ length: 6 }, (_, index) => {
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
      likes: Math.floor(Math.random() * 500) + 100,
      image: defaultImg,
      summary: {
        km: `ព័ត៌មានលម្អិតនៃសេចក្តីប្រកាសព័ត៌មានលេខ ${index + 1}...`,
        en: `Details of press release No. ${index + 1}...`
      },
      author: {
        km: 'នាយកដ្ឋានព័ត៌មាន',
        en: 'Information Department'
      },
      hasAttachment: index % 2 === 0,
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

  const filteredNews = activeTab === 'all' 
    ? enhancedNews 
    : enhancedNews.filter(item => item.category === activeTab);

  const handleReadMore = (news) => {
    setSelectedNews(news);
    setShowDetail(true);
    window.scrollTo(0, 0);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedNews(null);
  };

  const handleSave = (id) => {
    if (savedItems.includes(id)) {
      setSavedItems(savedItems.filter(item => item !== id));
    } else {
      setSavedItems([...savedItems, id]);
    }
  };

  const handleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(item => item !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t.copied);
  };

  const handleViewAll = () => {
    navigate('/news');
  };

  const handleLoadMore = () => {
    navigate('/news');
  };

  const getCategoryColor = (category) => {
    const colors = {
      announcement: 'from-amber-500 to-orange-500',
      event: 'from-green-500 to-emerald-500',
      news: 'from-blue-500 to-indigo-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      announcement: currentLang === 'km' ? 'សេចក្តីជូនដំណឹង' : 'Announcement',
      event: currentLang === 'km' ? 'ព្រឹត្តិការណ៍' : 'Event',
      news: currentLang === 'km' ? 'ព័ត៌មាន' : 'News'
    };
    return labels[category] || category;
  };

  // Related news (excluding current)
  const relatedNews = enhancedNews
    .filter(item => item.id !== selectedNews?.id)
    .slice(0, 3);

  return (
    <div className="md:col-span-2 relative">
      {/* Main News List View */}
      <div className={`transition-opacity duration-300 ${showDetail ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}>
        {/* Header with title and count */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              {t.title}
            </h2>
            <span className="bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1.5 rounded-full">
              {filteredNews.length}+
            </span>
          </div>
          
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="md:hidden flex items-center space-x-1 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-600"
          >
            <Filter size={14} />
            <span>{t.filter}</span>
          </button>

          {/* Desktop View All */}
          <button 
            onClick={handleViewAll}
            className="hidden md:flex items-center text-sm text-gray-500 hover:text-primary-600 transition-colors group"
          >
            {t.viewAll}
            <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Tabs - Desktop */}
        <div className="hidden md:flex flex-wrap items-center gap-2 mb-6">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const gradient = cat.color;
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden group ${
                  isActive
                    ? `bg-gradient-to-r ${gradient} text-white shadow-md`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center space-x-1.5">
                  <span className={isActive ? 'text-white' : 'text-gray-500'}>
                    {cat.icon}
                  </span>
                  <span>{cat.label[currentLang]}</span>
                  <span className={`ml-1 text-xs ${
                    isActive ? 'text-white/80' : 'text-gray-400'
                  }`}>
                    ({cat.count})
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Category Tabs - Mobile Dropdown */}
        {showMobileFilter && (
          <div className="md:hidden mb-4 p-3 bg-white border border-gray-200 rounded-lg shadow-lg animate-fadeIn">
            <div className="space-y-1">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                const gradient = cat.color;
                
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveTab(cat.id);
                      setShowMobileFilter(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                      isActive
                        ? `bg-gradient-to-r ${gradient} text-white`
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className={isActive ? 'text-white' : 'text-gray-500'}>
                        {cat.icon}
                      </span>
                      <span>{cat.label[currentLang]}</span>
                    </div>
                    <span className={`text-xs ${
                      isActive ? 'text-white/80' : 'text-gray-400'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
              <div className="border-t border-gray-100 my-2 pt-2">
                <button 
                  onClick={handleViewAll}
                  className="flex items-center justify-center text-primary-600 text-sm font-medium py-2 w-full hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {t.viewAll}
                  <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredNews.slice(0, 4).map((item, index) => {
            const gradient = getCategoryColor(item.category);
            const isHovered = hoveredCard === item.id;
            
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                onClick={() => handleReadMore(item)}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title[currentLang]}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 bg-gradient-to-r ${gradient} text-white text-xs font-medium rounded-full shadow-lg flex items-center space-x-1`}>
                      <Award size={10} />
                      <span>{getCategoryLabel(item.category)}</span>
                    </span>
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSave(item.id);
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                      savedItems.includes(item.id)
                        ? 'bg-primary-600 text-white'
                        : 'bg-white/20 backdrop-blur-sm text-white hover:bg-primary-600'
                    }`}
                  >
                    <Bookmark size={14} fill={savedItems.includes(item.id) ? 'currentColor' : 'none'} />
                  </button>

                  {/* Date */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>

                  {/* View Count */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Eye size={12} />
                    <span>{item.views}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-medium text-gray-900 mb-2 leading-relaxed line-clamp-2 group-hover:text-primary-700 transition-colors">
                    {item.title[currentLang]}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {item.summary[currentLang]}
                  </p>

                  {/* Footer with actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <button 
                        className="flex items-center space-x-1 text-xs text-primary-600 hover:text-primary-700 font-medium group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadMore(item);
                        }}
                      >
                        <span>{t.readMore}</span>
                        <ChevronRight size={12} className="group/btn:hover:translate-x-1 transition-transform" />
                      </button>
                      
                      {item.hasAttachment && (
                        <button 
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download size={14} />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(item.id);
                        }}
                        className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                      >
                        <Heart size={12} fill={likedItems.includes(item.id) ? 'currentColor' : 'none'} />
                        <span>{item.likes}</span>
                      </button>
                      <span>•</span>
                      <MessageCircle size={12} />
                      <span>{item.comments}</span>
                    </div>
                  </div>

                  {/* Hover Progress Indicator */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${gradient} transition-all duration-500`} 
                       style={{ width: isHovered ? '100%' : '0%' }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {filteredNews.length > 4 && (
          <div className="mt-8 text-center">
            <button 
              onClick={handleLoadMore}
              className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-primary-300 hover:text-primary-600 transition-all duration-300 inline-flex items-center space-x-2 group shadow-sm hover:shadow"
            >
              <span>{t.loadMore}</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Featured News Banner */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <Sparkles size={24} className="text-yellow-300" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  {t.featured}
                </h4>
                <p className="text-sm text-primary-100 max-w-xl">
                  {t.featuredDesc}
                </p>
              </div>
            </div>
            <button 
              onClick={handleViewAll}
              className="mt-4 md:mt-0 px-6 py-2.5 bg-white text-primary-700 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 group"
            >
              <span className="font-medium">{t.viewAll}</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* News Detail Modal */}
      {showDetail && selectedNews && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between">
                <button 
                  onClick={handleCloseDetail}
                  className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">{t.back}</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handleSave(selectedNews.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      savedItems.includes(selectedNews.id) 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'hover:bg-gray-100 text-gray-500'
                    }`}
                  >
                    <Bookmark size={16} fill={savedItems.includes(selectedNews.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button 
                    onClick={() => window.print()}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors"
                  >
                    <Printer size={16} />
                  </button>
                  <button 
                    onClick={() => setShareModal(true)}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {/* Hero Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title[currentLang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(selectedNews.category)} text-white text-sm font-medium rounded-lg shadow-lg`}>
                  {getCategoryLabel(selectedNews.category)}
                </span>
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl md:text-4xl font-light text-white leading-tight">
                  {selectedNews.title[currentLang]}
                </h1>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-100">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <User size={14} className="text-primary-500" />
                <span>{selectedNews.author[currentLang]}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar size={14} className="text-primary-500" />
                <span>{selectedNews.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Eye size={14} className="text-primary-500" />
                <span>{selectedNews.views} {t.views}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MessageCircle size={14} className="text-primary-500" />
                <span>{selectedNews.comments}</span>
              </div>
              <button 
                onClick={() => handleLike(selectedNews.id)}
                className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                <Heart size={14} fill={likedItems.includes(selectedNews.id) ? 'currentColor' : 'none'} />
                <span>{selectedNews.likes}</span>
              </button>
            </div>

            {/* Main Content */}
            <div 
              className="prose prose-sm max-w-none mb-8 text-gray-600"
              dangerouslySetInnerHTML={{ __html: selectedNews.content[currentLang] }}
            />

            {/* Attachments */}
            {selectedNews.hasAttachment && (
              <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Download size={14} className="mr-2 text-primary-500" />
                  {currentLang === 'km' ? 'ឯកសារភ្ជាប់' : 'Attachments'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-200 transition-colors">
                    <div className="flex items-center space-x-3">
                      <FileText size={16} className="text-primary-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Document.pdf</p>
                        <p className="text-xs text-gray-400">2.5 MB</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-primary-50 rounded-lg transition-colors">
                      <Download size={14} className="text-primary-500" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Share Buttons */}
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
                <button 
                  onClick={handleCopyLink}
                  className="w-8 h-8 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  <Link2 size={14} />
                </button>
              </div>
            </div>

            {/* Related News */}
            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-sm font-medium text-gray-700 mb-4">{t.related}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedNews.map((item) => (
                  <div 
                    key={item.id}
                    className="group cursor-pointer border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all"
                    onClick={() => handleReadMore(item)}
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title[currentLang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-medium text-gray-900 group-hover:text-primary-600 line-clamp-2 mb-1">
                        {item.title[currentLang]}
                      </h4>
                      <p className="text-[10px] text-gray-400 flex items-center">
                        <Calendar size={8} className="mr-1" />
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

      {/* Share Modal */}
      {shareModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl p-5 max-w-sm w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-900">{t.shareVia}</h3>
              <button 
                onClick={() => setShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <button className="flex flex-col items-center space-y-1 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <Facebook size={16} />
                </div>
                <span className="text-[10px] text-gray-500">Facebook</span>
              </button>
              <button className="flex flex-col items-center space-y-1 p-2 hover:bg-sky-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center">
                  <Twitter size={16} />
                </div>
                <span className="text-[10px] text-gray-500">Twitter</span>
              </button>
              <button className="flex flex-col items-center space-y-1 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center">
                  <Linkedin size={16} />
                </div>
                <span className="text-[10px] text-gray-500">LinkedIn</span>
              </button>
              <button 
                onClick={handleCopyLink}
                className="flex flex-col items-center space-y-1 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
                  <Link2 size={16} />
                </div>
                <span className="text-[10px] text-gray-500">{t.copyLink}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NewsSection;