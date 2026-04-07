  // src/components/home/NewsSection.jsx
  import React, { useState, useEffect } from 'react';
  import { 
    Calendar, ChevronRight, Eye, Star, TrendingUp, Clock, 
    Download, Share2, User, MessageCircle, Bookmark,
    FileText, Heart, ArrowLeft, Printer,
    Facebook, Twitter, Linkedin, Link2, X, Filter, ChevronLeft, ChevronRightIcon,
    Sparkles, Award, Zap, Globe, List, Newspaper
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
      { id: 'all', label: { km: 'ព័ត៌មានទាំងអស់', en: 'All News' }, icon: <Newspaper size={16} />, count: 6, color: 'from-green-600 to-emerald-600' },
      { id: 'event', label: { km: 'ព្រឹត្តិការណ៍', en: 'Events' }, icon: <Zap size={16} />, count: 6, color: 'from-green-600 to-emerald-600' },
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
        popular: 'ពេញនិយម',
        recentNews: 'ព័ត៌មានថ្មីៗ'
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
        popular: 'Most Popular',
        recentNews: 'Recent News'
      }
    };

    const t = translations[currentLang];

    // Enhanced News data with 6 posts - sorted by date (newest first)
    const enhancedNews = [
      {
        id: 2,
        title: {
          km: "ពិធីសម្ពោធដាក់ឱ្យប្រើប្រាស់ជាផ្លូវការនូវ «អាគារថ្មីមួយខ្នង នៃមន្ទីរពេទ្យបង្អែកជ័យជម្នះ ក្រុងតាខ្មៅ»",
          en: "Inauguration Ceremony of \"A New Building of the Victory Referral Hospital, Ta Khmau City\"",
        },
        date: "04 មីនា 2026",
        category: "event",
        images: post2Images,
        mainImage: post2Img1,
        summary: {
          km: "ពិធីសម្ពោធដាក់ឱ្យប្រើប្រាស់ជាផ្លូវការនូវ «អាគារថ្មីមួយខ្នង នៃមន្ទីរពេទ្យបង្អែកជ័យជម្នះ ក្រុងតាខ្មៅ» ក្រោមអធិបតីភាពដ៏ខ្ពង់ខ្ពស់របស់សម្តេចធិបតី ហ៊ុន ម៉ាណែត។",
          en: "Inauguration ceremony of \"A New Building of the Victory Referral Hospital, Ta Khmau City\" under the high presidency of Samdech Thipadei Hun Manet.",
        },
        author: {
          km: "នាយកដ្ឋានព័ត៌មាន",
          en: "Information Department",
        },
        hasAttachment: true,
        views: 2341,
        likes: 156,
        content: {
          km: `<div class="space-y-4"><p class="text-lg leading-relaxed">នៅថ្ងៃទី៤ ខែមីនា ឆ្នាំ២០២៦៖</p><p class="leading-relaxed">ឯកឧត្តម <strong>អ៊ឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញចូលរួមពិធីសម្ពោធដាក់ឱ្យប្រើប្រាស់ជាផ្លូវការនូវ «អាគារថ្មីមួយខ្នង នៃមន្ទីរពេទ្យបង្អែកជ័យជម្នះ ក្រុងតាខ្មៅ» ក្រោមអធិបតីភាពដ៏ខ្ពង់ខ្ពស់របស់សម្តេចធិបតី ហ៊ុន ម៉ាណែត នាយករដ្ឋមន្ត្រី នៃព្រះរាជាណាចក្រកម្ពុជា។</p><p class="text-right mt-6">សូមគោរពអរគុណ!</p></div>`,
          en: `<div class="space-y-4"><p class="text-lg leading-relaxed">On March 4, 2026:</p><p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, attended the inauguration ceremony of \"A New Building of the Victory Referral Hospital, Ta Khmau City\" under the high presidency of Samdech Thipadei Hun Manet, Prime Minister of the Kingdom of Cambodia.</p><p class="text-right mt-6">Thank you!</p></div>`,
        },
      },
      {
        id: 1,
        title: {
          km: "ពិធីចុះហត្ថលេខាលើលិខិតបទដ្ឋាន ស្តីពីគម្រោងធ្វើឱ្យប្រសើរឡើងមន្ទីរពេទ្យបង្អែកខេត្តព្រះសីហនុ",
          en: "Signing Ceremony of the Standard Document on the Project to Upgrade Preah Sihanouk Provincial Referral Hospital",
        },
        date: "06 មីនា 2026",
        category: "event",
        images: post1Images,
        mainImage: post1Img1,
        summary: {
          km: "ពិធីចុះហត្ថលេខាលើលិខិតបទដ្ឋាន ស្តីពីគម្រោងធ្វើឱ្យប្រសើរឡើងមន្ទីរពេទ្យបង្អែកខេត្តព្រះសីហនុ ក្រោមជំនួយឥតសំណងពីទីភ្នាក់ងារសហប្រតិបត្តិការអន្តរជាតិជប៉ុន (JICA)។",
          en: "Signing ceremony of the standard document on the project to upgrade Preah Sihanouk Provincial Referral Hospital under grant aid from the Japan International Cooperation Agency (JICA).",
        },
        author: {
          km: "នាយកដ្ឋានព័ត៌មាន",
          en: "Information Department",
        },
        hasAttachment: true,
        views: 1245,
        likes: 89,
        content: {
          km: `<div class="space-y-4"><p class="text-lg leading-relaxed">នៅថ្ងៃទី៦ ខែមីនា ឆ្នាំ២០២៦ នៅទីស្តីការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ៖</p><p class="leading-relaxed">ឯកឧត្តម <strong>អ៊ឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញចូលរួមពិធីចុះហត្ថលេខាលើលិខិតបទដ្ឋាន ស្តីពីគម្រោងធ្វើឱ្យប្រសើរឡើងមន្ទីរពេទ្យបង្អែកខេត្តព្រះសីហនុ ក្រោមជំនួយឥតសំណងពីទីភ្នាក់ងារសហប្រតិបត្តិការអន្តរជាតិជប៉ុន (JICA)។</p><p class="text-right mt-6">សូមគោរពអរគុណ!</p></div>`,
          en: `<div class="space-y-4"><p class="text-lg leading-relaxed">On March 6, 2026, at the Ministry of Economy and Finance:</p><p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, attended the signing ceremony of the standard document on the project to upgrade Preah Sihanouk Provincial Referral Hospital under grant aid from the Japan International Cooperation Agency (JICA).</p><p class="text-right mt-6">Thank you!</p></div>`,
        },
      },
      {
        id: 3,
        title: {
          km: "ជំនួបពិភាក្សាការងារ រវាង ឯកឧត្តម អគ្គបណ្ឌិតសភាចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ ជាមួយថ្នាក់ដឹកនាំអគ្គនាយកដ្ឋាន",
          en: "Working Discussion Meeting between H.E. Dr. Aun Pornmoniroth, Deputy Prime Minister, Minister of Economy and Finance, and the Leadership of the General Department",
        },
        date: "12 កុម្ភៈ 2026",
        category: "event",
        images: post3Images,
        mainImage: post3Img1,
        summary: {
          km: "ជំនួបពិភាក្សាការងារ រវាង ឯកឧត្តម អគ្គបណ្ឌិតសភាចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ ជាមួយថ្នាក់ដឹកនាំ និងមន្ត្រីជំនាញនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍។",
          en: "Working discussion meeting between H.E. Dr. Aun Pornmoniroth, Deputy Prime Minister, Minister of Economy and Finance, and the leadership and technical officials of the General Department of Project Impact Resolution.",
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
            <p class="text-lg leading-relaxed">នៅថ្ងៃទី១២ ខែកុម្ភៈ ឆ្នាំ២០២៦ នៅទីស្តីការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ៖</p>
            <p class="leading-relaxed">ឯកឧត្តមអគ្គបណ្ឌិតសភាចារ្យ <strong>អូន ព័ន្ធមុនីរ័ត្ន</strong> ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ បានអញ្ជើញជួបពិភាក្សាការងារជាមួយថ្នាក់ដឹកនាំ និងមន្ត្រីជំនាញនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ ដើម្បីពិនិត្យវឌ្ឍនភាពការងារ និងទិសដៅអនុវត្តបន្ត។</p>
            <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
          </div>`,
          en: `<div class="space-y-4">
            <p class="text-lg leading-relaxed">On February 12, 2026, at the Ministry of Economy and Finance:</p>
            <p class="leading-relaxed">H.E. Dr. <strong>Aun Pornmoniroth</strong>, Deputy Prime Minister, Minister of Economy and Finance, held a working discussion meeting with the leadership and technical officials of the General Department of Project Impact Resolution to review work progress and future implementation directions.</p>
            <p class="text-right mt-6">Thank you!</p>
          </div>`,
        },
      },
      {
        id: 4,
        title: {
          km: "ពិធីបើក «វេទិកាពន្ធដារកម្ពុជា – Cambodia Tax Forum»",
          en: "Opening Ceremony of \"Cambodia Tax Forum\"",
        },
        date: "05 កុម្ភៈ 2026",
        category: "event",
        images: post4Images,
        mainImage: post4Img1,
        summary: {
          km: "ពិធីបើក «វេទិកាពន្ធដារកម្ពុជា – Cambodia Tax Forum» ក្រោមអធិបតីភាពដ៏ខ្ពង់ខ្ពស់របស់ ឯកឧត្តម អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ។",
          en: "Opening ceremony of the \"Cambodia Tax Forum\" under the high presidency of H.E. Dr. Aun Pornmoniroth, Deputy Prime Minister, Minister of Economy and Finance.",
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
            <p class="text-lg leading-relaxed">នៅថ្ងៃទី៥ ខែកុម្ភៈ ឆ្នាំ២០២៦៖</p>
            <p class="leading-relaxed">ឯកឧត្តម <strong>អ៊ឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញចូលរួមពិធីបើក «វេទិកាពន្ធដារកម្ពុជា – Cambodia Tax Forum» ក្រោមអធិបតីភាពដ៏ខ្ពង់ខ្ពស់របស់ ឯកឧត្តម អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ។</p>
            <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
          </div>`,
          en: `<div class="space-y-4">
            <p class="text-lg leading-relaxed">On February 5, 2026:</p>
            <p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, attended the opening ceremony of the \"Cambodia Tax Forum\" under the high presidency of H.E. Dr. Aun Pornmoniroth, Deputy Prime Minister, Minister of Economy and Finance.</p>
            <p class="text-right mt-6">Thank you!</p>
          </div>`,
        },
      },
      {
        id: 5,
        title: {
          km: "ពិធីអបអរសាទរ ខួប១ឆ្នាំ របស់ សាជីវកម្មធានាឥណទានកម្ពុជា ក្រោមប្រធានបទ ៖ «១ឆ្នាំ នៃការពង្រឹងទំនុកចិត្ត លើវិស័យធានាឥណទានកម្ពុជា»",
          en: "Celebration Ceremony of the 1st Anniversary of the Credit Guarantee Corporation of Cambodia under the theme: \"1 Year of Strengthening Confidence in Cambodia's Credit Guarantee Sector\"",
        },
        date: "29 មករា 2026",
        category: "event",
        images: post5Images,
        mainImage: post5Img1,
        summary: {
          km: "ពិធីអបអរសាទរ ខួប១ឆ្នាំ របស់ សាជីវកម្មធានាឥណទានកម្ពុជា ក្រោមប្រធានបទ ៖ «១ឆ្នាំ នៃការពង្រឹងទំនុកចិត្ត លើវិស័យធានាឥណទានកម្ពុជា»។",
          en: "Celebration ceremony of the 1st Anniversary of the Credit Guarantee Corporation of Cambodia under the theme: \"1 Year of Strengthening Confidence in Cambodia's Credit Guarantee Sector\".",
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
            <p class="text-lg leading-relaxed">នៅថ្ងៃទី២៩ ខែមករា ឆ្នាំ២០២៦៖</p>
            <p class="leading-relaxed">ឯកឧត្តម <strong>អ៊ឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញចូលរួមពិធីអបអរសាទរ ខួប១ឆ្នាំ របស់ សាជីវកម្មធានាឥណទានកម្ពុជា ក្រោមប្រធានបទ ៖ «១ឆ្នាំ នៃការពង្រឹងទំនុកចិត្ត លើវិស័យធានាឥណទានកម្ពុជា»។</p>
            <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
          </div>`,
          en: `<div class="space-y-4">
            <p class="text-lg leading-relaxed">On January 29, 2026:</p>
            <p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, attended the celebration ceremony of the 1st Anniversary of the Credit Guarantee Corporation of Cambodia under the theme: \"1 Year of Strengthening Confidence in Cambodia's Credit Guarantee Sector\".</p>
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

    // Sort news by date (newest first) for proper ordering
    const sortedNews = [...enhancedNews].sort((a, b) => {
      const parseDate = (dateStr) => {
        const parts = dateStr.split(' ');
        if (parts.length === 2) {
          const day = parseInt(parts[0]);
          const monthMap = { 'មីនា': 2, 'កុម្ភៈ': 1, 'មករា': 0 };
          const month = monthMap[parts[1]] || 0;
          const year = 2026;
          return new Date(year, month, day);
        }
        return new Date(0);
      };
      return parseDate(b.date) - parseDate(a.date);
    });

    const filteredNews = activeTab === 'all' 
      ? sortedNews 
      : sortedNews.filter(item => item.category === activeTab);

    const featuredNews = filteredNews[0]; // First item as featured (larger)
    const remainingNews = filteredNews.slice(1); // Remaining items for grid

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

    const getCategoryLabel = (category) => {
      return currentLang === 'km' ? 'ព្រឹត្តិការណ៍' : 'Event';
    };

    const relatedNews = enhancedNews
      .filter(item => item.id !== selectedNews?.id)
      .slice(0, 2);

    // List Item Component for Right Side
    const ListItem = ({ item, onClick }) => {
      return (
        <div
          className="group cursor-pointer border-b border-gray-100 last:border-0 py-3 transition-all duration-300 hover:bg-gray-50 rounded-lg px-2"
          onClick={() => onClick(item)}
        >
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={item.mainImage}
                alt={item.title[currentLang]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full">
                  {getCategoryLabel(item.category)}
                </span>
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <Calendar size={8} />
                  {item.date}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                {item.title[currentLang]}
              </h3>
              <div className="flex items-center gap-3 mt-1 text-[10px] text-gray-400">
                <span className="flex items-center gap-1"><Eye size={8} />{item.views}</span>
                <span className="flex items-center gap-1"><Heart size={8} />{item.likes}</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0 group-hover:text-green-600 transition-colors" />
          </div>
        </div>
      );
    };

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

            {/* Category Tabs */}
            {/* <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-green-600'}>
                      {cat.icon}
                    </span>
                    <span>{cat.label[currentLang]}</span>
                    <span className={`text-xs ml-0.5 ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div> */}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Featured + Grid */}
            <div className="lg:col-span-2">
              {featuredNews && (
                // Featured News Item - Larger size
                <div 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 mb-6"
                  onClick={() => handleReadMore(featuredNews)}
                >
                  <div className="relative h-96 overflow-hidden bg-gray-100">
                    <img 
                      src={featuredNews.mainImage} 
                      alt={featuredNews.title[currentLang]}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                          <span>{featuredNews.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight line-clamp-2">
                        {featuredNews.title[currentLang]}
                      </h3>
                      <p className="text-white/80 text-sm mt-2 line-clamp-2">
                        {featuredNews.summary[currentLang]}
                      </p>
                      <button className="mt-3 flex items-center gap-1 text-white text-sm font-medium hover:underline">
                        {t.readMore} <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Remaining News Grid - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {remainingNews.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                    onClick={() => handleReadMore(item)}
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={item.mainImage} 
                        alt={item.title[currentLang]}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-800 mb-2 leading-relaxed line-clamp-2">
                        {item.title[currentLang]}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                        {item.summary[currentLang]}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <button className="flex items-center gap-1 text-xs text-green-600 hover:text-green-700 font-medium">
                          {t.readMore} <ChevronRight size={12} />
                        </button>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><Eye size={12} />{item.views}</span>
                          <span className="flex items-center gap-1"><Heart size={12} />{item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Recent News List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <Newspaper size={18} className="text-green-600" />
                  <h3 className="text-base font-semibold text-gray-800">
                    {t.recentNews}
                  </h3>
                </div>
                <div className="p-2">
                  {filteredNews.slice(0, 5).map((item) => (
                    <ListItem key={item.id} item={item} onClick={handleReadMore} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Detail Modal - Same as before */}
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
                <img src={selectedNews.mainImage} alt={selectedNews.title[currentLang]} className="w-full h-full object-cover" />
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
                  <h1 className="text-2xl md:text-3xl font-semibold text-white leading-tight">{selectedNews.title[currentLang]}</h1>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-gray-500"><Calendar size={14} className="text-green-600" /><span>{selectedNews.date}</span></div>
                <div className="flex items-center space-x-2 text-sm text-gray-500"><Eye size={14} className="text-green-600" /><span>{selectedNews.views} {t.views}</span></div>
                <div className="flex items-center space-x-2 text-sm text-gray-500"><Heart size={14} className="text-green-600" /><span>{selectedNews.likes} {t.likes}</span></div>
              </div>
              <div className="prose prose-sm max-w-none mb-8 text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedNews.content[currentLang] }} />
              {selectedNews.images && selectedNews.images.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{t.viewImages}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedNews.images.slice(0, 8).map((img, idx) => (
                      <div key={idx} onClick={() => handleOpenLightbox(idx)} className="relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-gray-100">
                        <img src={img} alt={`${selectedNews.title[currentLang]} - ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        {idx === 7 && selectedNews.images.length > 8 && <div className="absolute inset-0 bg-black/50 flex items-center justify-center"><span className="text-white font-medium">+{selectedNews.images.length - 8}</span></div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-3">{t.shareVia}</h3>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"><Facebook size={14} /></button>
                  <button className="w-8 h-8 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center"><Twitter size={14} /></button>
                  <button className="w-8 h-8 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"><Linkedin size={14} /></button>
                  <button onClick={handleCopyLink} className="w-8 h-8 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center"><Link2 size={14} /></button>
                </div>
              </div>
              {relatedNews.length > 0 && (
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">{t.related}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedNews.map((item) => (
                      <div key={item.id} className="cursor-pointer border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all" onClick={() => handleReadMore(item)}>
                        <div className="relative h-32 overflow-hidden bg-gray-100"><img src={item.mainImage} alt={item.title[currentLang]} className="w-full h-full object-cover" /></div>
                        <div className="p-3"><h4 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">{item.title[currentLang]}</h4><p className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={10} />{item.date}</p></div>
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
            <button onClick={handleCloseLightbox} className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"><X size={32} /></button>
            <button onClick={handlePrevImage} disabled={selectedImageIndex === 0} className={`absolute left-4 z-10 text-white hover:text-gray-300 ${selectedImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}><ChevronLeft size={48} /></button>
            <button onClick={handleNextImage} disabled={selectedImageIndex === selectedNews.images.length - 1} className={`absolute right-4 z-10 text-white hover:text-gray-300 ${selectedImageIndex === selectedNews.images.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}><ChevronRightIcon size={48} /></button>
            <div className="max-w-[90vw] max-h-[90vh]"><img src={selectedNews.images[selectedImageIndex]} alt={`${selectedNews.title[currentLang]} - ${selectedImageIndex + 1}`} className="max-w-full max-h-[90vh] object-contain" /><div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">{selectedImageIndex + 1} / {selectedNews.images.length}</div></div>
          </div>
        )}

        {/* Share Modal */}
        {shareModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white rounded-xl p-5 max-w-sm w-full mx-4 shadow-2xl">
              <div className="flex justify-between items-center mb-4"><h3 className="text-sm font-medium text-gray-900">{t.shareVia}</h3><button onClick={() => setShareModal(false)} className="p-1 hover:bg-gray-100 rounded-lg"><X size={16} /></button></div>
              <div className="grid grid-cols-4 gap-3">
                <button className="flex flex-col items-center space-y-1 p-2 hover:bg-blue-50 rounded-lg"><div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center"><Facebook size={16} /></div><span className="text-[10px] text-gray-500">Facebook</span></button>
                <button className="flex flex-col items-center space-y-1 p-2 hover:bg-sky-50 rounded-lg"><div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center"><Twitter size={16} /></div><span className="text-[10px] text-gray-500">Twitter</span></button>
                <button className="flex flex-col items-center space-y-1 p-2 hover:bg-blue-50 rounded-lg"><div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center"><Linkedin size={16} /></div><span className="text-[10px] text-gray-500">LinkedIn</span></button>
                <button onClick={handleCopyLink} className="flex flex-col items-center space-y-1 p-2 hover:bg-gray-100 rounded-lg"><div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center"><Link2 size={16} /></div><span className="text-[10px] text-gray-500">{t.copyLink}</span></button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default NewsSection;