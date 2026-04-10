// src/pages/NewsPhotos.jsx
import React, { useState, useEffect, useRef } from "react";
import ImageLogo from "../images/logo_white.png";
import {
  Camera,
  Clock,
  Calendar,
  Image,
  ChevronRight,
  Eye,
  Calendar as CalendarIcon,
  User,
  Heart,
  Share2,
  Download,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Grid,
  List,
  FolderOpen,
  Search,
  Filter,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Images,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";

// Helper function to import images dynamically
const importAllImages = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

// Import all images for each post
const post1Images = importAllImages(
  require.context("../images/Post1", false, /\.(jpg|jpeg|png)$/),
);
const post2Images = importAllImages(
  require.context("../images/Post2", false, /\.(jpg|jpeg|png)$/),
);
const post3Images = importAllImages(
  require.context("../images/Post3", false, /\.(jpg|jpeg|png)$/),
);
const post4Images = importAllImages(
  require.context("../images/Post4", false, /\.(jpg|jpeg|png)$/),
);
const post5Images = importAllImages(
  require.context("../images/Post5", false, /\.(jpg|jpeg|png)$/),
);
const post6Images = importAllImages(
  require.context("../images/Post6", false, /\.(jpg|jpeg|png)$/),
);

// Convert objects to arrays and sort by filename
const sortImages = (imagesObj) => {
  return Object.keys(imagesObj)
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)[0]);
      const numB = parseInt(b.match(/(\d+)/)[0]);
      return numA - numB;
    })
    .map((key) => imagesObj[key]);
};

const post1ImageArray = sortImages(post1Images);
const post2ImageArray = sortImages(post2Images);
const post3ImageArray = sortImages(post3Images);
const post4ImageArray = sortImages(post4Images);
const post5ImageArray = sortImages(post5Images);
const post6ImageArray = sortImages(post6Images);

