// src/components/home/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { useHeader } from "../../hooks/useHeader";
import fallbackBanner from "../../images/Banner-1.jpg";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "km";
  });

  // Use header hook to get banner
  const { loading, banner } = useHeader(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };

    window.addEventListener("languagechange", handleLanguageChange);
    return () => window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  // Get banner URL - use API banner or fallback
  const bannerUrl = banner && banner.trim() !== '' ? banner : fallbackBanner;

  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {!loading && (
          <img
            src={bannerUrl}
            alt="Banner"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = fallbackBanner;
            }}
          />
        )}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}

      {/* Optional: Add a subtle overlay to separate from nav */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-30"></div>
    </div>
  );
};

export default HeroSection;