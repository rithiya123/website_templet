// src/pages/DirectorMessagePage.jsx
import Image from "../images/logo_white.png";
import React, { useState, useEffect } from "react";
import {
  Home,
  ChevronRight,
  User,
  Calendar,
  Clock,
  Award,
  Heart,
  Target,
  Eye,
  BookOpen,
  Quote,
  Mail,
  Phone,
  Download,
  Share2,
  Printer,
  Star,
  MessageCircle,
  ThumbsUp,
  Users,
  Shield,
  TrendingUp,
  Globe,
  FileText,
  Sparkles,
  Building2,
  Scale,
  Database,
  Landmark,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import directorImage from "../images/director.jpg";

const DirectorMessagePage = () => {
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

  const translations = {
    km: {
      title: "សារពីឯកឧត្តម អគ្គនាយក",
      home: "ទំព័រដើម",
      download: "ទាញយក",
      share: "ចែករំលែក",
      print: "បោះពុម្ព",
      directorName: "ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា",
      directorTitle:
        "ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      greeting: "សូមស្វាគមន៍",
      message1: `អគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ សូមស្វាគមន៍ការចូលទស្សនាគេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋាន។ គេហទំព័រនេះត្រូវបានបង្កើតឡើងក្នុងគោលបំណងផ្តល់ព័ត៌មានស្តីពីច្បាប់​ និងលិខិតបទដ្ឋានគតិយុត្តពាក់ព័ន្ធនឹងការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោង​អភិវឌ្ឍន៍ ។`,
      message2: `អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បំពេញមុខងារជាសេនាធិការឱ្យក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញត្ថុ លើបេសកកម្មដឹកនាំ គ្រប់គ្រង និងអនុវត្តការងារដោះស្រាយផលប៉ះពាល់សេដ្ឋកិច្ច-សង្គមដោយសារគម្រោងអភិវឌ្ឍន៍នានា ព្រមទាំងតាមដាន និងត្រួតពិនិត្យលើការអនុវត្តការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍នានា។`,
      runningText:
        "សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ • WELCOME TO THE OFFICIAL WEBSITE •",

      // Quotes
      quote1:
        "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      quote2:
        "តម្លាភាព និងគណនេយ្យភាព គឺជាគន្លឹះនៃភាពជោគជ័យក្នុងការដោះស្រាយផលប៉ះពាល់",

      // Contact
      email: "xxx@mef.gov.kh",
      phone: "(+885) xx xxx xxxx",
      office: "ការិយាល័យអគ្គនាយក",
    },
    en: {
      title: "Message from the Director General",
      home: "Home",
      download: "Download",
      share: "Share",
      print: "Print",
      directorName: "H.E. Im Sitthyra",
      directorTitle:
        "Director General of the General Department of Project Impact Resolution",
      greeting: "Welcome",
      message1: `The Director General of the General Department of Project Impact Resolution welcomes you to the official website of the department. This website has been created to provide information on laws and legal standards related to impact resolution work for development projects.`,
      message2: `The General Department of Project Impact Resolution functions as a secretariat for the Ministry of Economy and Finance on the mission of leading, managing, and implementing socio-economic impact resolution work for various development projects, as well as monitoring and supervising the implementation of impact resolution work for various development projects.`,
      runningText:
        "WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PROJECT IMPACT RESOLUTION • សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ •",

      // Quotes
      quote1:
        "The General Department of Project Impact Resolution",
      quote2:
        "Transparency and accountability are the keys to success in impact resolution",

      // Contact
      email: "xxx@mef.gov.kh",
      phone: "(+885) xx xxx xxxx",
      office: "Director's Office",
    },
  };

  const t = translations[currentLang];

  function runningText() {
    function logo() {
      return (
        <img
          src={Image}
          style={{
            height: "20px",
            width: "20px",
            objectFit: "cover",
            display: "inline",
          }}
          alt="logo"
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
    <div className="min-h-screen bg-white">
      {/* Running Text - Fixed under header menu */}
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
        {runningText()}
      </div>

      {/* Global Banner */}
      <GlobalBanner
        title={t.title}
        subtitle={
          currentLang === "km"
            ? "សារស្វាគមន៍ និងការប្តេជ្ញាចិត្តពីថ្នាក់ដឹកនាំអគ្គនាយកដ្ឋាន"
            : "Welcome message and commitment from the General Department's leadership"
        }
        height="h-[200px] md:h-[280px] lg:h-[350px]"
        showBreadcrumb={true}
      />

      {/* Main Content */}
      <Container className="pb-16">
        <div style={{ marginTop: "80px"}}  className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Director Info */}
          <div className="md:col-span-1">
            {/* Director Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24 shadow-sm">
              {/* Director Image */}
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] overflow-hidden border-4 border-[#4CAF50]">
                  <img
                    src={directorImage}
                    alt={t.directorName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                </div>
                <div className="absolute bottom-0 right-1/2 transform translate-x-16 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white p-1.5 rounded-full">
                  <Shield size={14} />
                </div>
              </div>

              {/* Director Name & Title */}
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">
                  {t.directorName}
                </h2>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {t.directorTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Message Content */}
          <div className="md:col-span-2">
            {/* Quote Banner */}
            <div className="bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-xl p-6 mb-8 relative">
              <Quote
                size={24}
                className="text-[#4CAF50] absolute top-4 left-4 opacity-50"
              />
              <p className="text-sm text-gray-700 italic leading-relaxed pl-10">
                "{t.quote1}"
              </p>
            </div>

            {/* Greeting */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t.greeting},
              </h3>
            </div>

            {/* Message Paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t.message1}</p>
              <p>{t.message2}</p>
            </div>
          </div>
        </div>
      </Container>

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

export default DirectorMessagePage;