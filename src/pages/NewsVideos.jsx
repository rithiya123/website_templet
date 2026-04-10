// src/pages/NewsVideos.jsx
import ImageLogo from "../images/logo_white.png";
import React, { useState, useRef, useEffect } from "react";
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
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import videoFile from "../video/36.mp4";

// Video data array
const videosData = [
  {
    id: 1,
    title:
      "ដោយទទួលបានការចាត់តាំងដ៏ខ្ពង់ខ្ពស់របស់ ឯកឧត្តមអគ្គបណ្ឌិតសភាចារ្យ អូន ព័ន្ធមុនីរ័ត្ន",
    videoUrl: videoFile,
    date: "28 កុម្ភៈ 2025",
    duration: "3:45",
    views: "1.2K",
    category: "ព័ត៌មានថ្មីៗ",
    timestamp: new Date(2025, 1, 28).getTime(),
  },
  // {
  //   id: 2,
  //   title: "សន្និសីទសារព័ត៌មាន ស្តីពីវឌ្ឍនភាពការងាររបស់ក្រសួងសេដ្ឋកិច្ច",
  //   videoUrl: "/src/video/37.mp4",
  //   date: "15 មីនា 2025",
  //   duration: "12:30",
  //   views: "3.5K",
  //   category: "សន្និសីទសារព័ត៌មាន",
  //   timestamp: new Date(2025, 2, 15).getTime()
  // },
  // {
  //   id: 3,
  //   title: "ពិធីបើកវេទិកាស្តីពីការអភិវឌ្ឍសេដ្ឋកិច្ចឌីជីថលកម្ពុជា",
  //   videoUrl: "/src/video/38.mp4",
  //   date: "10 មីនា 2025",
  //   duration: "8:15",
  //   views: "2.1K",
  //   category: "វេទិកា",
  //   timestamp: new Date(2025, 2, 10).getTime()
  // },
  // {
  //   id: 4,
  //   title: "កិច្ចប្រជុំបូកសរុបលទ្ធផលការងារឆ្នាំ២០២៤",
  //   videoUrl: "/src/video/39.mp4",
  //   date: "28 កុម្ភៈ 2025",
  //   duration: "15:20",
  //   views: "4.2K",
  //   category: "កិច្ចប្រជុំ",
  //   timestamp: new Date(2025, 1, 28).getTime()
  // }
];

// Video Card Component
const VideoCard = ({ video, onClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

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

      <div className="p-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] px-2 py-0.5 bg-[#4CAF50]/10 text-[#2E7D32] rounded-full">
            {video.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Eye size={11} />
            <span className="text-[11px]">{video.views}</span>
          </div>
        </div>
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1.5 group-hover:text-[#2E7D32] transition-colors leading-snug">
          {video.title}
        </h3>
        <div className="flex items-center text-[11px] text-gray-500">
          <CalendarDays size={11} className="mr-1" />
          <span>{video.date}</span>
        </div>
      </div>
    </div>
  );
};

// Clean Video Modal - With Close Button on Top
const VideoModal = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

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

        {/* Video Info - Clean & Minimal */}
        <div className="p-3 sm:p-5">
          <h2 className="text-sm sm:text-base md:text-lg font-medium text-white leading-relaxed pr-8">
            {video.title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-[11px] sm:text-xs text-gray-400">
            <span className="px-2 py-0.5 bg-white/10 rounded-full">
              {video.category}
            </span>
            <span>•</span>
            <span>{video.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Eye size={11} />
              {video.views} ការមើល
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main NewsVideos Component
const NewsVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [currentLang, setCurrentLang] = useState("km");

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
      const matchesSearch = video.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || video.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "latest") return b.timestamp - a.timestamp;
      if (sortBy === "popular") return parseInt(b.views) - parseInt(a.views);
      return 0;
    });

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
    },
  };

  const t = translations[currentLang];
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

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white"
            >
              <Filter size={14} />
              <span>{t.filter}</span>
            </button>
          </div>

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

        {/* Video Grid - 3 columns responsive */}
        {filteredVideos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={setSelectedVideo}
                />
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
              {t.showing} {filteredVideos.length} {t.videos}
            </div>
          </>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white rounded-xl">
            <Video size={40} className="text-gray-300 mx-auto mb-3" />
            <h3 className="text-base sm:text-lg font-medium text-gray-600">
              {t.noVideos}
            </h3>
          </div>
        )}
      </Container>

      {/* Video Modal - Clean */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
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
      `}</style>
    </div>
  );
};

export default NewsVideos;
