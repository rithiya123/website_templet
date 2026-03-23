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
      comingSoon: "កំពុងអភិវឌ្ឍបច្ចុប្បន្នភាពទិន្នន័យ។",
      underMaintenance: "កំពុងថែទាំ",
      comingSoonDesc: "កំពុងអភិវឌ្ឍបច្ចុប្បន្នភាពទិន្នន័យ។",

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
      comingSoon: "Content coming soon",
      underMaintenance: "Under Maintenance",
      comingSoonDesc:
        "This content is being prepared. We apologize for the inconvenience.",

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
      </div>
    </Container>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Breadcrumb */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Home size={18} className="text-gray-500" />
              </Link>

              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm">
                <Link
                  to="/"
                  className="text-gray-500 hover:text-[#2E7D32] transition-colors"
                >
                  {t.home}
                </Link>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-gray-600">អំពីអគ្គនាយកដ្ឋាន</span>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-[#2E7D32] font-medium">{t.title}</span>
              </nav>
            </div>

            <div className="flex items-center space-x-1">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Download size={16} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 size={16} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Printer size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Page Header */}
      <Container className="py-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-[#4CAF50] mb-3">
            <Briefcase size={16} />
            <span className="text-xs font-medium uppercase tracking-wider">
              {t.title}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
            {t.title}
          </h1>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
            {currentLang === "km"
              ? "តួនាទី និងការទទួលខុសត្រូវរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍"
              : "Roles and responsibilities of the General Department of Project Impact Resolution"}
          </p>
          <div className="w-12 h-0.5 bg-[#4CAF50] mt-4"></div>
        </div>
      </Container>

      {/* Overview Section - Coming Soon */}
      <ComingSoonSection title={t.overview} icon={Eye} />

      {/* Core Roles Section - Coming Soon */}
      <ComingSoonSection title={t.coreFunctions} icon={Target} />

      {/* Phase Responsibilities Section - Coming Soon */}
      <ComingSoonSection title={t.responsibilities} icon={ClipboardList} />

      {/* Department Responsibilities */}
      <Container className="py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Departments */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 size={20} className="text-[#2E7D32]" />
              <h2 className="text-lg font-medium text-gray-900">
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
                      <p className="text-xs text-gray-500">{item.desc}</p>
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
              <h2 className="text-lg font-medium text-gray-900">
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
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RolesResponsibilitiesPage;
