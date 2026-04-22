// src/pages/Speech.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mic, Calendar, User, ChevronRight, Eye, Clock, Share2, 
  Search, Filter, ChevronDown, Grid, List, ArrowLeft, 
  ArrowRight, BookOpen, TrendingUp, Calendar as CalendarIcon,
  Award, Users
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
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [sortBy, setSortBy] = useState('latest');
  const [showFilters, setShowFilters] = useState(false);
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
    return storedViews[key] || 0; // Start from 0 if no stored count
  };

  // Initialize speeches with stored view counts (starting from 0)
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
          excerpt: 'សុន្ទរកថាបើកកិច្ចប្រជុំបូកសរុបលទ្ធផលការងារប្រចាំឆ្នាំ។',
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
          excerpt: 'សុន្ទរកថាស្តីពីការជំរុញការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍។',
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
          excerpt: 'សុន្ទរកថាបិទសន្និបាតបូកសរុបលទ្ធផលការងារ ៦ ខែ ដើមឆ្នាំ ២០២៥។',
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
          excerpt: 'សុន្ទរកថាស្តីពីការពង្រឹងសមត្ថភាពមន្ត្រីរាជការក្នុងការដោះស្រាយផលប៉ះពាល់។',
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
          excerpt: 'Opening speech for the annual work review meeting and action plan.',
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
          excerpt: 'Speech on promoting resettlement work for development projects.',
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
          excerpt: 'Closing speech for the annual conference reviewing first-half work results.',
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
          excerpt: 'Speech on strengthening civil servant capacity in resettlement work.',
          content: `<p>Distinguished Excellencies, Ladies and Gentlemen, Dear All!</p><p>Strengthening civil servant capacity is a key priority of our General Department.</p>`,
        },
      ],
    };

    // Load stored views and merge with base views (starting from 0)
    const storedViews = loadViewCounts();
    
    const mergedSpeeches = {
      km: baseSpeeches.km.map(speech => ({
        ...speech,
        views: getViewCount(speech.id, 'km') || 0
      })),
      en: baseSpeeches.en.map(speech => ({
        ...speech,
        views: getViewCount(speech.id, 'en') || 0
      }))
    };

    setSpeechesData(mergedSpeeches);
  };

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
      latest: 'ថ្មី',
      popular: 'ពេញនិយម',
      oldest: 'ចាស់',
      filter: 'តម្រង',
      showing: 'បង្ហាញ',
      speeches: 'សុន្ទរកថា',
      total: 'សរុប',
      noSpeeches: 'រកមិនឃើញ',
      tryAgain: 'សូមស្វែងរកម្តងទៀត',
      readMore: 'អានបន្ថែម',
      back: 'ត្រលប់',
      views: 'មើល',
      grid: 'ក្រឡា',
      list: 'បញ្ជី',
      itemsPerPage: 'ចំនួនក្នុងមួយទំព័រ',
      share: 'ចែករំលែក',
      publishedOn: 'ចេញផ្សាយ',
      relatedSpeeches: 'ពាក់ព័ន្ធ',
      minRead: 'នាទី',
    },
    en: {
      title: 'Speeches',
      subtitle: 'Collection of speeches by the leadership',
      searchPlaceholder: 'Search...',
      sortBy: 'Sort',
      latest: 'Latest',
      popular: 'Popular',
      oldest: 'Oldest',
      filter: 'Filter',
      showing: 'Showing',
      speeches: 'speeches',
      total: 'Total',
      noSpeeches: 'No results',
      tryAgain: 'Please try again',
      readMore: 'Read more',
      back: 'Back',
      views: 'views',
      grid: 'Grid',
      list: 'List',
      itemsPerPage: 'Items per page',
      share: 'Share',
      publishedOn: 'Published',
      relatedSpeeches: 'Related',
      minRead: 'min read',
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (currentLang === 'km') {
      return date.toLocaleDateString('km-KH', { year: 'numeric', month: 'short', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const incrementViewCount = (speech) => {
    const newViews = speech.views + 1;
    saveViewCount(speech.id, currentLang, newViews);
    
    // Update the speech in state
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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, sortBy]);

  const SpeechCard = ({ speech }) => (
    <div
      onClick={() => handleViewSpeech(speech)}
      className="group bg-white border border-gray-100 rounded-lg hover:border-[#4CAF50]/30 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-[10px] font-medium px-2 py-0.5 bg-[#4CAF50]/10 text-[#2E7D32] rounded">
            {speech.categoryLabel}
          </span>
          <div className="flex items-center text-[10px] text-gray-400">
            <Eye size={10} className="mr-0.5" />
            {speech.views}
          </div>
        </div>
        <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
          {speech.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{speech.excerpt}</p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <span className="flex items-center gap-0.5">
              <Calendar size={10} />
              {formatDate(speech.date)}
            </span>
            <span className="flex items-center gap-0.5">
              <Clock size={10} />
              {speech.readTime} {t.minRead}
            </span>
          </div>
          <ChevronRight size={12} className="text-[#4CAF50] opacity-0 group-hover:opacity-100 transition-all" />
        </div>
      </div>
    </div>
  );

  const SpeechListCard = ({ speech }) => (
    <div
      onClick={() => handleViewSpeech(speech)}
      className="group bg-white border border-gray-100 rounded-lg hover:border-[#4CAF50]/30 hover:shadow-sm transition-all duration-200 cursor-pointer"
    >
      <div className="p-3 flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] font-medium px-1.5 py-0.5 bg-[#4CAF50]/10 text-[#2E7D32] rounded">
              {speech.categoryLabel}
            </span>
            <span className="text-[9px] text-gray-400 flex items-center gap-0.5">
              <Calendar size={9} />
              {formatDate(speech.date)}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-1 group-hover:text-[#2E7D32] transition-colors">
            {speech.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-[9px] text-gray-400">
            <Eye size={9} className="mr-0.5" />
            {speech.views}
          </div>
          <ChevronRight size={14} className="text-gray-300 group-hover:text-[#4CAF50] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
        </div>
      </div>
    </div>
  );

  const Pagination = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex items-center justify-center gap-1 mt-6">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`w-7 h-7 rounded-md flex items-center justify-center text-xs ${
            currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <ArrowLeft size={12} />
        </button>
        {[...Array(Math.min(totalPages, 5))].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-7 h-7 rounded-md text-xs font-medium ${
                currentPage === page
                  ? 'bg-[#2E7D32] text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          );
        })}
        {totalPages > 5 && <span className="text-xs text-gray-400">...</span>}
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`w-7 h-7 rounded-md flex items-center justify-center text-xs ${
            currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <ArrowRight size={12} />
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

      <Container className="py-4 sm:py-6">
        {/* Categories - Compact */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[#2E7D32] text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Search & Filters - Compact */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="flex-1 min-w-[150px] relative">
            <Search size={14} className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-[#4CAF50] bg-white"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1 px-3 py-1.5 text-xs border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50 bg-white"
          >
            <Filter size={12} />
            <span>{t.filter}</span>
            <ChevronDown size={10} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex bg-white border border-gray-200 rounded-md p-0.5">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded ${viewMode === "grid" ? 'bg-gray-100 text-[#2E7D32]' : 'text-gray-400'}`}
            >
              <Grid size={14} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded ${viewMode === "list" ? 'bg-gray-100 text-[#2E7D32]' : 'text-gray-400'}`}
            >
              <List size={14} />
            </button>
          </div>
        </div>

        {/* Filters Panel - Compact */}
        {showFilters && (
          <div className="mb-4 p-3 bg-white rounded-md border border-gray-100 text-xs">
            <div className="flex flex-wrap gap-3">
              <div>
                <label className="text-gray-500 block mb-1">{t.sortBy}</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-200 rounded bg-white"
                >
                  <option value="latest">{t.latest}</option>
                  <option value="popular">{t.popular}</option>
                  <option value="oldest">{t.oldest}</option>
                </select>
              </div>
              <div>
                <label className="text-gray-500 block mb-1">{t.itemsPerPage}</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                  className="px-2 py-1 text-xs border border-gray-200 rounded bg-white"
                >
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                  <option value={12}>12</option>
                </select>
              </div>
              <div className="flex items-center text-gray-400 text-[10px]">
                {t.showing} {paginatedSpeeches.length} / {filteredSpeeches.length} {t.speeches}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {paginatedSpeeches.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {paginatedSpeeches.map(speech => <SpeechCard key={speech.id} speech={speech} />)}
            </div>
          ) : (
            <div className="space-y-1.5">
              {paginatedSpeeches.map(speech => <SpeechListCard key={speech.id} speech={speech} />)}
            </div>
          )
        ) : (
          <div className="text-center py-8">
            <Mic size={32} className="text-gray-200 mx-auto mb-2" />
            <p className="text-xs text-gray-400">{t.noSpeeches}</p>
          </div>
        )}

        <Pagination />
      </Container>

      {/* Detail Modal - Compact */}
      {selectedSpeech && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-100 z-10 px-4 py-2">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <button onClick={() => setSelectedSpeech(null)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#2E7D32]">
                <ArrowLeft size={14} />
                {t.back}
              </button>
              <button onClick={handleShare} className="p-1.5 text-gray-400 hover:text-[#2E7D32]">
                <Share2 size={14} />
              </button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto px-4 py-6">
            <div className="text-center mb-6">
              <span className="inline-block text-[10px] px-2 py-0.5 bg-[#4CAF50]/10 text-[#2E7D32] rounded mb-2">
                {selectedSpeech.categoryLabel}
              </span>
              <h1 className="text-lg font-semibold text-gray-800 mb-2">{selectedSpeech.title}</h1>
              <div className="flex flex-wrap justify-center gap-3 text-[10px] text-gray-400">
                <span className="flex items-center gap-0.5">
                  <Calendar size={10} />
                  {formatDate(selectedSpeech.date)}
                </span>
                <span className="flex items-center gap-0.5">
                  <User size={10} />
                  {selectedSpeech.author}
                </span>
                <span className="flex items-center gap-0.5">
                  <Eye size={10} />
                  {selectedSpeech.views}
                </span>
                <span className="flex items-center gap-0.5">
                  <Clock size={10} />
                  {selectedSpeech.readTime} {t.minRead}
                </span>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-xs text-gray-600">
              <div dangerouslySetInnerHTML={{ __html: selectedSpeech.content }} />
            </div>

            {filteredSpeeches.filter(s => s.id !== selectedSpeech.id).length > 0 && (
              <div className="mt-8 pt-4 border-t border-gray-100">
                <h3 className="text-xs font-medium text-gray-700 mb-2">{t.relatedSpeeches}</h3>
                <div className="space-y-1.5">
                  {filteredSpeeches.filter(s => s.id !== selectedSpeech.id).slice(0, 2).map(speech => (
                    <div 
                      key={speech.id} 
                      onClick={() => handleViewSpeech(speech)} 
                      className="p-2 border border-gray-100 rounded-md cursor-pointer hover:border-[#4CAF50]/30 hover:bg-gray-50 transition-all"
                    >
                      <p className="text-xs font-medium text-gray-700">{speech.title}</p>
                      <p className="text-[10px] text-gray-400">{formatDate(speech.date)}</p>
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
      `}</style>
    </div>
  );
};

export default Speech;