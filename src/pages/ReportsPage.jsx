// src/pages/ReportsPage.jsx
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
  Database,
  BarChart,
  LineChart,
  PieChart as PieChartIcon,
  Maximize2,
  Minimize2,
  Clock,
  User,
  Tag,
  Info,
  ExternalLink,
  Calendar as CalendarIcon2
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
  const [yearFilterOpen, setYearFilterOpen] = useState(false);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [dateFilterOpen, setDateFilterOpen] = useState(false);
  const [reportsData, setReportsData] = useState({ all: [] });
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 9;

  // Load view counts and download counts from localStorage
  const loadStats = () => {
    const storedViews = localStorage.getItem('report_views');
    const storedDownloads = localStorage.getItem('report_downloads');
    return {
      views: storedViews ? JSON.parse(storedViews) : {},
      downloads: storedDownloads ? JSON.parse(storedDownloads) : {}
    };
  };

  // Save view count to localStorage
  const saveViewCount = (reportId, views) => {
    const stats = loadStats();
    stats.views[reportId] = views;
    localStorage.setItem('report_views', JSON.stringify(stats.views));
  };

  // Save download count to localStorage
  const saveDownloadCount = (reportId, downloads) => {
    const stats = loadStats();
    stats.downloads[reportId] = downloads;
    localStorage.setItem('report_downloads', JSON.stringify(stats.downloads));
  };

  // Get view count for a specific report
  const getViewCount = (reportId) => {
    const stats = loadStats();
    return stats.views[reportId] || 0;
  };

  // Get download count for a specific report
  const getDownloadCount = (reportId) => {
    const stats = loadStats();
    return stats.downloads[reportId] || 0;
  };

  // Increment view count
  const incrementViewCount = (reportId) => {
    const currentViews = getViewCount(reportId);
    const newViews = currentViews + 1;
    saveViewCount(reportId, newViews);
    
    setReportsData(prev => {
      const updated = { ...prev };
      const reportIndex = updated.all.findIndex(r => r.id === reportId);
      if (reportIndex !== -1) {
        updated.all[reportIndex].views = newViews;
      }
      return updated;
    });
    
    return newViews;
  };

  // Increment download count
  const incrementDownloadCount = (reportId) => {
    const currentDownloads = getDownloadCount(reportId);
    const newDownloads = currentDownloads + 1;
    saveDownloadCount(reportId, newDownloads);
    
    setReportsData(prev => {
      const updated = { ...prev };
      const reportIndex = updated.all.findIndex(r => r.id === reportId);
      if (reportIndex !== -1) {
        updated.all[reportIndex].downloads = newDownloads;
      }
      return updated;
    });
    
    return newDownloads;
  };

  // Get query parameters from URL
  const queryParams = new URLSearchParams(location.search);
  const reportType = queryParams.get('type');

  // Initialize reports data with stored stats (starting from 0)
  const initializeReportsData = () => {
    const baseReports = [
      // Annual Reports
      {
        id: 1,
        titleKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២៤",
        titleEn: "Annual Report 2024",
        type: "annual",
        typeKh: "របាយការណ៍ប្រចាំឆ្នាំ",
        typeEn: "Annual Report",
        date: "2024-12-31",
        year: 2024,
        size: "2.5 MB",
        format: "PDF",
        pages: 124,
        summaryKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២៤ ស្តីពីវឌ្ឍនភាពការងារ និងសមិទ្ធផលសំខាន់ៗនៃអគ្គនាយកដ្ឋាន",
        summaryEn: "Annual Report 2024 on work progress and key achievements of the General Department",
        fileUrl: "/reports/annual-2024.pdf",
        thumbnail: "/images/reports/annual-2024.jpg",
        authorKh: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់",
        authorEn: "General Department of Resettlement"
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
        size: "2.3 MB",
        format: "PDF",
        pages: 118,
        summaryKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២៣ ស្តីពីសកម្មភាព និងសមិទ្ធផលនានា",
        summaryEn: "Annual Report 2023 on activities and achievements",
        fileUrl: "/reports/annual-2023.pdf",
        thumbnail: "/images/reports/annual-2023.jpg",
        authorKh: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់",
        authorEn: "General Department of Resettlement"
      },
      {
        id: 3,
        titleKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២២",
        titleEn: "Annual Report 2022",
        type: "annual",
        typeKh: "របាយការណ៍ប្រចាំឆ្នាំ",
        typeEn: "Annual Report",
        date: "2022-12-31",
        year: 2022,
        size: "2.1 MB",
        format: "PDF",
        pages: 112,
        summaryKh: "របាយការណ៍ប្រចាំឆ្នាំ ២០២២",
        summaryEn: "Annual Report 2022",
        fileUrl: "/reports/annual-2022.pdf",
        thumbnail: "/images/reports/annual-2022.jpg",
        authorKh: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់",
        authorEn: "General Department of Resettlement"
      },
      // Quarterly Reports
      {
        id: 4,
        titleKh: "របាយការណ៍ត្រីមាសទី៤ ឆ្នាំ២០២៤",
        titleEn: "Quarterly Report Q4 2024",
        type: "quarterly",
        typeKh: "របាយការណ៍ប្រចាំត្រីមាស",
        typeEn: "Quarterly Report",
        date: "2024-12-20",
        year: 2024,
        size: "1.2 MB",
        format: "PDF",
        pages: 45,
        summaryKh: "របាយការណ៍ត្រីមាសទី៤ ឆ្នាំ២០២៤ ស្តីពីវឌ្ឍនភាពការងារ",
        summaryEn: "Quarterly Report Q4 2024 on work progress",
        fileUrl: "/reports/quarterly-q4-2024.pdf",
        thumbnail: "/images/reports/quarterly.jpg",
        authorKh: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់",
        authorEn: "General Department of Resettlement"
      },
      {
        id: 5,
        titleKh: "របាយការណ៍ត្រីមាសទី៣ ឆ្នាំ២០២៤",
        titleEn: "Quarterly Report Q3 2024",
        type: "quarterly",
        typeKh: "របាយការណ៍ប្រចាំត្រីមាស",
        typeEn: "Quarterly Report",
        date: "2024-09-30",
        year: 2024,
        size: "1.1 MB",
        format: "PDF",
        pages: 42,
        summaryKh: "របាយការណ៍ត្រីមាសទី៣ ឆ្នាំ២០២៤",
        summaryEn: "Quarterly Report Q3 2024",
        fileUrl: "/reports/quarterly-q3-2024.pdf",
        thumbnail: "/images/reports/quarterly.jpg",
        authorKh: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់",
        authorEn: "General Department of Resettlement"
      },
      {
        id: 6,
        titleKh: "របាយការណ៍ត្រីមាសទី២ ឆ្នាំ២០២៤",
        titleEn: "Quarterly Report Q2 2024",
        type: "quarterly",
        typeKh: "របាយការណ៍ប្រចាំត្រីមាស",
        typeEn: "Quarterly Report",
        date: "2024-06-30",
        year: 2024,
        size: "1.0 MB",
        format: "PDF",
        pages: 40,
        summaryKh: "របាយការណ៍ត្រីមាសទី២ ឆ្នាំ២០២៤",
        summaryEn: "Quarterly Report Q2 2024",
        fileUrl: "/reports/quarterly-q2-2024.pdf",
        thumbnail: "/images/reports/quarterly.jpg",
        authorKh: "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់",
        authorEn: "General Department of Resettlement"
      },
      // Statistics Reports
      {
        id: 7,
        titleKh: "របាយការណ៍ស្ថិតិប្រចាំឆ្នាំ ២០២៤",
        titleEn: "Annual Statistics Report 2024",
        type: "statistics",
        typeKh: "របាយការណ៍ស្ថិតិ",
        typeEn: "Statistics Report",
        date: "2024-12-31",
        year: 2024,
        size: "3.8 MB",
        format: "PDF",
        pages: 156,
        summaryKh: "របាយការណ៍ស្ថិតិប្រចាំឆ្នាំ ២០២៤ រួមមានទិន្នន័យសំខាន់ៗ",
        summaryEn: "Annual Statistics Report 2024 with key data",
        fileUrl: "/reports/statistics-2024.pdf",
        thumbnail: "/images/reports/statistics.jpg",
        authorKh: "នាយកដ្ឋានផែនការ និងស្ថិតិ",
        authorEn: "Planning and Statistics Department"
      },
      {
        id: 8,
        titleKh: "របាយការណ៍ស្ថិតិត្រីមាសទី៣ ឆ្នាំ២០២៤",
        titleEn: "Quarterly Statistics Report Q3 2024",
        type: "statistics",
        typeKh: "របាយការណ៍ស្ថិតិ",
        typeEn: "Statistics Report",
        date: "2024-09-30",
        year: 2024,
        size: "2.1 MB",
        format: "PDF",
        pages: 68,
        summaryKh: "របាយការណ្តិស្ថិតិត្រីមាសទី៣",
        summaryEn: "Quarterly Statistics Report Q3",
        fileUrl: "/reports/statistics-q3-2024.pdf",
        thumbnail: "/images/reports/statistics.jpg",
        authorKh: "នាយកដ្ឋានផែនការ និងស្ថិតិ",
        authorEn: "Planning and Statistics Department"
      },
      {
        id: 9,
        titleKh: "របាយការណ៍ស្ថិតិឆមាសទី១ ឆ្នាំ២០២៤",
        titleEn: "Semi-Annual Statistics Report H1 2024",
        type: "statistics",
        typeKh: "របាយការណ៍ស្ថិតិ",
        typeEn: "Statistics Report",
        date: "2024-06-30",
        year: 2024,
        size: "1.9 MB",
        format: "PDF",
        pages: 62,
        summaryKh: "របាយការណ៍ស្ថិតិឆមាសទី១ ឆ្នាំ២០២៤",
        summaryEn: "Semi-Annual Statistics Report H1 2024",
        fileUrl: "/reports/statistics-h1-2024.pdf",
        thumbnail: "/images/reports/statistics.jpg",
        authorKh: "នាយកដ្ឋានផែនការ និងស្ថិតិ",
        authorEn: "Planning and Statistics Department"
      },
      // Activity Reports
      {
        id: 10,
        titleKh: "របាយការណ៍សកម្មភាព ឆមាសទី១ ឆ្នាំ២០២៤",
        titleEn: "Activity Report H1 2024",
        type: "activities",
        typeKh: "របាយការណ៍សកម្មភាព",
        typeEn: "Activity Report",
        date: "2024-06-30",
        year: 2024,
        size: "1.8 MB",
        format: "PDF",
        pages: 58,
        summaryKh: "របាយការណ៍សកម្មភាពឆមាសទី១ ឆ្នាំ២០២៤",
        summaryEn: "Activity Report First Half 2024",
        fileUrl: "/reports/activity-h1-2024.pdf",
        thumbnail: "/images/reports/activity.jpg",
        authorKh: "នាយកដ្ឋានរដ្ឋបាល",
        authorEn: "Administration Department"
      },
      {
        id: 11,
        titleKh: "របាយការណ៍សកម្មភាពប្រចាំឆ្នាំ ២០២៣",
        titleEn: "Annual Activity Report 2023",
        type: "activities",
        typeKh: "របាយការណ៍សកម្មភាព",
        typeEn: "Activity Report",
        date: "2023-12-31",
        year: 2023,
        size: "1.6 MB",
        format: "PDF",
        pages: 52,
        summaryKh: "របាយការណ៍សកម្មភាពប្រចាំឆ្នាំ ២០២៣",
        summaryEn: "Annual Activity Report 2023",
        fileUrl: "/reports/activity-2023.pdf",
        thumbnail: "/images/reports/activity.jpg",
        authorKh: "នាយកដ្ឋានរដ្ឋបាល",
        authorEn: "Administration Department"
      },
      // SSMR Reports
      {
        id: 12,
        titleKh: "របាយការណ៍ SSMR ប្រចាំឆ្នាំ ២០២៤",
        titleEn: "SSMR Annual Report 2024",
        type: "ssmr",
        typeKh: "របាយការណ៍ SSMR",
        typeEn: "SSMR Report",
        date: "2024-12-31",
        year: 2024,
        size: "4.2 MB",
        format: "PDF",
        pages: 98,
        summaryKh: "របាយការណ៍ស្តីពីភាពគ្រប់គ្រាន់ខ្លួនឯង និងទីផ្សារប្រចាំឆ្នាំ ២០២៤",
        summaryEn: "Self-Sufficiency and Market Report Annual 2024",
        fileUrl: "/reports/ssmr-2024.pdf",
        thumbnail: "/images/reports/ssmr.jpg",
        authorKh: "នាយកដ្ឋាន SSMR",
        authorEn: "SSMR Department"
      },
      {
        id: 13,
        titleKh: "របាយការណ៍ SSMR ត្រីមាសទី៤ ២០២៤",
        titleEn: "SSMR Quarterly Report Q4 2024",
        type: "ssmr",
        typeKh: "របាយការណ៍ SSMR",
        typeEn: "SSMR Report",
        date: "2024-12-20",
        year: 2024,
        size: "1.5 MB",
        format: "PDF",
        pages: 32,
        summaryKh: "របាយការណ៍ SSMR ត្រីមាសទី៤ ឆ្នាំ២០២៤",
        summaryEn: "SSMR Quarterly Report Q4 2024",
        fileUrl: "/reports/ssmr-q4-2024.pdf",
        thumbnail: "/images/reports/ssmr.jpg",
        authorKh: "នាយកដ្ឋាន SSMR",
        authorEn: "SSMR Department"
      },
      {
        id: 14,
        titleKh: "របាយការណ៍ SSMR ត្រីមាសទី៣ ២០២៤",
        titleEn: "SSMR Quarterly Report Q3 2024",
        type: "ssmr",
        typeKh: "របាយការណ៍ SSMR",
        typeEn: "SSMR Report",
        date: "2024-09-30",
        year: 2024,
        size: "1.4 MB",
        format: "PDF",
        pages: 30,
        summaryKh: "របាយការណ៍ SSMR ត្រីមាសទី៣ ឆ្នាំ២០២៤",
        summaryEn: "SSMR Quarterly Report Q3 2024",
        fileUrl: "/reports/ssmr-q3-2024.pdf",
        thumbnail: "/images/reports/ssmr.jpg",
        authorKh: "នាយកដ្ឋាន SSMR",
        authorEn: "SSMR Department"
      },
      {
        id: 15,
        titleKh: "របាយការណ៍ SSMR ត្រីមាសទី២ ២០២៤",
        titleEn: "SSMR Quarterly Report Q2 2024",
        type: "ssmr",
        typeKh: "របាយការណ៍ SSMR",
        typeEn: "SSMR Report",
        date: "2024-06-30",
        year: 2024,
        size: "1.3 MB",
        format: "PDF",
        pages: 28,
        summaryKh: "របាយការណ៍ SSMR ត្រីមាសទី២ ឆ្នាំ២០២៤",
        summaryEn: "SSMR Quarterly Report Q2 2024",
        fileUrl: "/reports/ssmr-q2-2024.pdf",
        thumbnail: "/images/reports/ssmr.jpg",
        authorKh: "នាយកដ្ឋាន SSMR",
        authorEn: "SSMR Department"
      },
      {
        id: 16,
        titleKh: "របាយការណ៍ SSMR ត្រីមាសទី១ ២០២៤",
        titleEn: "SSMR Quarterly Report Q1 2024",
        type: "ssmr",
        typeKh: "របាយការណ៍ SSMR",
        typeEn: "SSMR Report",
        date: "2024-03-31",
        year: 2024,
        size: "1.2 MB",
        format: "PDF",
        pages: 26,
        summaryKh: "របាយការណ៍ SSMR ត្រីមាសទី១ ឆ្នាំ២០២៤",
        summaryEn: "SSMR Quarterly Report Q1 2024",
        fileUrl: "/reports/ssmr-q1-2024.pdf",
        thumbnail: "/images/reports/ssmr.jpg",
        authorKh: "នាយកដ្ឋាន SSMR",
        authorEn: "SSMR Department"
      },
      // DRP Reports
      {
        id: 17,
        titleKh: "របាយការណ៍ DRP ប្រចាំឆ្នាំ ២០២៤",
        titleEn: "DRP Annual Report 2024",
        type: "drp",
        typeKh: "របាយការណ៍ DRP",
        typeEn: "DRP Report",
        date: "2024-12-31",
        year: 2024,
        size: "3.9 MB",
        format: "PDF",
        pages: 94,
        summaryKh: "របាយការណ៍ស្តីពីកម្មវិធីអភិវឌ្ឍន៍ និងកំណែទម្រង់ប្រចាំឆ្នាំ ២០២៤",
        summaryEn: "Development and Reform Program Annual Report 2024",
        fileUrl: "/reports/drp-2024.pdf",
        thumbnail: "/images/reports/drp.jpg",
        authorKh: "នាយកដ្ឋាន DRP",
        authorEn: "DRP Department"
      },
      {
        id: 18,
        titleKh: "របាយការណ៍ DRP ត្រីមាសទី៤ ២០២៤",
        titleEn: "DRP Quarterly Report Q4 2024",
        type: "drp",
        typeKh: "របាយការណ៍ DRP",
        typeEn: "DRP Report",
        date: "2024-12-20",
        year: 2024,
        size: "1.6 MB",
        format: "PDF",
        pages: 34,
        summaryKh: "របាយការណ៍ DRP ត្រីមាសទី៤ ឆ្នាំ២០២៤",
        summaryEn: "DRP Quarterly Report Q4 2024",
        fileUrl: "/reports/drp-q4-2024.pdf",
        thumbnail: "/images/reports/drp.jpg",
        authorKh: "នាយកដ្ឋាន DRP",
        authorEn: "DRP Department"
      },
      {
        id: 19,
        titleKh: "របាយការណ៍ DRP ត្រីមាសទី៣ ២០២៤",
        titleEn: "DRP Quarterly Report Q3 2024",
        type: "drp",
        typeKh: "របាយការណ៍ DRP",
        typeEn: "DRP Report",
        date: "2024-09-30",
        year: 2024,
        size: "1.5 MB",
        format: "PDF",
        pages: 32,
        summaryKh: "របាយការណ៍ DRP ត្រីមាសទី៣ ឆ្នាំ២០២៤",
        summaryEn: "DRP Quarterly Report Q3 2024",
        fileUrl: "/reports/drp-q3-2024.pdf",
        thumbnail: "/images/reports/drp.jpg",
        authorKh: "នាយកដ្ឋាន DRP",
        authorEn: "DRP Department"
      },
      {
        id: 20,
        titleKh: "របាយការណ៍ DRP ត្រីមាសទី២ ២០២៤",
        titleEn: "DRP Quarterly Report Q2 2024",
        type: "drp",
        typeKh: "របាយការណ៍ DRP",
        typeEn: "DRP Report",
        date: "2024-06-30",
        year: 2024,
        size: "1.4 MB",
        format: "PDF",
        pages: 30,
        summaryKh: "របាយការណ៍ DRP ត្រីមាសទី២ ឆ្នាំ២០២៤",
        summaryEn: "DRP Quarterly Report Q2 2024",
        fileUrl: "/reports/drp-q2-2024.pdf",
        thumbnail: "/images/reports/drp.jpg",
        authorKh: "នាយកដ្ឋាន DRP",
        authorEn: "DRP Department"
      },
      {
        id: 21,
        titleKh: "របាយការណ៍ DRP ត្រីមាសទី១ ២០២៤",
        titleEn: "DRP Quarterly Report Q1 2024",
        type: "drp",
        typeKh: "របាយការណ៍ DRP",
        typeEn: "DRP Report",
        date: "2024-03-31",
        year: 2024,
        size: "1.3 MB",
        format: "PDF",
        pages: 28,
        summaryKh: "របាយការណ៍ DRP ត្រីមាសទី១ ឆ្នាំ២០២៤",
        summaryEn: "DRP Quarterly Report Q1 2024",
        fileUrl: "/reports/drp-q1-2024.pdf",
        thumbnail: "/images/reports/drp.jpg",
        authorKh: "នាយកដ្ឋាន DRP",
        authorEn: "DRP Department"
      },
      {
        id: 22,
        titleKh: "របាយការណ៍ DRP ប្រចាំឆ្នាំ ២០២៣",
        titleEn: "DRP Annual Report 2023",
        type: "drp",
        typeKh: "របាយការណ៍ DRP",
        typeEn: "DRP Report",
        date: "2023-12-31",
        year: 2023,
        size: "3.2 MB",
        format: "PDF",
        pages: 88,
        summaryKh: "របាយការណ៍ DRP ប្រចាំឆ្នាំ ២០២៣",
        summaryEn: "DRP Annual Report 2023",
        fileUrl: "/reports/drp-2023.pdf",
        thumbnail: "/images/reports/drp.jpg",
        authorKh: "នាយកដ្ឋាន DRP",
        authorEn: "DRP Department"
      },
    ];

    // Merge base stats with stored stats (starting from 0)
    const mergedReports = baseReports.map(report => ({
      ...report,
      views: getViewCount(report.id) || 0,
      downloads: getDownloadCount(report.id) || 0
    }));

    setReportsData({ all: mergedReports });
  };

  // Initialize data on mount
  useEffect(() => {
    initializeReportsData();
  }, []);

  // Set active tab based on URL query parameter or path
  useEffect(() => {
    if (reportType === 'ssmr') {
      setActiveTab('ssmr');
    } else if (reportType === 'drp') {
      setActiveTab('drp');
    } else if (location.pathname.includes('/reports/annual')) {
      setActiveTab('annual');
    } else if (location.pathname.includes('/reports/quarterly')) {
      setActiveTab('quarterly');
    } else if (location.pathname.includes('/reports/statistics')) {
      setActiveTab('statistics');
    } else if (location.pathname.includes('/reports/activities')) {
      setActiveTab('activities');
    } else if (location.pathname.includes('/reports/ssmr')) {
      setActiveTab('ssmr');
    } else if (location.pathname.includes('/reports/drp')) {
      setActiveTab('drp');
    } else {
      setActiveTab('all');
    }
  }, [location.pathname, reportType]);

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

  const translations = {
    km: {
      title: "របាយការណ៍",
      subtitle: "របាយការណ៍ប្រចាំឆ្នាំ ត្រីមាស ស្ថិតិ សកម្មភាព SSMR និង DRP",
      search: "ស្វែងរករបាយការណ៍...",
      filter: "តម្រង",
      allReports: "របាយការណ៍ទាំងអស់",
      annualReports: "របាយការណ៍ប្រចាំឆ្នាំ",
      quarterlyReports: "របាយការណ៍ប្រចាំត្រីមាស",
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
      ssmr: "SSMR",
      drp: "DRP",
      details: "ព័ត៌មានលម្អិត",
      author: "អ្នកនិពន្ធ",
      pages: "ទំព័រ",
      close: "បិទ",
      viewFullReport: "មើលរបាយការណ៍ពេញ",
      dateRange: "ជួរកាលបរិច្ឆេទ",
      startDate: "ថ្ងៃចាប់ផ្តើម",
      endDate: "ថ្ងៃបញ្ចប់",
      apply: "អនុវត្ត",
      clear: "សម្អាត",
      customDate: "កំណត់កាលបរិច្ឆេទ"
    },
    en: {
      title: "Reports",
      subtitle: "Annual, Quarterly, Statistics, Activity, SSMR and DRP Reports",
      search: "Search reports...",
      filter: "Filter",
      allReports: "All Reports",
      annualReports: "Annual Reports",
      quarterlyReports: "Quarterly Reports",
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
      ssmr: "SSMR",
      drp: "DRP",
      details: "Report Details",
      author: "Author",
      pages: "Pages",
      close: "Close",
      viewFullReport: "View Full Report",
      dateRange: "Date Range",
      startDate: "Start Date",
      endDate: "End Date",
      apply: "Apply",
      clear: "Clear",
      customDate: "Custom Date"
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
    
    // Filter by date range
    if (dateRange.start && dateRange.end) {
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      endDate.setHours(23, 59, 59, 999);
      
      filtered = filtered.filter(report => {
        const reportDate = new Date(report.date);
        return reportDate >= startDate && reportDate <= endDate;
      });
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
    setSearchQuery("");
    setYearFilter("all");
    setDateRange({ start: "", end: "" });
    
    if (tab === 'ssmr') {
      navigate('/reports?type=ssmr');
    } else if (tab === 'drp') {
      navigate('/reports?type=drp');
    } else if (tab === 'annual') {
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
    setDateRange({ start: "", end: "" });
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
      month: "long",
      day: "numeric",
    });
  };

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const getTypeColor = (type) => {
    const colors = {
      annual: "bg-blue-100 text-blue-700 border-blue-200",
      quarterly: "bg-purple-100 text-purple-700 border-purple-200",
      statistics: "bg-green-100 text-green-700 border-green-200",
      activities: "bg-orange-100 text-orange-700 border-orange-200",
      ssmr: "bg-teal-100 text-teal-700 border-teal-200",
      drp: "bg-indigo-100 text-indigo-700 border-indigo-200",
    };
    return colors[type] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getTypeIcon = (type) => {
    const icons = {
      annual: <Calendar size={14} />,
      quarterly: <TrendingUp size={14} />,
      statistics: <PieChart size={14} />,
      activities: <Activity size={14} />,
      ssmr: <BarChart size={14} />,
      drp: <Database size={14} />,
    };
    return icons[type] || <FileText size={14} />;
  };

  const handleViewReport = (report) => {
    incrementViewCount(report.id);
    window.open(report.fileUrl, '_blank');
  };

  const handleDownloadReport = (report) => {
    incrementDownloadCount(report.id);
    const link = document.createElement('a');
    link.href = report.fileUrl;
    link.download = `${currentLang === 'km' ? report.titleKh : report.titleEn}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenModal = (report) => {
    setSelectedReport(report);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReport(null);
    document.body.style.overflow = 'unset';
  };

  const ReportCard = ({ report }) => {
    const title = currentLang === "km" ? report.titleKh : report.titleEn;
    const summary = currentLang === "km" ? report.summaryKh : report.summaryEn;
    const typeName = currentLang === "km" ? report.typeKh : report.typeEn;

    return (
      <div className="group bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#4CAF50]/30 transition-all duration-300 overflow-hidden">
        <div 
          className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer"
          onClick={() => handleOpenModal(report)}
        >
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
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
              <Maximize2 size={20} className="text-[#2E7D32]" />
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <h3 
            className="text-base font-medium text-gray-900 mb-2 leading-relaxed line-clamp-2 min-h-[3rem] group-hover:text-[#2E7D32] transition-colors cursor-pointer"
            onClick={() => handleOpenModal(report)}
          >
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
              <span>{report.views} {t.views}</span>
            </div>
            <div className="flex items-center">
              <Download size={12} className="mr-1" />
              <span>{report.downloads} {t.downloads}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="text-xs text-gray-400">
              {report.size}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleViewReport(report)}
                className="px-3 py-1.5 text-xs text-[#4CAF50] border border-[#4CAF50] rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center gap-1"
              >
                <Eye size={12} />
                {t.view}
              </button>
              <button 
                onClick={() => handleDownloadReport(report)}
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
          <div 
            className="relative md:w-48 h-32 md:h-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 cursor-pointer"
            onClick={() => handleOpenModal(report)}
          >
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
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                <Maximize2 size={14} className="text-[#2E7D32]" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="flex-1">
                <h3 
                  className="text-base font-medium text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors cursor-pointer"
                  onClick={() => handleOpenModal(report)}
                >
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
                  onClick={() => handleViewReport(report)}
                  className="px-3 py-1.5 text-xs text-[#4CAF50] border border-[#4CAF50] rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center gap-1"
                >
                  <Eye size={12} />
                  {t.view}
                </button>
                <button 
                  onClick={() => handleDownloadReport(report)}
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

  // Report Detail Modal Component
  const ReportDetailModal = () => {
    if (!selectedReport) return null;
    
    const title = currentLang === "km" ? selectedReport.titleKh : selectedReport.titleEn;
    const summary = currentLang === "km" ? selectedReport.summaryKh : selectedReport.summaryEn;
    const typeName = currentLang === "km" ? selectedReport.typeKh : selectedReport.typeEn;
    const author = currentLang === "km" ? selectedReport.authorKh : selectedReport.authorEn;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={handleCloseModal}></div>
        
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(selectedReport.type)}`}>
                  {getTypeIcon(selectedReport.type)}
                  {typeName}
                </div>
                <span className="text-xs text-gray-400">{selectedReport.format}</span>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Thumbnail */}
              <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-6">
                {selectedReport.thumbnail ? (
                  <img
                    src={selectedReport.thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://placehold.co/800x400/4CAF50/white?text=Report"; }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileText size={64} className="text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h2>
                </div>
              </div>

              {/* Report Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <Calendar size={18} className="text-[#4CAF50] mx-auto mb-1" />
                  <p className="text-xs text-gray-500">{t.published}</p>
                  <p className="text-sm font-medium text-gray-700">{formatDate(selectedReport.date)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <Eye size={18} className="text-[#4CAF50] mx-auto mb-1" />
                  <p className="text-xs text-gray-500">{t.views}</p>
                  <p className="text-sm font-medium text-gray-700">{selectedReport.views}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <Download size={18} className="text-[#4CAF50] mx-auto mb-1" />
                  <p className="text-xs text-gray-500">{t.downloads}</p>
                  <p className="text-sm font-medium text-gray-700">{selectedReport.downloads}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <FileText size={18} className="text-[#4CAF50] mx-auto mb-1" />
                  <p className="text-xs text-gray-500">{t.pages}</p>
                  <p className="text-sm font-medium text-gray-700">{selectedReport.pages}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Info size={16} />
                  {t.details}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{summary}</p>
              </div>

              {/* Author Info */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <User size={16} />
                  {t.author}
                </h3>
                <p className="text-sm text-gray-600">{author}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleViewReport(selectedReport)}
                  className="flex-1 px-4 py-2.5 text-sm text-[#4CAF50] border border-[#4CAF50] rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  {t.viewFullReport}
                </button>
                <button
                  onClick={() => handleDownloadReport(selectedReport)}
                  className="flex-1 px-4 py-2.5 text-sm bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  {t.download} ({selectedReport.size})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getTabs = () => {
    const currentPath = location.pathname;
    const queryType = queryParams.get('type');
    
    if (queryType === 'ssmr' || currentPath.includes('/reports/ssmr')) {
      return [
        { id: "ssmr", label: t.ssmrReports, icon: BarChart },
      ];
    }
    
    if (queryType === 'drp' || currentPath.includes('/reports/drp')) {
      return [
        { id: "drp", label: t.drpReports, icon: Database },
      ];
    }
    
    return [
      { id: "all", label: t.allReports, icon: FileText },
      { id: "annual", label: t.annualReports, icon: Calendar },
      { id: "quarterly", label: t.quarterlyReports, icon: TrendingUp },
      { id: "statistics", label: t.statisticsReports, icon: PieChart },
      { id: "activities", label: t.activitiesReports, icon: Activity },
      { id: "ssmr", label: t.ssmrReports, icon: BarChart },
      { id: "drp", label: t.drpReports, icon: Database },
    ];
  };

  const tabs = getTabs();
  const isFilteredView = queryParams.get('type') === 'ssmr' || queryParams.get('type') === 'drp';

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
        {!isFilteredView && !location.pathname.includes('/reports/ssmr') && !location.pathname.includes('/reports/drp') && (
          <div className="mb-8 overflow-x-auto">
            <div className="flex flex-nowrap gap-2 border-b border-gray-200 min-w-max">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                      flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap
                      ${isActive 
                        ? 'text-[#2E7D32] border-b-2 border-[#4CAF50] bg-[#4CAF50]/5' 
                        : 'text-gray-500 hover:text-[#4CAF50] hover:border-b-2 hover:border-[#4CAF50]/50'
                      }
                    `}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

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
              <div className="relative">
                <button
                  onClick={() => setYearFilterOpen(!yearFilterOpen)}
                  className="w-full lg:w-40 px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-left text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
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
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 min-w-[160px]">
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

              {/* Custom Date Range Filter */}
              <div className="relative">
                <button
                  onClick={() => setDateFilterOpen(!dateFilterOpen)}
                  className="w-full lg:w-48 px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-left text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <CalendarIcon2 size={16} className="text-gray-400" />
                    <span className={(dateRange.start && dateRange.end) ? "text-gray-900" : "text-gray-500"}>
                      {(dateRange.start && dateRange.end) 
                        ? `${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}`
                        : t.customDate}
                    </span>
                  </span>
                  <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${dateFilterOpen ? "rotate-180" : ""}`} />
                </button>

                {dateFilterOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-4 z-50 w-80">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">{t.startDate}</label>
                        <input
                          type="date"
                          value={formatDateForInput(dateRange.start)}
                          onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#4CAF50]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">{t.endDate}</label>
                        <input
                          type="date"
                          value={formatDateForInput(dateRange.end)}
                          onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#4CAF50]"
                        />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => {
                            setDateRange({ start: "", end: "" });
                            setDateFilterOpen(false);
                            setCurrentPage(1);
                          }}
                          className="flex-1 px-3 py-1.5 text-xs text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {t.clear}
                        </button>
                        <button
                          onClick={() => {
                            setDateFilterOpen(false);
                            setCurrentPage(1);
                          }}
                          className="flex-1 px-3 py-1.5 text-xs bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-colors"
                        >
                          {t.apply}
                        </button>
                      </div>
                    </div>
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
              {(searchQuery || yearFilter !== "all" || (dateRange.start && dateRange.end)) && (
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
          {(searchQuery || yearFilter !== "all" || (dateRange.start && dateRange.end)) && (
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
              {(dateRange.start && dateRange.end) && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  <CalendarIcon2 size={12} />
                  {formatDate(dateRange.start)} - {formatDate(dateRange.end)}
                  <button onClick={() => { setDateRange({ start: "", end: "" }); setCurrentPage(1); }} className="ml-1 hover:bg-gray-200 rounded-full p-0.5">
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

        <div className="text-sm text-gray-500 mb-4">
          {filteredReports.length > 0
            ? `${t.showing} ${startItem}-${endItem} ${t.ofTotal} ${filteredReports.length} ${t.totalReports.toLowerCase()}`
            : t.noReports}
        </div>

        {filteredReports.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText size={40} className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium text-lg mb-2">{t.noReports}</p>
            <p className="text-gray-400 text-sm">{t.tryAgain}</p>
            {(searchQuery || yearFilter !== "all" || (dateRange.start && dateRange.end)) && (
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
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </Container>

      {/* Report Detail Modal */}
      {showModal && <ReportDetailModal />}
    </div>
  );
};

export default ReportsPage;