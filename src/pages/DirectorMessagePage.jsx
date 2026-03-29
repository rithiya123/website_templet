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
      date: "ថ្ងៃទី ១៥ ខែ មីនា ឆ្នាំ ២០២៦",
      greeting: "សូមស្វាគមន៍",
      message1:
        "ក្នុងនាមជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ ខ្ញុំសូមស្វាគមន៍យ៉ាងកក់ក្តៅចំពោះការចូលទស្សនាគេហទំព័រផ្លូវការរបស់យើងខ្ញុំ។ គេហទំព័រនេះត្រូវបានបង្កើតឡើងក្នុងគោលបំណងផ្តល់ព័ត៌មានអំពីសកម្មភាព និងសេវាកម្មរបស់អគ្គនាយកដ្ឋាន ព្រមទាំងបង្ហាញពីការប្តេជ្ញាចិត្តរបស់យើងក្នុងការដោះស្រាយផលប៉ះពាល់ប្រកបដោយតម្លាភាព យុត្តិធម៌ និងប្រសិទ្ធភាព។",
      message2:
        "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ មានតួនាទីយ៉ាងសំខាន់ក្នុងការធានានូវយុត្តិធម៌សង្គម ការកំណត់អត្តសញ្ញាណប្រជាពលរដ្ឋរងផលប៉ះពាល់ ការវាស់វែង និងកំណត់តម្លៃសំណង ក៏ដូចជាការចរចា និងទូទាត់សំណងប្រកបដោយតម្លាភាព និងសមធម៌។",
      message3:
        "យើងខ្ញុំប្តេជ្ញាបន្តកែលម្អ និងអភិវឌ្ឍន៍ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យឱ្យកាន់តែទំនើប ប្រកបដោយតម្លាភាព និងគណនេយ្យភាពខ្ពស់ ព្រមទាំងពង្រឹងសមត្ថភាពមន្ត្រីជំនាញ ដើម្បីផ្តល់សេវាកម្មប្រកបដោយគុណភាព និងវិជ្ជាជីវៈខ្ពស់ដល់ប្រជាពលរដ្ឋរងផលប៉ះពាល់។",
      message4:
        "ជាទីបញ្ចប់ ខ្ញុំសូមថ្លែងអំណរគុណចំពោះការគាំទ្រពីរាជរដ្ឋាភិបាល ដៃគូអភិវឌ្ឍន៍ អាជ្ញាធរមូលដ្ឋាន និងប្រជាពលរដ្ឋទាំងអស់ ដែលបានចូលរួមចំណែកក្នុងការអភិវឌ្ឍវិស័យដោះស្រាយផលប៉ះពាល់កម្ពុជា។",
      signature: "ដោយការគោរព និងក្តីស្រឡាញ់ខ្ពស់",
      directorSignature: "ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា",
      directorTitle2: "អគ្គនាយក",
      runningText:
        "សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ • WELCOME TO THE OFFICIAL WEBSITE •",

      // Quotes
      quote1:
        "ការដោះស្រាយផលប៉ះពាល់ប្រកបដោយយុត្តិធម៌ គឺជាមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍប្រកបដោយចីរភាព",
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
      date: "March 15, 2026",
      greeting: "Welcome",
      message1:
        "As the Director General of the General Department of Project Impact Resolution, I warmly welcome you to our official website. This website has been created to provide information about the activities and services of the department, as well as to demonstrate our commitment to resolving impacts with transparency, fairness, and efficiency.",
      message2:
        "The General Department of Project Impact Resolution plays a crucial role in ensuring social justice, identifying affected citizens, measuring and determining compensation values, as well as negotiating and disbursing compensation with transparency and equity.",
      message3:
        "We are committed to continuously improving and modernizing data management systems with transparency and high accountability, as well as strengthening the capacity of professional officers to provide quality and professional services to affected citizens.",
      message4:
        "Finally, I would like to express my gratitude to the Royal Government, development partners, local authorities, and all citizens who have contributed to the development of Cambodia's impact resolution sector.",
      signature: "With respect and high esteem",
      directorSignature: "H.E. Im Sitthyra",
      directorTitle2: "Director General",
      runningText:
        "WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PROJECT IMPACT RESOLUTION • សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ •",

      // Quotes
      quote1:
        "Fair impact resolution is the foundation of sustainable development",
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
        <div className="grid md:grid-cols-3 gap-8">
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
              <div className="text-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  {t.directorName}
                </h2>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {t.directorTitle}
                </p>
              </div>

              {/* Date */}
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 mb-4">
                <Calendar size={12} />
                <span>{t.date}</span>
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
              <p>{t.message3}</p>
              <p>{t.message4}</p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">{t.signature}</p>
              <p className="text-base font-medium text-gray-900">
                {t.directorSignature}
              </p>
              <p className="text-xs text-gray-500 mt-1">{t.directorTitle2}</p>
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
