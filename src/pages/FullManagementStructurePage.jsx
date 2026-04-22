// src/pages/FullManagementStructurePage.jsx
import React, { useState, useEffect } from "react";
import {
  Users,
  ChevronRight,
  Building2,
  Mail,
  Phone,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Home,
  Share2,
  User,
  GraduationCap,
  Medal,
  Languages,
  FileText as FileTextIcon,
  Briefcase as BriefcaseIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import defaultImg from "../images/director.jpg";
import logo from "../images/logo.png";
import Image from "../images/logo_white.png";
import orgChartImage from "../images/org_image.png"; // Import the organization chart image

const FullManagementStructurePage = () => {
  const [currentLang, setCurrentLang] = useState("km");
  const [selectedDept, setSelectedDept] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleLanguageChange = (e) => setCurrentLang(e.detail.language);
    window.addEventListener("languagechange", handleLanguageChange);
    const savedLang = localStorage.getItem("language");
    if (savedLang) setCurrentLang(savedLang);
    return () =>
      window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width < 640) setZoomLevel(0.55);
      else if (width < 768) setZoomLevel(0.7);
      else if (width < 1024) setZoomLevel(0.85);
      else setZoomLevel(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showDetail ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showDetail]);

  const translations = {
    km: {
      title: "រចនាសម្ព័ន្ធគ្រប់គ្រង",
      subtitle: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      back: "ត្រលប់ក្រោយ",
      home: "ទំព័រដើម",
      director: "អគ្គនាយក",
      deputyDirector: "អគ្គនាយករង",
      departments: "នាយកដ្ឋាន",
      zoomIn: "ពង្រីក",
      zoomOut: "បង្រួម",
      reset: "កំណត់ឡើងវិញ",
      contact: "ទំនាក់ទំនង",
      email: "អ៊ីមែល",
      phone: "ទូរស័ព្ទ",
      personalInfo: "ព័ត៌មានផ្ទាល់ខ្លួន",
      education: "កម្រិតវប្បធម៌",
      employment: "ប្រវត្តិការងារ",
      publications: "បោះពុម្ពផ្សាយ",
      decorations: "គ្រឿងឥស្សរិយយស",
      languages: "សមត្ថភាពភាសា",
      name: "ឈ្មោះ",
      dob: "ថ្ងៃខែឆ្នាំកំណើត",
      pob: "ទីកន្លែងកំណើត",
      nationality: "សញ្ជាតិ",
      maritalStatus: "ស្ថានភាពគ្រួសារ",
      department: "នាយកដ្ឋានទទួលបន្ទុក",
      deptHead: "ប្រធាននាយកដ្ឋាន",
      runningText:
        "សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ • WELCOME TO THE OFFICIAL WEBSITE •",
    },
    en: {
      title: "Management Structure",
      subtitle: "General Department of Project Impact Resolution",
      back: "Back",
      home: "Home",
      director: "Director General",
      deputyDirector: "Deputy Director General",
      departments: "Departments",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      reset: "Reset",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      personalInfo: "Personal Information",
      education: "Education",
      employment: "Employment Records",
      publications: "Publications",
      decorations: "Decorations",
      languages: "Languages",
      name: "Name",
      dob: "Date of Birth",
      pob: "Place of Birth",
      nationality: "Nationality",
      maritalStatus: "Marital Status",
      department: "Department in Charge",
      deptHead: "Department Head",
      runningText:
        "WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PROJECT IMPACT RESOLUTION • សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ •",
    },
  };

  const t = translations[currentLang];

  const directorGeneral = {
    id: "dg",
    position: {
      km: "ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក",
      en: "Delegate of the Royal Government in charge as Director General",
    },
    email: "xxx@mef.gov.kh",
    phone: "(+885) xx xxx xxxx",
    image: defaultImg,
    personalInfo: {
      name: { km: "អ៊ឹម សិទ្ធីរ៉ា", en: "IM SETHYRA" },
      dob: { km: "ថ្ងៃទី ២១ ខែ ធ្នូ ឆ្នាំ ១៩៨០", en: "21 December 1980" },
      pob: { km: "សង្កាត់លេខ៦ ក្រុងភ្នំពេញ", en: "Sangkat 6, Phnom Penh" },
      nationality: { km: "ខ្មែរ", en: "Cambodian" },
      maritalStatus: { km: "រៀបអាពាហ៍ពិពាហ៍", en: "Married" },
    },
    education: [
      {
        year: "2002 - 2003",
        degree: {
          km: "អនុបណ្ឌិតផ្នែកធុរកិច្ចអន្តរជាតិ",
          en: "Master of Business Administration (MBA) in International Business",
        },
      },
      {
        year: "2001 - 2002",
        degree: {
          km: "អនុបណ្ឌិតផ្នែកគ្រប់គ្រងសណ្ឋាគារ និងទេសចរណ៍អន្តរជាតិ",
          en: "Master of Business Administration (MBA) in International Hotel and Tourism Management",
        },
      },
      {
        year: "1997 - 2001",
        degree: {
          km: "បរិញ្ញាបត្រផ្នែកគណនេយ្យ",
          en: "Bachelor of Business Administration (BBA) in Accounting",
        },
      },
      {
        year: "1994 - 1997",
        degree: {
          km: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ",
          en: "High School Diploma",
        },
      },
    ],
    employment: [
      {
        year: "2021 - បច្ចុប្បន្ន",
        title: {
          km: "ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុក ជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
          en: "Royal Government Delegate in charge as Director General, General Department of Resettlement (GDR)",
        },
      },
      {
        year: "2019 - បច្ចុប្បន្ន",
        title: {
          km: "សមាជិកឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ",
          en: "Member of the Supreme National Economic Council (SNEC)",
        },
      },
      {
        year: "2016 - 2021",
        title: {
          km: "អគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
          en: "Director General of the General Department of Resettlement",
        },
      },
      {
        year: "2015 - 2018",
        title: {
          km: "ទីប្រឹក្សាឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ",
          en: "Advisor to the Supreme National Economic Council",
        },
      },
      {
        year: "2011 - 2016",
        title: {
          km: "ប្រធាននាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
          en: "Director of the Department of Resettlement",
        },
      },
      {
        year: "2007 - 2011",
        title: {
          km: "អនុប្រធានអង្គភាពរៀបចំ អនុវត្ត ផែនការសកម្មភាពការតាំងទីលំនៅឡើងវិញ",
          en: "Deputy Director of the Resettlement Unit",
        },
      },
      {
        year: "2005 - 2007",
        title: {
          km: "អនុប្រធាននាយកដ្ឋានសមាហរណកម្មសេដ្ឋកិច្ច និងអាស៊ាន",
          en: "Deputy Director of the Department of Economic Integration and ASEAN",
        },
      },
    ],
    publications: [
      {
        year: "កុម្ភៈ ២០១៨",
        title: {
          km: "ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិ",
          en: "The Promulgation of the Standard Operating Procedures for Land Acquisition and Involuntary Resettlement for Externally Financed Projects in Cambodia",
        },
      },
    ],
    decorations: [
      {
        year: "2023",
        title: {
          km: "ប្រកាសនីយបត្រគ្រឿងឥស្សរិយយស ជាតូបការ",
          en: "Certificate of Grand Order of National Merit",
        },
      },
      {
        year: "2019",
        title: {
          km: "គ្រឿងឥស្សរិយយស ជាតូបការ",
          en: "Grand Order of National Merit",
        },
      },
      {
        year: "2017",
        title: {
          km: "គ្រឿងឥស្សរិយយស សុវត្ថារា ថ្នាក់ មហាសេរីវឌ្ឍន៍",
          en: "Royal Order of Sowathara Grand Cross",
        },
      },
      {
        year: "2013",
        title: {
          km: "គ្រឿងឥស្សរិយយស ព្រះរាជាណាចក្រកម្ពុជា ថ្នាក់ មហាសេរីវឌ្ឍន៍",
          en: "Royal Order of Cambodia Grand Cross",
        },
      },
      {
        year: "2011",
        title: {
          km: "គ្រឿងឥស្សរិយយស ព្រះរាជាណាចក្រកម្ពុជា ថ្នាក់ មហាសេនា",
          en: "Royal Order of Cambodia Grand Officer",
        },
      },
      {
        year: "2008",
        title: {
          km: "គ្រឿងឥស្សរិយយស ព្រះរាជាណាចក្រកម្ពុជា ថ្នាក់ អស្សឬទ្ធិ",
          en: "Royal Order of Cambodia Knight",
        },
      },
    ],
    languages: {
      desc: {
        km: "ភាសាកំណើត: ខ្មែរ, ភាសាបរទេស: អង់គ្លេស និង បារាំង",
        en: "Native: Khmer, Foreign: English and French",
      },
    },
  };

  const deputyDirectors = [
    {
      rowLabel: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
      position: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      department: {
        km: "នាយកដ្ឋានកិច្ចការទូទៅ",
        en: "Department of General Affairs",
      },
    },
    {
      id: "deputy2",
      rowLabel: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
      position: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      department: {
        km: "នាយកដ្ឋានត្រួតពិនិត្យផ្ទៃក្នុង និងគ្រប់គ្រងទិន្នន័យ",
        en: "Department of Internal Inspection and Data Management",
      },
    },
    {
      id: "deputy3",
      rowLabel: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
      position: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      department: {
        km: "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ១",
        en: "Impact Resolution Department 1",
      },
    },
    {
      id: "deputy4",
      rowLabel: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
      position: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      department: {
        km: "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ២",
        en: "Impact Resolution Department 2",
      },
    },
    {
      id: "deputy5",
      rowLabel: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
      position: { km: "អគ្គនាយករង", en: "Deputy Director General" },
      department: {
        km: "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ៣",
        en: "Impact Resolution Department 3",
      },
    },
  ];

  const departments = [
    {
      id: "dept1",
      name: {
        km: "ប្រធាននាយកដ្ឋានកិច្ចការទូទៅ",
        en: "Department of General Affairs",
      },
      rowLabel: { km: "ប្រធាននាយកដ្ឋាន", en: "Department Head" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
    },
    {
      id: "dept2",
      name: {
        km: "ប្រធាននាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ១",
        en: "Impact Resolution Department 1",
      },
      rowLabel: { km: "ប្រធាននាយកដ្ឋាន", en: "Department Head" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
    },
    {
      id: "dept3",
      name: {
        km: "ប្រធាននាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ២",
        en: "Impact Resolution Department 2",
      },
      rowLabel: { km: "ប្រធាននាយកដ្ឋាន", en: "Department Head" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
    },
    {
      id: "dept4",
      name: {
        km: "ប្រធាននាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ៣",
        en: "Impact Resolution Department 3",
      },
      rowLabel: { km: "ប្រធាននាយកដ្ឋាន", en: "Department Head" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
    },
    {
      id: "dept5",
      name: {
        km: "ប្រធាននាយកដ្ឋានត្រួតពិនិត្យផ្ទៃក្នង និងគ្រប់គ្រងទិន្នន័យ",
        en: "Internal Inspection and Data Management Department",
      },
      rowLabel: { km: "ប្រធាននាយកដ្ឋាន", en: "Department Head" },
      email: "xxx@mef.gov.kh",
      phone: "(+855) xx xxx xxxx",
      image: logo,
    },
  ];

  const handleZoomIn = () => setZoomLevel((p) => Math.min(p + 0.1, 1.5));
  const handleZoomOut = () => setZoomLevel((p) => Math.max(p - 0.1, 0.4));
  const handleZoomReset = () => {
    if (windowWidth < 640) setZoomLevel(0.55);
    else if (windowWidth < 768) setZoomLevel(0.7);
    else if (windowWidth < 1024) setZoomLevel(0.85);
    else setZoomLevel(1);
  };
  const handleNodeClick = (node) => {
    setSelectedDept(node);
    setShowDetail(true);
  };

  function runningText() {
    function logoIcon() {
      return (
        <img
          src={Image}
          style={{
            height: "20px",
            width: "20px",
            objectFit: "cover",
            display: "inline",
          }}
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
          "
        >
          <div className="animate-marquee whitespace-nowrap py-2 md:py-3">
            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logoIcon()} អនុក្រឹត្យ ស្តីពី
              ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិសម្រាប់ការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ដែលទទួលបានហិរញ្ញប្បទានពីដៃគូអភិវឌ្ឍន៍
              ក្នុងព្រះណាចក្រកម្ពុជា
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logoIcon()} ច្បាប់ស្តីពី អស្សាមិករណ៍
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logoIcon()} LAW ON EXPROPRIATION
            </span>
            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logoIcon()} អនុក្រឹត្យ ស្តីពី
              ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិសម្រាប់ការងារដោះស្រាយភលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ដែលទទួលបានហិរញ្ញប្បទានពីដៃគូអភិវឌ្ឍន៍
              ក្នុងព្រះណាចក្រកម្ពុជា •
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logoIcon()} ច្បាប់ស្តីពី អស្សាមិករណ៍
            </span>

            <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-4">
              {logoIcon()} LAW ON EXPROPRIATION
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
        "
      >
        {runningText()}
      </div>

      {/* Global Banner */}
      <GlobalBanner
        title={t.title}
        subtitle={t.subtitle}
        height="h-[200px] md:h-[280px] lg:h-[350px]"
        showBreadcrumb={true}
      />

      {/* Zoom Controls */}
      <Container className="py-4">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-green-50 transition-colors"
            title={t.zoomIn}
          >
            <ZoomIn size={16} className="text-gray-600" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-green-50 transition-colors"
            title={t.zoomOut}
          >
            <ZoomOut size={16} className="text-gray-600" />
          </button>
          <button
            onClick={handleZoomReset}
            className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-green-50 transition-colors"
            title={t.reset}
          >
            <Maximize2 size={16} className="text-gray-600" />
          </button>
        </div>
      </Container>

      {/* Organization Chart Image */}
      <Container className="pb-16 overflow-x-auto">
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top center",
            transition: "transform 0.3s ease",
          }}
        >
          <div className="flex justify-center">
            <img 
              src={orgChartImage} 
              alt="Organization Structure"
              className="w-full max-w-6xl h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </Container>

      {/* Detail Modal */}
      {showDetail && selectedDept && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl z-10 px-5 py-3 flex items-center justify-between">
                <button
                  onClick={() => setShowDetail(false)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-green-700 transition-colors group"
                >
                  <ChevronLeft
                    size={17}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  <span className="text-sm">{t.back}</span>
                </button>
                <button className="p-2 hover:bg-green-50 rounded-lg text-gray-600">
                  <Share2 size={16} />
                </button>
              </div>

              <div className="p-5">
                {/* Profile header */}
                <div className="bg-green-50 rounded-xl p-4 mb-5 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-white overflow-hidden ring-4 ring-green-200 flex-shrink-0 mx-auto md:mx-0">
                    <img
                      src={selectedDept.image || defaultImg}
                      alt={selectedDept.name?.[currentLang]}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.src = defaultImg)}
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-gray-900">
                      {selectedDept.name?.[currentLang]}
                    </h2>
                    <p className="text-green-700 font-medium text-sm mt-1">
                      {selectedDept.position?.[currentLang]}
                    </p>
                    {selectedDept.head && (
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">{t.deptHead}:</span>{" "}
                        {selectedDept.head[currentLang]}
                      </p>
                    )}
                  </div>
                </div>

                {selectedDept.id === "dg" ? (
                  <>
                    <Section
                      title={t.personalInfo}
                      icon={<User size={16} className="text-green-600" />}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          ["name", t.name],
                          ["dob", t.dob],
                          ["pob", t.pob],
                          ["nationality", t.nationality],
                          ["maritalStatus", t.maritalStatus],
                        ].map(([key, label]) => (
                          <div key={key}>
                            <p className="text-xs text-gray-500">{label}</p>
                            <p className="text-sm text-gray-800">
                              {selectedDept.personalInfo[key][currentLang]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Section>
                    <Section
                      title={t.education}
                      icon={
                        <GraduationCap size={16} className="text-green-600" />
                      }
                    >
                      {selectedDept.education.map((e, i) => (
                        <Item
                          key={i}
                          year={e.year}
                          text={e.degree[currentLang]}
                        />
                      ))}
                    </Section>
                    <Section
                      title={t.employment}
                      icon={
                        <BriefcaseIcon size={16} className="text-green-600" />
                      }
                    >
                      {selectedDept.employment.map((e, i) => (
                        <Item
                          key={i}
                          year={e.year}
                          text={e.title[currentLang]}
                        />
                      ))}
                    </Section>
                    <Section
                      title={t.publications}
                      icon={
                        <FileTextIcon size={16} className="text-green-600" />
                      }
                    >
                      {selectedDept.publications.map((e, i) => (
                        <Item
                          key={i}
                          year={e.year}
                          text={e.title[currentLang]}
                        />
                      ))}
                    </Section>
                    <Section
                      title={t.decorations}
                      icon={<Medal size={16} className="text-green-600" />}
                    >
                      {selectedDept.decorations.map((e, i) => (
                        <Item
                          key={i}
                          year={e.year}
                          text={e.title[currentLang]}
                        />
                      ))}
                    </Section>
                    <Section
                      title={t.languages}
                      icon={<Languages size={16} className="text-green-600" />}
                    >
                      <p className="text-sm text-gray-800">
                        {selectedDept.languages.desc[currentLang]}
                      </p>
                    </Section>
                  </>
                ) : selectedDept.department ? (
                  <Section
                    title={t.department}
                    icon={<Building2 size={16} className="text-green-600" />}
                  >
                    <p className="text-sm text-gray-700">
                      {selectedDept.department[currentLang]}
                    </p>
                  </Section>
                ) : null}

                {/* Contact */}
                {selectedDept.email && (
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <h3 className="font-medium text-gray-900 mb-3 text-sm">
                      {t.contact}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <a
                        href={`mailto:${selectedDept.email}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700"
                      >
                        <Mail
                          size={13}
                          className="text-green-600 flex-shrink-0"
                        />
                        <span className="break-all">{selectedDept.email}</span>
                      </a>
                      <a
                        href={`tel:${selectedDept.phone}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700"
                      >
                        <Phone
                          size={13}
                          className="text-green-600 flex-shrink-0"
                        />
                        <span>{selectedDept.phone}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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

// Reusable helpers
const Section = ({ title, icon, children }) => (
  <div className="mb-5">
    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm">
      {icon}
      {title}
    </h3>
    <div className="bg-gray-50 rounded-lg p-3 space-y-2">{children}</div>
  </div>
);

const Item = ({ year, text }) => (
  <div className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
    <p className="text-xs text-green-600 font-medium">{year}</p>
    <p className="text-xs md:text-sm text-gray-800 mt-0.5">{text}</p>
  </div>
);

export default FullManagementStructurePage;