const NewsPhotos = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState("latest"); // "latest", "popular", "oldest"
  const [showFilters, setShowFilters] = useState(false);
  const [currentLang, setCurrentLang] = useState("km");

  // Touch swipe refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Language effect
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

  // Photo albums data with all 6 posts
  const photoAlbums = [
    {
      id: 1,
      title: {
        km: "ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា ជួបពិភាក្សាការងារជាមួយធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)",
        en: "H.E. Im Sitthyra Meets with Asian Development Bank (ADB)",
      },
      date: "20 មករា 2026",
      dateSort: "2026-01-20",
      views: 1247,
      likes: 89,
      images: post1ImageArray,
      coverImage: post1ImageArray[0],
      description: {
        km: "ក្នុងជំនួបនេះ ភាគីទាំងពីរបានពិភាក្សាអំពីកិច្ចសហប្រតិបត្តិការនាពេលខាងមុខ",
        en: "During this meeting, both parties discussed future cooperation",
      },
      year: "2026",
    },
    {
      id: 2,
      title: {
        km: "សិក្ខាសាលាស្តីពីការគ្រប់គ្រងលទ្ធកម្មដីធ្លី និងការរឹតបន្តឹងលើការប្រើប្រាស់ដីធ្លី",
        en: "Workshop on Land Acquisition and Land Use Restriction Management",
      },
      date: "5 មីនា 2026",
      dateSort: "2026-03-05",
      views: 856,
      likes: 67,
      images: post2ImageArray,
      coverImage: post2ImageArray[0],
      description: {
        km: "សិក្ខាសាលាធ្វើឡើងក្រោមការដឹកនាំរបស់ឯកឧត្តម អុឹម សិទ្ធីរ៉ា",
        en: "Workshop held under the leadership of H.E. Im Sitthyra",
      },
      year: "2026",
    },
    {
      id: 3,
      title: {
        km: "សិក្ខាសាលាស្តីពីការអនុវត្តគោលនយោបាយដោះស្រាយផលប៉ះពាល់",
        en: "Workshop on Impact Resolution Policy Implementation",
      },
      date: "15 មីនា 2026",
      dateSort: "2026-03-15",
      views: 2341,
      likes: 156,
      images: post3ImageArray,
      coverImage: post3ImageArray[0],
      description: {
        km: "សិក្ខាសាលាស្តីពីការអនុវត្តគោលនយោបាយដោះស្រាយផលប៉ះពាល់ពីគម្រោងអភិវឌ្ឍន៍",
        en: "Workshop on the implementation of impact resolution policies from development projects",
      },
      year: "2026",
    },
    {
      id: 4,
      title: {
        km: "ពិធីបើកការដ្ឋានសាងសង់ហេដ្ឋារចនាសម្ព័ន្ធសហគមន៍",
        en: "Community Infrastructure Construction Site Opening Ceremony",
      },
      date: "22 មីនា 2026",
      dateSort: "2026-03-22",
      views: 1876,
      likes: 123,
      images: post4ImageArray,
      coverImage: post4ImageArray[0],
      description: {
        km: "ពិធីបើកការដ្ឋានសាងសង់ហេដ្ឋារចនាសម្ព័ន្ធសហគមន៍ក្រោមគម្រោងអភិវឌ្ឍន៍",
        en: "Community infrastructure construction site opening ceremony under development projects",
      },
      year: "2026",
    },
    {
      id: 5,
      title: {
        km: "កិច្ចប្រជុំប្រចាំខែរបស់អគ្គនាយកដ្ឋាន",
        en: "General Department Monthly Meeting",
      },
      date: "28 មីនា 2026",
      dateSort: "2026-03-28",
      views: 567,
      likes: 45,
      images: post5ImageArray,
      coverImage: post5ImageArray[0],
      description: {
        km: "កិច្ចប្រជុំប្រចាំខែ ដើម្បីពិនិត្យវឌ្ឍនភាពការងារ និងរៀបចំផែនការសកម្មភាពបន្ត",
        en: "Monthly meeting to review work progress and plan future activities",
      },
      year: "2026",
    },
    {
      id: 6,
      title: {
        km: "ដំណើរទស្សនកិច្ចសិក្សានៅខេត្តព្រះសីហនុ",
        en: "Study Visit to Preah Sihanouk Province",
      },
      date: "5 មេសា 2026",
      dateSort: "2026-04-05",
      views: 945,
      likes: 78,
      images: post6ImageArray,
      coverImage: post6ImageArray[0],
      description: {
        km: "ដំណើរទស្សនកិច្ចសិក្សារបស់មន្រ្តីអគ្គនាយកដ្ឋាននៅខេត្តព្រះសីហនុ",
        en: "Study visit of General Department officials to Preah Sihanouk Province",
      },
      year: "2026",
    },
  ];

  // Translations
  const translations = {
    km: {
      title: "កម្រងរូបភាពព័ត៌មាន",
      subtitle:
        "បណ្តុំរូបភាពព្រឹត្តិការណ៍ សិក្ខាសាលា និងសកម្មភាពនានារបស់អគ្គនាយកដ្ឋាន",
      runningText:
        "សូមស្វាគមន៍មកកាន់កម្រងរូបភាពព័ត៌មាន • រូបភាពព្រឹត្តិការណ៍សំខាន់ៗរបស់អគ្គនាយកដ្ឋាន •",
      searchPlaceholder: "ស្វែងរកកម្រងរូបភាព...",
      sortBy: "តម្រៀបតាម",
      latest: "ថ្មីបំផុត",
      popular: "ពេញនិយមបំផុត",
      oldest: "ចាស់បំផុត",
      filter: "តម្រង",
      all: "ទាំងអស់",
      showing: "បង្ហាញ",
      albums: "កម្រងរូបភាព",
      total: "សរុប",
      noAlbums: "រកមិនឃើញកម្រងរូបភាព",
      tryAgain: "សូមព្យាយាមស្វែងរកម្តងទៀត",
      viewPhotos: "មើលរូបភាព",
      back: "ត្រលប់ក្រោយ",
      photos: "រូបភាព",
      views: "មើល",
      likes: "ចូលចិត្ត",
      grid: "ទម្រង់ក្រឡា",
      list: "ទម្រង់បញ្ជី",
      itemsPerPage: "ចំនួនក្នុងមួយទំព័រ",
    },
    en: {
      title: "News Photo Gallery",
      subtitle:
        "Collection of event photos, workshops and activities of the General Department",
      runningText: "WELCOME TO THE NEWS PHOTO GALLERY •",
      searchPlaceholder: "Search albums...",
      sortBy: "Sort by",
      latest: "Latest",
      popular: "Most viewed",
      oldest: "Oldest",
      filter: "Filter",
      all: "All",
      showing: "Showing",
      albums: "albums",
      total: "Total",
      noAlbums: "No albums found",
      tryAgain: "Please try searching again",
      viewPhotos: "View Photos",
      back: "Back",
      photos: "photos",
      views: "views",
      likes: "likes",
      grid: "Grid View",
      list: "List View",
      itemsPerPage: "Items per page",
    },
  };

  const t = translations[currentLang];

  // Filter and sort albums
  const filteredAlbums = photoAlbums
    .filter(
      (album) =>
        album.title.km.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.description.km.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "popular") return b.views - a.views;
      if (sortBy === "oldest")
        return new Date(a.dateSort) - new Date(b.dateSort);
      return new Date(b.dateSort) - new Date(a.dateSort); // latest
    });

  // Pagination
  const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage);
  const paginatedAlbums = filteredAlbums.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleOpenAlbum = (album) => {
    setSelectedAlbum(album);
    setSelectedImageIndex(null);
  };

  const handleCloseAlbum = () => {
    setSelectedAlbum(null);
    setShowLightbox(false);
    setSelectedImageIndex(null);
  };

  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
    setShowLightbox(true);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedAlbum && selectedImageIndex < selectedAlbum.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevAlbum = () => {
    if (selectedAlbum) {
      const currentIndex = filteredAlbums.findIndex(
        (album) => album.id === selectedAlbum.id,
      );
      if (currentIndex > 0) {
        setSelectedAlbum(filteredAlbums[currentIndex - 1]);
        setSelectedImageIndex(null);
        setShowLightbox(false);
      }
    }
  };

  const handleNextAlbum = () => {
    if (selectedAlbum) {
      const currentIndex = filteredAlbums.findIndex(
        (album) => album.id === selectedAlbum.id,
      );
      if (currentIndex < filteredAlbums.length - 1) {
        setSelectedAlbum(filteredAlbums[currentIndex + 1]);
        setSelectedImageIndex(null);
        setShowLightbox(false);
      }
    }
  };

  // Touch swipe handlers for lightbox
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        handlePrevImage();
      } else {
        handleNextImage();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showLightbox) {
        if (e.key === "ArrowLeft") handlePrevImage();
        if (e.key === "ArrowRight") handleNextImage();
        if (e.key === "Escape") setShowLightbox(false);
      }
      if (selectedAlbum && !showLightbox) {
        if (e.key === "ArrowLeft") handlePrevAlbum();
        if (e.key === "ArrowRight") handleNextAlbum();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLightbox, selectedAlbum, selectedImageIndex]);

  // Reset pagination when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy]);

  // Grid View Component for Albums
  const AlbumGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {paginatedAlbums.map((album) => (
        <div
          key={album.id}
          className="group bg-white rounded-xl border border-gray-200 hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          onClick={() => handleOpenAlbum(album)}
        >
          {/* Cover Image */}
          <div className="relative h-56 overflow-hidden bg-gray-100">
            <img
              src={album.coverImage}
              alt={album.title.km}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Image Count Badge */}
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                <Image size={12} />
                {album.images.length}
              </span>
            </div>

            {/* Date Badge */}
            <div className="absolute bottom-3 left-3">
              <span className="px-2.5 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                <CalendarIcon size={12} />
                {album.date}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
              {album.title[currentLang]}
            </h3>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {album.description[currentLang]}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Eye size={12} />
                  <span>{album.views}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Heart size={12} />
                  <span>{album.likes}</span>
                </div>
              </div>
              <span className="text-xs text-[#4CAF50] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                {t.viewPhotos}
                <ChevronRight size={14} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // List View Component for Albums
  const AlbumListView = () => (
    <div className="space-y-4">
      {paginatedAlbums.map((album) => (
        <div
          key={album.id}
          className="group bg-white border border-gray-200 rounded-xl hover:border-[#4CAF50] hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer flex flex-col md:flex-row"
          onClick={() => handleOpenAlbum(album)}
        >
          {/* Cover Image */}
          <div className="relative md:w-64 h-48 md:h-auto overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={album.coverImage}
              alt={album.title.km}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                <Image size={12} />
                {album.images.length}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors line-clamp-1">
              {album.title[currentLang]}
            </h3>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {album.description[currentLang]}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <CalendarIcon size={12} />
                  <span>{album.date}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Eye size={12} />
                  <span>{album.views}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Heart size={12} />
                  <span>{album.likes}</span>
                </div>
              </div>
              <span className="text-xs text-[#4CAF50] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                {t.viewPhotos}
                <ChevronRight size={14} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Pagination Component
  const Pagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center space-x-2 mt-8">
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

        {pageNumbers.map((page) => (
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

        {totalPages > 5 && (
          <>
            <span className="text-gray-400">...</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-9 h-9 rounded-lg font-medium border ${
                currentPage === totalPages
                  ? "bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white border-transparent"
                  : "border-gray-300 text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-10 hover:border-[#4CAF50] hover:text-[#2E7D32]"
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

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
    );
  };

  function runningText() {
    function logo() {
      return (
        <img
          src={ImageLogo}
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
    <div className="min-h-screen bg-white">
      {/* Running Text Bar */}
      {runningText()}

      {/* Global Banner */}
      <GlobalBanner
        title={t.title}
        subtitle={t.subtitle}
        height="h-[160px] sm:h-[200px] md:h-[280px] lg:h-[320px]"
        showBreadcrumb={true}
      />

      {/* Main Content */}
      <Container className="py-4 sm:py-6 md:py-8">
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-colors text-sm"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center space-x-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-[#4CAF50] hover:bg-opacity-5 hover:border-[#4CAF50] transition-colors"
            >
              <Filter size={16} />
              <span>{t.filter}</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>

            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-white text-[#2E7D32] shadow-sm"
                    : "text-gray-500 hover:text-[#2E7D32]"
                }`}
                title={t.grid}
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
                title={t.list}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2">
                    {t.sortBy}
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4CAF50] bg-white"
                  >
                    <option value="latest">{t.latest}</option>
                    <option value="popular">{t.popular}</option>
                    <option value="oldest">{t.oldest}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2">
                    {t.itemsPerPage}
                  </label>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4CAF50] bg-white"
                  >
                    <option value={6}>6 {t.albums}</option>
                    <option value={9}>9 {t.albums}</option>
                    <option value={12}>12 {t.albums}</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            {t.showing} {paginatedAlbums.length} {t.albums} ({t.total}{" "}
            {filteredAlbums.length} {t.albums})
          </p>
        </div>

        {/* Albums Display */}
        {paginatedAlbums.length > 0 ? (
          viewMode === "grid" ? (
            <AlbumGridView />
          ) : (
            <AlbumListView />
          )
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {t.noAlbums}
            </h3>
            <p className="text-gray-500">{t.tryAgain}</p>
          </div>
        )}

        {/* Pagination */}
        <Pagination />
      </Container>

      {/* Album Detail Modal */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleCloseAlbum}
                  className="flex items-center space-x-2 text-gray-500 hover:text-[#2E7D32] transition-colors group"
                >
                  <ChevronRight
                    size={18}
                    className="rotate-180 group-hover:-translate-x-1 transition-transform"
                  />
                  <span className="text-sm">{t.back}</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrevAlbum}
                    disabled={
                      filteredAlbums.findIndex(
                        (a) => a.id === selectedAlbum.id,
                      ) === 0
                    }
                    className={`p-2 rounded-lg transition-colors ${
                      filteredAlbums.findIndex(
                        (a) => a.id === selectedAlbum.id,
                      ) === 0
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={handleNextAlbum}
                    disabled={
                      filteredAlbums.findIndex(
                        (a) => a.id === selectedAlbum.id,
                      ) ===
                      filteredAlbums.length - 1
                    }
                    className={`p-2 rounded-lg transition-colors ${
                      filteredAlbums.findIndex(
                        (a) => a.id === selectedAlbum.id,
                      ) ===
                      filteredAlbums.length - 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Album Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            {/* Album Info */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                {selectedAlbum.title[currentLang]}
              </h2>
              <p className="text-gray-500 mb-4 max-w-2xl mx-auto">
                {selectedAlbum.description[currentLang]}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CalendarIcon size={14} />
                  <span>{selectedAlbum.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye size={14} />
                  <span>
                    {selectedAlbum.views} {t.views}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart size={14} />
                  <span>
                    {selectedAlbum.likes} {t.likes}
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedAlbum.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenLightbox(idx)}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group bg-gray-100"
                >
                  <img
                    src={img}
                    alt={`${selectedAlbum.title[currentLang]} - ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye size={24} className="text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Album Footer */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                {t.photos} {selectedAlbum.images.length} {t.photos}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal with Swipe Support */}
      {showLightbox && selectedAlbum && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={() => setShowLightbox(false)}
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
            disabled={selectedImageIndex === selectedAlbum.images.length - 1}
            className={`absolute right-4 z-10 text-white hover:text-gray-300 transition-colors ${
              selectedImageIndex === selectedAlbum.images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRightIcon size={48} />
          </button>

          <div className="max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedAlbum.images[selectedImageIndex]}
              alt={`${selectedAlbum.title[currentLang]} - ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {selectedAlbum.images.length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

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
    </div>
  );
};

export default NewsPhotos;
