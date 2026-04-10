// src/components/ui/GlobalBanner.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { useHeader } from "../../hooks/useHeader";
import fallbackBanner from "../../images/Banner-1.jpg";

const GlobalBanner = ({
  title,
  subtitle,
  breadcrumbs = [],
  showBreadcrumb = true,
  height = "h-[200px] md:h-[300px] lg:h-[400px]",
  overlayOpacity = "from-black/70 via-black/50 to-transparent",
}) => {
  const [currentLang, setCurrentLang] = useState("km");
  const location = useLocation();

  // Use header hook to get banner
  const { loading, banner } = useHeader(currentLang);

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

  const translations = {
    km: {
      home: "ទំព័រដើម",
    },
    en: {
      home: "Home",
    },
  };

  const t = translations[currentLang];

  // Get banner URL - use API banner or fallback
  const bannerUrl = banner && banner.trim() !== '' ? banner : fallbackBanner;

  // Generate breadcrumbs from location if not provided
  const generateBreadcrumbs = () => {
    if (breadcrumbs.length > 0) return breadcrumbs;

    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbItems = [];

    pathnames.forEach((path, index) => {
      const isLast = index === pathnames.length - 1;
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;

      // Format the breadcrumb label
      let label = path;
      if (path === "news") label = currentLang === "km" ? "ព័ត៌មាន" : "News";
      if (path === "legal")
        label =
          currentLang === "km" ? "លិខិតបទដ្ឋានគតិយុត្ត" : "Legal Documents";
      if (path === "management")
        label =
          currentLang === "km" ? "រចនាសម្ព័ន្ធនៃការគ្រប់គ្រង" : "Management";
      if (path === "contact")
        label = currentLang === "km" ? "ទំនាក់ទំនង" : "Contact";
      if (path === "photos") label = currentLang === "km" ? "រូបភាព" : "Photos";
      if (path === "videos") label = currentLang === "km" ? "វីដេអូ" : "Videos";
      if (path === "about")
        label =
          currentLang === "km" ? "អំពីរអគ្គនាយកដ្ឋាន" : "About Department";
      if (path === "director-message")
        label =
          currentLang === "km" ? "សារពីឯកឧត្តម អគ្គនាយក" : "Director-Messages";
      if (path === "roles")
        label =
          currentLang === "km"
            ? "តួនាទី និងការទទួលខុសត្រូវ"
            : "Roles & Responsibilities";

      breadcrumbItems.push({
        label,
        to,
        isLast,
      });
    });

    return breadcrumbItems;
  };

  const breadcrumbItems = generateBreadcrumbs();

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {!loading && (
          <img
            src={bannerUrl}
            alt={title || "Banner"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = fallbackBanner;
            }}
          />
        )}
        {/* Overlay for better text readability */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${overlayOpacity}`}
        ></div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        </div>
      )}

      {/* Breadcrumb */}
      {showBreadcrumb && breadcrumbItems.length > 0 && (
        <div className="absolute top-4 left-0 right-0 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                to="/"
                className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors group"
              >
                <Home size={14} />
                <span>{t.home}</span>
              </Link>
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <ChevronRight size={12} className="text-white/50" />
                  {item.isLast ? (
                    <span className="text-white font-medium">{item.label}</span>
                  ) : (
                    <Link
                      to={item.to}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            {title && (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {title}
              </h1>
            )}

            {/* Subtitle */}
            {subtitle && (
              <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
                {subtitle}
              </p>
            )}

            {/* Optional decorative line */}
            {(title || subtitle) && (
              <div className="w-20 h-1 bg-[#4CAF50] mx-auto mt-6 rounded-full"></div>
            )}
          </div>
        </div>
      </div>

      {/* Optional: Add a subtle overlay to separate from nav */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-30"></div>
    </div>
  );
};

export default GlobalBanner;