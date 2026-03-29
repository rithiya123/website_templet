// src/components/home/NewsSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar, ChevronRight, Eye, Star, TrendingUp, Clock, 
  Download, Share2, User, MessageCircle, Bookmark,
  FileText, Heart, ArrowLeft, Printer,
  Facebook, Twitter, Linkedin, Link2, X, Filter, ChevronLeft, ChevronRightIcon,
  Sparkles, Award, Zap, Globe, List
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

// Import Post 3 images (37 images)
import post3Img1 from '../../images/Post3/1.jpg';
import post3Img2 from '../../images/Post3/2.jpg';
import post3Img3 from '../../images/Post3/3.jpg';
import post3Img4 from '../../images/Post3/4.jpg';
import post3Img5 from '../../images/Post3/5.jpg';
import post3Img6 from '../../images/Post3/6.jpg';
import post3Img7 from '../../images/Post3/7.jpg';
import post3Img8 from '../../images/Post3/8.jpg';
import post3Img9 from '../../images/Post3/9.jpg';
import post3Img10 from '../../images/Post3/10.jpg';
import post3Img11 from '../../images/Post3/11.jpg';
import post3Img12 from '../../images/Post3/12.jpg';
import post3Img13 from '../../images/Post3/13.jpg';
import post3Img14 from '../../images/Post3/14.jpg';
import post3Img15 from '../../images/Post3/15.jpg';
import post3Img16 from '../../images/Post3/16.jpg';
import post3Img17 from '../../images/Post3/17.jpg';
import post3Img18 from '../../images/Post3/18.jpg';
import post3Img19 from '../../images/Post3/19.jpg';
import post3Img20 from '../../images/Post3/20.jpg';
import post3Img21 from '../../images/Post3/21.jpg';
import post3Img22 from '../../images/Post3/22.jpg';
import post3Img23 from '../../images/Post3/23.jpg';
import post3Img24 from '../../images/Post3/24.jpg';
import post3Img25 from '../../images/Post3/25.jpg';
import post3Img26 from '../../images/Post3/26.jpg';
import post3Img27 from '../../images/Post3/27.jpg';
import post3Img28 from '../../images/Post3/28.jpg';
import post3Img29 from '../../images/Post3/29.jpg';
import post3Img30 from '../../images/Post3/30.jpg';
import post3Img31 from '../../images/Post3/31.jpg';
import post3Img32 from '../../images/Post3/32.jpg';
import post3Img33 from '../../images/Post3/33.jpg';
import post3Img34 from '../../images/Post3/34.jpg';
import post3Img35 from '../../images/Post3/35.jpg';
import post3Img36 from '../../images/Post3/36.jpg';
import post3Img37 from '../../images/Post3/37.jpg';

// Import Post 4 images (22 images)
import post4Img1 from '../../images/Post4/1.jpg';
import post4Img2 from '../../images/Post4/2.jpg';
import post4Img3 from '../../images/Post4/3.jpg';
import post4Img4 from '../../images/Post4/4.jpg';
import post4Img5 from '../../images/Post4/5.jpg';
import post4Img6 from '../../images/Post4/6.jpg';
import post4Img7 from '../../images/Post4/7.jpg';
import post4Img8 from '../../images/Post4/8.jpg';
import post4Img9 from '../../images/Post4/9.jpg';
import post4Img10 from '../../images/Post4/10.jpg';
import post4Img11 from '../../images/Post4/11.jpg';
import post4Img12 from '../../images/Post4/12.jpg';
import post4Img13 from '../../images/Post4/13.jpg';
import post4Img14 from '../../images/Post4/14.jpg';
import post4Img15 from '../../images/Post4/15.jpg';
import post4Img17 from '../../images/Post4/17.jpg';
import post4Img18 from '../../images/Post4/18.jpg';
import post4Img19 from '../../images/Post4/19.jpg';
import post4Img20 from '../../images/Post4/20.jpg';
import post4Img21 from '../../images/Post4/21.jpg';
import post4Img22 from '../../images/Post4/22.jpg';

