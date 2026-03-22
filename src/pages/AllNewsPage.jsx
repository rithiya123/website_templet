  // src/pages/AllNewsPage.jsx
  import React, { useState, useEffect } from "react";
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
    const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

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

    const categories = [
      {
        id: "all",
        label: { km: "ទាំងអស់", en: "All News" },
        icon: <Layers size={14} />,
        count: 2,
      },
      {
        id: "event",
        label: { km: "ព្រឹត្តិការណ៍", en: "Events" },
        count: 2,
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
      },
    };

    const t = translations[currentLang];

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

    const allNews = [
      {
        id: 1,
        title: {
          km: "ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា ជួបពិភាក្សាការងារជាមួយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)",
          en: "H.E. Im Sitthyra Meets with Asian Development Bank (ADB) for Work Discussion",
        },
        date: "20 មករា 2026",
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
        return new Date(b.date) - new Date(a.date);
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
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

        {/* Header with Breadcrumb */}
        <div className="border-b border-gray-100 bg-white sticky top-0 z-40">
          <Container className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-5 rounded-lg transition-colors"
                >
                  <Home size={18} className="text-gray-500" />
                </Link>

                <nav className="flex items-center space-x-2 text-sm">
                  <Link
                    to="/"
                    className="text-gray-500 hover:text-[#2E7D32] transition-colors"
                  >
                    {t.home}
                  </Link>
                  <ChevronRight size={12} className="text-gray-300" />
                  <span className="text-gray-900 font-medium">{t.title}</span>
                </nav>
              </div>
            </div>
          </Container>
        </div>

        {/* Page Header */}
        <div className="bg-white border-b border-gray-100">
          <Container className="py-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 text-[#4CAF50] mb-3">
                <FileText size={16} />
                <span className="text-xs font-medium uppercase tracking-wider">
                  {t.title}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
                {t.title}
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
                {currentLang === "km"
                  ? "ព័ត៌មានថ្មីៗ និងសេចក្តីប្រកាសព័ត៌មានពីអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោង"
                  : "Latest news and announcements from the General Department of Project Impact Resolution"}
              </p>
            </div>
          </Container>
        </div>

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

        {/* News Detail Modal - same as before */}
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
      </>
    );
  };

  export default AllNewsPage;