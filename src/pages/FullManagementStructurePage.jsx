// src/pages/FullManagementStructurePage.jsx
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  ChevronRight, 
  Building2, 
  Shield,
  BarChart3,
  Scale,
  Landmark,
  TrendingUp,
  Globe,
  Mail,
  Phone,
  ArrowLeft,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Filter,
  X,
  User,
  Award,
  Calendar,
  Clock,
  Download,
  Share2,
  Printer,
  BookOpen,
  FileText,
  Briefcase,
  Star,
  MapPin,
  Layers,
  Network,
  GitBranch,
  Plus,
  Minus,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container.jsx';
import defaultImg from '../images/image.png';

const FullManagementStructurePage = () => {
  const [currentLang, setCurrentLang] = useState('km');
  const [selectedDept, setSelectedDept] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedNodes, setExpandedNodes] = useState([]);
  const [filterBy, setFilterBy] = useState('all');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('org');

  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };

    window.addEventListener('languagechange', handleLanguageChange);
    
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setCurrentLang(savedLang);
    }

    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  useEffect(() => {
    if (showDetail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDetail]);

  const translations = {
    km: {
      title: 'តារាងរចនាសម្ព័ន្ធគ្រប់គ្រង',
      subtitle: 'រចនាសម្ព័ន្ធអង្គភាពពេញលេញ',
      back: 'ត្រលប់ក្រោយ',
      home: 'ទំព័រដើម',
      filter: 'តម្រង',
      all: 'ទាំងអស់',
      departments: 'នាយកដ្ឋាន',
      offices: 'ការិយាល័យ',
      units: 'អង្គភាព',
      director: 'អគ្គនាយក',
      deputyDirector: 'អនុប្រធាន',
      departmentHead: 'ប្រធាននាយកដ្ឋាន',
      officeChief: 'ប្រធានការិយាល័យ',
      staff: 'នាក់',
      totalStaff: 'បុគ្គលិកសរុប',
      viewDetails: 'មើលលម្អិត',
      expandAll: 'ពង្រីកទាំងអស់',
      collapseAll: 'បង្រួមទាំងអស់',
      zoomIn: 'ពង្រីក',
      zoomOut: 'បង្រួម',
      reset: 'កំណត់ឡើងវិញ',
      orgChart: 'តារាងរចនាសម្ព័ន្ធ',
      listView: 'បញ្ជី',
      legend: 'សញ្ញាណ',
      management: 'ថ្នាក់ដឹកនាំ',
      contact: 'ទំនាក់ទំនង',
      email: 'អ៊ីមែល',
      phone: 'ទូរស័ព្ទ',
      established: 'បង្កើតឡើង',
      description: 'ការពិពណ៌នា',
      responsibilities: 'ភារកិច្ច',
      achievements: 'សមិទ្ធិផល',
      overview: 'ទិដ្ឋភាពទូទៅ',
      team: 'ក្រុមការងារ',
      projects: 'គម្រោង',
      download: 'ទាញយក',
      share: 'ចែករំលែក',
      print: 'បោះពុម្ព'
    },
    en: {
      title: 'Management Structure Chart',
      subtitle: 'Complete Organizational Structure',
      back: 'Back',
      home: 'Home',
      filter: 'Filter',
      all: 'All',
      departments: 'Departments',
      offices: 'Offices',
      units: 'Units',
      director: 'Director General',
      deputyDirector: 'Deputy Director',
      departmentHead: 'Department Head',
      officeChief: 'Office Chief',
      staff: 'staff',
      totalStaff: 'Total Staff',
      viewDetails: 'View Details',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      reset: 'Reset',
      orgChart: 'Organization Chart',
      listView: 'List View',
      legend: 'Legend',
      management: 'Management',
      contact: 'Contact',
      email: 'Email',
      phone: 'Phone',
      established: 'Established',
      description: 'Description',
      responsibilities: 'Responsibilities',
      achievements: 'Achievements',
      overview: 'Overview',
      team: 'Team',
      projects: 'Projects',
      download: 'Download',
      share: 'Share',
      print: 'Print'
    }
  };

  const t = translations[currentLang];

  // Director General
  const directorGeneral = {
    id: 'dg',
    name: { km: 'ឯកឧត្តម អ៊ឹង កន្ថាផាវ័ន្ធ', en: 'H.E. Ung Kunthaphavorn' },
    position: { km: 'អគ្គនាយក', en: 'Director General' },
    title: { km: 'អគ្គនាយក', en: 'Director General' },
    email: 'director.general@irc.gov.kh',
    phone: '023 123 455',
    image: 'https://i.pravatar.cc/150?img=7',
    staff: 120,
    children: ['dept1', 'dept2', 'dept3', 'dept4', 'dept5', 'dept6']
  };

  // Departments with their offices and units
  const departments = [
    {
      id: 'dept1',
      name: { km: 'នាយកដ្ឋានគ្រប់គ្រងក្រុមហ៊ុនធានារ៉ាប់រង', en: 'Insurance Company Supervision Department' },
      icon: <Building2 size={18} />,
      head: { km: 'លោក សុខ វុទ្ធី', en: 'Mr. Sok Vuthy' },
      position: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' },
      email: 'sok.vuthy@irc.gov.kh',
      phone: '023 123 456',
      staff: 24,
      color: 'blue',
      image: 'https://i.pravatar.cc/150?img=1',
      established: '2015',
      description: {
        km: 'នាយកដ្ឋានគ្រប់គ្រងក្រុមហ៊ុនធានារ៉ាប់រងទទួលខុសត្រូវលើការត្រួតពិនិត្យ និងគ្រប់គ្រងសកម្មភាពរបស់ក្រុមហ៊ុនធានារ៉ាប់រងទាំងអស់នៅកម្ពុជា។',
        en: 'The Insurance Company Supervision Department is responsible for monitoring and supervising all insurance companies operating in Cambodia.'
      },
      responsibilities: {
        km: ['ត្រួតពិនិត្យក្រុមហ៊ុនធានារ៉ាប់រង', 'វាយតម្លៃហានិភ័យ', 'ផ្តល់អាជ្ញាប័ណ្ណ', 'ត្រួតពិនិត្យការអនុលោមតាមច្បាប់'],
        en: ['Monitor insurance companies', 'Risk assessment', 'License issuance', 'Compliance monitoring']
      },
      achievements: {
        km: ['បានត្រួតពិនិត្យក្រុមហ៊ុនចំនួន ២៥', 'ចេញអាជ្ញាប័ណ្ណថ្មីចំនួន ៥', 'បង្កើនប្រសិទ្ធភាពត្រួតពិនិត្យ ៣០%'],
        en: ['Supervised 25 companies', 'Issued 5 new licenses', 'Increased inspection efficiency by 30%']
      },
      children: ['office1_1', 'office1_2', 'office1_3']
    },
    {
      id: 'dept2',
      name: { km: 'នាយកដ្ឋានត្រួតពិនិត្យហិរញ្ញវត្ថុ', en: 'Financial Inspection Department' },
      icon: <BarChart3 size={18} />,
      head: { km: 'លោកស្រី ជា ស្រីពេជ្រ', en: 'Ms. Chea Srey Pich' },
      position: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' },
      email: 'chea.sreypich@irc.gov.kh',
      phone: '023 123 457',
      staff: 18,
      color: 'green',
      image: 'https://i.pravatar.cc/150?img=2',
      established: '2016',
      description: {
        km: 'នាយកដ្ឋានត្រួតពិនិត្យហិរញ្ញវត្ថុទទួលខុសត្រូវលើការត្រួតពិនិត្យស្ថានភាពហិរញ្ញវត្ថុរបស់ក្រុមហ៊ុនធានារ៉ាប់រង។',
        en: 'The Financial Inspection Department is responsible for monitoring the financial status of insurance companies.'
      },
      responsibilities: {
        km: ['ត្រួតពិនិត្យរបាយការណ៍ហិរញ្ញវត្ថុ', 'វាយតម្លៃស្ថិរភាពហិរញ្ញវត្ថុ', 'ត្រួតពិនិត្យសាច់ប្រាក់បម្រុង'],
        en: ['Review financial reports', 'Assess financial stability', 'Monitor reserve requirements']
      },
      achievements: {
        km: ['ត្រួតពិនិត្យរបាយការណ៍ហិរញ្ញវត្ថុចំនួន ៥០', 'រកឃើញភាពមិនប្រក្រតីចំនួន ៣'],
        en: ['Reviewed 50 financial reports', 'Identified 3 irregularities']
      },
      children: ['office2_1', 'office2_2']
    },
    {
      id: 'dept3',
      name: { km: 'នាយកដ្ឋានច្បាប់ និងបទប្បញ្ញត្តិ', en: 'Legal and Regulatory Department' },
      icon: <Scale size={18} />,
      head: { km: 'លោក ហេង សុខា', en: 'Mr. Heng Sokha' },
      position: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' },
      email: 'heng.sokha@irc.gov.kh',
      phone: '023 123 458',
      staff: 15,
      color: 'purple',
      image: 'https://i.pravatar.cc/150?img=3',
      established: '2014',
      description: {
        km: 'នាយកដ្ឋានច្បាប់ និងបទប្បញ្ញត្តិទទួលខុសត្រូវលើការរៀបចំច្បាប់ និងបទប្បញ្ញត្តិស្តីពីវិស័យធានារ៉ាប់រង។',
        en: 'The Legal and Regulatory Department is responsible for drafting laws and regulations related to the insurance sector.'
      },
      responsibilities: {
        km: ['រៀបចំច្បាប់', 'ពិនិត្យបទប្បញ្ញត្តិ', 'ផ្តល់យោបល់ផ្នែកច្បាប់'],
        en: ['Draft laws', 'Review regulations', 'Provide legal advice']
      },
      achievements: {
        km: ['រៀបចំច្បាប់ថ្មីចំនួន ២', 'កែសម្រួលបទប្បញ្ញត្តិចំនួន ៥'],
        en: ['Drafted 2 new laws', 'Amended 5 regulations']
      },
      children: ['office3_1']
    },
    {
      id: 'dept4',
      name: { km: 'នាយកដ្ឋានគោលនយោបាយ និងផែនការ', en: 'Policy and Planning Department' },
      icon: <Landmark size={18} />,
      head: { km: 'លោកស្រី ពៅ ម៉ាលី', en: 'Ms. Pau Mali' },
      position: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' },
      email: 'pau.mali@irc.gov.kh',
      phone: '023 123 459',
      staff: 12,
      color: 'orange',
      image: 'https://i.pravatar.cc/150?img=4',
      established: '2017',
      description: {
        km: 'នាយកដ្ឋានគោលនយោបាយ និងផែនការទទួលខុសត្រូវលើការរៀបចំគោលនយោបាយ និងផែនការអភិវឌ្ឍន៍វិស័យធានារ៉ាប់រង។',
        en: 'The Policy and Planning Department is responsible for developing policies and development plans for the insurance sector.'
      },
      responsibilities: {
        km: ['រៀបចំគោលនយោបាយ', 'រៀបចំផែនការយុទ្ធសាស្រ្ត', 'វាយតម្លៃគម្រោង'],
        en: ['Develop policies', 'Create strategic plans', 'Evaluate projects']
      },
      achievements: {
        km: ['រៀបចំគោលនយោបាយថ្មីចំនួន ៣', 'បញ្ចប់ផែនការយុទ្ធសាស្រ្ត ២០២១-២០៣០'],
        en: ['Developed 3 new policies', 'Completed 2021-2030 strategic plan']
      },
      children: ['office4_1', 'office4_2']
    },
    {
      id: 'dept5',
      name: { km: 'នាយកដ្ឋានស្ថិតិ និងព័ត៌មានវិទ្យា', en: 'Statistics and IT Department' },
      icon: <TrendingUp size={18} />,
      head: { km: 'លោក សុខ ដារ៉ា', en: 'Mr. Sok Dara' },
      position: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' },
      email: 'sok.dara@irc.gov.kh',
      phone: '023 123 460',
      staff: 20,
      color: 'red',
      image: 'https://i.pravatar.cc/150?img=5',
      established: '2018',
      description: {
        km: 'នាយកដ្ឋានស្ថិតិ និងព័ត៌មានវិទ្យាទទួលខុសត្រូវលើការប្រមូលទិន្នន័យស្ថិតិ និងគ្រប់គ្រងប្រព័ន្ធព័ត៌មានវិទ្យា។',
        en: 'The Statistics and IT Department is responsible for collecting statistical data and managing IT systems.'
      },
      responsibilities: {
        km: ['ប្រមូលទិន្នន័យស្ថិតិ', 'គ្រប់គ្រងប្រព័ន្ធព័ត៌មានវិទ្យា', 'ផ្តល់សេវាកម្មបច្ចេកទេស'],
        en: ['Collect statistical data', 'Manage IT systems', 'Provide technical support']
      },
      achievements: {
        km: ['បង្កើតប្រព័ន្ធទិន្នន័យថ្មី', 'បណ្តុះបណ្តាលបុគ្គលិកចំនួន ៥០ នាក់'],
        en: ['Created new data system', 'Trained 50 staff members']
      },
      children: ['office5_1', 'office5_2', 'office5_3']
    },
    {
      id: 'dept6',
      name: { km: 'នាយកដ្ឋានធនធានមនុស្ស និងរដ្ឋបាល', en: 'Human Resources and Administration Department' },
      icon: <Users size={18} />,
      head: { km: 'លោកស្រី នួន ស្រីនាថ', en: 'Ms. Nuon Sreinath' },
      position: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' },
      email: 'nuon.sreinath@irc.gov.kh',
      phone: '023 123 461',
      staff: 16,
      color: 'teal',
      image: 'https://i.pravatar.cc/150?img=6',
      established: '2014',
      description: {
        km: 'នាយកដ្ឋានធនធានមនុស្ស និងរដ្ឋបាលទទួលខុសត្រូវលើការគ្រប់គ្រងបុគ្គលិក និងកិច្ចការរដ្ឋបាលទូទៅ។',
        en: 'The Human Resources and Administration Department is responsible for personnel management and general administrative affairs.'
      },
      responsibilities: {
        km: ['គ្រប់គ្រងបុគ្គលិក', 'រៀបចំថវិកា', 'គ្រប់គ្រងឯកសារ'],
        en: ['Manage personnel', 'Budget planning', 'Document management']
      },
      achievements: {
        km: ['ជ្រើសរើសបុគ្គលិកថ្មីចំនួន ១០ នាក់', 'រៀបចំកម្មវិធីបណ្តុះបណ្តាលចំនួន ៥'],
        en: ['Recruited 10 new staff', 'Organized 5 training programs']
      },
      children: ['office6_1', 'office6_2']
    }
  ];

  // Offices under departments
  const offices = {
    office1_1: { id: 'office1_1', name: { km: 'ការិយាល័យត្រួតពិនិត្យក្រុមហ៊ុនធានារ៉ាប់រងទូទៅ', en: 'General Insurance Company Supervision Office' }, chief: { km: 'លោក រស់ វុទ្ធី', en: 'Mr. Ros Vuthy' }, staff: 8, parent: 'dept1' },
    office1_2: { id: 'office1_2', name: { km: 'ការិយាល័យវាយតម្លៃហានិភ័យ', en: 'Risk Assessment Office' }, chief: { km: 'លោកស្រី ច័ន្ទ សុភាព', en: 'Ms. Chan Sopheap' }, staff: 6, parent: 'dept1' },
    office1_3: { id: 'office1_3', name: { km: 'ការិយាល័យផ្តល់អាជ្ញាប័ណ្ណ', en: 'Licensing Office' }, chief: { km: 'លោក សុខ វុទ្ធី', en: 'Mr. Sok Vuthy' }, staff: 5, parent: 'dept1' },
    office2_1: { id: 'office2_1', name: { km: 'ការិយាល័យត្រួតពិនិត្យរបាយការណ៍ហិរញ្ញវត្ថុ', en: 'Financial Report Inspection Office' }, chief: { km: 'លោកស្រី ជា ស្រីពេជ្រ', en: 'Ms. Chea Srey Pich' }, staff: 7, parent: 'dept2' },
    office2_2: { id: 'office2_2', name: { km: 'ការិយាល័យត្រួតពិនិត្យសាច់ប្រាក់បម្រុង', en: 'Reserve Monitoring Office' }, chief: { km: 'លោក ហេង សុខា', en: 'Mr. Heng Sokha' }, staff: 5, parent: 'dept2' },
    office3_1: { id: 'office3_1', name: { km: 'ការិយាល័យរៀបចំច្បាប់', en: 'Legal Drafting Office' }, chief: { km: 'លោក ហេង សុខា', en: 'Mr. Heng Sokha' }, staff: 8, parent: 'dept3' },
    office4_1: { id: 'office4_1', name: { km: 'ការិយាល័យរៀបចំគោលនយោបាយ', en: 'Policy Development Office' }, chief: { km: 'លោកស្រី ពៅ ម៉ាលី', en: 'Ms. Pau Mali' }, staff: 6, parent: 'dept4' },
    office4_2: { id: 'office4_2', name: { km: 'ការិយាល័យផែនការយុទ្ធសាស្រ្ត', en: 'Strategic Planning Office' }, chief: { km: 'លោកស្រី ពៅ ម៉ាលី', en: 'Ms. Pau Mali' }, staff: 4, parent: 'dept4' },
    office5_1: { id: 'office5_1', name: { km: 'ការិយាល័យប្រមូលទិន្នន័យស្ថិតិ', en: 'Statistical Data Collection Office' }, chief: { km: 'លោក សុខ ដារ៉ា', en: 'Mr. Sok Dara' }, staff: 7, parent: 'dept5' },
    office5_2: { id: 'office5_2', name: { km: 'ការិយាល័យគ្រប់គ្រងប្រព័ន្ធព័ត៌មានវិទ្យា', en: 'IT Systems Management Office' }, chief: { km: 'លោក សុខ ដារ៉ា', en: 'Mr. Sok Dara' }, staff: 8, parent: 'dept5' },
    office5_3: { id: 'office5_3', name: { km: 'ការិយាល័យសេវាកម្មបច្ចេកទេស', en: 'Technical Support Office' }, chief: { km: 'លោក សុខ ដារ៉ា', en: 'Mr. Sok Dara' }, staff: 5, parent: 'dept5' },
    office6_1: { id: 'office6_1', name: { km: 'ការិយាល័យគ្រប់គ្រងបុគ្គលិក', en: 'Personnel Management Office' }, chief: { km: 'លោកស្រី នួន ស្រីនាថ', en: 'Ms. Nuon Sreinath' }, staff: 8, parent: 'dept6' },
    office6_2: { id: 'office6_2', name: { km: 'ការិយាល័យរដ្ឋបាល', en: 'Administration Office' }, chief: { km: 'លោកស្រី នួន ស្រីនាថ', en: 'Ms. Nuon Sreinath' }, staff: 6, parent: 'dept6' }
  };

  const handleGoBack = () => {
    window.location.href = '/';
  };

  const toggleNode = (nodeId) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter(id => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  const expandAll = () => {
    const allNodes = ['dg', ...departments.map(d => d.id), ...Object.keys(offices)];
    setExpandedNodes(allNodes);
  };

  const collapseAll = () => {
    setExpandedNodes([]);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.8));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  const handleNodeClick = (node) => {
    setSelectedDept(node);
    setShowDetail(true);
    setActiveTab('overview');
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'border-blue-200 bg-blue-50 text-blue-600',
      green: 'border-green-200 bg-green-50 text-green-600',
      purple: 'border-purple-200 bg-purple-50 text-purple-600',
      orange: 'border-orange-200 bg-orange-50 text-orange-600',
      red: 'border-red-200 bg-red-50 text-red-600',
      teal: 'border-teal-200 bg-teal-50 text-teal-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Breadcrumb */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Home size={20} className="text-gray-600" />
              </Link>
              
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm">
                <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors">
                  {t.home}
                </Link>
                <ChevronRight size={14} className="text-gray-400" />
                <span className="text-gray-700">រចនាសម្ព័ន្ធគ្រប់គ្រង</span>
                <ChevronRight size={14} className="text-gray-400" />
                <span className="text-primary-600 font-medium">{t.title}</span>
              </nav>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={expandAll}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title={t.expandAll}
              >
                <Plus size={18} className="text-gray-600" />
              </button>
              <button
                onClick={collapseAll}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title={t.collapseAll}
              >
                <Minus size={18} className="text-gray-600" />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title={t.zoomIn}
              >
                <ZoomIn size={18} className="text-gray-600" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title={t.zoomOut}
              >
                <ZoomOut size={18} className="text-gray-600" />
              </button>
              <button
                onClick={handleZoomReset}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title={t.reset}
              >
                <Maximize2 size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Filter Bar - Simplified */}
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-30">
        <Container className="py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
              >
                <Filter size={16} className="text-gray-600" />
                <span>{t.filter}</span>
              </button>
              
              {filterBy !== 'all' && (
                <span className="text-sm text-gray-500">
                  បង្ហាញ: {filterBy === 'departments' ? t.departments : t.offices}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setViewMode('org')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'org' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-100 text-gray-600'}`}
                title={t.orgChart}
              >
                <Network size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-100 text-gray-600'}`}
                title={t.listView}
              >
                <Layers size={18} />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterBy('all')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filterBy === 'all' 
                      ? 'bg-primary-600 text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.all}
                </button>
                <button
                  onClick={() => setFilterBy('departments')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filterBy === 'departments' 
                      ? 'bg-primary-600 text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.departments}
                </button>
                <button
                  onClick={() => setFilterBy('offices')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filterBy === 'offices' 
                      ? 'bg-primary-600 text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.offices}
                </button>
              </div>
            </div>
          )}
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-8">
        <div 
          className="transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
        >
          {viewMode === 'org' ? (
            /* Organization Chart View */
            <div className="org-chart">
              {/* Level 1: Director General */}
              <div className="flex justify-center mb-8">
                <div 
                  className="bg-primary-600 text-white rounded-lg p-4 w-full max-w-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleNodeClick(directorGeneral)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden ring-2 ring-white/50 flex-shrink-0">
                      <img 
                        src={directorGeneral.image} 
                        alt={directorGeneral.name[currentLang]}
                        className="w-full h-full object-cover"
                        onError={(e) => e.target.src = defaultImg}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-primary-100 mb-1">{t.director}</p>
                      <p className="text-base font-semibold">{directorGeneral.name[currentLang]}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Mail size={14} className="text-primary-200" />
                        <Phone size={14} className="text-primary-200" />
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-primary-200" />
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gray-300"></div>
              </div>

              {/* Level 2: Departments */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {departments
                  .filter(dept => filterBy === 'all' || filterBy === 'departments')
                  .map((dept) => {
                    const colorClasses = getColorClasses(dept.color);
                    const isExpanded = expandedNodes.includes(dept.id);
                    
                    return (
                      <div key={dept.id} className="relative">
                        <div
                          className={`bg-white border ${colorClasses.split(' ')[0]} rounded-lg hover:shadow-md transition-shadow cursor-pointer`}
                          onClick={() => handleNodeClick(dept)}
                        >
                          <div className={`h-1 ${colorClasses.split(' ')[1]} rounded-t-lg`}></div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className={`p-2 ${colorClasses.split(' ')[1]} rounded-lg`}>
                                {dept.icon}
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleNode(dept.id);
                                }}
                                className="p-1 hover:bg-gray-100 rounded"
                              >
                                {isExpanded ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                              </button>
                            </div>
                            <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                              {dept.name[currentLang]}
                            </h3>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-500">{dept.staff} {t.staff}</span>
                              <span className="text-primary-600">{t.viewDetails}</span>
                            </div>
                          </div>
                        </div>

                        {/* Level 3: Offices */}
                        {isExpanded && dept.children && (
                          <div className="mt-2 ml-4 pl-2 border-l-2 border-gray-200 space-y-2">
                            {dept.children.map(childId => {
                              const office = offices[childId];
                              if (!office) return null;
                              return (
                                <div
                                  key={office.id}
                                  className="bg-white border border-gray-200 rounded-lg p-3 text-sm cursor-pointer hover:shadow-sm transition-shadow"
                                  onClick={() => handleNodeClick(office)}
                                >
                                  <div className="flex items-center space-x-2">
                                    <Building2 size={14} className="text-gray-400" />
                                    <span className="font-medium text-gray-800 line-clamp-1">{office.name[currentLang]}</span>
                                  </div>
                                  <div className="mt-1 text-xs text-gray-500">
                                    {office.chief[currentLang]} • {office.staff} {t.staff}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            /* List View */
            <div className="space-y-6">
              {/* Director General in List View */}
              <div 
                className="bg-primary-600 text-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleNodeClick(directorGeneral)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden ring-2 ring-white/50">
                      <img src={directorGeneral.image} alt={directorGeneral.name[currentLang]} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-100">{t.director}</p>
                      <p className="font-semibold">{directorGeneral.name[currentLang]}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-primary-200" />
                </div>
              </div>

              {/* Departments in List View */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700 px-2">{t.departments}</h3>
                {departments
                  .filter(dept => filterBy === 'all' || filterBy === 'departments')
                  .map(dept => (
                    <div
                      key={dept.id}
                      className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-sm transition-shadow"
                      onClick={() => handleNodeClick(dept)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${getColorClasses(dept.color).split(' ')[1]}`}>
                            {dept.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{dept.name[currentLang]}</h4>
                            <p className="text-xs text-gray-500 mt-1">{dept.head[currentLang]} • {dept.staff} {t.staff}</p>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    </div>
                  ))}
              </div>

              {/* Offices in List View - Only show if filter includes offices */}
              {(filterBy === 'all' || filterBy === 'offices') && (
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700 px-2">{t.offices}</h3>
                  {Object.values(offices).map(office => (
                    <div
                      key={office.id}
                      className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-sm transition-shadow"
                      onClick={() => handleNodeClick(office)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <Building2 size={16} className="text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{office.name[currentLang]}</h4>
                            <p className="text-xs text-gray-500 mt-1">{office.chief[currentLang]} • {office.staff} {t.staff}</p>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Container>

      {/* Detail Modal */}
      {showDetail && selectedDept && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowDetail(false)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">{t.back}</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
                    <Share2 size={18} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
                    <Printer size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {/* Header with Image */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden ring-4 ring-primary-100">
                <img 
                  src={selectedDept.image || defaultImg} 
                  alt={selectedDept.name?.[currentLang] || selectedDept.title?.[currentLang]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {selectedDept.name?.[currentLang] || selectedDept.title?.[currentLang]}
                </h2>
                <p className="text-gray-500 mt-1">
                  {selectedDept.position?.[currentLang] || selectedDept.title?.[currentLang]}
                </p>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <Users size={18} className="text-primary-600 mb-2" />
                <div className="text-xl font-semibold text-gray-900">{selectedDept.staff || 0}</div>
                <div className="text-xs text-gray-500">{t.staff}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Calendar size={18} className="text-primary-600 mb-2" />
                <div className="text-xl font-semibold text-gray-900">{selectedDept.established || '2015'}</div>
                <div className="text-xs text-gray-500">{t.established}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Award size={18} className="text-primary-600 mb-2" />
                <div className="text-xl font-semibold text-gray-900">12</div>
                <div className="text-xs text-gray-500">{t.achievements}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Briefcase size={18} className="text-primary-600 mb-2" />
                <div className="text-xl font-semibold text-gray-900">8</div>
                <div className="text-xs text-gray-500">{t.projects}</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-900 mb-3">{t.contact}</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <a href={`mailto:${selectedDept.email}`} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary-600">
                  <Mail size={14} className="text-primary-500" />
                  <span>{selectedDept.email}</span>
                </a>
                <a href={`tel:${selectedDept.phone}`} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary-600">
                  <Phone size={14} className="text-primary-500" />
                  <span>{selectedDept.phone}</span>
                </a>
              </div>
            </div>

            {/* Description */}
            {selectedDept.description && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-gray-900 mb-2">{t.description}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedDept.description[currentLang]}
                </p>
              </div>
            )}

            {/* Responsibilities */}
            {selectedDept.responsibilities && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">{t.responsibilities}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {selectedDept.responsibilities[currentLang].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FullManagementStructurePage;