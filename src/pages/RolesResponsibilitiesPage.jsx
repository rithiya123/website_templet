// src/pages/RolesResponsibilitiesPage.jsx
import React, { useState, useEffect } from "react";
import {
  Home,
  ChevronRight,
  Shield,
  Users,
  Building2,
  Scale,
  FileText,
  BookOpen,
  Target,
  Eye,
  Heart,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Download,
  Share2,
  Printer,
  Briefcase,
  Gavel,
  Clock,
  Globe,
  TrendingUp,
  UserCheck,
  Phone,
  Mail,
  RefreshCw,
  Ruler,
  DollarSign,
  MessageCircle,
  Landmark,
  FileSignature,
  ClipboardList,
  LineChart,
  Award,
  Construction,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import Image from "../images/logo_white.png";
const RolesResponsibilitiesPage = () => {
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
      title: "តួនាទី និងការទទួលខុសត្រូវ",
      home: "ទំព័រដើម",
      download: "ទាញយក",
      share: "ចែករំលែក",
      print: "បោះពុម្ព",
      overview: "ទិដ្ឋភាពទូទៅ",
      coreFunctions: "តួនាទីស្នូល (Key Roles)",
      departments: "រចនាសម្ព័ន្ធនាយកដ្ឋាន",
      leadership: "ឋានានុក្រមគ្រប់គ្រង",
      responsibilities: "ភារកិច្ចតាមដំណាក់កាល",
      keyResponsibilities: "ភារកិច្ចសំខាន់ៗ",
      organizationalStructure: "រចនាសម្ព័ន្ធអង្គភាព",
      readMore: "អានបន្ត",
      viewDetails: "មើលលម្អិត",
      comingSoon: "កំពុងអភិវឌ្ឍ",
      underMaintenance: "កំពុងថែទាំ",
      comingSoonDesc: "កំពុងអភិវឌ្ឍបច្ចុប្បន្នភាពទិន្នន័យ។",
      runningText:
        "សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ • WELCOME TO THE OFFICIAL WEBSITE •",

      // Department Responsibilities
      dept1: "នាយកដ្ឋានកិច្ចការទូទៅ",
      dept1Desc:
        "ទទួលបន្ទុករដ្ឋបាល បុគ្គលិក ហិរញ្ញវត្ថុ ភស្តុភារ និងការបណ្តុះបណ្តាល។",
      dept2: "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ១",
      dept2Desc: "អនុវត្តការដោះស្រាយផលប៉ះពាល់សម្រាប់គម្រោងថវិកាជាតិ។",
      dept3: "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ២",
      dept3Desc:
        "អនុវត្តការដោះស្រាយផលប៉ះពាល់សម្រាប់គម្រោងហិរញ្ញប្បទានដោយ ADB ។",
      dept4: "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ៣",
      dept4Desc:
        "អនុវត្តការដោះស្រាយផលប៉ះពាល់សម្រាប់គម្រោងហិរញ្ញប្បទានដោយ World Bank ។",
      dept5: "នាយកដ្ឋានត្រួតពិនិត្យផ្ទៃក្នុង និងគ្រប់គ្រងទិន្នន័យ",
      dept5Desc:
        "តាមដានការអនុវត្តការងារ ធានាតម្លាភាព និងរៀបចំប្រព័ន្ធព័ត៌មានវិទ្យាសម្រាប់រក្សាទុកទិន្នន័យ។",

      // Leadership Responsibilities
      director: "អគ្គនាយក",
      directorDesc:
        "ដឹកនាំ និងសម្រេចចិត្តលើគោលការណ៍រួម និងចុះហត្ថលេខាលើឯកសារសំណងសំខាន់ៗ។",
      deputy1: "អគ្គនាយករង",
      deputy1Desc:
        "ជួយអគ្គនាយកក្នុងការត្រួតពិនិត្យនាយកដ្ឋាននីមួយៗតាមជំនាញ និងតំបន់ភូមិសាស្ត្រ។",
      deputy2: "ប្រធាននាយកដ្ឋាន",
      deputy2Desc:
        "ដឹកនាំមន្រ្តីបច្ចេកទេសចុះអនុវត្តការងារផ្ទាល់នៅតាមការដ្ឋាន និងធ្វើរបាយការណ៍វឌ្ឍនភាព។",

      // Statistics
      stat1: "នាយកដ្ឋាន",
      stat2: "មន្រ្តីជំនាញ",
      stat3: "គម្រោងដែលបានដោះស្រាយ",
      stat4: "គ្រួសារទទួលសំណង",

      contact: "ទំនាក់ទំនងបន្ថែម",
      contactDesc:
        "សម្រាប់ព័ត៌មានបន្ថែមអំពីតួនាទី និងការទទួលខុសត្រូវ សូមទំនាក់ទំនង",
      email: "info@gdpir.gov.kh",
      phone: "071 258 0896",
    },
    en: {
      title: "Roles & Responsibilities",
      home: "Home",
      download: "Download",
      share: "Share",
      print: "Print",
      overview: "Overview",
      coreFunctions: "Key Roles",
      departments: "Department Structure",
      leadership: "Management Hierarchy",
      responsibilities: "Phase Responsibilities",
      keyResponsibilities: "Key Responsibilities",
      organizationalStructure: "Organizational Structure",
      readMore: "Read More",
      viewDetails: "View Details",
      comingSoon: "Coming Soon",
      underMaintenance: "Under Maintenance",
      comingSoonDesc:
        "This content is being prepared. We apologize for the inconvenience.",
      runningText:
        "WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PROJECT IMPACT RESOLUTION • សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ •",

      // Department Responsibilities
      dept1: "Department of General Affairs",
      dept1Desc:
        "Responsible for administration, personnel, finance, logistics, and training.",
      dept2: "Impact Resolution Department 1",
      dept2Desc: "Implement impact resolution for national budget projects.",
      dept3: "Impact Resolution Department 2",
      dept3Desc: "Implement impact resolution for ADB-funded projects.",
      dept4: "Impact Resolution Department 3",
      dept4Desc: "Implement impact resolution for World Bank-funded projects.",
      dept5: "Department of Internal Inspection and Data Management",
      dept5Desc:
        "Monitor work implementation, ensure transparency, and organize IT systems for data storage.",

      // Leadership Responsibilities
      director: "Director General",
      directorDesc:
        "Lead and make decisions on overall policies and sign important compensation documents.",
      deputy1: "Deputy Director General",
      deputy1Desc:
        "Assist the Director General in supervising departments according to expertise and geographical areas.",
      deputy2: "Department Director",
      deputy2Desc:
        "Lead technical officers to implement work on-site and prepare progress reports.",

      // Statistics
      stat1: "Departments",
      stat2: "Expert Staff",
      stat3: "Projects Resolved",
      stat4: "Families Compensated",

      contact: "Further Contact",
      contactDesc:
        "For more information about roles and responsibilities, please contact",
      email: "info@gdpir.gov.kh",
      phone: "071 258 0896",
    },
  };

  const t = translations[currentLang];

  const departmentResponsibilities = [
    { dept: t.dept1, desc: t.dept1Desc, icon: <Building2 size={20} /> },
    { dept: t.dept2, desc: t.dept2Desc, icon: <Scale size={20} /> },
    { dept: t.dept3, desc: t.dept3Desc, icon: <Globe size={20} /> },
    { dept: t.dept4, desc: t.dept4Desc, icon: <TrendingUp size={20} /> },
    { dept: t.dept5, desc: t.dept5Desc, icon: <FileText size={20} /> },
  ];

  const leadershipResponsibilities = [
    { role: t.director, desc: t.directorDesc, icon: <Shield size={20} /> },
    { role: t.deputy1, desc: t.deputy1Desc, icon: <Users size={20} /> },
    { role: t.deputy2, desc: t.deputy2Desc, icon: <Target size={20} /> },
  ];

  // Component for "Coming Soon" sections
  const ComingSoonSection = ({ title, icon: Icon }) => (
    <Container className="py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
          <Icon size={14} className="text-gray-500" />
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
            {title}
          </span>
        </div>
        <h2 className="text-xl font-light text-gray-900 mb-2">{title}</h2>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-12 text-center hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <Construction size={32} className="text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          {t.comingSoon}
        </h3>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          {t.comingSoonDesc}
        </p>
      </div>
    </Container>
  );

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

  function missionTitleText() {
    return "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បំពេញមុខងារជាសេនាធិការឱ្យក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ លើការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍នានា ដោយមានបេសកកម្មដូចខាងក្រោម៖";
  }

  function missionText() {
    return `• ត្រួតពិនិត្យផ្ទៃក្នុងលើការអនុវត្តផែនការសកម្មភាពដោះស្រាយផលប៉ះពាល់សេដ្ឋកិច្ច-សង្គម ដោយសារគម្រោងអភិវឌ្ឍន៍ ដើម្បីធានានូវអនុលោមភាព និងប្រសិទ្ធភាពនៃការអនុវត្តការងារ
• រៀបចំឱ្យមានការតាមដានត្រួតពិនិត្យពីខាងក្រៅដោយភ្នាក់ងារឯករាជ្យ ចំពោះអនុលោមភាពនៃការអនុវត្តផែនការសកម្មភាពដោះស្រាយផលប៉ះពាល់សេដ្ឋកិច្ច-សង្គម
• ចូលរួមជាមួយតំណាងក្រសួងស្ថាប័នអនុវត្តគម្រោង និងអាជ្ញាធរដែនដីនៅពេលប្រគល់ទទួលគម្រោងដែលបានសាងសង់ ស្តារ ឬជួសជុលរួច ដើម្បីពិនិត្យផ្ទៀងផ្ទាត់លើការប្រើប្រាស់ជាក់ស្ដែងនូវដី ឬទ្រព្យសម្បត្តិដែលត្រូវបានធ្វើលទ្ធកម្មសម្រាប់បម្រើឱ្យគម្រោង ហើយដែលបានប្រើប្រាស់ថវិកាជាតិ ឬថវិកាដែលបានមកពីហិរញ្ញប្បទានសហប្រតិបត្តិការនានា
• សហការជាមួយអគ្គនាយកដ្ឋានទ្រព្យសម្បត្តិរដ្ឋ និងចំណូលមិនមែនសារពើពន្ធ និងអគ្គនាយកដ្ឋាន ឬអង្គភាពជំនាញនៃក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ និងក្រសួងស្ថាប័នអនុវត្តគម្រោង ក្នុងការរៀបចំឱ្យមានការចុះបញ្ជីដីធ្លី ក្នុងបញ្ជីសារពើភ័ណ្ឌទ្រព្យសម្បត្តិរដ្ឋ ចំពោះដីដែលបានធ្វើលទ្ធកម្មសម្រាប់គម្រោង និងដែលបានប្រគល់ជូនក្រសួងស្ថាប័នអនុវត្តគម្រោង ដើម្បីកាន់កាប់ និងគ្រប់គ្រងបន្ត
• តំណាងឱ្យក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ ក្នុងករណីដែលមានបណ្ដឹងតវ៉ាទៅតុលាការទាក់ទងនឹងការងារដោះស្រាយផលប៉ះពាល់សេដ្ឋកិច្ច-សង្គម ឬបញ្ហាទូទាត់សងសំណង ឬលក្ខណៈសម្បត្តិក្នុងការទទួលបាននូវប្រាក់សំណង និង/ឬប្រាក់ឧបត្ថម្ភផ្សេងៗ
• ត្រួតពិនិត្យ ផ្ទៀងផ្ទាត់ និងគ្រប់គ្រងទិន្នន័យផលប៉ះពាល់នៃគម្រោងនីមួយៗ ដែលទទួលបានពីក្រសួងស្ថាប័នអនុវត្តគម្រោង
• រៀបចំសំណើថវិកាពេញលេញសម្រាប់ការសិក្សា ការរៀបចំ និងការអនុវត្តផែនការសកម្មភាពដោះស្រាយផលប៉ះពាល់សេដ្ឋកិច្ច-សង្គម ដោយផ្អែកលើលទ្ធផលនៃការអង្កេតវាស់វែងលម្អិតអំពីផលប៉ះពាល់ និងលទ្ធផលនៃការសិក្សាវាយតម្លៃថ្លៃដី និងទ្រព្យសម្បត្តិផ្សេងៗដែលទទួលរងផលប៉ះពាល់
• សហការជាមួយអគ្គនាយកដ្ឋានពាក់ព័ន្ធនៃក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ ក្នុងការរៀបចំគម្រោងថវិកាប្រចាំឆ្នាំ សម្រាប់អនុវត្តការងារដោះស្រាយផលប៉ះពាល់សេដ្ឋកិច្ច-សង្គមដោយសារគម្រោងអភិវឌ្ឍន៍
• សិក្សាស្រាវជ្រាវ រៀបចំ និងកសាងសេចក្តីព្រាងច្បាប់ និងលិខិតបទដ្ឋានគតិយុត្តនានាដែលពាក់ព័ន្ធនឹងគោលនយោបាយដោះស្រាយផលប៉ះពាល់សេដ្ឋកិច្ច-សង្គមដោយសារគម្រោងអភិវឌ្ឍន៍ ដោយមានការចូលរួមពីអង្គភាពពាក់ព័ន្ធ
• រៀបចំវគ្គបណ្តុះបណ្ដាលពង្រឹងសមត្ថភាពរបស់រដ្ឋបាលថ្នាក់ក្រោមជាតិគ្រប់កម្រិតអំពីក្របខណ្ឌច្បាប់នីតិវិធីគោលការណ៍ និងគោលនយោបាយពាក់ព័ន្ធនឹងការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍នានា
• បំពេញភារកិច្ចផ្សេងទៀត តាមការកំណត់របស់ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ`;
  }

  function missionItems() {
    return missionText()
      .split("•")
      .filter((item) => item.trim())
      .map((item, index) => (
        <li key={index} style={{ marginTop: "20px", color: "gray" }}>
          {item.trim()}
        </li>
      ));
  }
  return (
    <div className="min-h-screen bg-gray-50">
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
            ? "តួនាទី និងការទទួលខុសត្រូវរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍"
            : "Roles and responsibilities of the General Department of Project Impact Resolution"
        }
        height="h-[200px] md:h-[280px] lg:h-[350px]"
        showBreadcrumb={true}
      />

      {/* Coming Soon Sections - Overview, Core Functions, Phase Responsibilities */}
      {/* <ComingSoonSection title={t.overview} icon={Eye} />
      <ComingSoonSection title={t.coreFunctions} icon={Target} />
      <ComingSoonSection title={t.responsibilities} icon={ClipboardList} /> */}

      <Container className="py-8">
        <div className="text-center mb-8">
          <div className="flex flex-col items-center justify-center mb-6 text-center">
            <div className="flex items-center space-x-2">
              <Target
                size={20}
                className="text-[#2E7D32]"
                style={{ marginTop: "-10px" }}
              />
              <h1 className="text-lg " style={{ marginTop: "5px" }}>
                {currentLang == "km" ? "បេសកកម្ម" : "Mission"}
              </h1>
            </div>

            <label
              style={{
                paddingLeft: "70px",
                paddingRight: "70px",
                color: "black",
              }}
            >
              {missionTitleText()}
            </label>
          </div>

          {/* <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <Target size={14} className="text-gray-500" />
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
              {currentLang == "km" ? "បេសកកម្ម" : "Mission"}
            </span>
          </div> */}

          <h2
            className="text-xl font-light text-gray-900 pt-1"
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
          >

            <p>
              <div className="mission-list text-left">{missionItems()}</div>
            </p>
          </h2>
        </div>
      </Container>

      {/* Department Responsibilities */}
      <Container className="py-0">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Departments */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 size={20} className="text-[#2E7D32] " />
              <h2
                className="text-lg font-medium text-gray-900 "
                style={{ marginTop: "15px" }}
              >
                {t.departments}
              </h2>
            </div>

            <div className="space-y-3">
              {departmentResponsibilities.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#4CAF50] transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#2E7D32]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        {item.dept}
                      </h3>
                      {/* <p className="text-xs text-gray-500">{item.desc}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Leadership Responsibilities */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Users size={20} className="text-[#2E7D32]" />
              <h2
                className="text-lg font-medium text-gray-900"
                style={{ marginTop: "15px" }}
              >
                {t.leadership}
              </h2>
            </div>

            <div className="space-y-3">
              {leadershipResponsibilities.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#4CAF50] transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#2E7D32]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        {item.role}
                      </h3>
                      {/* <p className="text-xs text-gray-500">{item.desc}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <br />
      <br />
      <br />

      {/* Contact Section
      <Container className="py-12 mb-12">
        <div className="bg-gradient-to-r from-[#2E7D32]/5 to-[#4CAF50]/5 rounded-2xl p-8 text-center border border-[#4CAF50]/20">
          <h2 className="text-xl font-medium text-gray-900 mb-3">
            {t.contact}
          </h2>
          <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
            {t.contactDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${t.email}`}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-[#4CAF50] text-[#2E7D32] rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200"
            >
              <Mail size={16} />
              <span className="text-sm">{t.email}</span>
            </a>
            <a
              href={`tel:${t.phone}`}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <Phone size={16} />
              <span className="text-sm">{t.phone}</span>
            </a>
          </div>
        </div>
      </Container> */}

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

export default RolesResponsibilitiesPage;
