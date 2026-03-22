// src/components/home/NewsSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar, ChevronRight, Eye, Star, TrendingUp, Clock, 
  Download, Share2, User, MessageCircle, Bookmark,
  FileText, Heart, ArrowLeft, Printer,
  Facebook, Twitter, Linkedin, Link2, X, Filter,ChevronLeft,ChevronRightIcon,
  Sparkles, Award, Zap, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import defaultImg from '../../images/defuat_img.jpg';

// Import Post 1 images (14 images)
import post1Img1 from '../../images/Post1/1.jpg';
import post1Img2 from '../../images/Post1/2.jpg';
import post1Img3 from '../../images/Post1/3.jpg';
import post1Img4 from '../../images/Post1/4.jpg';
import post1Img5 from '../../images/Post1/5.jpg';
import post1Img6 from '../../images/Post1/6.jpg';
import post1Img7 from '../../images/Post1/7.jpg';
import post1Img8 from '../../images/Post1/8.jpg';
import post1Img9 from '../../images/Post1/9.jpg';
import post1Img10 from '../../images/Post1/10.jpg';
import post1Img11 from '../../images/Post1/11.jpg';
import post1Img12 from '../../images/Post1/12.jpg';
import post1Img13 from '../../images/Post1/13.jpg';
import post1Img14 from '../../images/Post1/14.jpg';

// Import Post 2 images (16 images)
import post2Img1 from '../../images/Post2/1.jpg';
import post2Img2 from '../../images/Post2/2.jpg';
import post2Img3 from '../../images/Post2/3.jpg';
import post2Img4 from '../../images/Post2/4.jpg';
import post2Img5 from '../../images/Post2/5.jpg';
import post2Img6 from '../../images/Post2/6.jpg';
import post2Img7 from '../../images/Post2/7.jpg';
import post2Img8 from '../../images/Post2/8.jpg';
import post2Img9 from '../../images/Post2/9.jpg';
import post2Img10 from '../../images/Post2/10.jpg';
import post2Img11 from '../../images/Post2/11.jpg';
import post2Img12 from '../../images/Post2/12.jpg';
import post2Img13 from '../../images/Post2/13.jpg';
import post2Img14 from '../../images/Post2/14.jpg';
import post2Img15 from '../../images/Post2/15.jpg';
import post2Img16 from '../../images/Post2/16.jpg';

