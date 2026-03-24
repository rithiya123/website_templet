// src/components/ui/Logo.jsx
import React from "react";
import img_logo from "../../images/logo.png";

const Logo = ({
  variant = "default",
  showText = true,
  className = "",
  departmentName,
  departmentShort,
}) => {
  const variants = {
    default: {
      container: "flex items-center gap-2 sm:gap-3",
      iconContainer: "w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0",
      title:
        "text-sm sm:text-base md:text-lg font-bold text-[#2E7D32] leading-tight",
      subtitle:
        "text-[10px] sm:text-xs md:text-sm text-[#4CAF50] leading-tight",
      badge:
        "text-[10px] sm:text-xs bg-[#4CAF50] bg-opacity-10 text-[#2E7D32] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-[#4CAF50] border-opacity-20 font-medium",
      footerText:
        "text-[8px] sm:text-[10px] text-[#4CAF50] text-opacity-70 mt-0.5 sm:mt-1",
    },
    hero: {
      container: "flex items-center gap-3 sm:gap-4 md:gap-6",
      iconContainer: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0",
      title:
        "text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-tight",
      subtitle:
        "text-xs sm:text-sm md:text-base lg:text-xl text-green-200 leading-tight",
      badge:
        "bg-[#4CAF50] text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-bold",
    },
    footer: {
      container: "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4",
      iconContainer: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0",
      title:
        "text-sm sm:text-base md:text-lg font-semibold text-white leading-tight",
      subtitle:
        "text-[10px] sm:text-xs md:text-sm text-green-300 leading-tight",
    },
  };

  const current = variants[variant] || variants.default;

  // Use department names from props or fallback to defaults
  const titleText =
    departmentName ||
    (variant === "hero"
      ? "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍"
      : "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍");
  const shortName =
    departmentShort || (variant === "hero" ? "GDPIR" : "អ.ដ.ផ");
  const englishName =
    variant === "hero"
      ? "General Department of Resettlement"
      : "General Department of Resettlement";

  // Responsive text truncation for mobile
  const getTruncatedTitle = () => {
    if (variant === "hero") return titleText;
    // For default variant, show full text on tablet/desktop, truncated on mobile
    return titleText;
  };

  return (
    <div className={`${current.container} ${className} group`}>
      {/* Logo Image with hover effect */}
      <div
        className={`${current.iconContainer} transition-transform duration-300 group-hover:scale-105`}
      >
        <img
          src={img_logo}
          alt="GDPIR Logo"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {showText && (
        <div className="flex flex-col min-w-0 flex-1">
          {/* Title Row - Professional inline layout with smart truncation */}
          <div className="flex flex-wrap items-baseline gap-x-1.5 sm:gap-x-2 gap-y-1 mb-0 sm:mb-0">
            <div className="flex-1 min-w-0">
              <h1
                className={`
          ${current.title}
          ${variant === "default" ? "truncate" : ""}
          leading-tight
          mb-0
        `}
                title={getTruncatedTitle()}
              >
                {getTruncatedTitle()}
              </h1>
            </div>
            <span
              className={`
        ${current.badge} 
        flex-shrink-0 
        whitespace-nowrap
        inline-flex
        items-center
        px-1.5 sm:px-2
        py-0.5
        text-[9px] sm:text-[10px]
        font-medium
        rounded-full
        transition-all
        hover:scale-105
      `}
            >
              {shortName}
            </span>
          </div>

          {/* English Subtitle - Clean with tooltip on truncation */}
          <div className="relative group -mt-0.5">
            <p
              className={`
        ${current.subtitle}
        truncate
        ${variant === "default" ? "text-[9px] sm:text-xs" : "text-xs sm:text-sm"}
        leading-tight
      `}
            >
              {englishName}
            </p>
            {englishName.length > 50 && variant === "default" && (
              <div className="absolute bottom-full left-0 mb-1 hidden group-hover:block z-10">
                <div className="bg-gray-900 text-white text-xs rounded-lg py-1 px-2 whitespace-nowrap shadow-lg">
                  {englishName}
                </div>
              </div>
            )}
          </div>

          {/* Footer Text for Default Variant - Clean and minimal */}
          {variant === "default" && (
            <div className="mt-0.5">
              <p
                className={`
          ${current.footerText}
          truncate
          text-[8px] sm:text-[9px]
          opacity-70
          hover:opacity-100
          transition-opacity
          leading-tight
        `}
                title="Official Website • គេហទំព័រផ្លូវការ"
              >
                <span className="inline-flex items-center gap-1">
                  <span>Official Website</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="sm:hidden">/</span>
                  <span>គេហទំព័រផ្លូវការ</span>
                </span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
