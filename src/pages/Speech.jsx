// src/pages/Speech.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mic, Calendar, User, ChevronRight, Eye, Clock, Share2, 
  Search, ChevronDown, ArrowLeft, ArrowRight, 
  BookOpen, TrendingUp, Calendar as CalendarIcon,X,
  Award, Users, SlidersHorizontal
} from 'lucide-react';
import GlobalBanner from '../components/ui/GlobalBanner.jsx';
import Container from '../components/ui/Container.jsx';

const Speech = () => {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "km";
  });
  const [selectedSpeech, setSelectedSpeech] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState('latest');
  const [sortOpen, setSortOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [speechesData, setSpeechesData] = useState({ km: [], en: [] });

  // Load view counts from localStorage
  const loadViewCounts = () => {
    const storedViews = localStorage.getItem('speech_views');
    return storedViews ? JSON.parse(storedViews) : {};
  };

  // Save view count to localStorage
  const saveViewCount = (speechId, lang, views) => {
    const storedViews = loadViewCounts();
    const key = `${lang}_${speechId}`;
    storedViews[key] = views;
    localStorage.setItem('speech_views', JSON.stringify(storedViews));
  };

  // Get view count for a specific speech
  const getViewCount = (speechId, lang) => {
    const storedViews = loadViewCounts();
    const key = `${lang}_${speechId}`;
    return storedViews[key] || 0;
  };

  // Get random image for speech based on category
  const getSpeechImage = (category, id) => {
    const images = {
      'annual-meeting': [
        'https://images.unsplash.com/photo-1557425955-df376b88e2a3?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=500&fit=crop',
      ],
      'resettlement': [
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1593113646773-028cafb63a2c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=500&fit=crop',
      ],
      'conference': [
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop',
      ],
      'training': [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&h=500&fit=crop',
      ],
      'default': [
        'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
      ]
    };
    
    const categoryImages = images[category] || images.default;
    return categoryImages[id % categoryImages.length];
  };

  // Initialize speeches with stored view counts and images
  const initializeSpeeches = () => {
    const baseSpeeches = {
      km: [
        {
          id: 1,
          title: 'សុន្ទរកថាបើកកិច្ចប្រជុំបូកសរុបការងារប្រចាំឆ្នាំ ២០២៥',
          date: '2025-12-20',
          author: 'ឯកឧត្តម ប្រធាន',
          category: 'annual-meeting',
          categoryLabel: 'ប្រជុំប្រចាំឆ្នាំ',
          baseViews: 0,
          readTime: 5,
          excerpt: 'សុន្ទរកថាបើកកិច្ចប្រជុំបូកសរុបលទ្ធផលការងារប្រចាំឆ្នាំ។ យើងបានសម្រេចនូវសមិទ្ធផលសំខាន់ៗជាច្រើន រួមទាំងការដោះស្រាយសំណងជូនប្រជាពលរដ្ឋចំនួន ១,២៥០ គ្រួសារ និងការបណ្តុះបណ្តាលសមត្ថភាពដល់មន្ត្រីរាជការចំនួន ៥០០ នាក់។',
          content: `<p>សូមគោរព ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ជាទីគោរពកោតសរសើរ!</p><p>ថ្ងៃនេះ ខ្ញុំមានសេចក្តីសោមនស្សរីករាយ ដែលបានអញ្ជើញមកកាន់ទីតាំងប្រជុំ។</p><p>សមិទ្ធផលសំខាន់ៗដែលយើងទទួលបានរួមមាន៖ ការដោះស្រាយសំណងជូនប្រជាពលរដ្ឋចំនួន ១,២៥០ គ្រួសារ ការបណ្តុះបណ្តាលសមត្ថភាពដល់មន្ត្រីរាជការចំនួន ៥០០ នាក់។</p><p>សូមអញ្ជើញបងប្អូនទាំងអស់គ្នា បន្តខិតខំប្រឹងប្រែង និងសហការគ្នាឱ្យបានខ្ជាប់ខ្ជួន។</p>`,
        },
        {
          id: 2,
          title: 'សុន្ទរកថាស្តីពីការជំរុញការងារដោះស្រាយផលប៉ះពាល់',
          date: '2025-09-15',
          author: 'ឯកឧត្តម អគ្គលេខាធិការ',
          category: 'resettlement',
          categoryLabel: 'ដោះស្រាយផលប៉ះពាល់',
          baseViews: 0,
          readTime: 4,
          excerpt: 'សុន្ទរកថាស្តីពីការជំរុញការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍។ យើងត្រូវបន្តពង្រឹងការងារនេះបន្ថែមទៀត ដើម្បីធានាបាននូវសិទ្ធិ និងផលប្រយោជន៍ស្របច្បាប់របស់ប្រជាពលរដ្ឋ។',
          content: `<p>សូមគោរព លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ជាទីគោរព!</p><p>ខ្ញុំសូមសម្តែងនូវការកោតសរសើរ និងថ្លែងអំណរគុណចំពោះកិច្ចខិតខំប្រឹងប្រែងរបស់មន្ត្រីរាជការទាំងអស់។</p><p>សូមរួមគ្នាបន្តអនុវត្តការងារនេះ ដើម្បីធានាបាននូវសិទ្ធិ និងផលប្រយោជន៍ស្របច្បាប់របស់ប្រជាពលរដ្ឋ។</p>`,
        },
        {
          id: 3,
          title: 'សុន្ទរកថាបិទសន្និបាតបូកសរុបការងារ',
          date: '2025-06-30',
          author: 'លោកជំទាវ ប្រធាន',
          category: 'conference',
          categoryLabel: 'សន្និបាត',
          baseViews: 0,
          readTime: 3,
          excerpt: 'សុន្ទរកថាបិទសន្និបាតបូកសរុបលទ្ធផលការងារ ៦ ខែ ដើមឆ្នាំ ២០២៥។ លទ្ធផលការងារសម្រេចបានគួរឱ្យកត់សម្គាល់ ជាពិសេសក្នុងវិស័យដោះស្រាយផលប៉ះពាល់។',
          content: `<p>សូមគោរព ថ្នាក់ដឹកនាំ មន្ត្រីរាជការ និងបងប្អូនប្រជាពលរដ្ឋជាទីស្រឡាញ់!</p><p>បន្ទាប់ពីបានបូកសរុបលទ្ធផលការងាររយៈពេល ៦ ខែ យើងសង្កេតឃើញថា ការងារដោះស្រាយផលប៉ះពាល់ទទួលបានវឌ្ឍនភាពគួរឱ្យកត់សម្គាល់។</p>`,
        },
        {
          id: 4,
          title: 'សុន្ទរកថាស្តីពីការពង្រឹងសមត្ថភាពមន្ត្រីរាជការ',
          date: '2025-03-10',
          author: 'ឯកឧត្តម ប្រធាន',
          category: 'training',
          categoryLabel: 'បណ្តុះបណ្តាល',
          baseViews: 0,
          readTime: 6,
          excerpt: 'សុន្ទរកថាស្តីពីការពង្រឹងសមត្ថភាពមន្ត្រីរាជការក្នុងការដោះស្រាយផលប៉ះពាល់។ ការពង្រឹងសមត្ថភាពមន្ត្រីរាជការ គឺជាអាទិភាពចម្បងមួយរបស់យើង។',
          content: `<p>សូមគោរព ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ជាទីគោរព!</p><p>ការពង្រឹងសមត្ថភាពមន្ត្រីរាជការ គឺជាអាទិភាពចម្បងមួយរបស់អគ្គនាយកដ្ឋានយើងខ្ញុំ។</p>`,
        },
      ],
      en: [
        {
          id: 1,
          title: 'Opening Speech for Annual Work Review Meeting 2025',
          date: '2025-12-20',
          author: 'H.E. The Director General',
          category: 'annual-meeting',
          categoryLabel: 'Annual Meeting',
          baseViews: 0,
          readTime: 5,
          excerpt: 'Opening speech for the annual work review meeting and action plan. Key achievements include compensation provided to 1,250 families and capacity building training for 500 civil servants.',
          content: `<p>Distinguished Excellencies, Ladies and Gentlemen, Dear All!</p><p>Today, I am delighted to be here with you to participate in the Annual Work Review Meeting for 2025.</p><p>Key achievements include: Compensation provided to 1,250 families, Capacity building training for 500 civil servants.</p><p>I encourage everyone to continue working together diligently to achieve our vision and goals.</p>`,
        },
        {
          id: 2,
          title: 'Speech on Promoting Resettlement Work',
          date: '2025-09-15',
          author: 'H.E. The Secretary General',
          category: 'resettlement',
          categoryLabel: 'Resettlement',
          baseViews: 0,
          readTime: 4,
          excerpt: 'Speech on promoting resettlement work for development projects. We must continue to strengthen this work to ensure the rights and legal interests of citizens are protected.',
          content: `<p>Distinguished Ladies and Gentlemen, Dear All!</p><p>I would like to express my deep appreciation and gratitude for the efforts of all civil servants.</p><p>Let us continue working together to ensure the rights and legal interests of citizens are protected.</p>`,
        },
        {
          id: 3,
          title: 'Closing Speech for Annual Conference',
          date: '2025-06-30',
          author: 'Madam The Director',
          category: 'conference',
          categoryLabel: 'Conference',
          baseViews: 0,
          readTime: 3,
          excerpt: 'Closing speech for the annual conference reviewing first-half work results. Significant progress has been made, especially in resettlement work.',
          content: `<p>Respected Leaders, Civil Servants, and Dear Citizens!</p><p>After reviewing the work results for the first 6 months, we observe significant progress in resettlement work.</p><p>I thank all departments for their efforts.</p>`,
        },
        {
          id: 4,
          title: 'Speech on Strengthening Civil Servant Capacity',
          date: '2025-03-10',
          author: 'H.E. The Director General',
          category: 'training',
          categoryLabel: 'Training',
          baseViews: 0,
          readTime: 6,
          excerpt: 'Speech on strengthening civil servant capacity in resettlement work. Strengthening civil servant capacity is a key priority of our General Department.',
          content: `<p>Distinguished Excellencies, Ladies and Gentlemen, Dear All!</p><p>Strengthening civil servant capacity is a key priority of our General Department.</p>`,
        },
      ],
    };

    // Load stored views and merge with base views
    const storedViews = loadViewCounts();
    
    const mergedSpeeches = {
      km: baseSpeeches.km.map(speech => ({
        ...speech,
        views: getViewCount(speech.id, 'km') || 0,
        image: getSpeechImage(speech.category, speech.id)
      })),
      en: baseSpeeches.en.map(speech => ({
        ...speech,
        views: getViewCount(speech.id, 'en') || 0,
        image: getSpeechImage(speech.category, speech.id)
      }))
    };

    setSpeechesData(mergedSpeeches);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
      setSortOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    initializeSpeeches();
  }, []);

  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };
    window.addEventListener('languagechange', handleLanguageChange);
    const savedLang = localStorage.getItem('language');
    if (savedLang) setCurrentLang(savedLang);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  const currentSpeeches = speechesData[currentLang] || speechesData.km || [];
  
  const categories = [
    { id: 'all', label: currentLang === 'km' ? 'ទាំងអស់' : 'All', icon: BookOpen },
    { id: 'annual-meeting', label: currentLang === 'km' ? 'ប្រជុំប្រចាំឆ្នាំ' : 'Annual', icon: CalendarIcon },
    { id: 'resettlement', label: currentLang === 'km' ? 'ដោះស្រាយផលប៉ះពាល់' : 'Resettlement', icon: Users },
    { id: 'conference', label: currentLang === 'km' ? 'សន្និបាត' : 'Conference', icon: Award },
    { id: 'training', label: currentLang === 'km' ? 'បណ្តុះបណ្តាល' : 'Training', icon: TrendingUp },
  ];

  const translations = {
    km: {
      title: 'សុន្ទរកថា',
      subtitle: 'បណ្តុំសុន្ទរកថារបស់ថ្នាក់ដឹកនាំ',
      searchPlaceholder: 'ស្វែងរក...',
      sortBy: 'តម្រៀប',
      latest: 'ថ្មីជាងគេ',
      popular: 'ការមើលច្រើន',
      oldest: 'ចាស់ជាងគេ',
      showing: 'បង្ហាញ',
      speeches: 'សុន្ទរកថា',
      total: 'សរុប',
      noSpeeches: 'រកមិនឃើញ',
      tryAgain: 'សូមស្វែងរកម្តងទៀត',
      readMore: 'អានបន្ថែម',
      back: 'ត្រលប់',
      views: 'មើល',
      itemsPerPage: 'ចំនួនក្នុងមួយទំព័រ',
      share: 'ចែករំលែក',
      publishedOn: 'ចេញផ្សាយ',
      relatedSpeeches: 'ពាក់ព័ន្ធ',
      minRead: 'នាទី',
      by: 'ដោយ',
      clearAll: 'សម្អាត'
    },
    en: {
      title: 'Speeches',
      subtitle: 'Collection of speeches by the leadership',
      searchPlaceholder: 'Search...',
      sortBy: 'Sort',
      latest: 'Latest',
      popular: 'Most Viewed',
      oldest: 'Oldest',
      showing: 'Showing',
      speeches: 'speeches',
      total: 'Total',
      noSpeeches: 'No speeches found',
      tryAgain: 'Please try again',
      readMore: 'Read more',
      back: 'Back',
      views: 'views',
      itemsPerPage: 'Items per page',
      share: 'Share',
      publishedOn: 'Published',
      relatedSpeeches: 'Related',
      minRead: 'min read',
      by: 'by',
      clearAll: 'Clear'
    },
  };

  const t = translations[currentLang];

  const filteredSpeeches = currentSpeeches
    .filter(speech => {
      const matchesSearch = speech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           speech.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || speech.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return b.views - a.views;
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
      return new Date(b.date) - new Date(a.date);
    });

  const totalPages = Math.ceil(filteredSpeeches.length / itemsPerPage);
  const paginatedSpeeches = filteredSpeeches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const startItem = filteredSpeeches.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, filteredSpeeches.length);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (currentLang === 'km') {
      return date.toLocaleDateString('km-KH', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const incrementViewCount = (speech) => {
    const newViews = speech.views + 1;
    saveViewCount(speech.id, currentLang, newViews);
    
    setSpeechesData(prev => {
      const updated = { ...prev };
      const speechIndex = updated[currentLang].findIndex(s => s.id === speech.id);
      if (speechIndex !== -1) {
        updated[currentLang][speechIndex].views = newViews;
      }
      return updated;
    });
    
    return newViews;
  };

  const handleViewSpeech = (speech) => {
    const updatedSpeech = { ...speech, views: incrementViewCount(speech) };
    setSelectedSpeech(updatedSpeech);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (selectedSpeech) {
      if (navigator.share) {
        navigator.share({
          title: selectedSpeech.title,
          text: selectedSpeech.title,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert(currentLang === 'km' ? 'បានចម្លងតំណភ្ជាប់!' : 'Link copied!');
      }
    }
  };

  const handleDropdownToggle = (dropdownName, e) => {
    e.stopPropagation();
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
      if (dropdownName === 'sort') setSortOpen(false);
    } else {
      setActiveDropdown(dropdownName);
      setSortOpen(dropdownName === 'sort');
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setSortBy("latest");
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, sortBy]);

  // Large List Card with Big Image
  const SpeechListItem = ({ speech }) => (
    <div
      onClick={() => handleViewSpeech(speech)}
      className="group bg-white border border-gray-100 rounded-xl hover:border-[#4CAF50]/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden mb-4"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section - Larger */}
        <div className="relative md:w-72 lg:w-80 h-56 md:h-auto overflow-hidden bg-gray-100">
          <img 
            src={speech.image} 
            alt={speech.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=500&fit=crop';
            }}
          />
          {/* Category Badge Overlay */}
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-medium px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[#2E7D32] rounded-full shadow-sm">
              {speech.categoryLabel}
            </span>
          </div>
          {/* View Count Overlay */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-white text-[10px]">
            <Eye size={10} className="text-white/80" />
            <span className="font-medium">{speech.views} {t.views}</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} className="text-[#4CAF50]" />
              {formatDate(speech.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={12} className="text-[#4CAF50]" />
              {t.by} {speech.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#4CAF50]" />
              {speech.readTime} {t.minRead}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#2E7D32] transition-colors line-clamp-2">
            {speech.title}
          </h3>
          
          <p className="text-sm text-gray-500 mb-4 line-clamp-3">
            {speech.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1.5 text-xs font-medium text-[#2E7D32] hover:gap-2 transition-all">
              <span>{t.readMore}</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Pagination = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`w-8 h-8 rounded-md flex items-center justify-center text-sm ${
            currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <ArrowLeft size={16} />
        </button>
        {[...Array(Math.min(totalPages, 5))].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-md text-sm font-medium ${
                currentPage === page
                  ? 'bg-[#2E7D32] text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          );
        })}
        {totalPages > 5 && <span className="text-sm text-gray-400">...</span>}
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 rounded-md flex items-center justify-center text-sm ${
            currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalBanner
        title={t.title}
        subtitle={t.subtitle}
        height="h-[180px] md:h-[250px] lg:h-[300px]"
        showBreadcrumb={true}
      />

      <Container className="py-6 sm:py-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[#2E7D32] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Search and Filters - Dropdown Style */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="p-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Input */}
              <div className="flex-1 min-w-[200px] relative">
                <Search size={15} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4CAF50] focus:border-[#4CAF50] bg-white text-sm"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => handleDropdownToggle('sort', e)}
                  className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  <span>{t.sortBy}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
                </button>

                {sortOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 min-w-[140px]">
                    {[
                      { value: "latest", label: t.latest },
                      { value: "oldest", label: t.oldest },
                      { value: "popular", label: t.popular }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => { setSortBy(option.value); setSortOpen(false); setActiveDropdown(null); setCurrentPage(1); }}
                        className={`w-full px-3 py-1.5 text-left text-sm ${sortBy === option.value ? "text-[#4CAF50] bg-green-50" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Items Per Page Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => handleDropdownToggle('items', e)}
                  className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <span>{itemsPerPage} {t.speeches}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'items' ? "rotate-180" : ""}`} />
                </button>

                {activeDropdown === 'items' && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 min-w-[120px]">
                    {[4, 6, 8, 10].map(num => (
                      <button
                        key={num}
                        onClick={() => { setItemsPerPage(num); setActiveDropdown(null); setCurrentPage(1); }}
                        className={`w-full px-3 py-1.5 text-left text-sm ${itemsPerPage === num ? "text-[#4CAF50] bg-green-50" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        {num} {t.speeches}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Clear Filters Button */}
              {(searchQuery || activeCategory !== "all" || sortBy !== "latest") && (
                <button
                  onClick={clearFilters}
                  className="px-2.5 py-1.5 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1"
                >
                  <X size={13} />
                  {t.clearAll}
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {(searchQuery || activeCategory !== "all" || sortBy !== "latest") && (
              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2 border-t border-gray-100">
                {sortBy !== "latest" && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">
                    {sortBy === "oldest" && t.oldest}
                    {sortBy === "popular" && t.popular}
                    <button onClick={() => { setSortBy("latest"); setCurrentPage(1); }} className="hover:bg-gray-200 rounded-full p-0.5">
                      <X size={10} />
                    </button>
                  </span>
                )}
                {activeCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">
                    {categories.find(c => c.id === activeCategory)?.label}
                    <button onClick={() => { setActiveCategory("all"); setCurrentPage(1); }} className="hover:bg-gray-200 rounded-full p-0.5">
                      <X size={10} />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="hover:bg-gray-200 rounded-full p-0.5">
                      <X size={10} />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Results Info */}
        <div className="text-xs text-gray-400 mb-3">
          {filteredSpeeches.length > 0
            ? `${t.showing} ${startItem}-${endItem} ${t.ofTotal} ${filteredSpeeches.length} ${t.speeches}`
            : t.noSpeeches}
        </div>

        {/* Results - List Only */}
        {paginatedSpeeches.length > 0 ? (
          <div>
            {paginatedSpeeches.map(speech => <SpeechListItem key={speech.id} speech={speech} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <Mic size={48} className="text-gray-200 mx-auto mb-3" />
            <p className="text-sm text-gray-400">{t.noSpeeches}</p>
            <p className="text-xs text-gray-300 mt-1">{t.tryAgain}</p>
          </div>
        )}

        <Pagination />
      </Container>

      {/* Detail Modal */}
      {selectedSpeech && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-100 z-10 px-4 py-3">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <button onClick={() => setSelectedSpeech(null)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#2E7D32] transition-colors">
                <ArrowLeft size={18} />
                {t.back}
              </button>
              <button onClick={handleShare} className="p-2 text-gray-400 hover:text-[#2E7D32] transition-colors rounded-full hover:bg-gray-50">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Hero Image */}
            <div className="mb-8 rounded-xl overflow-hidden h-64 md:h-80 bg-gray-100 shadow-md">
              <img 
                src={selectedSpeech.image} 
                alt={selectedSpeech.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=500&fit=crop';
                }}
              />
            </div>

            <div className="text-center mb-8">
              <span className="inline-block text-xs px-3 py-1 bg-[#4CAF50]/10 text-[#2E7D32] rounded-full mb-3">
                {selectedSpeech.categoryLabel}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{selectedSpeech.title}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {formatDate(selectedSpeech.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={14} />
                  {selectedSpeech.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye size={14} />
                  {selectedSpeech.views} {t.views}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {selectedSpeech.readTime} {t.minRead}
                </span>
              </div>
            </div>

            <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: selectedSpeech.content }} />
            </div>

            {filteredSpeeches.filter(s => s.id !== selectedSpeech.id).length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">{t.relatedSpeeches}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredSpeeches.filter(s => s.id !== selectedSpeech.id).slice(0, 2).map(speech => (
                    <div 
                      key={speech.id} 
                      onClick={() => handleViewSpeech(speech)} 
                      className="p-3 border border-gray-100 rounded-lg cursor-pointer hover:border-[#4CAF50]/30 hover:shadow-md transition-all flex gap-3 bg-white"
                    >
                      <img 
                        src={speech.image} 
                        alt={speech.title}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=100&h=100&fit=crop';
                        }}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700 line-clamp-2">{speech.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{formatDate(speech.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Speech;