const NewsSection = ({ onViewAll }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [currentLang, setCurrentLang] = useState('km');
  const [selectedNews, setSelectedNews] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [savedItems, setSavedItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [shareModal, setShareModal] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Post 1 Images Array
  const post1Images = [
    post1Img1, post1Img2, post1Img3, post1Img4, post1Img5, post1Img6,
    post1Img7, post1Img8, post1Img9, post1Img10, post1Img11, post1Img12,
    post1Img13, post1Img14
  ];

  // Post 2 Images Array
  const post2Images = [
    post2Img1, post2Img2, post2Img3, post2Img4, post2Img5, post2Img6,
    post2Img7, post2Img8, post2Img9, post2Img10, post2Img11, post2Img12,
    post2Img13, post2Img14, post2Img15, post2Img16
  ];

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

  const categories = [
    { id: 'all', label: { km: 'ទាំងអស់', en: 'All News' }, icon: <Sparkles size={14} />, count: 2, color: 'from-green-500 to-emerald-500' },
    { id: 'event', label: { km: 'ព្រឹត្តិការណ៍', en: 'Events' }, icon: <Zap size={14} />, count: 2, color: 'from-green-500 to-emerald-500' },
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
      likes: 'ចូលចិត្ត',
      save: 'រក្សាទុក',
      author: 'អ្នកនិពន្ធ',
      shareVia: 'ចែករំលែកតាមរយៈ',
      copyLink: 'ចម្លងតំណ',
      copied: 'បានចម្លង!',
      filter: 'តម្រង',
      loadMore: 'ផ្ទុកបន្ថែម',
      featured: 'ព័ត៌មានពិសេស',
      featuredDesc: 'សូមតាមដានព័ត៌មានថ្មីៗ និងការផ្សព្វផ្សាយពីអគ្គនាយកដ្ឋាន',
      viewImages: 'មើលរូបភាពទាំងអស់',
      close: 'បិទ',
      sort: 'តម្រៀបតាម',
      latest: 'ថ្មីបំផុត',
      popular: 'ពេញនិយម'
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
      likes: 'Likes',
      save: 'Save',
      author: 'Author',
      shareVia: 'Share via',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      filter: 'Filter',
      loadMore: 'Load More',
      featured: 'Featured News',
      featuredDesc: 'Stay updated with the latest news and announcements from the department',
      viewImages: 'View All Images',
      close: 'Close',
      sort: 'Sort by',
      latest: 'Latest',
      popular: 'Most Popular'
    }
  };

  const t = translations[currentLang];

  // News data matching AllNewsPage with full image arrays
  const enhancedNews = [
    {
      id: 1,
      title: {
        km: "ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា ជួបពិភាក្សាការងារជាមួយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)",
        en: "H.E. Im Sitthyra Meets with Asian Development Bank (ADB) for Work Discussion",
      },
      date: "20 មករា 2026",
      category: "event",
      images: post1Images,
      mainImage: post1Img1,
      summary: {
        km: "ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញជួបសម្តែងការគួរសម និងពិភាក្សាការងារជាមួយលោកស្រី Yasmin Siddiqi, Country Director នៃធនាគារអភិវឌ្ឍន៍អាស៊ីប្រចាំកម្ពុជា។",
        en: "H.E. Im Sitthyra, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, paid a courtesy call and held work discussions with Ms. Yasmin Siddiqi, Country Director of the Asian Development Bank (ADB) in Cambodia.",
      },
      author: {
        km: "នាយកដ្ឋានព័ត៌មាន",
        en: "Information Department",
      },
      hasAttachment: true,
      content: {
        km: `
          <div class="space-y-4">
            <p class="text-lg leading-relaxed">នៅព្រឹកថ្ងៃអង្គារ ២កើត ខែមាឃ ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី២០ ខែមករា ឆ្នាំ២០២៦ នៅទីស្តីការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ៖</p>
            
            <p class="leading-relaxed">ឯកឧត្តម <strong>អ៊ឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញជួបសម្តែងការគួរសម និងពិភាក្សាការងារជាមួយលោកស្រី <strong>Yasmin Siddiqi</strong>, Country Director នៃធនាគារអភិវឌ្ឍន៍អាស៊ីប្រចាំកម្ពុជា ។</p>
            
            <p class="leading-relaxed">ក្នុងជំនួបនេះ ភាគីទាំងពីរបានពិភាក្សាអំពីកិច្ចសហប្រតិបត្តិការនាពេលខាងមុខ និងការពង្រឹងការងារដោះស្រាយផលប៉ះពាល់ពីគម្រោងអភិវឌ្ឍន៍នៅកម្ពុជា។</p>
            
            <p class="leading-relaxed">ការជួបពិភាក្សានេះបានប្រព្រឹត្តទៅក្នុងបរិយាកាសប្រកបដោយភាពស្និទ្ធស្នាល និងការយោគយល់គ្នាជាលក្ខណៈស្ថាបនា ដែលនឹងរួមចំណែកជំរុញការងារអភិវឌ្ឍន៍ប្រកបដោយចីរភាពនៅកម្ពុជា។</p>
            
            <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
          </div>
        `,
        en: `
          <div class="space-y-4">
            <p class="text-lg leading-relaxed">On Tuesday morning, January 20, 2026, at the Ministry of Economy and Finance:</p>
            
            <p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, paid a courtesy call and held work discussions with <strong>Ms. Yasmin Siddiqi</strong>, Country Director of the Asian Development Bank (ADB) in Cambodia.</p>
            
            <p class="leading-relaxed">During this meeting, both parties discussed future cooperation and strengthening the work of addressing impacts from development projects in Cambodia.</p>
            
            <p class="leading-relaxed">This discussion took place in a friendly and constructive atmosphere, which will contribute to promoting sustainable development in Cambodia.</p>
            
            <p class="text-right mt-6">Thank you!</p>
          </div>
        `,
      },
    },
    {
      id: 2,
      title: {
        km: "សិក្ខាសាលាស្តីពីការគ្រប់គ្រងលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី",
        en: "Workshop on Land Acquisition and Land Use Restriction Management",
      },
      date: "5 មីនា 2026",
      category: "event",
      images: post2Images,
      mainImage: post2Img1,
      summary: {
        km: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ សហការជាមួយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB) រៀបចំសិក្ខាសាលាស្តីពីការគ្រប់គ្រងលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី។",
        en: "The General Department of Project Impact Resolution, in cooperation with the Asian Development Bank (ADB), organized a workshop on Land Acquisition and Land Use Restriction Management.",
      },
      author: {
        km: "នាយកដ្ឋានព័ត៌មាន",
        en: "Information Department",
      },
      hasAttachment: true,
      content: {
        km: `
          <div class="space-y-4">
            <p class="text-lg leading-relaxed">នៅថ្ងៃព្រហស្បតិ៍ ២រោច ខែផល្គុន ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី៥ ខែមីនា គ.ស.២០២៦ នៅសណ្ឋាគារហៃយ៉ាត់ រីជេនស៊ី ភ្នំពេញ៖</p>
            
            <p class="leading-relaxed">អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ សហការជាមួយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB) រៀបចំសិក្ខាសាលាស្តីពីការគ្រប់គ្រងលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី នៃគម្រោងដែលហិរញ្ញប្បទានដោយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)។</p>
            
            <p class="leading-relaxed">សិក្ខាសាលានេះ ធ្វើឡើងក្រោមការដឹកនាំដ៏ខ្ពង់ខ្ពស់របស់ឯកឧត្តម <strong>អុឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាល ទទួលបន្ទុកជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍។</p>
            
            <p class="leading-relaxed">សិក្ខាសាលានេះ មានការអញ្ជើញចូលរួមវាគ្មិនមកពីការិយាល័យកណ្តាលរបស់ ADB, លោកស្រី <strong>Jocelyn Erlinda S. Munsayac</strong>, Director, Regional Operations Service 3, លោក <strong>Jose "Tito" Nicolas</strong>, Principal Safeguards Specialist Social Team Head, លោក <strong>Toby Nugent</strong>, Senior Safeguards Specialist (Social) និងមន្រ្តីជំនាញ Safeguard របស់ ADB ជាច្រើនទៀត ដើម្បីបណ្តុះបណ្តាល និងបញ្រ្ជាបការយល់ដឹងអំពីគោលនយោបាយ ESS5 ស្តីពីលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី (Land Acquisition and Land Use Restriction) នៃក្របខ័ណ្ឌបរិស្ថាន និងសង្គម របស់ ADB ជូនដល់ថ្នាក់ដឹកនាំ និងមន្រ្តីក្រោមឱវាទអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍។</p>
            
            <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
          </div>
        `,
        en: `
          <div class="space-y-4">
            <p class="text-lg leading-relaxed">On Thursday, March 5, 2026, at the Hyatt Regency Hotel, Phnom Penh:</p>
            
            <p class="leading-relaxed">The General Department of Project Impact Resolution, in cooperation with the Asian Development Bank (ADB), organized a workshop on Land Acquisition and Land Use Restriction Management for projects financed by the Asian Development Bank (ADB).</p>
            
            <p class="leading-relaxed">This workshop was held under the high leadership of <strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution.</p>
            
            <p class="leading-relaxed">The workshop featured speakers from ADB headquarters, including <strong>Ms. Jocelyn Erlinda S. Munsayac</strong>, Director, Regional Operations Service 3, <strong>Mr. Jose "Tito" Nicolas</strong>, Principal Safeguards Specialist Social Team Head, <strong>Mr. Toby Nugent</strong>, Senior Safeguards Specialist (Social), and other ADB Safeguards specialists to train and enhance understanding of ESS5 policy on Land Acquisition and Land Use Restriction under ADB's Environmental and Social Framework for the leadership and officials under the General Department of Project Impact Resolution.</p>
            
            <p class="text-right mt-6">Thank you!</p>
          </div>
        `,
      },
    },
  ];

  const filteredNews = activeTab === 'all' 
    ? enhancedNews 
    : enhancedNews.filter(item => item.category === activeTab);

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

  const getCategoryColor = (category) => {
    return 'from-green-500 to-emerald-500';
  };

  const getCategoryLabel = (category) => {
    return currentLang === 'km' ? 'ព្រឹត្តិការណ៍' : 'Event';
  };

  const relatedNews = enhancedNews
    .filter(item => item.id !== selectedNews?.id)
    .slice(0, 2);

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
            <span className="bg-[#4CAF50] bg-opacity-20 text-[#2E7D32] text-sm font-medium px-3 py-1.5 rounded-full">
              {filteredNews.length}
            </span>
          </div>
          
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="md:hidden flex items-center space-x-1 px-3 py-1.5 bg-[#4CAF50] bg-opacity-10 rounded-lg text-sm text-[#2E7D32]"
          >
            <Filter size={14} />
            <span>{t.filter}</span>
          </button>

          {/* Desktop View All */}
          <button 
            onClick={handleViewAll}
            className="hidden md:flex items-center text-sm text-[#2E7D32] hover:text-[#4CAF50] transition-colors group"
          >
            {t.viewAll}
            <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Tabs - Desktop */}
        <div className="hidden md:flex flex-wrap items-center gap-2 mb-6">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white shadow-md'
                    : 'bg-[#4CAF50] bg-opacity-10 text-[#2E7D32] hover:bg-[#4CAF50] hover:bg-opacity-20'
                }`}
              >
                <div className="flex items-center space-x-1.5">
                  <span className={isActive ? 'text-white' : 'text-[#2E7D32]'}>
                    {cat.icon}
                  </span>
                  <span>{cat.label[currentLang]}</span>
                  <span className={`ml-1 text-xs ${
                    isActive ? 'text-white/80' : 'text-[#2E7D32]/60'
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
          <div className="md:hidden mb-4 p-3 bg-white border border-[#4CAF50] border-opacity-20 rounded-lg shadow-lg animate-fadeIn">
            <div className="space-y-1">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveTab(cat.id);
                      setShowMobileFilter(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white'
                        : 'hover:bg-[#4CAF50] hover:bg-opacity-10 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className={isActive ? 'text-white' : 'text-[#2E7D32]'}>
                        {cat.icon}
                      </span>
                      <span>{cat.label[currentLang]}</span>
                    </div>
                    <span className={`text-xs ${
                      isActive ? 'text-white/80' : 'text-[#2E7D32]/60'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
              <div className="border-t border-[#4CAF50] border-opacity-20 my-2 pt-2">
                <button 
                  onClick={handleViewAll}
                  className="flex items-center justify-center text-[#2E7D32] text-sm font-medium py-2 w-full hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
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
          {filteredNews.map((item, index) => {
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
                    src={item.mainImage} 
                    alt={item.title[currentLang]}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white text-xs font-medium rounded-full shadow-lg flex items-center space-x-1">
                      <Award size={10} />
                      <span>{getCategoryLabel(item.category)}</span>
                    </span>
                  </div>

                  {/* Image Count Badge */}
                  {item.images && item.images.length > 1 && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.images.length}
                      </span>
                    </div>
                  )}

                  {/* Date */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-medium text-gray-900 mb-2 leading-relaxed line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
                    {item.title[currentLang]}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {item.summary[currentLang]}
                  </p>

                  {/* Footer with actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button 
                      className="flex items-center space-x-1 text-xs text-[#4CAF50] hover:text-[#2E7D32] font-medium group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadMore(item);
                      }}
                    >
                      <span>{t.readMore}</span>
                      <ChevronRight size={12} className="group/btn:hover:translate-x-1 transition-transform" />
                    </button>
                    
                    
                  </div>

                  {/* Hover Progress Indicator */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] transition-all duration-500" 
                       style={{ width: isHovered ? '100%' : '0%' }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured News Banner */}
        {/* <div className="mt-8 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
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
                <p className="text-sm text-green-100 max-w-xl">
                  {t.featuredDesc}
                </p>
              </div>
            </div>
            <button 
              onClick={handleViewAll}
              className="mt-4 md:mt-0 px-6 py-2.5 bg-white text-[#2E7D32] rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 group"
            >
              <span className="font-medium">{t.viewAll}</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div> */}
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
                  className="flex items-center space-x-2 text-gray-500 hover:text-[#2E7D32] transition-colors group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">{t.back}</span>
                </button>
                <div className="flex items-center space-x-2">
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
                src={selectedNews.mainImage} 
                alt={selectedNews.title[currentLang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white text-sm font-medium rounded-lg shadow-lg">
                  {getCategoryLabel(selectedNews.category)}
                </span>
              </div>

              {/* Image Count Badge */}
              {selectedNews.images && selectedNews.images.length > 1 && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {selectedNews.images.length}
                  </span>
                </div>
              )}

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
                <Calendar size={14} className="text-[#4CAF50]" />
                <span>{selectedNews.date}</span>
              </div>
            </div>

            {/* Main Content */}
            <div 
              className="prose prose-sm max-w-none mb-8 text-gray-600"
              dangerouslySetInnerHTML={{ __html: selectedNews.content[currentLang] }}
            />

            {/* Gallery Section */}
            {selectedNews.images && selectedNews.images.length > 1 && (
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {t.viewImages}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedNews.images.slice(0, 8).map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleOpenLightbox(idx)}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group bg-gray-100"
                    >
                      <img
                        src={img}
                        alt={`${selectedNews.title[currentLang]} - ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {idx === 7 && selectedNews.images.length > 8 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-medium">
                            +{selectedNews.images.length - 8}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
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
            {relatedNews.length > 0 && (
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">{t.related}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedNews.map((item) => (
                    <div 
                      key={item.id}
                      className="group cursor-pointer border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all"
                      onClick={() => handleReadMore(item)}
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img 
                          src={item.mainImage} 
                          alt={item.title[currentLang]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="text-xs font-medium text-gray-900 group-hover:text-[#2E7D32] line-clamp-2 mb-1">
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
            )}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {showLightbox && selectedNews && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center">
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={handlePrevImage}
            disabled={selectedImageIndex === 0}
            className={`absolute left-4 z-10 text-white hover:text-gray-300 transition-colors ${
              selectedImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={handleNextImage}
            disabled={selectedImageIndex === selectedNews.images.length - 1}
            className={`absolute right-4 z-10 text-white hover:text-gray-300 transition-colors ${
              selectedImageIndex === selectedNews.images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRightIcon size={48} />
          </button>

          <div className="max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedNews.images[selectedImageIndex]}
              alt={`${selectedNews.title[currentLang]} - ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {selectedNews.images.length}
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