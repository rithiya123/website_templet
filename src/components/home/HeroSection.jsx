// src/components/home/HeroSection.jsx
import React, { useState, useEffect } from "react";
import img from "../../images/Banner-1.jpg";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page has been scrolled beyond the hero section
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={img}
          alt="General Department of Project Impact Resolution Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      

      {/* Optional: Add a subtle overlay to separate from nav */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-30"></div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          display: inline-flex;
          white-space: nowrap;
          width: fit-content;
          gap: 0.5rem;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Responsive animation speed */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 100s;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;