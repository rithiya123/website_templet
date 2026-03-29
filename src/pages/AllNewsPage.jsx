// src/pages/AllNewsPage.jsx
import React, { useState, useEffect } from "react";
import Image from "../images/logo_white.png";
import {
  Calendar,
  ChevronRight,
  Eye,
  Clock,
  Download,
  Share2,
  User,
  MessageCircle,
  FileText,
  ArrowLeft,
  Search,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ArrowUp,
  Printer,
  Link2,
  Tag,
  Layers,
  Home,
  Grid,
  List,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import defaultImg from "../images/defuat_img.jpg";

// Import Post 1 images (14 images)
import post1Img1 from "../images/Post1/1.jpg";
import post1Img2 from "../images/Post1/2.jpg";
import post1Img3 from "../images/Post1/3.jpg";
import post1Img4 from "../images/Post1/4.jpg";
import post1Img5 from "../images/Post1/5.jpg";
import post1Img6 from "../images/Post1/6.jpg";
import post1Img7 from "../images/Post1/7.jpg";
import post1Img8 from "../images/Post1/8.jpg";
import post1Img9 from "../images/Post1/9.jpg";
import post1Img10 from "../images/Post1/10.jpg";
import post1Img11 from "../images/Post1/11.jpg";
import post1Img12 from "../images/Post1/12.jpg";
import post1Img13 from "../images/Post1/13.jpg";
import post1Img14 from "../images/Post1/14.jpg";

// Import Post 2 images (16 images)
import post2Img1 from "../images/Post2/1.jpg";
import post2Img2 from "../images/Post2/2.jpg";
import post2Img3 from "../images/Post2/3.jpg";
import post2Img4 from "../images/Post2/4.jpg";
import post2Img5 from "../images/Post2/5.jpg";
import post2Img6 from "../images/Post2/6.jpg";
import post2Img7 from "../images/Post2/7.jpg";
import post2Img8 from "../images/Post2/8.jpg";
import post2Img9 from "../images/Post2/9.jpg";
import post2Img10 from "../images/Post2/10.jpg";
import post2Img11 from "../images/Post2/11.jpg";
import post2Img12 from "../images/Post2/12.jpg";
import post2Img13 from "../images/Post2/13.jpg";
import post2Img14 from "../images/Post2/14.jpg";
import post2Img15 from "../images/Post2/15.jpg";
import post2Img16 from "../images/Post2/16.jpg";

// Import Post 3 images (37 images)
import post3Img1 from "../images/Post3/1.jpg";
import post3Img2 from "../images/Post3/2.jpg";
import post3Img3 from "../images/Post3/3.jpg";
import post3Img4 from "../images/Post3/4.jpg";
import post3Img5 from "../images/Post3/5.jpg";
import post3Img6 from "../images/Post3/6.jpg";
import post3Img7 from "../images/Post3/7.jpg";
import post3Img8 from "../images/Post3/8.jpg";
import post3Img9 from "../images/Post3/9.jpg";
import post3Img10 from "../images/Post3/10.jpg";
import post3Img11 from "../images/Post3/11.jpg";
import post3Img12 from "../images/Post3/12.jpg";
import post3Img13 from "../images/Post3/13.jpg";
import post3Img14 from "../images/Post3/14.jpg";
import post3Img15 from "../images/Post3/15.jpg";
import post3Img16 from "../images/Post3/16.jpg";
import post3Img17 from "../images/Post3/17.jpg";
import post3Img18 from "../images/Post3/18.jpg";
import post3Img19 from "../images/Post3/19.jpg";
import post3Img20 from "../images/Post3/20.jpg";
import post3Img21 from "../images/Post3/21.jpg";
import post3Img22 from "../images/Post3/22.jpg";
import post3Img23 from "../images/Post3/23.jpg";
import post3Img24 from "../images/Post3/24.jpg";
import post3Img25 from "../images/Post3/25.jpg";
import post3Img26 from "../images/Post3/26.jpg";
import post3Img27 from "../images/Post3/27.jpg";
import post3Img28 from "../images/Post3/28.jpg";
import post3Img29 from "../images/Post3/29.jpg";
import post3Img30 from "../images/Post3/30.jpg";
import post3Img31 from "../images/Post3/31.jpg";
import post3Img32 from "../images/Post3/32.jpg";
import post3Img33 from "../images/Post3/33.jpg";
import post3Img34 from "../images/Post3/34.jpg";
import post3Img35 from "../images/Post3/35.jpg";
import post3Img36 from "../images/Post3/36.jpg";
import post3Img37 from "../images/Post3/37.jpg";

// Import Post 4 images (22 images)
import post4Img1 from "../images/Post4/1.jpg";
import post4Img2 from "../images/Post4/2.jpg";
import post4Img3 from "../images/Post4/3.jpg";
import post4Img4 from "../images/Post4/4.jpg";
import post4Img5 from "../images/Post4/5.jpg";
import post4Img6 from "../images/Post4/6.jpg";
import post4Img7 from "../images/Post4/7.jpg";
import post4Img8 from "../images/Post4/8.jpg";
import post4Img9 from "../images/Post4/9.jpg";
import post4Img10 from "../images/Post4/10.jpg";
import post4Img11 from "../images/Post4/11.jpg";
import post4Img12 from "../images/Post4/12.jpg";
import post4Img13 from "../images/Post4/13.jpg";
import post4Img14 from "../images/Post4/14.jpg";
import post4Img15 from "../images/Post4/15.jpg";
import post4Img17 from "../images/Post4/17.jpg";
import post4Img18 from "../images/Post4/18.jpg";
import post4Img19 from "../images/Post4/19.jpg";
import post4Img20 from "../images/Post4/20.jpg";
import post4Img21 from "../images/Post4/21.jpg";
import post4Img22 from "../images/Post4/22.jpg";

// Import Post 5 images (7 images)
import post5Img1 from "../images/Post5/1.jpg";
import post5Img2 from "../images/Post5/2.jpg";
import post5Img3 from "../images/Post5/3.jpg";
import post5Img4 from "../images/Post5/4.jpg";
import post5Img5 from "../images/Post5/5.jpg";
import post5Img6 from "../images/Post5/6.jpg";
import post5Img7 from "../images/Post5/7.jpg";

// Import Post 6 images (12 images)
import post6Img1 from "../images/Post6/1.jpg";
import post6Img2 from "../images/Post6/2.jpg";
import post6Img3 from "../images/Post6/3.jpg";
import post6Img4 from "../images/Post6/4.jpg";
import post6Img5 from "../images/Post6/5.jpg";
import post6Img6 from "../images/Post6/6.jpg";
import post6Img7 from "../images/Post6/7.jpg";
import post6Img8 from "../images/Post6/8.jpg";
import post6Img9 from "../images/Post6/9.jpg";
import post6Img10 from "../images/Post6/10.jpg";
import post6Img11 from "../images/Post6/11.jpg";
import post6Img12 from "../images/Post6/12.jpg";

const AllNewsPage = () => {
  const [currentLang, setCurrentLang] = useState("km");
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const itemsPerPage = 9;

  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };

    window.addEventListener("languagechange", handleLanguageChange);

    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setCurrentLang(savedLang);
    }

    return () =>
      window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  useEffect(() => {
    if (showDetail || showLightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showDetail, showLightbox]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Post 1 Images Array
  const post1Images = [
    post1Img1,
    post1Img2,
    post1Img3,
    post1Img4,
    post1Img5,
    post1Img6,
    post1Img7,
    post1Img8,
    post1Img9,
    post1Img10,
    post1Img11,
    post1Img12,
    post1Img13,
    post1Img14,
  ];

  // Post 2 Images Array
  const post2Images = [
    post2Img1,
    post2Img2,
    post2Img3,
    post2Img4,
    post2Img5,
    post2Img6,
    post2Img7,
    post2Img8,
    post2Img9,
    post2Img10,
    post2Img11,
    post2Img12,
    post2Img13,
    post2Img14,
    post2Img15,
    post2Img16,
  ];

  // Post 3 Images Array (37 images)
  const post3Images = [
    post3Img1,
    post3Img2,
    post3Img3,
    post3Img4,
    post3Img5,
    post3Img6,
    post3Img7,
    post3Img8,
    post3Img9,
    post3Img10,
    post3Img11,
    post3Img12,
    post3Img13,
    post3Img14,
    post3Img15,
    post3Img16,
    post3Img17,
    post3Img18,
    post3Img19,
    post3Img20,
    post3Img21,
    post3Img22,
    post3Img23,
    post3Img24,
    post3Img25,
    post3Img26,
    post3Img27,
    post3Img28,
    post3Img29,
    post3Img30,
    post3Img31,
    post3Img32,
    post3Img33,
    post3Img34,
    post3Img35,
    post3Img36,
    post3Img37,
  ];

  // Post 4 Images Array (21 images)
  const post4Images = [
    post4Img1,
    post4Img2,
    post4Img3,
    post4Img4,
    post4Img5,
    post4Img6,
    post4Img7,
    post4Img8,
    post4Img9,
    post4Img10,
    post4Img11,
    post4Img12,
    post4Img13,
    post4Img14,
    post4Img15,
    post4Img17,
    post4Img18,
    post4Img19,
    post4Img20,
    post4Img21,
    post4Img22,
  ];

  // Post 5 Images Array (7 images)
  const post5Images = [
    post5Img1,
    post5Img2,
    post5Img3,
    post5Img4,
    post5Img5,
    post5Img6,
    post5Img7,
  ];

  // Post 6 Images Array (12 images)
  const post6Images = [
    post6Img1,
    post6Img2,
    post6Img3,
    post6Img4,
    post6Img5,
    post6Img6,
    post6Img7,
    post6Img8,
    post6Img9,
    post6Img10,
    post6Img11,
    post6Img12,
  ];

  const categories = [
    {
      id: "all",
      label: { km: "ទាំងអស់", en: "All News" },
      icon: <Layers size={14} />,
      count: 6,
    },
    {
      id: "event",
      label: { km: "ព្រឹត្តិការណ៍", en: "Events" },
      icon: <Layers size={14} />,
      count: 6,
    },
  ];

  const sortOptions = [
    { id: "latest", label: { km: "ថ្មីបំផុត", en: "Latest" } },
    { id: "popular", label: { km: "ពេញនិយម", en: "Most Popular" } },
  ];

  const translations = {
    km: {
      title: "ព័ត៌មានទាំងអស់",
      home: "ទំព័រដើម",
      search: "ស្វែងរកព័ត៌មាន...",
      filter: "តម្រង",
      sort: "តម្រៀបតាម",
      readMore: "អានបន្ត",
      views: "មើល",
      back: "ត្រលប់ក្រោយ",
      comments: "មតិយោបល់",
      shareVia: "ចែករំលែក",
      copyLink: "ចម្លងតំណ",
      copied: "បានចម្លង!",
      page: "ទំព័រ",
      of: "នៃ",
      results: "លទ្ធផល",
      author: "អ្នកនិពន្ធ",
      published: "ចេញផ្សាយ",
      related: "ព័ត៌មានពាក់ព័ន្ធ",
      share: "ចែករំលែក",
      clearAll: "សម្អាតទាំងអស់",
      noNews: "រកមិនឃើញព័ត៌មាន",
      tryAgain: "សូមព្យាយាមស្វែងរកម្តងទៀត",
      viewImages: "មើលរូបភាពទាំងអស់",
      close: "បិទ",
      gridView: "ទម្រង់ក្រឡា",
      listView: "ទម្រង់បញ្ជី",
      runningText:
        "សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ • WELCOME TO THE OFFICIAL WEBSITE •",
    },
    en: {
      title: "All News",
      home: "Home",
      search: "Search news...",
      filter: "Filter",
      sort: "Sort by",
      readMore: "Read More",
      views: "views",
      back: "Back",
      comments: "Comments",
      shareVia: "Share",
      copyLink: "Copy Link",
      copied: "Copied!",
      page: "Page",
      of: "of",
      results: "results",
      author: "Author",
      published: "Published",
      related: "Related News",
      share: "Share",
      clearAll: "Clear All",
      noNews: "No news found",
      tryAgain: "Please try searching again",
      viewImages: "View All Images",
      close: "Close",
      gridView: "Grid View",
      listView: "List View",
      runningText:
        "WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PROJECT IMPACT RESOLUTION • សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ •",
    },
  };

  const t = translations[currentLang];

  // All News data with 6 posts - Updated with actual content
  const allNews = [
    {
      id: 1,
      title: {
        km: "ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា ជួបពិភាក្សាការងារជាមួយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)",
        en: "H.E. Im Sitthyra Meets with Asian Development Bank (ADB) for Work Discussion",
      },
      date: "20 មករា 2026",
      dateSort: "2026-01-20",
      category: "event",
      views: 1247,
      comments: 23,
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
      content: {
        km: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">នៅព្រឹកថ្ងៃអង្គារ ២កើត ខែមាឃ ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី២០ ខែមករា ឆ្នាំ២០២៦ នៅទីស្តីការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ៖</p>
          <p class="leading-relaxed">ឯកឧត្តម <strong>អ៊ឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញជួបសម្តែងការគួរសម និងពិភាក្សាការងារជាមួយលោកស្រី <strong>Yasmin Siddiqi</strong>, Country Director នៃធនាគារអភិវឌ្ឍន៍អាស៊ីប្រចាំកម្ពុជា ។</p>
          <p class="leading-relaxed">ក្នុងជំនួបនេះ ភាគីទាំងពីរបានពិភាក្សាអំពីកិច្ចសហប្រតិបត្តិការនាពេលខាងមុខ និងការពង្រឹងការងារដោះស្រាយផលប៉ះពាល់ពីគម្រោងអភិវឌ្ឍន៍នៅកម្ពុជា។</p>
          <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
        </div>`,
        en: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">On Tuesday morning, January 20, 2026, at the Ministry of Economy and Finance:</p>
          <p class="leading-relaxed"><strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution, paid a courtesy call and held work discussions with <strong>Ms. Yasmin Siddiqi</strong>, Country Director of the Asian Development Bank (ADB) in Cambodia.</p>
          <p class="leading-relaxed">During this meeting, both parties discussed future cooperation and strengthening the work of addressing impacts from development projects in Cambodia.</p>
          <p class="text-right mt-6">Thank you!</p>
        </div>`,
      },
    },
    {
      id: 2,
      title: {
        km: "សិក្ខាសាលាស្តីពីការគ្រប់គ្រងលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី",
        en: "Workshop on Land Acquisition and Land Use Restriction Management",
      },
      date: "5 មីនា 2026",
      dateSort: "2026-03-05",
      category: "event",
      views: 856,
      comments: 15,
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
      content: {
        km: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">នៅថ្ងៃព្រហស្បតិ៍ ២រោច ខែផល្គុន ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃទី៥ ខែមីនា គ.ស.២០២៦ នៅសណ្ឋាគារហៃយ៉ាត់ រីជេនស៊ី ភ្នំពេញ៖</p>
          <p class="leading-relaxed">អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ សហការជាមួយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB) រៀបចំសិក្ខាសាលាស្តីពីការគ្រប់គ្រងលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី នៃគម្រោងដែលហិរញ្ញប្បទានដោយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)។</p>
          <p class="leading-relaxed">សិក្ខាសាលានេះ ធ្វើឡើងក្រោមការដឹកនាំដ៏ខ្ពង់ខ្ពស់របស់ឯកឧត្តម <strong>អុឹម សិទ្ធីរ៉ា</strong> ប្រតិភូរាជរដ្ឋាភិបាល ទទួលបន្ទុកជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍។</p>
          <p class="leading-relaxed">សិក្ខាសាលានេះ មានការអញ្ជើញចូលរួមវាគ្មិនមកពីការិយាល័យកណ្តាលរបស់ ADB, លោកស្រី <strong>Jocelyn Erlinda S. Munsayac</strong>, Director, Regional Operations Service 3, លោក <strong>Jose "Tito" Nicolas</strong>, Principal Safeguards Specialist Social Team Head, លោក <strong>Toby Nugent</strong>, Senior Safeguards Specialist (Social) និងមន្រ្តីជំនាញ Safeguard របស់ ADB ជាច្រើនទៀត ដើម្បីបណ្តុះបណ្តាល និងបញ្រ្ជាបការយល់ដឹងអំពីគោលនយោបាយ ESS5 ស្តីពីលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី (Land Acquisition and Land Use Restriction) នៃក្របខ័ណ្ឌបរិស្ថាន និងសង្គម របស់ ADB ជូនដល់ថ្នាក់ដឹកនាំ និងមន្រ្តីក្រោមឱវាទអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍។</p>
          <p class="text-right mt-6">សូមគោរពអរគុណ!</p>
        </div>`,
        en: `<div class="space-y-4">
          <p class="text-lg leading-relaxed">On Thursday, March 5, 2026, at the Hyatt Regency Hotel, Phnom Penh:</p>
          <p class="leading-relaxed">The General Department of Project Impact Resolution, in cooperation with the Asian Development Bank (ADB), organized a workshop on Land Acquisition and Land Use Restriction Management for projects financed by the Asian Development Bank (ADB).</p>
          <p class="leading-relaxed">This workshop was held under the high leadership of <strong>H.E. Im Sitthyra</strong>, Delegate of the Royal Government in charge as Director General of the General Department of Project Impact Resolution.</p>
          <p class="leading-relaxed">The workshop featured speakers from ADB headquarters, including <strong>Ms. Jocelyn Erlinda S. Munsayac</strong>, Director, Regional Operations Service 3, <strong>Mr. Jose "Tito" Nicolas</strong>, Principal Safeguards Specialist Social Team Head, <strong>Mr. Toby Nugent</strong>, Senior Safeguards Specialist (Social), and other ADB Safeguards specialists to train and enhance understanding of ESS5 policy on Land Acquisition and Land Use Restriction under ADB's Environmental and Social Framework for the leadership and officials under the General Department of Project Impact Resolution.</p>
          <p class="text-right mt-6">Thank you!</p>
        </div>`,
      },
    },
    {
      id: 3,
      title: {
        km: "ឯកឧត្តម អុឹម សិទ្ធីរ៉ា អញ្ជើញចូលរួមកិច្ចប្រជុំបូកសរុបលើលទ្ធផលនៃកិច្ចប្រជុំពិគ្រោះយោបល់កម្រិតតំបន់របស់ ADB",
        en: "H.E. Im Sitthyra Attends ADB's Accountability Mechanism Policy Review Wrap-up Session",
      },
      date: "12 កក្កដា 2025",
      dateSort: "2025-07-12",
      category: "event",
      views: 1876,
      comments: 32,
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
      dateSort: "2025-09-16",
      category: "event",
      views: 1543,
      comments: 28,
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
      dateSort: "2025-12-09",
      category: "event",
      views: 987,
      comments: 19,
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
      dateSort: "2026-03-19",
      category: "event",
      views: 2134,
      comments: 45,
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

  const filteredNews = allNews
    .filter((item) => {
      const matchesCategory =
        activeTab === "all" || item.category === activeTab;
      const matchesSearch = item.title[currentLang]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.views - a.views;
      return new Date(b.dateSort) - new Date(a.dateSort);
    });

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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

  const clearFilters = () => {
    setSearchQuery("");
    setActiveTab("all");
    setSortBy("latest");
    setCurrentPage(1);
  };

  const relatedNews = allNews
    .filter((item) => item.id !== selectedNews?.id)
    .slice(0, 3);

  // Grid View Component
  const GridView = ({ items }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#4CAF50] transition-all duration-300 overflow-hidden cursor-pointer"
          onClick={() => handleReadMore(item)}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <img
              src={item.mainImage}
              alt={item.title[currentLang]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded border border-gray-200">
                {item.category === "event"
                  ? currentLang === "km"
                    ? "ព្រឹត្តិការណ៍"
                    : "Event"
                  : currentLang === "km"
                    ? "ព័ត៌មាន"
                    : "News"}
              </span>
            </div>
            {item.images && item.images.length > 1 && (
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {item.images.length}
                </span>
              </div>
            )}
          </div>
          <div className="p-5">
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <Calendar size={12} className="mr-1" />
              <span>{item.date}</span>
              <span className="mx-2">•</span>
              <Eye size={12} className="mr-1" />
              <span>{item.views}</span>
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-2 leading-relaxed line-clamp-2 min-h-[3rem] group-hover:text-[#2E7D32] transition-colors">
              {item.title[currentLang]}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {item.summary[currentLang]}
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500 flex items-center">
                <User size={12} className="mr-1" />
                {item.author[currentLang]}
              </span>
              <span className="text-xs text-[#4CAF50] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                {t.readMore}
                <ChevronRightIcon size={14} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // List View Component
  const ListView = ({ items }) => (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#4CAF50] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col md:flex-row"
          onClick={() => handleReadMore(item)}
        >
          {/* Image */}
          <div className="relative md:w-64 h-48 md:h-auto overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={item.mainImage}
              alt={item.title[currentLang]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded border border-gray-200">
                {item.category === "event"
                  ? currentLang === "km"
                    ? "ព្រឹត្តិការណ៍"
                    : "Event"
                  : currentLang === "km"
                    ? "ព័ត៌មាន"
                    : "News"}
              </span>
            </div>
            {item.images && item.images.length > 1 && (
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {item.images.length}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-5">
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <Calendar size={12} className="mr-1" />
              <span>{item.date}</span>
              <span className="mx-2">•</span>
              <Eye size={12} className="mr-1" />
              <span>{item.views}</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 leading-relaxed group-hover:text-[#2E7D32] transition-colors line-clamp-1">
              {item.title[currentLang]}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {item.summary[currentLang]}
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500 flex items-center">
                <User size={12} className="mr-1" />
                {item.author[currentLang]}
              </span>
              <span className="text-xs text-[#4CAF50] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                {t.readMore}
                <ChevronRightIcon size={14} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  function runningText() {
    function logo() {
      return (
        <img
          src={Image}
          style={{
            height: "20px",
            width: "20px",
            objectFit: "cover",
            display: "inline", // Add this
          }}
        />
      );
    }
    return (
      <>
        {/* ✅ RUNNING TEXT FIXED UNDER HEADER */}

        <div
          className="
            running-text-bar
            sticky
            top-[72px]
            md:top-[140px]
            w-full
            z-40
            overflow-hidden
          bg-gradient-to-r from-[#2E7D32]/80 to-[#4CAF50]/80
            shadow-lg
          "
        >
          <div className="animate-marquee whitespace-nowrap py-2 md:py-3">
            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} អនុក្រឹត្យ ស្តីពី
              ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិសម្រាប់ការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ដែលទទួលបានហិរញ្ញប្បទានពីដៃគូអភិវឌ្ឍន៍
              ក្នុងព្រះណាចក្រកម្ពុជា
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} ច្បាប់ស្តីពី អស្សាមិករណ៍
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} LAW ON EXPROPRIATION
            </span>
            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} អនុក្រឹត្យ ស្តីពី
              ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិសម្រាប់ការងារដោះស្រាយភលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ដែលទទួលបានហិរញ្ញប្បទានពីដៃគូអភិវឌ្ឍន៍
              ក្នុងព្រះណាចក្រកម្ពុជា •
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} ច្បាប់ស្តីពី អស្សាមិករណ៍
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logo()} LAW ON EXPROPRIATION
            </span>
          </div>
        </div>

        {/* ✅ MARQUEE CSS */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: inline-block;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </>
    );
  }
  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#2E7D32] text-white rounded-full shadow-lg hover:bg-[#4CAF50] transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Running Text - Fixed under header menu */}
      <div
        className="
            running-text-bar
            sticky
            top-[72px]
            md:top-[140px]
            w-full
            z-40
            overflow-hidden
          bg-gradient-to-r from-[#2E7D32]/80 to-[#4CAF50]/80
            shadow-lg
          "
      >
        {runningText()}
      </div>

      {/* Global Banner */}
      <GlobalBanner
        title={t.title}
        subtitle={
          currentLang === "km"
            ? "ព័ត៌មានថ្មីៗ និងសេចក្តីប្រកាសព័ត៌មានពីអគ្គនាយកដ្ឋាន"
            : "Latest news and announcements from the General Department"
        }
        height="h-[200px] md:h-[280px] lg:h-[350px]"
        showBreadcrumb={true}
      />

      {/* Main Content */}
      <Container className="py-12">
        {/* Search and Filter Bar */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-colors text-sm"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {t.sort}:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] bg-white text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label[currentLang]}
                  </option>
                ))}
              </select>
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

            {(searchQuery || activeTab !== "all") && (
              <button
                onClick={clearFilters}
                className="px-4 py-2.5 text-sm text-[#4CAF50] hover:text-[#2E7D32] border border-[#4CAF50] rounded-lg hover:bg-[#4CAF50] hover:bg-opacity-5 transition-colors"
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
                    ? "bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:text-[#2E7D32]"
                }`}
              >
                {cat.label[currentLang]}
                {cat.count > 0 && (
                  <span
                    className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      activeTab === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
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
            {t.page} {currentPage} {t.of} {totalPages} • {filteredNews.length}{" "}
            {t.results}
          </p>
        </div>

        {/* News Grid/List */}
        {paginatedNews.length > 0 ? (
          viewMode === "grid" ? (
            <GridView items={paginatedNews} />
          ) : (
            <ListView items={paginatedNews} />
          )
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {t.noNews}
            </h3>
            <p className="text-gray-500 mb-4">{t.tryAgain}</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
            >
              {t.clearAll}
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                currentPage === 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]"
              }`}
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg font-medium border ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white border-transparent"
                    : "border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]"
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
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#2E7D32] transition-colors group"
                >
                  <ArrowLeft
                    size={18}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  <span className="text-sm">{t.back}</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg text-gray-600 hover:text-[#2E7D32] transition-colors"
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
                src={selectedNews.mainImage}
                alt={selectedNews.title[currentLang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded border border-gray-200">
                  {selectedNews.category === "event"
                    ? currentLang === "km"
                      ? "ព្រឹត្តិការណ៍"
                      : "Event"
                    : currentLang === "km"
                      ? "ព័ត៌មាន"
                      : "News"}
                </span>
              </div>
              {selectedNews.images && selectedNews.images.length > 1 && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {selectedNews.images.length}
                  </span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 leading-tight">
              {selectedNews.title[currentLang]}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User size={16} className="text-[#4CAF50]" />
                <span className="text-sm text-gray-600">
                  {selectedNews.author[currentLang]}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-[#4CAF50]" />
                <span className="text-sm text-gray-600">
                  {selectedNews.date}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye size={16} className="text-[#4CAF50]" />
                <span className="text-sm text-gray-600">
                  {selectedNews.views} {t.views}
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-sm max-w-none mb-12 text-gray-700">
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedNews.content[currentLang],
                }}
              />
            </div>

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

            {/* Share */}
            <div className="mb-12 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                {t.shareVia}
              </h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-[#4CAF50] hover:bg-opacity-10 hover:text-[#2E7D32] transition-colors text-sm flex items-center space-x-2"
                >
                  <Link2 size={16} />
                  <span>{t.copyLink}</span>
                </button>
              </div>
            </div>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-6">
                  {t.related}
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedNews.map((item) => (
                    <div
                      key={item.id}
                      className="group cursor-pointer border border-gray-200 rounded-lg hover:shadow-md hover:border-[#4CAF50] transition-all overflow-hidden"
                      onClick={() => handleReadMore(item)}
                    >
                      <div className="relative h-32 overflow-hidden bg-gray-100">
                        <img
                          src={item.mainImage}
                          alt={item.title[currentLang]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#2E7D32] line-clamp-2 mb-1">
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

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: inline-block;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default AllNewsPage;
