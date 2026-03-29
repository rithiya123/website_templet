import React, { useState, useEffect } from "react";
import Container from "../components/ui/Container.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import NewsSection from "../components/home/NewsSection.jsx";
import AnnouncementSection from "../components/home/AnnouncementSection.jsx";
import QuickInfoSection from "../components/home/QuickInfoSection.jsx";
import OtherWebsites from "../components/home/OtherWebsites.jsx";
import ManagementStructure from "../components/home/ManagementStructure.jsx";
import LegalSection from "../components/home/LegalSection.jsx";
import Image from "../images/logo_white.png";

const HomePage = () => {
  const [currentLang, setCurrentLang] = useState("km");

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

  function logo() {
    return (
      <img
        src={Image}
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

      <HeroSection />

      <Container className="py-12">
        <NewsSection />
        {/* <div className="grid md:grid-cols-3 gap-8">
         
            
            <div className="space-y-6">
              <AnnouncementSection />
              <QuickInfoSection />
            </div>
          
          </div> */}
        <LegalSection />
      </Container>

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
};

export default HomePage;
