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
  Home,
  CheckCircle,
  Database,
  Activity,
  Eye,
  Monitor,
  DollarSign,
  Map,
  HardHat,
  MessageSquare,
  Book,
  Server,
  PenTool,
  ClipboardList,
  LineChart,
  Target,
  Sparkles,
  ClipboardCheck,
  UsersRound,
  BarChart,
  TrendingUp as TrendingUpIcon,
  GraduationCap,
  Briefcase as BriefcaseIcon,
  Globe2,
  Medal,
  FileText as FileTextIcon,
  Languages
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container.jsx';
import defaultImg from '../images/director.jpg';
import logo from "../images/logo.png"

const FullManagementStructurePage = () => {
  const [currentLang, setCurrentLang] = useState('km');
  const [selectedDept, setSelectedDept] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageErrors, setImageErrors] = useState({});

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

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const translations = {
    km: {
      title: 'រចនាសម្ព័ន្ធគ្រប់គ្រង',
      subtitle: 'អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍',
      back: 'ត្រលប់ក្រោយ',
      home: 'ទំព័រដើម',
      director: 'អគ្គនាយក',
      deputyDirector: 'អគ្គនាយករង',
      departments: 'នាយកដ្ឋាន',
      viewDetails: 'មើលលម្អិត',
      zoomIn: 'ពង្រីក',
      zoomOut: 'បង្រួម',
      reset: 'កំណត់ឡើងវិញ',
      contact: 'ទំនាក់ទំនង',
      email: 'អ៊ីមែល',
      phone: 'ទូរស័ព្ទ',
      description: 'ការពិពណ៌នា',
      personalInfo: 'ព័ត៌មានផ្ទាល់ខ្លួន',
      education: 'កម្រិតវប្បធម៌',
      employment: 'ប្រវត្តិការងារ',
      publications: 'បោះពុម្ពផ្សាយ',
      decorations: 'គ្រឿងឥស្សរិយយស',
      languages: 'សមត្ថភាពភាសា',
      name: 'ឈ្មោះ',
      dob: 'ថ្ងៃខែឆ្នាំកំណើត',
      pob: 'ទីកន្លែងកំណើត',
      nationality: 'សញ្ជាតិ',
      maritalStatus: 'ស្ថានភាពគ្រួសារ',
      responsibilities: 'ភារកិច្ច',
      department: 'នាយកដ្ឋានទទួលបន្ទុក'
    },
    en: {
      title: 'Management Structure',
      subtitle: 'General Department of Project Impact Resolution',
      back: 'Back',
      home: 'Home',
      director: 'Director General',
      deputyDirector: 'Deputy Director General',
      departments: 'Departments',
      viewDetails: 'View Details',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      reset: 'Reset',
      contact: 'Contact',
      email: 'Email',
      phone: 'Phone',
      description: 'Description',
      personalInfo: 'Personal Information',
      education: 'Education',
      employment: 'Employment Records',
      publications: 'Publications',
      decorations: 'Decorations',
      languages: 'Languages',
      name: 'Name',
      dob: 'Date of Birth',
      pob: 'Place of Birth',
      nationality: 'Nationality',
      maritalStatus: 'Marital Status',
      responsibilities: 'Responsibilities',
      department: 'Department in Charge'
    }
  };

  const t = translations[currentLang];

  // Director General with full CV details
  const directorGeneral = {
    id: 'dg',
    name: { km: 'ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា', en: 'H.E. Im Sitthyra' },
    position: { km: 'ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុកជាអគ្គនាយក', en: 'Delegate of the Royal Government in charge as Director General' },
    email: 'xxx@mef.gov.kh',
    phone: '(+885) xx xxx xxxx',
    image: defaultImg,
    personalInfo: {
      name: { km: 'អ៊ឹម សិទ្ធីរ៉ា', en: 'IM SETHYRA' },
      dob: { km: 'ថ្ងៃទី ២១ ខែ ធ្នូ ឆ្នាំ ១៩៨០', en: '21 December 1980' },
      pob: { km: 'សង្កាត់លេខ៦ ក្រុងភ្នំពេញ', en: 'Sangkat 6, Phnom Penh' },
      nationality: { km: 'ខ្មែរ', en: 'Cambodian' },
      maritalStatus: { km: 'រៀបអាពាហ៍ពិពាហ៍', en: 'Married' }
    },
    education: [
      { year: '2002 - 2003', degree: { km: 'អនុបណ្ឌិតផ្នែកធុរកិច្ចអន្តរជាតិ', en: 'Master of Business Administration (MBA) in International Business' } },
      { year: '2001 - 2002', degree: { km: 'អនុបណ្ឌិតផ្នែកគ្រប់គ្រងសណ្ឋាគារ និងទេសចរណ៍អន្តរជាតិ', en: 'Master of Business Administration (MBA) in International Hotel and Tourism Management' } },
      { year: '1997 - 2001', degree: { km: 'បរិញ្ញាបត្រផ្នែកគណនេយ្យ', en: 'Bachelor of Business Administration (BBA) in Accounting' } },
      { year: '1994 - 1997', degree: { km: 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ', en: 'High School Diploma' } }
    ],
    employment: [
      { year: '2021 - បច្ចុប្បន្ន', title: { km: 'ប្រតិភូរាជរដ្ឋាភិបាលទទួលបន្ទុក ជាអគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍', en: 'Royal Government Delegate in charge as Director General, General Department of Resettlement (GDR)' } },
      { year: '2019 - បច្ចុប្បន្ន', title: { km: 'សមាជិកឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (ឋានៈស្មើ រដ្ឋលេខាធិការ)', en: 'Member of the Supreme National Economic Council (SNEC) (With the rank of Secretary of State)' } },
      { year: '2016 - 2021', title: { km: 'អគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍', en: 'Director General of the General Department of Resettlement' } },
      { year: '2015 - 2018', title: { km: 'ទីប្រឹក្សាឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (ឋានៈស្មើ អនុរដ្ឋលេខាធិការ)', en: 'Advisor to the Supreme National Economic Council (With the rank of Under Secretary of State)' } },
      { year: '2011 - 2016', title: { km: 'ប្រធាននាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍', en: 'Director of the Department of Resettlement' } },
      { year: '2007 - 2011', title: { km: 'អនុប្រធានអង្គភាពរៀបចំ អនុវត្ត ផែនការសកម្មភាពការតាំងទីលំនៅឡើងវិញ', en: 'Deputy Director of the Resettlement Unit' } },
      { year: '2005 - 2007', title: { km: 'អនុប្រធាននាយកដ្ឋានសមាហរណកម្មសេដ្ឋកិច្ច និងអាស៊ាន', en: 'Deputy Director of the Department of Economic Integration and ASEAN' } }
    ],
    publications: [
      { year: 'កុម្ភៈ ២០១៨', title: { km: 'ការដាក់ឱ្យប្រើប្រាស់ស្តង់ដានីតិវិធីប្រតិបត្តិសម្រាប់ការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍', en: 'The Promulgation of the Standard Operating Procedures for Land Acquisition and Involuntary Resettlement for Externally Financed Projects in Cambodia' } }
    ],
    decorations: [
      { year: '2023', title: { km: 'ប្រកាសនីយបត្រគ្រឿងឥស្សរិយយស ជាតូបការ', en: 'Certificate of Grand Order of National Merit' } },
      { year: '2022', title: { km: 'ប្រកាសនីយបត្រគ្រឿងឥស្សរិយយស ជាតូបការ', en: 'Certificate of Grand Order of National Merit' } },
      { year: '2019', title: { km: 'គ្រឿងឥស្សរិយយស ជាតូបការ', en: 'Grand Order of National Merit' } },
      { year: '2017', title: { km: 'គ្រឿងឥស្សរិយយស សុវត្ថារា ថ្នាក់ មហាសេរីវឌ្ឍន៍', en: 'Royal Order of Sowathara Grand Cross' } },
      { year: '2013', title: { km: 'គ្រឿងឥស្សរិយយស ព្រះរាជាណាចក្រកម្ពុជា ថ្នាក់ មហាសេរីវឌ្ឍន៍', en: 'Royal Order of Cambodia Grand Cross' } },
      { year: '2012', title: { km: 'គ្រឿងឥស្សរិយយស សុវត្ថារា ថ្នាក់ មហាសេរីវឌ្ឍន៍', en: 'Royal Order of Sowathara Grand Cross' } },
      { year: '2011', title: { km: 'គ្រឿងឥស្សរិយយស ព្រះរាជាណាចក្រកម្ពុជា ថ្នាក់ មហាសេនា', en: 'Royal Order of Cambodia Grand Officer' } },
      { year: '2009', title: { km: 'គ្រឿងឥស្សរិយយស ព្រះរាជាណាចក្រកម្ពុជា ថ្នាក់ មហាសេនា', en: 'Royal Order of Cambodia Grand Officer' } },
      { year: '2008', title: { km: 'គ្រឿងឥស្សរិយយស ព្រះរាជាណាចក្រកម្ពុជា ថ្នាក់ អស្សឬទ្ធិ', en: 'Royal Order of Cambodia Knight' } }
    ],
    languages: {
      desc: { km: 'ភាសាកំណើត: ខ្មែរ, ភាសាបរទេស: អង់គ្លេស និង បារាំង', en: 'Native: Khmer, Foreign: English and French' }
    }
  };

  // Deputy Directors with detailed information
  const deputyDirectors = [
    { 
      id: 'deputy1', 
      name: { km: 'លោក លី ហៃម៉ីន', en: 'Mr. Ly Haimen' }, 
      email: 'xxx@mef.gov.kh', 
      phone: '(+855) xx xxx xxxx', 
      image: logo,
      position: { km: 'អគ្គនាយករង', en: 'Deputy Director General' },
      department: { km: 'នាយកដ្ឋានកិច្ចការទូទៅ', en: 'Department of General Affairs' },
      responsibilities: {
        km: 'ទទួលបន្ទុកគ្រប់គ្រងផ្នែករដ្ឋបាល បុគ្គលិក ហិរញ្ញវត្ថុ និងកិច្ចការច្បាប់ទាំងអស់របស់អគ្គនាយកដ្ឋាន',
        en: 'Responsible for managing all administrative, personnel, financial, and legal affairs of the General Department'
      }
    },
    { 
      id: 'deputy2', 
      name: { km: 'លោក យ៉េន សុភ័ណ', en: 'Mr. Yen Sophorn' }, 
      email: 'xxx@mef.gov.kh', 
      phone: '(+855) xx xxx xxxx', 
      image: logo,
      position: { km: 'អគ្គនាយករង', en: 'Deputy Director General' },
      department: { km: 'នាយកដ្ឋានត្រួតពិនិត្យផ្ទៃក្នុង និងគ្រប់គ្រងទិន្នន័យ', en: 'Department of Internal Inspection and Data Management' },
      responsibilities: {
        km: 'ទទួលបន្ទុកត្រួតពិនិត្យ និងតាមដានការអនុវត្តការងាររបស់នាយកដ្ឋានទាំងអស់ និងគ្រប់គ្រងប្រព័ន្ធទិន្នន័យ',
        en: 'Responsible for monitoring and tracking the implementation of all departments and managing the data system'
      }
    },
    { 
      id: 'deputy3', 
      name: { km: 'លោក ប៊ុត សង្វារ', en: 'Mr. But Sangvar' }, 
      email: 'xxx@mef.gov.kh', 
      phone: '(+855) xx xxx xxxx', 
      image: logo,
      position: { km: 'អគ្គនាយករង', en: 'Deputy Director General' },
      department: { km: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ១', en: 'Impact Resolution Department 1' },
      responsibilities: {
        km: 'ទទួលបន្ទុកគម្រោងដែលប្រើប្រាស់ថវិកាជាតិ និងគម្រោងរបស់ធនាគារពិភពលោក (WB)',
        en: 'Responsible for projects using national budget and World Bank (WB) projects'
      }
    },
    { 
      id: 'deputy4', 
      name: { km: 'លោក ចាន់ ថង់', en: 'Mr. Chan Thong' }, 
      email: 'xxx@mef.gov.kh', 
      phone: '(+855) xx xxx xxxx', 
      image: logo,
      position: { km: 'អគ្គនាយករង', en: 'Deputy Director General' },
      department: { km: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ២', en: 'Impact Resolution Department 2' },
      responsibilities: {
        km: 'ទទួលបន្ទុកគម្រោងរបស់ធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB)',
        en: 'Responsible for Asian Development Bank (ADB) projects'
      }
    },
    { 
      id: 'deputy5', 
      name: { km: 'លោក ស្រ៊ាង លឹមស្រូយ', en: 'Mr. Sreng Limsroy' }, 
      email: 'xxx@mef.gov.kh', 
      phone: '(+855) xx xxx xxxx', 
      image: logo,
      position: { km: 'អគ្គនាយករង', en: 'Deputy Director General' },
      department: { km: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ៣', en: 'Impact Resolution Department 3' },
      responsibilities: {
        km: 'ទទួលបន្ទុកគម្រោងដែលប្រើប្រាស់ទុនវិនិយោគពីប្រទេសចិន និងដៃគូទ្វេភាគី',
        en: 'Responsible for projects using investment capital from China and bilateral partners'
      }
    }
  ];

  // Departments
  const departments = [
    { id: 'dept1', name: { km: 'នាយកដ្ឋានកិច្ចការទូទៅ', en: 'Department of General Affairs' }, head: { km: 'លោក ពិន និលឡា', en: 'Mr. Pin Neilla' }, email: 'xxx@mef.gov.kh', phone: '(+855) xx xxx xxxx', image: logo },
    { id: 'dept2', name: { km: 'នាយកដ្ឋានត្រួតពិនិត្យផ្ទៃក្នុង និងគ្រប់គ្រងទិន្នន័យ', en: 'Department of Internal Inspection and Data Management' }, head: { km: 'លោក គង់ រដ្ឋា', en: 'Mr. Kong Rattha' }, email: 'xxx@mef.gov.kh', phone: '(+855) xx xxx xxxx', image: logo },
    { id: 'dept3', name: { km: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ១', en: 'Impact Resolution Department 1' }, head: { km: 'លោក សេង វណ្ណឌី', en: 'Mr. Seng Vandy' }, email: 'xxx@mef.gov.kh', phone: '(+855) xx xxx xxxx', image: logo },
    { id: 'dept4', name: { km: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ២', en: 'Impact Resolution Department 2' }, head: { km: 'លោក ស៊ន់ សេរីវឌ្ឍនៈ', en: 'Mr. Son Serey Vatthana' }, email: 'xxxmef.gov.kh', phone: '(+855) xx xxx xxxx', image: logo },
    { id: 'dept5', name: { km: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ៣', en: 'Impact Resolution Department 3' }, head: { km: 'លោក គីម ច័ន្ទវិបុល', en: 'Mr. Kim Chanvipol' }, email: 'xxx@mef.gov.kh', phone: '(+855) xx xxx xxxx', image: logo }
  ];

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.8));
  const handleZoomReset = () => setZoomLevel(1);
  const handleNodeClick = (node) => { setSelectedDept(node); setShowDetail(true); };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <Container className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/" className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                  <Home size={20} className="text-gray-600" />
                </Link>
                <nav className="flex items-center space-x-2 text-sm">
                  <Link to="/" className="text-gray-500 hover:text-green-700">{t.home}</Link>
                  <ChevronRight size={14} className="text-gray-400" />
                  <span className="text-green-700 font-medium">{t.title}</span>
                </nav>
              </div>
              <div className="flex items-center space-x-1">
                <button onClick={handleZoomIn} className="p-2 hover:bg-green-50 rounded-lg"><ZoomIn size={18} className="text-gray-600" /></button>
                <button onClick={handleZoomOut} className="p-2 hover:bg-green-50 rounded-lg"><ZoomOut size={18} className="text-gray-600" /></button>
                <button onClick={handleZoomReset} className="p-2 hover:bg-green-50 rounded-lg"><Maximize2 size={18} className="text-gray-600" /></button>
              </div>
            </div>
          </Container>
        </div>

      {/* Page Title */}
      <Container className="py-10">
  <div className="border-l-4 border-green-600 pl-6">
    <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2">
      {t.subtitle}
    </h1>
    <p className="text-gray-500 text-sm">
      {t.description}
    </p>
  </div>
</Container>
      {/* Main Content */}
      <Container className="py-4 pb-16">
        <div style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }} className="transition-transform duration-300">
          
          {/* Director General */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-full max-w-md cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleNodeClick(directorGeneral)}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-white overflow-hidden ring-2 ring-green-300">
                  <img src={directorGeneral.image} alt={directorGeneral.name[currentLang]} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-green-600 mb-1">{t.director}</p>
                  <p className="text-base font-semibold text-gray-900">{directorGeneral.name[currentLang]}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <a href={`mailto:${directorGeneral.email}`} className="text-green-500 hover:text-green-700"><Mail size={14} /></a>
                    <a href={`tel:${directorGeneral.phone}`} className="text-green-500 hover:text-green-700"><Phone size={14} /></a>
                  </div>
                </div>
                <ChevronRight size={18} className="text-green-500" />
              </div>
            </div>
          </div>

          {/* Deputy Directors - 5 Columns */}
          <div className="mb-8">
            <h3 className="text-center text-sm font-medium text-green-700 mb-3">{t.deputyDirector}</h3>
            <div className="grid grid-cols-5 gap-3">
              {deputyDirectors.map((deputy) => (
                <div key={deputy.id} className="bg-white border border-green-100 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleNodeClick(deputy)}>
                  <div className="w-12 h-12 rounded-full bg-green-100 overflow-hidden mx-auto mb-2">
                    <img src={deputy.image} alt={deputy.name[currentLang]} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs font-medium text-gray-800 line-clamp-2">{deputy.name[currentLang]}</p>
                  <div className="flex items-center justify-center space-x-2 mt-1">
                    <a href={`mailto:${deputy.email}`} onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-green-600"><Mail size={10} /></a>
                    <a href={`tel:${deputy.phone}`} onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-green-600"><Phone size={10} /></a>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-0.5 h-8 bg-green-300 mx-auto mt-4"></div>
            <div className="text-xs text-gray-400 text-center mt-1">{t.departments}</div>
          </div>

          {/* Departments - 5 Columns */}
          <div className="grid grid-cols-5 gap-3">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white border border-green-100 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleNodeClick(dept)}>
                <div className="w-12 h-12 rounded-full bg-green-100 overflow-hidden mx-auto mb-2">
                  <img src={dept.image} alt={dept.name[currentLang]} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-medium text-gray-800 line-clamp-2">{dept.name[currentLang]}</p>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  <a href={`mailto:${dept.email}`} onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-green-600"><Mail size={10} /></a>
                  <a href={`tel:${dept.phone}`} onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-green-600"><Phone size={10} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Detail Modal */}
      {showDetail && selectedDept && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto animate-in fade-in duration-300">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl z-10">
                <div className="px-6 py-4 flex items-center justify-between">
                  <button
                    onClick={() => setShowDetail(false)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-700 transition-colors group"
                  >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm">{t.back}</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-green-50 rounded-lg text-gray-600 transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Header with Image and Light Green Background */}
                <div className="bg-green-50 rounded-2xl p-6 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Profile Image */}
                    <div className="w-24 h-24 rounded-full bg-white overflow-hidden ring-4 ring-green-200 shadow-lg flex-shrink-0">
                      <img 
                        src={selectedDept.image || defaultImg} 
                        alt={selectedDept.name?.[currentLang] || selectedDept.title?.[currentLang]}
                        className="w-full h-full object-cover"
                        onError={(e) => e.target.src = defaultImg}
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedDept.name?.[currentLang] || selectedDept.title?.[currentLang]}
                      </h2>
                      <p className="text-green-600 font-medium mt-1">
                        {selectedDept.position?.[currentLang] || selectedDept.title?.[currentLang]}
                      </p>
                      {selectedDept.deputyHead && (
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">{t.deputyDirector}:</span> {selectedDept.deputyHead[currentLang]}
                        </p>
                      )}
                      {selectedDept.projectTypes && (
                        <div className="mt-2 inline-flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
                          <Target size={12} className="text-green-600" />
                          <span className="text-xs font-medium text-gray-700">{selectedDept.projectTypes[currentLang]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* If Director General, show full CV */}
                {selectedDept.id === 'dg' ? (
                  <>
                    {/* Personal Information */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <User size={18} className="text-green-600" />
                        {t.personalInfo}
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs text-gray-500">{t.name}</p>
                            <p className="text-sm text-gray-800">{selectedDept.personalInfo.name[currentLang]}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">{t.dob}</p>
                            <p className="text-sm text-gray-800">{selectedDept.personalInfo.dob[currentLang]}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">{t.pob}</p>
                            <p className="text-sm text-gray-800">{selectedDept.personalInfo.pob[currentLang]}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">{t.nationality}</p>
                            <p className="text-sm text-gray-800">{selectedDept.personalInfo.nationality[currentLang]}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">{t.maritalStatus}</p>
                            <p className="text-sm text-gray-800">{selectedDept.personalInfo.maritalStatus[currentLang]}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <GraduationCap size={18} className="text-green-600" />
                        {t.education}
                      </h3>
                      <div className="space-y-3">
                        {selectedDept.education.map((edu, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-green-600 font-medium">{edu.year}</p>
                            <p className="text-sm text-gray-800 mt-1">{edu.degree[currentLang]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Employment */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <BriefcaseIcon size={18} className="text-green-600" />
                        {t.employment}
                      </h3>
                      <div className="space-y-3">
                        {selectedDept.employment.map((job, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-green-600 font-medium">{job.year}</p>
                            <p className="text-sm text-gray-800 mt-1">{job.title[currentLang]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <FileTextIcon size={18} className="text-green-600" />
                        {t.publications}
                      </h3>
                      <div className="space-y-3">
                        {selectedDept.publications.map((pub, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-green-600 font-medium">{pub.year}</p>
                            <p className="text-sm text-gray-800 mt-1">{pub.title[currentLang]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorations */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Medal size={18} className="text-green-600" />
                        {t.decorations}
                      </h3>
                      <div className="space-y-3">
                        {selectedDept.decorations.map((dec, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-green-600 font-medium">{dec.year}</p>
                            <p className="text-sm text-gray-800 mt-1">{dec.title[currentLang]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Languages size={18} className="text-green-600" />
                        {t.languages}
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-800">{selectedDept.languages.desc[currentLang]}</p>
                      </div>
                    </div>
                  </>
                ) : selectedDept.department ? (
                  /* For Deputy Directors - Show detailed info */
                  <>
                    {/* Department in Charge */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Building2 size={18} className="text-green-600" />
                        {t.department}
                      </h3>
                      <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                        {selectedDept.department[currentLang]}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    {/* <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <ClipboardList size={18} className="text-green-600" />
                        {t.responsibilities}
                      </h3>
                      <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                        {selectedDept.responsibilities[currentLang]}
                      </p>
                    </div> */}
                  </>
                ) : (
                  /* For Departments - Show Description and Core Functions */
                  <>
                    {/* Description */}
                    {selectedDept.description && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <BookOpen size={18} className="text-green-600" />
                          {t.description}
                        </h3>
                        <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                          {selectedDept.description[currentLang]}
                        </p>
                      </div>
                    )}

                    {/* Core Functions */}
                    {selectedDept.coreFunctions && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Target size={18} className="text-green-600" />
                          {t.coreFunctions}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedDept.coreFunctions[currentLang].map((func, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-start space-x-3">
                                <div className="p-2 bg-green-50 rounded-lg flex-shrink-0 text-green-600">
                                  {func.icon}
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 text-sm mb-1">{func.title}</h4>
                                  <p className="text-xs text-gray-500">{func.desc}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Contact Information */}
                {selectedDept.email && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">{t.contact}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <a href={`mailto:${selectedDept.email}`} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-green-700 transition-colors">
                        <Mail size={14} className="text-green-600" />
                        <span>{selectedDept.email}</span>
                      </a>
                      <a href={`tel:${selectedDept.phone}`} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-green-700 transition-colors">
                        <Phone size={14} className="text-green-600" />
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
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default FullManagementStructurePage;