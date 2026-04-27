// src/pages/FullManagementStructurePage.jsx
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Share2,
} from "lucide-react";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import useManagementStructure from "../hooks/useManagementStructure";

const FullManagementStructurePage = () => {
  const [currentLang, setCurrentLang] = useState("km");
  const [showDetail, setShowDetail] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Use the management structure hook
  const { loading, error, orgChartImage, isActive } = useManagementStructure();

  useEffect(() => {
    const handleLanguageChange = (e) => setCurrentLang(e.detail.language);
    window.addEventListener("languagechange", handleLanguageChange);
    const savedLang = localStorage.getItem("language");
    if (savedLang) setCurrentLang(savedLang);
    return () =>
      window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width < 640) setZoomLevel(0.55);
      else if (width < 768) setZoomLevel(0.7);
      else if (width < 1024) setZoomLevel(0.85);
      else setZoomLevel(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showDetail ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showDetail]);

  const translations = {
    km: {
      title: "រចនាសម្ព័ន្ធគ្រប់គ្រង",
      subtitle: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      back: "ត្រលប់ក្រោយ",
      zoomIn: "ពង្រីក",
      zoomOut: "បង្រួម",
      reset: "កំណត់ឡើងវិញ",
      loading: "កំពុងផ្ទុក...",
      error: "មានបញ្ហាក្នុងការផ្ទុកទិន្នន័យ",
      retry: "សាកល្បងម្តងទៀត",
    },
    en: {
      title: "Management Structure",
      subtitle: "General Department of Resettlement",
      back: "Back",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      reset: "Reset",
      loading: "Loading...",
      error: "Error loading data",
      retry: "Try Again",
    },
  };

  const t = translations[currentLang];

  const handleZoomIn = () => setZoomLevel((p) => Math.min(p + 0.1, 1.5));
  const handleZoomOut = () => setZoomLevel((p) => Math.max(p - 0.1, 0.4));
  const handleZoomReset = () => {
    if (windowWidth < 640) setZoomLevel(0.55);
    else if (windowWidth < 768) setZoomLevel(0.7);
    else if (windowWidth < 1024) setZoomLevel(0.85);
    else setZoomLevel(1);
  };

  const orgChartImageUrl = orgChartImage(currentLang);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <GlobalBanner
          title={t.title}
          subtitle={t.subtitle}
          height="h-[200px] md:h-[280px] lg:h-[350px]"
          showBreadcrumb={true}
        />
        <Container className="py-12">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4CAF50] mx-auto mb-4"></div>
              <p className="text-gray-500">{t.loading}</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // Error state
  if (error || !orgChartImageUrl) {
    return (
      <div className="min-h-screen bg-white">
        <GlobalBanner
          title={t.title}
          subtitle={t.subtitle}
          height="h-[200px] md:h-[280px] lg:h-[350px]"
          showBreadcrumb={true}
        />
        <Container className="py-12">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-red-500 text-sm mb-1">{t.error}</p>
            <p className="text-gray-400 text-xs mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-colors"
            >
              {t.retry}
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Global Banner */}
      <GlobalBanner
        title={t.title}
        subtitle={t.subtitle}
        height="h-[200px] md:h-[280px] lg:h-[350px]"
        showBreadcrumb={true}
      />

      {/* Zoom Controls */}
      <Container className="py-4">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-green-50 transition-colors"
            title={t.zoomIn}
          >
            <ZoomIn size={16} className="text-gray-600" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-green-50 transition-colors"
            title={t.zoomOut}
          >
            <ZoomOut size={16} className="text-gray-600" />
          </button>
          <button
            onClick={handleZoomReset}
            className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-green-50 transition-colors"
            title={t.reset}
          >
            <Maximize2 size={16} className="text-gray-600" />
          </button>
        </div>
      </Container>

      {/* Organization Chart Image */}
      <Container className="pb-16 overflow-x-auto">
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top center",
            transition: "transform 0.3s ease",
          }}
        >
          <div className="flex justify-center">
            <img 
              src={orgChartImageUrl} 
              alt={t.title}
              className="w-full max-w-6xl h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              onError={(e) => {
                console.error('Failed to load organization chart image');
                e.target.src = "https://placehold.co/1200x800/4CAF50/white?text=Organization+Chart";
              }}
            />
          </div>
        </div>
      </Container>

      <style jsx>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FullManagementStructurePage;