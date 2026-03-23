import React, { useState, useEffect } from "react";
import Container from "../components/ui/Container.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import NewsSection from "../components/home/NewsSection.jsx";
import AnnouncementSection from "../components/home/AnnouncementSection.jsx";
import QuickInfoSection from "../components/home/QuickInfoSection.jsx";
import OtherWebsites from "../components/home/OtherWebsites.jsx";
import ManagementStructure from "../components/home/ManagementStructure.jsx";
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

  const translations = {
    km: {
      title: "សារពីឯកឧត្តម អគ្គនាយក",
      home: "ទំព័រដើម",
      download: "ទាញយក",
      share: "ចែករំលែក",
      print: "បោះពុម្ព",
      directorName: "ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា",
      directorTitle:
        "អគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      date: "ថ្ងៃទី ១៥ ខែ មីនា ឆ្នាំ ២០២៦",
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
  return (
    <>
      <HeroSection />
      <Container className="py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <NewsSection />
          <div className="space-y-6">
            <AnnouncementSection />
            <QuickInfoSection />
          </div>
        </div>
        <ManagementStructure />
        {/* Achievements Section */}
        <div>
          <Container className="py-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
                <Award size={14} className="text-[#2E7D32]" />
                <span className="text-xs font-medium text-[#2E7D32] uppercase tracking-wider">
                  {currentLang === "km"
                    ? "សមិទ្ធផលថ្មីៗ"
                    : "Recent Achievements"}
                </span>
              </div>
              <h2 className="text-xl font-light text-gray-900 mb-2">
                {currentLang === "km"
                  ? "សមិទ្ធផលក្រោមការដឹកនាំ"
                  : "Achievements Under Leadership"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow hover:border-[#4CAF50]">
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 bg-green-50 rounded-lg text-[#2E7D32] mb-2">
                    <Database size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {currentLang === "km"
                        ? "ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យ"
                        : "Data Management System"}
                    </h3>
                  </div>
                </div>
              </div>

              <div
                onClick={() => window.open("https://gdr.mef.gov.kh", "_blank")}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow hover:border-[#4CAF50] cursor-pointer hover:bg-gray-50"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 bg-green-50 rounded-lg text-[#2E7D32] mb-2">
                    <Database size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {currentLang === "km"
                        ? "ប្រព័ន្ធគ្រប់គ្រងកាលវិភាគផ្ទៃក្នុង"
                        : ""}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow hover:border-[#4CAF50]">
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 bg-green-50 rounded-lg text-[#2E7D32] mb-2">
                    <Database size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {currentLang === "km"
                        ? "ប្រព័ន្ធគ្រប់គ្រងរំហូរឯកសារ"
                        : "Document Management System"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
