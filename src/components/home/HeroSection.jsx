// src/components/home/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { useHeader } from "../../hooks/useHeader";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "km";
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banners, setBanners] = useState([]);

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

  // Parse banners from API response and create 5 slides
  useEffect(() => {
    let originalBanners = [];
    
    if (banner && banner.trim() !== '') {
      // Check if banner is a JSON array or single URL
      try {
        const parsedBanners = JSON.parse(banner);
        if (Array.isArray(parsedBanners) && parsedBanners.length > 0) {
          originalBanners = parsedBanners.filter(b => b && b.trim() !== '');
        } else {
          originalBanners = [banner];
        }
      } catch (e) {
        // If not JSON, treat as single banner
        originalBanners = [banner];
      }
    } else {
      originalBanners = [];
    }

    // Create slideshow with 5 images (repeat the available images)
    if (originalBanners.length > 0) {
      const slideshowBanners = [];
      for (let i = 0; i < 5; i++) {
        // Cycle through available banners
        const bannerIndex = i % originalBanners.length;
        slideshowBanners.push(originalBanners[bannerIndex]);
      }
      setBanners(slideshowBanners);
    } else {
      setBanners([]);
    }
  }, [banner]);

  // Auto-slide functionality
  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (banners.length === 0 && !loading) {
    return null; // Don't render anything if no banners
  }

  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] overflow-hidden group">
      {/* Background Image with fade transition */}
      <div className="absolute inset-0 w-full h-full">
        {!loading && banners.length > 0 && (
          <div className="relative w-full h-full">
            {banners.map((b, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={b}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Remove the image if it fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        )}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Add a subtle overlay to separate from nav */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-30"></div>
    </div>
  );
};

export default HeroSection;