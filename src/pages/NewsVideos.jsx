import ImageLogo from "../images/logo_white.png";
import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Video,
  Play,
  ChevronRight,
  X,
  Eye,
  CalendarDays,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Search,
  ChevronDown,
  Filter,
  Heart,
  Share2,
  Grid,
  List,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import videoFile from "../video/36.mp4";
import videoFile1 from "../video/1.mp4";

// Base video data without counts
const baseVideosData = [
  {
    id: 1,
    title: {
      km: "ឯកឧត្តម អុឹម សិទ្ធីរ៉ា ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បានអញ្ជើញចូលរួមកិច្ចប្រជុំបូកសរុបលើលទ្ធផលដែលទទួលបានពីកិច្ចប្រជុំពិគ្រោះយោបល់កម្រិតតំបន់សម្រាប់ការពិនិត្យនិងធ្វើបច្ចុប្បន្នកម្មគោលនយោបាយយន្តការគណនេយ្យភាពរបស់ធនាគារអភិវឌ្ឍន៍អាស៊ី (Review of ADB's Accountability Mechanism Policy Wrap-up Session on Regional Consultations)",
      en: "H.E. Im Sitthira, Government Delegate and Director General of the General Department of Resolution of Impacts from Development Projects, attended the wrap-up meeting on the results of regional consultations for the review and update of ADB's Accountability Mechanism Policy",
    },
    videoUrl: videoFile1,
    date: "10-12 កក្កដា 2025",
    duration: "15:30",
    category: "កិច្ចប្រជុំអន្តរជាតិ",
    timestamp: new Date(2025, 6, 10).getTime(),
  },
];

const NewsVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [currentLang, setCurrentLang] = useState("km");

  // Load counts from localStorage
  const [videoViews, setVideoViews] = useState(() => {
    const saved = localStorage.getItem('video_views');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [videoLikes, setVideoLikes] = useState(() => {
    const saved = localStorage.getItem('video_likes');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [videoShares, setVideoShares] = useState(() => {
    const saved = localStorage.getItem('video_shares');
    return saved ? JSON.parse(saved) : {};
  });

  // Track which videos the user has liked (for like/unlike functionality)
  const [userLikedVideos, setUserLikedVideos] = useState(() => {
    const saved = localStorage.getItem('user_liked_videos');
    return saved ? JSON.parse(saved) : {};
  });

  // Save counts to localStorage
  useEffect(() => {
    localStorage.setItem('video_views', JSON.stringify(videoViews));
  }, [videoViews]);

  useEffect(() => {
    localStorage.setItem('video_likes', JSON.stringify(videoLikes));
  }, [videoLikes]);

  useEffect(() => {
    localStorage.setItem('video_shares', JSON.stringify(videoShares));
  }, [videoShares]);

  useEffect(() => {
    localStorage.setItem('user_liked_videos', JSON.stringify(userLikedVideos));
  }, [userLikedVideos]);

  // Merge base videos with stored counts
  const videosData = useMemo(() => {
    return baseVideosData.map(video => ({
      ...video,
      views: videoViews[video.id] || 0,
      likes: videoLikes[video.id] || 0,
      shares: videoShares[video.id] || 0,
    }));
  }, [videoViews, videoLikes, videoShares]);

  const categories = ["ទាំងអស់", ...new Set(videosData.map((v) => v.category))];

  useEffect(() => {
    const handleLanguageChange = (e) => setCurrentLang(e.detail.language);
    window.addEventListener("languagechange", handleLanguageChange);
    const savedLang = localStorage.getItem("language");
    if (savedLang) setCurrentLang(savedLang);
    return () =>
      window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  const filteredVideos = videosData
    .filter((video) => {
      const title = currentLang === 'km' ? video.title.km : video.title.en;
      const matchesSearch = title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || video.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "latest") return b.timestamp - a.timestamp;
      if (sortBy === "popular") return b.views - a.views;
      return 0;
    });

  const handleViewVideo = (video) => {
    // Update view count when opening video
    setVideoViews(prev => ({
      ...prev,
      [video.id]: (prev[video.id] || 0) + 1
    }));
    setSelectedVideo(video);
  };

  // Like/Unlike handler - each user can only like once
  const handleLikeToggle = (videoId, e) => {
    e.stopPropagation();
    
    const hasLiked = userLikedVideos[videoId];
    
    if (hasLiked) {
      // Unlike: decrease like count
      setVideoLikes(prev => ({
        ...prev,
        [videoId]: Math.max((prev[videoId] || 0) - 1, 0)
      }));
      setUserLikedVideos(prev => {
        const newState = { ...prev };
        delete newState[videoId];
        return newState;
      });
    } else {
      // Like: increase like count
      setVideoLikes(prev => ({
        ...prev,
        [videoId]: (prev[videoId] || 0) + 1
      }));
      setUserLikedVideos(prev => ({
        ...prev,
        [videoId]: true
      }));
    }
  };

  const handleShare = (video, e) => {
    e.stopPropagation();
    // Update share count
    setVideoShares(prev => ({
      ...prev,
      [video.id]: (prev[video.id] || 0) + 1
    }));
    
    // Copy link to clipboard
    const url = `${window.location.origin}/videos/${video.id}`;
    navigator.clipboard.writeText(url);
    alert(t.copied);
  };

  const translations = {
    km: {
      title: "កម្រងវីដេអូព័ត៌មាន",
      subtitle: "ស្វែងយល់ពីព័ត៌មានថ្មីៗ សន្និសីទ និងសកម្មភាពសំខាន់ៗ",
      runningText:
        "សូមស្វាគមន៍មកកាន់កម្រងវីដេអូព័ត៌មាន • ព័ត៌មានថ្មីៗអំពីសកម្មភាពថ្នាក់ដឹកនាំក្រសួង •",
      search: "ស្វែងរកវីដេអូ...",
      sortBy: "តម្រៀបតាម",
      latest: "ថ្មីបំផុត",
      popular: "ការមើលច្រើន",
      filter: "តម្រង",
      all: "ទាំងអស់",
      showing: "បង្ហាញ",
      videos: "វីដេអូ",
      noVideos: "មិនមានវីដេអូ",
      views: "មើល",
      likes: "ចូលចិត្ត",
      shares: "ចែករំលែក",
      grid: "ទម្រង់ក្រឡា",
      list: "ទម្រង់បញ្ជី",
      share: "ចែករំលែក",
      copyLink: "ចម្លងតំណ",
      copied: "បានចម្លង!",
    },
    en: {
      title: "News Video Gallery",
      subtitle: "Discover the latest news, conferences and key activities",
      runningText: "WELCOME TO THE NEWS VIDEO GALLERY •",
      search: "Search videos...",
      sortBy: "Sort by",
      latest: "Latest",
      popular: "Most viewed",
      filter: "Filter",
      all: "All",
      showing: "Showing",
      videos: "videos",
      noVideos: "No videos found",
      views: "views",
      likes: "likes",
      shares: "shares",
      grid: "Grid View",
      list: "List View",
      share: "Share",
      copyLink: "Copy Link",
      copied: "Copied!",
    },
  };

  const t = translations[currentLang];

  // Video Card Component - Grid View
  const VideoGridCard = ({ video, onClick, isLiked, onLikeToggle }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef(null);
    const observerRef = useRef(null);
    const title = currentLang === 'km' ? video.title.km : video.title.en;

    useEffect(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current && !videoError) {
              videoRef.current.play().catch(() => setVideoError(true));
              setIsPlaying(true);
            } else if (!entry.isIntersecting && videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          });
        },
        { threshold: 0.5 },
      );

      if (videoRef.current) {
        observerRef.current.observe(videoRef.current);
      }

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, [videoError]);

    return (
      <div
        className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
        onClick={() => onClick(video)}
      >
        <div className="relative aspect-video bg-gray-900 overflow-hidden">
          <video
            ref={videoRef}
            src={video.videoUrl}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          />
          {videoError && (
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <Video size={28} className="text-white/50" />
            </div>
          )}
          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs text-white">
            {video.duration}
          </div>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
              {isPlaying ? (
                <div className="w-4 h-4 border-2 border-[#2E7D32] rounded-sm" />
              ) : (
                <Play size={20} className="text-[#2E7D32] ml-0.5" />
              )}
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-[#4CAF50]/10 text-[#2E7D32] rounded-full">
              {video.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Eye size={12} />
              <span>{video.views}</span>
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 group-hover:text-[#2E7D32] transition-colors leading-relaxed">
            {title}
          </h3>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center text-xs text-gray-500">
                <CalendarDays size={12} className="mr-1" />
                <span>{video.date}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => onLikeToggle(video.id, e)}
                className={`flex items-center gap-1 text-xs transition-colors ${
                  isLiked 
                    ? "text-red-500 hover:text-red-600" 
                    : "text-gray-500 hover:text-red-500"
                }`}
              >
                <Heart size={14} fill={isLiked ? "currentColor" : "none"} />
                <span>{video.likes}</span>
              </button>
              <button
                onClick={(e) => handleShare(video, e)}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#4CAF50] transition-colors"
              >
                <Share2 size={14} />
                <span>{video.shares}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Video Card Component - List View
  const VideoListCard = ({ video, onClick, isLiked, onLikeToggle }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef(null);
    const observerRef = useRef(null);
    const title = currentLang === 'km' ? video.title.km : video.title.en;

    useEffect(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current && !videoError) {
              videoRef.current.play().catch(() => setVideoError(true));
              setIsPlaying(true);
            } else if (!entry.isIntersecting && videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          });
        },
        { threshold: 0.5 },
      );

      if (videoRef.current) {
        observerRef.current.observe(videoRef.current);
      }

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, [videoError]);

    return (
      <div
        className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer flex flex-col sm:flex-row"
        onClick={() => onClick(video)}
      >
        <div className="relative w-full sm:w-64 h-48 sm:h-auto aspect-video sm:aspect-auto bg-gray-900 overflow-hidden flex-shrink-0">
          <video
            ref={videoRef}
            src={video.videoUrl}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          />
          {videoError && (
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <Video size={28} className="text-white/50" />
            </div>
          )}
          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs text-white">
            {video.duration}
          </div>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
              {isPlaying ? (
                <div className="w-4 h-4 border-2 border-[#2E7D32] rounded-sm" />
              ) : (
                <Play size={20} className="text-[#2E7D32] ml-0.5" />
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-[#4CAF50]/10 text-[#2E7D32] rounded-full">
              {video.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Eye size={12} />
              <span>{video.views} {t.views}</span>
            </div>
          </div>
          <h3 className="text-base font-medium text-gray-800 line-clamp-2 mb-2 group-hover:text-[#2E7D32] transition-colors leading-relaxed">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <CalendarDays size={12} className="mr-1" />
            <span>{video.date}</span>
          </div>
          <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
            <button
              onClick={(e) => onLikeToggle(video.id, e)}
              className={`flex items-center gap-1.5 text-sm transition-colors ${
                isLiked 
                  ? "text-red-500 hover:text-red-600" 
                  : "text-gray-500 hover:text-red-500"
              }`}
            >
              <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
              <span>{video.likes} {t.likes}</span>
            </button>
            <button
              onClick={(e) => handleShare(video, e)}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#4CAF50] transition-colors"
            >
              <Share2 size={16} />
              <span>{video.shares} {t.shares}</span>
            </button>
          </div>
        </div>
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
            display: "inline",
          }}
        />
      );
    }
    return (
      <>
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
    <div className="min-h-screen bg-gray-50">
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
        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder={t.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent bg-white"
              />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] bg-white cursor-pointer w-full sm:w-auto"
              >
                <option value="latest">{t.latest}</option>
                <option value="popular">{t.popular}</option>
              </select>
              <ChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={14}
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
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

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white"
            >
              <Filter size={14} />
              <span>{t.filter}</span>
            </button>
          </div>

          {/* Category Filters */}
          <div
            className={`mt-3 flex flex-wrap gap-1.5 sm:gap-2 ${showFilters ? "block" : "hidden md:block"}`}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  setCategoryFilter(category === "ទាំងអស់" ? "all" : category)
                }
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  (categoryFilter === "all" && category === "ទាំងអស់") ||
                  (categoryFilter !== "all" && categoryFilter === category)
                    ? "bg-[#2E7D32] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-gray-500">
          {t.showing} {filteredVideos.length} {t.videos}
        </div>

        {/* Video Grid/List - 3 columns responsive */}
        {filteredVideos.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {filteredVideos.map((video) => (
                <VideoGridCard
                  key={video.id}
                  video={video}
                  onClick={handleViewVideo}
                  isLiked={userLikedVideos[video.id] || false}
                  onLikeToggle={handleLikeToggle}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredVideos.map((video) => (
                <VideoListCard
                  key={video.id}
                  video={video}
                  onClick={handleViewVideo}
                  isLiked={userLikedVideos[video.id] || false}
                  onLikeToggle={handleLikeToggle}
                />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white rounded-xl">
            <Video size={40} className="text-gray-300 mx-auto mb-3" />
            <h3 className="text-base sm:text-lg font-medium text-gray-600">
              {t.noVideos}
            </h3>
          </div>
        )}
      </Container>

      {/* Video Modal - Updated with like/unlike toggle */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onLikeToggle={handleLikeToggle}
          onShare={handleShare}
          t={t}
          currentLang={currentLang}
          isLiked={userLikedVideos[selectedVideo.id] || false}
        />
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

// Updated Video Modal with Like/Unlike Toggle
const VideoModal = ({ video, onClose, onLikeToggle, onShare, t, currentLang, isLiked }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);
  const title = currentLang === 'km' ? video.title.km : video.title.en;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && !videoError) {
      const handleLoadedMetadata = () => {
        if (videoElement) {
          setDuration(videoElement.duration);
        }
      };

      const handleTimeUpdate = () => {
        if (videoElement) {
          setCurrentTime(videoElement.currentTime);
        }
      };

      const handleError = () => {
        setVideoError(true);
      };

      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
      videoElement.addEventListener("error", handleError);

      return () => {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
        );
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
        videoElement.removeEventListener("error", handleError);
      };
    }
  }, [videoError]);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement && !videoError) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play().catch(() => setVideoError(true));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    const modalElement = modalRef.current;
    if (!document.fullscreenElement && modalElement) {
      modalElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-black rounded-xl sm:rounded-2xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Player */}
        <div className="relative">
          {videoError ? (
            <div className="w-full aspect-video bg-gray-900 flex flex-col items-center justify-center">
              <Video size={48} className="text-gray-500 mb-3" />
              <p className="text-gray-400 text-sm">មិនអាចផ្ទុកវីដេអូបានទេ</p>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="w-full aspect-video"
              onClick={handlePlayPause}
              controls={false}
            >
              <source src={video.videoUrl} type="video/mp4" />
            </video>
          )}

          {!videoError && (
            <>
              {/* Close Button - Top Right */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition z-10 backdrop-blur-sm"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 sm:p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={handlePlayPause}
                    className="text-white hover:text-[#4CAF50] transition p-1"
                  >
                    {isPlaying ? (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white rounded-sm" />
                      </div>
                    ) : (
                      <Play size={18} className="sm:w-5 sm:h-5 fill-white" />
                    )}
                  </button>

                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #4CAF50 ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 1)) * 100}%)`,
                      }}
                    />
                    <div className="flex justify-between text-[10px] sm:text-xs text-white mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleMute}
                    className="text-white hover:text-[#4CAF50] transition p-1"
                  >
                    {isMuted ? (
                      <VolumeX size={18} className="sm:w-5 sm:h-5" />
                    ) : (
                      <Volume2 size={18} className="sm:w-5 sm:h-5" />
                    )}
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="text-white hover:text-[#4CAF50] transition p-1"
                  >
                    <Maximize2 size={18} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Video Info with Like/Unlike Toggle */}
        <div className="p-4 sm:p-6">
          <h2 className="text-base sm:text-lg md:text-xl font-medium text-white leading-relaxed pr-8">
            {title}
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <span className="px-2 py-1 bg-white/10 rounded-full">
                {video.category}
              </span>
              <span>•</span>
              <span>{video.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Eye size={12} />
                {video.views} {t.views}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => onLikeToggle(video.id, e)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  isLiked 
                    ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
                <span>{video.likes}</span>
              </button>
              <button
                onClick={(e) => onShare(video, e)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
              >
                <Share2 size={16} />
                <span>{video.shares}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsVideos;