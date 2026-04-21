import React, { useState, useEffect } from 'react';
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Search,
  Filter,
  ChevronDown,
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  FileSpreadsheet,
  FileImage,
  File,
} from 'lucide-react';
import Container from '../components/ui/Container.jsx';
import GlobalBanner from '../components/ui/GlobalBanner.jsx';
import RunningText from '../components/ui/RunningText';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ReportsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "km";
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [yearFilter, setYearFilter] = useState("all");
  const [typeFilterOpen, setTypeFilterOpen] = useState(false);
  const [yearFilterOpen, setYearFilterOpen] = useState(false);

  const itemsPerPage = 9;

  // Get current path to determine active report type
  const currentPath = location.pathname;
  
  useEffect(() => {
    if (currentPath.includes('/reports/annual')) {
      setActiveTab('annual');
    } else if (currentPath.includes('/reports/quarterly')) {
      setActiveTab('quarterly');
    } else if (currentPath.includes('/reports/statistics')) {
      setActiveTab('statistics');
    } else if (currentPath.includes('/reports/activities')) {
      setActiveTab('activities');
    } else {
      setActiveTab('all');
    }
  }, [currentPath]);

  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };
    window.addEventListener("languagechange", handleLanguageChange);
    return () => window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sample reports data
  const reportsData = {
    all: [
      {
        id: 1,
        titleKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២៤",
        titleEn: "Annual Report 2024",
        type: "annual",
        typeKh: "របាយការណ៍ប្រចាំឆ្នាំ",
        typeEn: "Annual Report",
        date: "2024-12-31",
        year: 2024,
        views: 1250,
        downloads: 890,
        size: "2.5 MB",
        format: "PDF",
        summaryKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២៤ ស្តីពីវឌ្ឍនភាពការងារ និងសមិទ្ធផលសំខាន់ៗនៃអគ្គនាយកដ្ឋាន",
        summaryEn: "Annual Report 2024 on work progress and key achievements of the General Department",
        fileUrl: "/reports/annual-2024.pdf",
        thumbnail: "/images/reports/annual-2024.jpg"
      },
      {
        id: 2,
        titleKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២៣",
        titleEn: "Annual Report 2023",
        type: "annual",
        typeKh: "របាយការណ៍ប្រចាំឆ្នាំ",
        typeEn: "Annual Report",
        date: "2023-12-31",
        year: 2023,
        views: 980,
        downloads: 654,
        size: "2.3 MB",
        format: "PDF",
        summaryKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២៣ ស្តីពីសកម្មភាព និងសមិទ្ធផលនានា",
        summaryEn: "Annual Report 2023 on activities and achievements",
        fileUrl: "/reports/annual-2023.pdf",
        thumbnail: "/images/reports/annual-2023.jpg"
      },
      {
        id: 3,
        titleKh: "របាយការណ៍ត្រីមាសទី៤ ឆ្នាំ២០២៤",
        titleEn: "Quarterly Report Q4 2024",
        type: "quarterly",
        typeKh: "របាយការណ៍ប្រចាំត្រីមាស",
        typeEn: "Quarterly Report",
        date: "2024-12-20",
        year: 2024,
        views: 560,
        downloads: 420,
        size: "1.2 MB",
        format: "PDF",
        summaryKh: "របាយការណ៍ត្រីមាសទី៤ ឆ្នាំ២០២៤ ស្តីពីវឌ្ឍនភាពការងារ",
        summaryEn: "Quarterly Report Q4 2024 on work progress",
        fileUrl: "/reports/quarterly-q4-2024.pdf",
        thumbnail: "/images/reports/quarterly.jpg"
      },
      {
        id: 4,
        titleKh: "របាយការណ៍ត្រីមាសទី៣ ឆ្នាំ២០២៤",
        titleEn: "Quarterly Report Q3 2024",
        type: "quarterly",
        typeKh: "របាយការណ៍ប្រចាំត្រីមាស",
        typeEn: "Quarterly Report",
        date: "2024-09-30",
        year: 2024,
        views: 432,
        downloads: 310,
        size: "1.1 MB",
        format: "PDF",
        summaryKh: "របាយការណ៍ត្រីមាសទី៣ ឆ្នាំ២០២៤",
        summaryEn: "Quarterly Report Q3 2024",
        fileUrl: "/reports/quarterly-q3-2024.pdf",
        thumbnail: "/images/reports/quarterly.jpg"
      },
      {
        id: 5,
        titleKh: "របាយការណ៍ស្ថិតិប្រចាំឆ្នាំ ២០២៤",
        titleEn: "Annual Statistics Report 2024",
        type: "statistics",
        typeKh: "របាយការណ៍ស្ថិតិ",
        typeEn: "Statistics Report",
        date: "2024-12-31",
        year: 2024,
        views: 2100,
        downloads: 1500,
        size: "3.8 MB",
        format: "PDF",
        summaryKh: "របាយការណ៍ស្ថិតិប្រចាំឆ្នាំ ២០២៤ រួមមានទិន្នន័យសំខាន់ៗ",
        summaryEn: "Annual Statistics Report 2024 with key data",
        fileUrl: "/reports/statistics-2024.pdf",
        thumbnail: "/images/reports/statistics.jpg"
      },
      {
        id: 6,
        titleKh: "របាយការណ៍សកម្មភាព ឆមាសទី១ ឆ្នាំ២០២៤",
        titleEn: "Activity Report H1 2024",
        type: "activities",
        typeKh: "របាយការណ៍សកម្មភាព",
        typeEn: "Activity Report",
        date: "2024-06-30",
        year: 2024,
        views: 780,
        downloads: 560,
        size: "1.8 MB",
        format: "PDF",
        summaryKh: "របាយការណ៍សកម្មភាពឆមាសទី១ ឆ្នាំ២០២៤",
        summaryEn: "Activity Report First Half 2024",
        fileUrl: "/reports/activity-h1-2024.pdf",
        thumbnail: "/images/reports/activity.jpg"
      },
      {
        id: 7,
        titleKh: "របាយការណ៍ស្ថិតិត្រីមាសទី៣ ឆ្នាំ២០២៤",
        titleEn: "Quarterly Statistics Report Q3 2024",
        type: "statistics",
        typeKh: "របាយការណ៍ស្ថិតិ",
        typeEn: "Statistics Report",
        date: "2024-09-30",
        year: 2024,
        views: 890,
        downloads: 620,
        size: "2.1 MB",
        format: "PDF",
        summaryKh: "របាយការណ្តិស្ថិតិត្រីមាសទី៣",
        summaryEn: "Quarterly Statistics Report Q3",
        fileUrl: "/reports/statistics-q3-2024.pdf",
        thumbnail: "/images/reports/statistics.jpg"
      },
      {
        id: 8,
        titleKh: "របាយការណ៍សកម្មភាពប្រចាំឆ្នាំ ២០២៣",
        titleEn: "Annual Activity Report 2023",
        type: "activities",
        typeKh: "របាយការណ៍សកម្មភាព",
        typeEn: "Activity Report",
        date: "2023-12-31",
        year: 2023,
        views: 540,
        downloads: 380,
        size: "1.6 MB",
        format: "PDF",
        summaryKh: "របាយការណ៍សកម្មភាពប្រចាំឆ្នាំ ២០២៣",
        summaryEn: "Annual Activity Report 2023",
        fileUrl: "/reports/activity-2023.pdf",
        thumbnail: "/images/reports/activity.jpg"
      },
    ],
  };

  const translations = {
    km: {
      title: "របាយការណ៍",
      subtitle: "របាយការណ៍ប្រចាំឆ្នាំ ត្រីមាស ស្ថិតិ និងសកម្មភាពនានា",
      search: "ស្វែងរករបាយការណ៍...",
      filter: "តម្រង",
      allReports: "របាយការណ៍ទាំងអស់",
      annualReports: "របាយការណ៍ប្រចាំឆ្នាំ",
      quarterlyReports: "របាយការណ៍ប្រចាំត្រីមាស",
      statisticsReports: "របាយការណ៍ស្ថិតិ",
      activitiesReports: "របាយការណ៍សកម្មភាព",
      download: "ទាញយក",
      view: "មើល",
      views: "អ្នកទស្សនា",
      downloads: "ការទាញយក",
      size: "ទំហំ",
      format: "ទម្រង់",
      published: "ចេញផ្សាយ",
      year: "ឆ្នាំ",
      allYears: "គ្រប់ឆ្នាំ",
      clearAll: "សម្អាតទាំងអស់",
      noReports: "រកមិនឃើញរបាយការណ៍",
      tryAgain: "សូមព្យាយាមស្វែងរកម្តងទៀត",
      gridView: "ទម្រង់ក្រឡា",
      listView: "ទម្រង់បញ្ជី",
      totalReports: "របាយការណ៍សរុប",
      showing: "បង្ហាញ",
      to: "ដល់",
      ofTotal: "នៃ",
      loading: "កំពុងផ្ទុក...",
      page: "ទំព័រ",
      of: "នៃ",
      preview: "មើលជាមុន",
      backToReports: "ត្រលប់ទៅរបាយការណ៍",
    },
    en: {
      title: "Reports",
      subtitle: "Annual, Quarterly, Statistics and Activity Reports",
      search: "Search reports...",
      filter: "Filter",
      allReports: "All Reports",
      annualReports: "Annual Reports",
      quarterlyReports: "Quarterly Reports",
      statisticsReports: "Statistics Reports",
      activitiesReports: "Activity Reports",
      download: "Download",
      view: "View",
      views: "views",
      downloads: "downloads",
      size: "Size",
      format: "Format",
      published: "Published",
      year: "Year",
      allYears: "All Years",
      clearAll: "Clear All",
      noReports: "No reports found",
      tryAgain: "Please try searching again",
      gridView: "Grid View",
      listView: "List View",
      totalReports: "Total Reports",
      showing: "Showing",
      to: "to",
      ofTotal: "of",
      loading: "Loading...",
      page: "Page",
      of: "of",
      preview: "Preview",
      backToReports: "Back to Reports",
    },
  };

  const t = translations[currentLang];

  const getReportsByType = () => {
    if (activeTab === "all") return reportsData.all;
    return reportsData.all.filter(report => report.type === activeTab);
  };

  const getFilteredReports = () => {
    let filtered = getReportsByType();
    
    if (searchQuery) {
      filtered = filtered.filter(report => {
        const title = currentLang === "km" ? report.titleKh : report.titleEn;
        const summary = currentLang === "km" ? report.summaryKh : report.summaryEn;
        return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               summary.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    
    if (yearFilter !== "all") {
      filtered = filtered.filter(report => report.year === parseInt(yearFilter));
    }
    
    return filtered;
  };

  const filteredReports = getFilteredReports();
  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const startItem = filteredReports.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, filteredReports.length);

  const availableYears = [...new Set(reportsData.all.map(r => r.year))].sort((a, b) => b - a);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    // Navigate to corresponding route
    if (tab === 'annual') {
      navigate('/reports/annual');
    } else if (tab === 'quarterly') {
      navigate('/reports/quarterly');
    } else if (tab === 'statistics') {
      navigate('/reports/statistics');
    } else if (tab === 'activities') {
      navigate('/reports/activities');
    } else {
      navigate('/reports');
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setYearFilter("all");
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (currentLang === "km") {
      const khmerMonths = [
        "មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា",
        "កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",
      ];
      return `${date.getDate()} ${khmerMonths[date.getMonth()]} ${date.getFullYear()}`;
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTypeColor = (type) => {
    const colors = {
      annual: "bg-blue-100 text-blue-700 border-blue-200",
      quarterly: "bg-purple-100 text-purple-700 border-purple-200",
      statistics: "bg-green-100 text-green-700 border-green-200",
      activities: "bg-orange-100 text-orange-700 border-orange-200",
    };
    return colors[type] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getTypeIcon = (type) => {
    const icons = {
      annual: <Calendar size={14} />,
      quarterly: <TrendingUp size={14} />,
      statistics: <PieChart size={14} />,
      activities: <Activity size={14} />,
    };
    return icons[type] || <FileText size={14} />;
  };

  const ReportCard = ({ report }) => {
    const title = currentLang === "km" ? report.titleKh : report.titleEn;
    const summary = currentLang === "km" ? report.summaryKh : report.summaryEn;
    const typeName = currentLang === "km" ? report.typeKh : report.typeEn;

    return (
      <div className="group bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#4CAF50]/30 transition-all duration-300 overflow-hidden">
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {report.thumbnail ? (
            <img
              src={report.thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = "https://placehold.co/400x300/4CAF50/white?text=Report"; }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FileText size={48} className="text-gray-400" />
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${getTypeColor(report.type)}`}>
              {getTypeIcon(report.type)}
              {typeName}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg">
              {report.format}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-base font-medium text-gray-900 mb-2 leading-relaxed line-clamp-2 min-h-[3rem] group-hover:text-[#2E7D32] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{summary}</p>
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
            <div className="flex items-center">
              <Calendar size={12} className="mr-1" />
              <span>{formatDate(report.date)}</span>
            </div>
            <div className="flex items-center">
              <Eye size={12} className="mr-1" />
              <span>{report.views}</span>
            </div>
            <div className="flex items-center">
              <Download size={12} className="mr-1" />
              <span>{report.downloads}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="text-xs text-gray-400">
              {report.size}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => window.open(report.fileUrl, '_blank')}
                className="px-3 py-1.5 text-xs text-[#4CAF50] border border-[#4CAF50] rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center gap-1"
              >
                <Eye size={12} />
                {t.view}
              </button>
              <button 
                onClick={() => {
                  // Handle download
                  const link = document.createElement('a');
                  link.href = report.fileUrl;
                  link.download = `${title}.pdf`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-3 py-1.5 text-xs bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-all duration-200 flex items-center gap-1"
              >
                <Download size={12} />
                {t.download}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ReportListItem = ({ report }) => {
    const title = currentLang === "km" ? report.titleKh : report.titleEn;
    const summary = currentLang === "km" ? report.summaryKh : report.summaryEn;
    const typeName = currentLang === "km" ? report.typeKh : report.typeEn;

    return (
      <div className="group bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#4CAF50]/30 transition-all duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-48 h-32 md:h-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
            {report.thumbnail ? (
              <img
                src={report.thumbnail}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = "https://placehold.co/400x300/4CAF50/white?text=Report"; }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FileText size={32} className="text-gray-400" />
              </div>
            )}
            <div className="absolute top-2 left-2">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${getTypeColor(report.type)}`}>
                {getTypeIcon(report.type)}
                {typeName}
              </span>
            </div>
          </div>
          
          <div className="flex-1 p-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{summary}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    <span>{formatDate(report.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye size={12} className="mr-1" />
                    <span>{report.views} {t.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Download size={12} className="mr-1" />
                    <span>{report.downloads} {t.downloads}</span>
                  </div>
                  <div className="text-gray-400">
                    {report.size} • {report.format}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 flex-shrink-0">
                <button 
                  onClick={() => window.open(report.fileUrl, '_blank')}
                  className="px-3 py-1.5 text-xs text-[#4CAF50] border border-[#4CAF50] rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center gap-1"
                >
                  <Eye size={12} />
                  {t.view}
                </button>
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = report.fileUrl;
                    link.download = `${title}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-3 py-1.5 text-xs bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-all duration-200 flex items-center gap-1"
                >
                  <Download size={12} />
                  {t.download}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const tabs = [
    { id: "all", label: t.allReports, icon: FileText },
    { id: "annual", label: t.annualReports, icon: Calendar },
    { id: "quarterly", label: t.quarterlyReports, icon: TrendingUp },
    { id: "statistics", label: t.statisticsReports, icon: PieChart },
    { id: "activities", label: t.activitiesReports, icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#2E7D32] text-white rounded-full shadow-lg hover:bg-[#4CAF50] transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <RunningText />

      <GlobalBanner
        title={t.title}
        subtitle={t.subtitle}
        height="h-[180px] md:h-[250px] lg:h-[300px]"
        showBreadcrumb={true}
      />

      <Container className="py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'text-[#2E7D32] border-b-2 border-[#4CAF50] bg-[#4CAF50]/5' 
                      : 'text-gray-500 hover:text-[#4CAF50] hover:border-b-2 hover:border-[#4CAF50]/50'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
          <div className="p-5">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.search}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent bg-gray-50/50 text-sm"
                />
              </div>

              {/* Year Filter Dropdown */}
              <div className="relative lg:w-48">
                <button
                  onClick={() => setYearFilterOpen(!yearFilterOpen)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-left text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Filter size={16} className="text-gray-400" />
                    <span className={yearFilter !== "all" ? "text-gray-900" : "text-gray-500"}>
                      {yearFilter !== "all" ? `${t.year} ${yearFilter}` : t.allYears}
                    </span>
                  </span>
                  <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${yearFilterOpen ? "rotate-180" : ""}`} />
                </button>

                {yearFilterOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <button
                      onClick={() => { setYearFilter("all"); setYearFilterOpen(false); setCurrentPage(1); }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${yearFilter === "all" ? "text-[#4CAF50] bg-green-50" : "text-gray-700"}`}
                    >
                      {t.allYears}
                    </button>
                    {availableYears.map(year => (
                      <button
                        key={year}
                        onClick={() => { setYearFilter(year.toString()); setYearFilterOpen(false); setCurrentPage(1); }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${yearFilter === year.toString() ? "text-[#4CAF50] bg-green-50" : "text-gray-700"}`}
                      >
                        {t.year} {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 rounded-lg transition-all duration-200 ${viewMode === "grid" ? "bg-white text-[#4CAF50] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                  title={t.gridView}
                >
                  <FileText size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 rounded-lg transition-all duration-200 ${viewMode === "list" ? "bg-white text-[#4CAF50] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                  title={t.listView}
                >
                  <File size={18} />
                </button>
              </div>

              {/* Clear Filters */}
              {(searchQuery || yearFilter !== "all") && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2"
                >
                  <X size={14} />
                  {t.clearAll}
                </button>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || yearFilter !== "all") && (
            <div className="px-5 pb-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
              <span className="text-xs text-gray-500">{t.filter}:</span>
              {yearFilter !== "all" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  <Calendar size={12} />
                  {t.year} {yearFilter}
                  <button onClick={() => { setYearFilter("all"); setCurrentPage(1); }} className="ml-1 hover:bg-gray-200 rounded-full p-0.5">
                    <X size={12} />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  <Search size={12} />
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="ml-1 hover:bg-gray-200 rounded-full p-0.5">
                    <X size={12} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-500 mb-4">
          {filteredReports.length > 0
            ? `${t.showing} ${startItem}-${endItem} ${t.ofTotal} ${filteredReports.length} ${t.totalReports.toLowerCase()}`
            : t.noReports}
        </div>

        {/* Reports Grid/List */}
        {filteredReports.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText size={40} className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium text-lg mb-2">{t.noReports}</p>
            <p className="text-gray-400 text-sm">{t.tryAgain}</p>
            {(searchQuery || yearFilter !== "all") && (
              <button onClick={clearFilters} className="mt-4 px-4 py-2 text-sm text-[#4CAF50] hover:bg-green-50 rounded-lg transition-colors">
                {t.clearAll}
              </button>
            )}
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedReports.map(report => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {paginatedReports.map(report => (
              <ReportListItem key={report.id} report={report} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-1">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              let pageNum;
              if (totalPages <= 5) pageNum = i + 1;
              else if (currentPage <= 3) pageNum = i + 1;
              else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
              else pageNum = currentPage - 2 + i;

              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-medium transition-colors ${currentPage === pageNum ? "bg-[#4CAF50] text-white shadow-md" : "border border-gray-200 hover:bg-gray-50 text-gray-700"}`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-20app0 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ReportsPage;