// Import Post 5 images (7 images)
import post5Img1 from '../../images/Post5/1.jpg';
import post5Img2 from '../../images/Post5/2.jpg';
import post5Img3 from '../../images/Post5/3.jpg';
import post5Img4 from '../../images/Post5/4.jpg';
import post5Img5 from '../../images/Post5/5.jpg';
import post5Img6 from '../../images/Post5/6.jpg';
import post5Img7 from '../../images/Post5/7.jpg';

// Import Post 6 images (12 images)
import post6Img1 from '../../images/Post6/1.jpg';
import post6Img2 from '../../images/Post6/2.jpg';
import post6Img3 from '../../images/Post6/3.jpg';
import post6Img4 from '../../images/Post6/4.jpg';
import post6Img5 from '../../images/Post6/5.jpg';
import post6Img6 from '../../images/Post6/6.jpg';
import post6Img7 from '../../images/Post6/7.jpg';
import post6Img8 from '../../images/Post6/8.jpg';
import post6Img9 from '../../images/Post6/9.jpg';
import post6Img10 from '../../images/Post6/10.jpg';
import post6Img11 from '../../images/Post6/11.jpg';
import post6Img12 from '../../images/Post6/12.jpg';

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

  // Post 3 Images Array (37 images)
  const post3Images = [
    post3Img1, post3Img2, post3Img3, post3Img4, post3Img5, post3Img6,
    post3Img7, post3Img8, post3Img9, post3Img10, post3Img11, post3Img12,
    post3Img13, post3Img14, post3Img15, post3Img16, post3Img17, post3Img18,
    post3Img19, post3Img20, post3Img21, post3Img22, post3Img23, post3Img24,
    post3Img25, post3Img26, post3Img27, post3Img28, post3Img29, post3Img30,
    post3Img31, post3Img32, post3Img33, post3Img34, post3Img35, post3Img36,
    post3Img37
  ];

  // Post 4 Images Array (21 images)
  const post4Images = [
    post4Img1, post4Img2, post4Img3, post4Img4, post4Img5, post4Img6,
    post4Img7, post4Img8, post4Img9, post4Img10, post4Img11, post4Img12,
    post4Img13, post4Img14, post4Img15, post4Img17, post4Img18,
    post4Img19, post4Img20, post4Img21, post4Img22
  ];

  // Post 5 Images Array (7 images)
  const post5Images = [
    post5Img1, post5Img2, post5Img3, post5Img4, post5Img5, post5Img6, post5Img7
  ];

  // Post 6 Images Array (12 images)
  const post6Images = [
    post6Img1, post6Img2, post6Img3, post6Img4, post6Img5, post6Img6,
    post6Img7, post6Img8, post6Img9, post6Img10, post6Img11, post6Img12
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
    { id: 'all', label: { km: 'ទាំងអស់', en: 'All News' }, icon: <Sparkles size={14} />, count: 6, color: 'from-green-500 to-emerald-500' },
    { id: 'event', label: { km: 'ព្រឹត្តិការណ៍', en: 'Events' }, icon: <Zap size={14} />, count: 6, color: 'from-green-500 to-emerald-500' },
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

  // Enhanced News data with 6 posts - Updated with actual content
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
      views: 1245,
      likes: 89,
      content: {
        km: `<div class="space-y-4"><p class="text-lg leading-relaxed">នៅព្រឹកថ្ងៃអង្គារ ២កើត ខែមាឃ ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី២០ ខែមករា ឆ្នាំ២០២៦ នៅទីស្តីការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ៖</p><p class="leading-relaxed">ឯកឧត្តម <strong>អ៊ឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញជួបសម្តែងការគួរសម និងពិភាក្សាការងារជាមួយលោកស្រី <strong>Yasmin Siddiqi</strong>, Country Director នៃធនាគារអភិវឌ្ឍន៍អាស៊ីប្រចាំកម្ពុជា ។</p><p class="text-right mt-6">សូមគោរពអរគុណ!</p></div>`,
        en: `<div class="space-y-4"><p class="text-lg leading-relaxed">On Tuesday morning, January 20, 2026, at the Ministry of Economy and Finance:</p><p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, paid a courtesy call and held work discussions with <strong>Ms. Yasmin Siddiqi</strong>, Country Director of the Asian Development Bank (ADB) in Cambodia.</p><p class="text-right mt-6">Thank you!</p></div>`,
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
      views: 2341,
      likes: 156,
      content: {
        km: `<div class="space-y-4"><p class="text-lg leading-relaxed">នៅថ្ងៃព្រហស្បតិ៍ ២រោច ខែផល្គុន ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី៥ ខែមីនា គ.ស.២០២៦ នៅសណ្ឋាគារហៃយ៉ាត់ រីជេនស៊ី ភ្នំពេញ៖</p><p class="leading-relaxed">អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ សហការជាមួយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB) រៀបចំសិក្ខាសាលាស្តីពីការគ្រប់គ្រងលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី នៃគម្រោងដែលហិរញ្ញប្បទានដោយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)។</p><p class="text-right mt-6">សូមគោរពអរគុណ!</p></div>`,
        en: `<div class="space-y-4"><p class="text-lg leading-relaxed">On Thursday, March 5, 2026, at the Hyatt Regency Hotel, Phnom Penh:</p><p class="leading-relaxed">The General Department of Project Impact Resolution, in cooperation with the Asian Development Bank (ADB), organized a workshop on Land Acquisition and Land Use Restriction Management for projects financed by the Asian Development Bank (ADB).</p><p class="text-right mt-6">Thank you!</p></div>`,
      },
    },
    {
      id: 3,
      title: {
        km: "ឯកឧត្តម អុឹម សិទ្ធីរ៉ា អញ្ជើញចូលរួមកិច្ចប្រជុំបូកសរុបលើលទ្ធផលនៃកិច្ចប្រជុំពិគ្រោះយោបល់កម្រិតតំបន់របស់ ADB",
        en: "H.E. Im Sitthyra Attends ADB's Accountability Mechanism Policy Review Wrap-up Session",
      },
      date: "12 កក្កដា 2025",
      category: "event",
      images: post3Images,
      mainImage: post3Img1,
      summary: {
        km: "ដោយទទួលបានការចាត់តាំងដ៏ខ្ពង់ខ្ពស់របស់ ឯកឧត្តមអគ្គបណ្ឌិតសភាចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្រ្តី រដ្ឋមន្រ្តីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ ឯកឧត្តម អុឹម សិទ្ធីរ៉ា បានអញ្ជើញចូលរួមកិច្ចប្រជុំបូកសរុបលើលទ្ធផលពីកិច្ចប្រជុំពិគ្រោះយោបល់កម្រិតតំបន់សម្រាប់ការពិនិត្យនិងធ្វើបច្ចុប្បន្នកម្មគោលនយោបាយយន្តការគណនេយ្យភាពរបស់ធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)។",
        en: "Following the high assignment from H.E. Dr. Aun Pornmoniroth, Deputy Prime Minister, Minister of Economy and Finance, H.E. Im Sitthyra attended the Review of ADB's Accountability Mechanism Policy Wrap-up Session on Regional Consultations.",
      },
      author: {
        km: "នាយកដ្ឋានព័ត៌មាន",
        en: "Information Department",
      },
      hasAttachment: true,
      views: 1876,
      likes: 123,
      content: {
        km: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">ដោយទទួលបានការចាត់តាំងដ៏ខ្ពង់ខ្ពស់របស់ ឯកឧត្តមអគ្គបណ្ឌិតសភាចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្រ្តី រដ្ឋមន្រ្តីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ</p>
          <p class="leading-relaxed">ចាប់ពីថ្ងៃទី១០ ដល់ថ្ងៃទី១២ ខែកក្កដា ឆ្នាំ២០២៥ នៅការិយាល័យកណ្តាលធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB) នៅរដ្ឋធានីម៉ានីល នៃសាធារណរដ្ឋហ្វីលីពិន៖</p>
          <p class="leading-relaxed">ឯកឧត្តម <strong>អុឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញចូលរួមកិច្ចប្រជុំបូកសរុបលើលទ្ធផលដែលទទួលបានពីកិច្ចប្រជុំពិគ្រោះយោបល់កម្រិតតំបន់សម្រាប់ការពិនិត្យនិងធ្វើបច្ចុប្បន្នកម្មគោលនយោបាយយន្តការគណនេយ្យភាពរបស់ធនាគារអភិវឌ្ឍន៍អាស៊ី (Review of ADB's Accountability Mechanism Policy Wrap-up Session on Regional Consultations)។</p>
          <p class="leading-relaxed">កិច្ចប្រជុំនេះ មានការចូលរួមពីតំណាងនៃបណ្តាប្រទេសជាច្រើន រួមមានដូចជា៖ ប្រទេសតួកគី, ប្រទេសហ្វីជី, ប្រទេសឥណ្ឌូនេស៊ី, ប្រទេសហ្វីលីពីន, ប្រទេសឡាវ, ប្រទេសថៃ, ប្រទេសស្រីលង្កា, ប្រទេសវៀតណាម, ប្រទេសបង់ក្លាដែស, ប្រទេសឥណ្ឌា និងប្រទេសផ្សេងៗជាច្រើនទៀត។</p>
          <p class="leading-relaxed">ទន្ទឹមនេះ, ឯកឧត្តម អុឹម សិទ្ធីរ៉ា ប្រតិភូរាជរដ្ឋាភិបាល ត្រូវបានអញ្ជើញជាវាគ្មិនសម្រាប់កិច្ចពិភាក្សា និងការចែករំលែកបទពិសោធន៍របស់កម្ពុជាក្នុងការអនុវត្តគោលនយោបាយយន្តការគណនេយ្យភាព ក្រោមកិច្ចសម្របសម្រួលរបស់លោកស្រី Rachel Thompson, Executive Director របស់ ADB ។</p>
          <p class="leading-relaxed">ក្រោយកិច្ចប្រជុំបានបញ្ចប់ លោកស្រី Rachel Thompson បានអញ្ជើញគណៈប្រតិភូកម្ពុជាពិសាអាហារពេលល្ងាច (Exclusive dinner) ដើម្បីសម្តែងការគួរសម និងអរគុណចំពោះកម្ពុជាសម្រាប់ការចូលរួមយ៉ាងសកម្មលើកិច្ចដំណើរការធ្វើបច្ចុប្បន្នកម្ម AM Policy នេះ។</p>
          <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
        </div>`,
        en: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">Following the high assignment from H.E. Dr. Aun Pornmoniroth, Deputy Prime Minister, Minister of Economy and Finance:</p>
          <p class="leading-relaxed">From July 10 to 12, 2025, at the Asian Development Bank (ADB) headquarters in Manila, Republic of the Philippines:</p>
          <p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, attended the Review of ADB's Accountability Mechanism Policy Wrap-up Session on Regional Consultations.</p>
          <p class="leading-relaxed">This meeting was attended by representatives from many countries including Turkey, Fiji, Indonesia, Philippines, Laos, Thailand, Sri Lanka, Vietnam, Bangladesh, India, and many others.</p>
          <p class="leading-relaxed">Additionally, H.E. Im Sitthyra was invited as a speaker for discussions and to share Cambodia's experience in implementing the Accountability Mechanism Policy, facilitated by Ms. Rachel Thompson, Executive Director of ADB.</p>
          <p class="leading-relaxed">Following the conclusion of the meeting, Ms. Rachel Thompson hosted an exclusive dinner for the Cambodian delegation to express courtesy and gratitude for Cambodia's active participation in the AM Policy review and update process.</p>
          <p class="text-right mt-6">Thank you!</p>
        </div>`,
      },
    },
    {
      id: 4,
      title: {
        km: "ឯកឧត្តម អុឹម សិទ្ធីរ៉ា ជួបសម្តែងការគួរសម និងជម្រាបលា លោកស្រី Jyotsana Varma, Country Director នៃ ADB",
        en: "H.E. Im Sitthyra Pays Courtesy Call and Farewell to Ms. Jyotsana Varma, ADB Country Director",
      },
      date: "16 កញ្ញា 2025",
      category: "event",
      images: post4Images,
      mainImage: post4Img1,
      summary: {
        km: "នៅព្រឹកថ្ងៃអង្គារ ៩រោច ខែភទ្របទ ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី១៦ ខែកញ្ញា ឆ្នាំ២០២៥ នៅទីស្តីការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ ឯកឧត្តម អុឹម សិទ្ធីរ៉ា បានអញ្ជើញជួបសម្តែងការគួរសម និងជម្រាបលា លោកស្រី Jyotsana Varma, Country Director នៃធនាគារអភិវឌ្ឍន៍អាស៊ីប្រចាំកម្ពុជា។",
        en: "On Tuesday morning, September 16, 2025, at the Ministry of Economy and Finance, H.E. Im Sitthyra paid a courtesy call and bid farewell to Ms. Jyotsana Varma, Country Director of the Asian Development Bank in Cambodia.",
      },
      author: {
        km: "នាយកដ្ឋានព័ត៌មាន",
        en: "Information Department",
      },
      hasAttachment: true,
      views: 1543,
      likes: 98,
      content: {
        km: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">នៅព្រឹកថ្ងៃអង្គារ ៩រោច ខែភទ្របទ ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី១៦ ខែកញ្ញា ឆ្នាំ២០២៥ នៅទីស្តីការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ៖</p>
          <p class="leading-relaxed">ឯកឧត្តម <strong>អុឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញជួបសម្តែងការគួរសម និងជម្រាបលា លោកស្រី <strong>Jyotsana Varma</strong>, Country Director នៃធនាគារអភិវឌ្ឍន៍អាស៊ីប្រចាំកម្ពុជា ក្នុងឱកាសដែលលោកស្រីបានបញ្ចប់អាណត្តិការងារនៅកម្ពុជា។</p>
          <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
        </div>`,
        en: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">On Tuesday morning, September 16, 2025, at the Ministry of Economy and Finance:</p>
          <p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, paid a courtesy call and bid farewell to <strong>Ms. Jyotsana Varma</strong>, Country Director of the Asian Development Bank in Cambodia, on the occasion of her completion of her term of office in Cambodia.</p>
          <p class="text-right mt-6">Thank you!</p>
        </div>`,
      },
    },
    {
      id: 5,
      title: {
        km: "កិច្ចប្រជុំពិភាក្សាជាមួយតំណាងមូនិធិសម្រាប់កិច្ចសហប្រតិការអភិវឌ្ឍន៍សេដ្ឋកិច្ច (EDCF)",
        en: "Meeting with Economic Development Cooperation Fund (EDCF) Representative",
      },
      date: "9 ធ្នូ 2025",
      category: "event",
      images: post5Images,
      mainImage: post5Img1,
      summary: {
        km: "ឯកឧត្តម អុឹម សិទ្ធីរ៉ា ប្រតិភូរាជរដ្ឋាភិបាល ទទួលបន្ទុកជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានដឹកនាំសហការីនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី២ ចូលរួមកិច្ចប្រជុំពិភាក្សាជាមួយតំណាងមូនិធិសម្រាប់កិច្ចសហប្រតិការអភិវឌ្ឍន៍សេដ្ឋកិច្ច (EDCF) នៃគម្រោងសាងសង់ស្ពានមិត្តភាពកម្ពុជា-កូរ៉េ។",
        en: "H.E. Im Sitthyra, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, led colleagues from Department 2 to participate in a discussion meeting with representatives of the Economic Development Cooperation Fund (EDCF) for the Cambodia-Korea Friendship Bridge construction project.",
      },
      author: {
        km: "នាយកដ្ឋានព័ត៌មាន",
        en: "Information Department",
      },
      hasAttachment: true,
      views: 987,
      likes: 67,
      content: {
        km: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">ថ្ងៃអង្គារ ៤រោច ខែមិគសិរ ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី៩ ខែធ្នូ គ.ស.២០២៥ វេលាម៉ោង ៤.០០ រសៀល នៅទីស្តីការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ៖</p>
          <p class="leading-relaxed">ឯកឧត្តម <strong>អុឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាល ទទួលបន្ទុកជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានដឹកនាំសហការីនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី២ ចូលរួមកិច្ចប្រជុំពិភាក្សាជាមួយតំណាងមូនិធិសម្រាប់កិច្ចសហប្រតិការអភិវឌ្ឍន៍សេដ្ឋកិច្ច (EDCF) នៃគម្រោងសាងសង់ស្ពានមិត្តភាពកម្ពុជា-កូរ៉េ ។</p>
          <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
        </div>`,
        en: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">On Tuesday, December 9, 2025, at 4:00 PM, at the Ministry of Economy and Finance:</p>
          <p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, led colleagues from Department 2 to participate in a discussion meeting with representatives of the Economic Development Cooperation Fund (EDCF) for the Cambodia-Korea Friendship Bridge construction project.</p>
          <p class="text-right mt-6">Thank you!</p>
        </div>`,
      },
    },
    {
      id: 6,
      title: {
        km: "ក្រុមការងារអគ្គនាយកដ្ឋានចុះពិនិត្យទីតាំងគម្រោងស្ថាបនាផ្លូវវាងប្រាសាទបឹង",
        en: "Department Team Visits Boeng Temple Bypass Road Construction Project Site",
      },
      date: "19-20 មីនា 2026",
      category: "event",
      images: post6Images,
      mainImage: post6Img1,
      summary: {
        km: "លោក ប៊ុត សង្វារ អគ្គនាយករង នៃអគ្គនាយកដ្ឋានដោះស្រាយផលដោយគម្រោងអភិវឌ្ឍន៍ និងលោក លី សារី អភិបាលរងខេត្ត និងជាប្រធានអនុគណៈកម្មការដោះស្រាយផលប៉ះពាល់ខេត្តសៀមរាប បានដឹកនាំក្រុមការងារចុះពិនិត្យទីតាំងគម្រោង និងប្រជុំពិភាក្សាគម្រោងស្ថាបនាផ្លូវវាងប្រាសាទបឹង។",
        en: "Mr. But Songva, Deputy Director General of the General Department of Project Impact Resolution, and Mr. Li Sari, Deputy Governor of Siem Reap Province and Chairman of the Sub-Committee for Impact Resolution in Siem Reap Province, led a team to inspect the project site and discuss the Boeng Temple Bypass Road construction project.",
      },
      author: {
        km: "នាយកដ្ឋានព័ត៌មាន",
        en: "Information Department",
      },
      hasAttachment: true,
      views: 2134,
      likes: 145,
      content: {
        km: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">កាលពីថ្ងៃទី១៩-២០ ខែមីនា ឆ្នាំ២០២៦ លោក <strong>ប៊ុត សង្វារ</strong> អគ្គនាយករង នៃអគ្គនាយកដ្ឋានដោះស្រាយផលដោយគម្រោងអភិវឌ្ឍន៍ និងលោក <strong>លី សារី</strong> អភិបាលរងខេត្ត និងជាប្រធានអនុគណៈកម្មការដោះស្រាយផលប៉ះពាល់ខេត្តសៀមរាប បានដឹកនាំក្រុមការងារចុះពិនិត្យទីតាំងគម្រោង និងប្រជុំពិភាក្សាគម្រោងស្ថាបនាផ្លូវវាងប្រាសាទបឹង ដោយមានការចូលរួមពីតំណាងក្រសួងសាធារណការ និងដឹកជញ្ជូន, តំណាងមន្ទីរវិចិត្រសិល្បៈ, តំណាងអាជ្ញាធរអប្សារា និងអាជ្ញាធរមូលដ្ឋានមានការពាក់ព័ន្ធ។</p>
          <p class="leading-relaxed">ចំពោះរបាយការណ៍លម្អិតក្រុមការងារនឹងគោរពរាយការណ៍ជូនឯកឧត្តមប្រតិភូនៅពេលក្រោយ។</p>
          <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
        </div>`,
        en: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">On March 19-20, 2026, Mr. <strong>But Songva</strong>, Deputy Director General of the General Department of Project Impact Resolution, and Mr. <strong>Li Sari</strong>, Deputy Governor of Siem Reap Province and Chairman of the Sub-Committee for Impact Resolution in Siem Reap Province, led a team to inspect the project site and discuss the Boeng Temple Bypass Road construction project, with participation from representatives of the Ministry of Public Works and Transport, representatives of the Department of Fine Arts, representatives of the APSARA Authority, and relevant local authorities.</p>
          <p class="leading-relaxed">The working group will submit a detailed report to His Excellency the Delegate at a later time.</p>
          <p class="text-right mt-6">Thank you!</p>
        </div>`,
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

  // List Item Component for Right Side
  const ListItem = ({ item, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        className="group cursor-pointer border-b border-gray-100 last:border-0 py-3 hover:bg-gray-50 transition-all duration-300"
        onClick={() => onClick(item)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-3">
          {/* Image */}
          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={item.mainImage}
              alt={item.title[currentLang]}
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] px-1.5 py-0.5 bg-[#4CAF50]/10 text-[#2E7D32] rounded-full">
                {getCategoryLabel(item.category)}
              </span>
              <span className="text-[10px] text-gray-400 flex items-center gap-1">
                <Calendar size={8} />
                {item.date}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-[#2E7D32] transition-colors mb-1">
              {item.title[currentLang]}
            </h3>
            <p className="text-xs text-gray-500 line-clamp-1">
              {item.summary[currentLang]}
            </p>
            <div className="flex items-center gap-3 mt-1 text-[10px] text-gray-400">
              <span className="flex items-center gap-1">
                <Eye size={8} />
                {item.views}
              </span>
              <span className="flex items-center gap-1">
                <Heart size={8} />
                {item.likes}
              </span>
            </div>
          </div>
          
          <ChevronRight 
            size={16} 
            className={`text-gray-400 flex-shrink-0 transition-all duration-300 ${isHovered ? 'translate-x-1 text-[#2E7D32]' : ''}`} 
          />
        </div>
      </div>
    );
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              {t.title}
            </h2>
            <span className="bg-[#4CAF50] bg-opacity-20 text-[#2E7D32] text-sm font-medium px-3 py-1.5 rounded-full">
              {filteredNews.length}
            </span>
          </div>
          
          <button 
            onClick={handleViewAll}
            className="flex items-center text-sm text-[#2E7D32] hover:text-[#4CAF50] transition-colors group"
          >
            {t.viewAll}
            <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
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

        {/* Two Column Layout - Left: Grid, Right: List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredNews.slice(0, 4).map((item) => {
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
                    <div className="p-4">
                      <h3 className="text-base font-medium text-gray-900 mb-2 leading-relaxed line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
                        {item.title[currentLang]}
                      </h3>
                      
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                        {item.summary[currentLang]}
                      </p>

                      {/* Footer */}
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
          </div>

          {/* Right Column - List View - Show only first 5 items */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                <List size={18} className="text-[#2E7D32]" />
                <h3 className="text-base font-medium text-gray-800">
                  {currentLang === 'km' ? 'ព័ត៌មានថ្មីៗ' : 'Recent News'}
                </h3>
              </div>
              <div className="space-y-1">
                {filteredNews.slice(0, 5).map((item) => (
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

      {/* Custom Scrollbar Styles */}
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