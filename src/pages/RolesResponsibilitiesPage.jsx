// src/pages/RolesResponsibilitiesPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  Home,
  ChevronRight,
  Shield,
  Users,
  Building2,
  Scale,
  FileText,
  BookOpen,
  Award,
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
  HandshakeIcon,
  Clock,
  Globe,
  TrendingUp,
  UserCheck,
  Lock,
  Key,
  Phone,
  Mail,
  MapPin,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container.jsx';

const RolesResponsibilitiesPage = () => {
  const [currentLang, setCurrentLang] = useState('km');

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

  const translations = {
    km: {
      title: 'តួនាទី និងភារកិច្ច',
      home: 'ទំព័រដើម',
      download: 'ទាញយក',
      share: 'ចែករំលែក',
      print: 'បោះពុម្ព',
      overview: 'ទិដ្ឋភាពទូទៅ',
      coreFunctions: 'មុខងារស្នូល',
      departments: 'នាយកដ្ឋាន',
      leadership: 'ថ្នាក់ដឹកនាំ',
      responsibilities: 'ភារកិច្ចចម្បង',
      keyResponsibilities: 'ភារកិច្ចសំខាន់ៗ',
      organizationalStructure: 'រចនាសម្ព័ន្ធអង្គភាព',
      readMore: 'អានបន្ត',
      viewDetails: 'មើលលម្អិត',
      
      // Overview
      overviewDesc: 'អគ្គនាយកដ្ឋានពន្ធនាគារ គឺជាស្ថាប័នរដ្ឋាភិបាលដែលមានតួនាទីគ្រប់គ្រង និងអភិបាលកិច្ចពន្ធនាគារទូទាំងប្រទេសកម្ពុជា។ យើងខ្ញុំទទួលខុសត្រូវលើការឃុំខ្លួន អប់រំកែប្រែ និងស្តារនីតិសម្បទាអ្នកទោស ដោយឈរលើគោលការណ៍យុត្តិធម៌ សុវត្ថិភាព និងការគោរពសិទ្ធិមនុស្ស។',
      
      // Core Functions
      function1: 'ការគ្រប់គ្រងពន្ធនាគារ',
      function1Desc: 'គ្រប់គ្រង និងត្រួតពិនិត្យពន្ធនាគារទូទាំងប្រទេស ធានាសុវត្ថិភាព និងសណ្តាប់ធ្នាប់',
      function2: 'ការអប់រំកែប្រែ',
      function2Desc: 'ផ្តល់កម្មវិធីអប់រំ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈដល់អ្នកទោស',
      function3: 'ការស្តារនីតិសម្បទា',
      function3Desc: 'រៀបចំអ្នកទោសឱ្យរួមបញ្ចូលក្នុងសង្គមឡើងវិញ',
      function4: 'ការអនុវត្តច្បាប់',
      function4Desc: 'អនុវត្តតាមច្បាប់ និងបទប្បញ្ញត្តិពាក់ព័ន្ធនឹងពន្ធនាគារ',
      function5: 'ការការពារសិទ្ធិ',
      function5Desc: 'ការពារ និងគោរពសិទ្ធិមនុស្សរបស់អ្នកទោស',
      function6: 'ការអភិវឌ្ឍបុគ្គលិក',
      function6Desc: 'បណ្តុះបណ្តាល និងអភិវឌ្ឍន៍មន្រ្តីពន្ធនាគារ',
      
      // Department Responsibilities
      dept1: 'នាយកដ្ឋានគ្រប់គ្រងពន្ធនាគារ',
      dept1Desc: 'ទទួលខុសត្រូវលើការគ្រប់គ្រងប្រចាំថ្ងៃនៃពន្ធនាគារ សន្តិសុខ និងសណ្តាប់ធ្នាប់',
      dept2: 'នាយកដ្ឋានអប់រំកែប្រែ',
      dept2Desc: 'ទទួលខុសត្រូវលើកម្មវិធីអប់រំ បណ្តុះបណ្តាល និងកែប្រែអ្នកទោស',
      dept3: 'នាយកដ្ឋានហិរញ្ញវត្ថុ',
      dept3Desc: 'ទទួលខុសត្រូវលើការគ្រប់គ្រងថវិកា ហិរញ្ញវត្ថុ និងសម្ភារៈ',
      dept4: 'នាយកដ្ឋានធនធានមនុស្ស',
      dept4Desc: 'ទទួលខុសត្រូវលើការគ្រប់គ្រងបុគ្គលិក ការបណ្តុះបណ្តាល និងអភិវឌ្ឍន៍',
      dept5: 'នាយកដ្ឋានច្បាប់',
      dept5Desc: 'ទទួលខុសត្រូវលើការអនុវត្តច្បាប់ និងផ្តល់យោបល់ផ្នែកច្បាប់',
      
      // Leadership Responsibilities
      director: 'អគ្គនាយក',
      directorDesc: 'ដឹកនាំ និងគ្រប់គ្រងអគ្គនាយកដ្ឋានទាំងមូល កំណត់គោលនយោបាយ និងយុទ្ធសាស្ត្រ',
      deputy1: 'អគ្គនាយករងផ្នែករដ្ឋបាល',
      deputy1Desc: 'ទទួលខុសត្រូវលើការងាររដ្ឋបាល ហិរញ្ញវត្ថុ និងធនធានមនុស្ស',
      deputy2: 'អគ្គនាយករងផ្នែកប្រតិបត្តិការ',
      deputy2Desc: 'ទទួលខុសត្រូវលើការងារប្រតិបត្តិការ សន្តិសុខ និងអប់រំកែប្រែ',
      deputy3: 'អគ្គនាយករងផ្នែកផែនការ',
      deputy3Desc: 'ទទួលខុសត្រូវលើការរៀបចំផែនការ គម្រោង និងកិច្ចសហប្រតិបត្តិការអន្តរជាតិ',
      
      // Statistics
      stat1: 'ពន្ធនាគារ',
      stat2: 'មន្រ្តីជំនាញ',
      stat3: 'អ្នកទោសក្នុងបន្ទុក',
      stat4: 'កម្មវិធីអប់រំ',
      
      contact: 'ទំនាក់ទំនងបន្ថែម',
      contactDesc: 'សម្រាប់ព័ត៌មានបន្ថែមអំពីតួនាទី និងភារកិច្ច សូមទំនាក់ទំនង',
      email: 'info@prison.gov.kh',
      phone: '023 123 456'
    },
    en: {
      title: 'Roles & Responsibilities',
      home: 'Home',
      download: 'Download',
      share: 'Share',
      print: 'Print',
      overview: 'Overview',
      coreFunctions: 'Core Functions',
      departments: 'Departments',
      leadership: 'Leadership',
      responsibilities: 'Main Responsibilities',
      keyResponsibilities: 'Key Responsibilities',
      organizationalStructure: 'Organizational Structure',
      readMore: 'Read More',
      viewDetails: 'View Details',
      
      // Overview
      overviewDesc: 'The General Department of Prisons is a government institution responsible for managing and governing prisons throughout Cambodia. We are responsible for the detention, rehabilitation, and reintegration of prisoners, based on the principles of justice, security, and respect for human rights.',
      
      // Core Functions
      function1: 'Prison Management',
      function1Desc: 'Manage and supervise prisons nationwide, ensuring safety and order',
      function2: 'Rehabilitation Education',
      function2Desc: 'Provide education and vocational training programs to prisoners',
      function3: 'Reintegration',
      function3Desc: 'Prepare prisoners for reintegration into society',
      function4: 'Law Enforcement',
      function4Desc: 'Comply with laws and regulations related to prisons',
      function5: 'Rights Protection',
      function5Desc: 'Protect and respect the human rights of prisoners',
      function6: 'Staff Development',
      function6Desc: 'Train and develop prison officers',
      
      // Department Responsibilities
      dept1: 'Prison Management Department',
      dept1Desc: 'Responsible for daily prison management, security, and order',
      dept2: 'Rehabilitation Department',
      dept2Desc: 'Responsible for education, training, and rehabilitation programs',
      dept3: 'Finance Department',
      dept3Desc: 'Responsible for budget, financial, and material management',
      dept4: 'Human Resources Department',
      dept4Desc: 'Responsible for personnel management, training, and development',
      dept5: 'Legal Department',
      dept5Desc: 'Responsible for legal compliance and legal advice',
      
      // Leadership Responsibilities
      director: 'Director General',
      directorDesc: 'Lead and manage the entire department, set policies and strategies',
      deputy1: 'Deputy Director for Administration',
      deputy1Desc: 'Responsible for administration, finance, and human resources',
      deputy2: 'Deputy Director for Operations',
      deputy2Desc: 'Responsible for operations, security, and rehabilitation',
      deputy3: 'Deputy Director for Planning',
      deputy3Desc: 'Responsible for planning, projects, and international cooperation',
      
      // Statistics
      stat1: 'Prisons',
      stat2: 'Expert Staff',
      stat3: 'Prisoners',
      stat4: 'Education Programs',
      
      contact: 'Further Contact',
      contactDesc: 'For more information about roles and responsibilities, please contact',
      email: 'info@prison.gov.kh',
      phone: '023 123 456'
    }
  };

  const t = translations[currentLang];

  const coreFunctions = [
    { icon: <Building2 size={24} />, title: t.function1, desc: t.function1Desc },
    { icon: <BookOpen size={24} />, title: t.function2, desc: t.function2Desc },
    { icon: <RefreshCw size={24} />, title: t.function3, desc: t.function3Desc }, // Changed from Handshake to RefreshCw
    { icon: <Gavel size={24} />, title: t.function4, desc: t.function4Desc },
    { icon: <Heart size={24} />, title: t.function5, desc: t.function5Desc },
    { icon: <UserCheck size={24} />, title: t.function6, desc: t.function6Desc }
  ];

  const departmentResponsibilities = [
    { dept: t.dept1, desc: t.dept1Desc, icon: <Building2 size={20} /> },
    { dept: t.dept2, desc: t.dept2Desc, icon: <BookOpen size={20} /> },
    { dept: t.dept3, desc: t.dept3Desc, icon: <Briefcase size={20} /> },
    { dept: t.dept4, desc: t.dept4Desc, icon: <Users size={20} /> },
    { dept: t.dept5, desc: t.dept5Desc, icon: <Scale size={20} /> }
  ];

  const leadershipResponsibilities = [
    { role: t.director, desc: t.directorDesc, icon: <Shield size={20} /> },
    { role: t.deputy1, desc: t.deputy1Desc, icon: <Users size={20} /> },
    { role: t.deputy2, desc: t.deputy2Desc, icon: <Target size={20} /> },
    { role: t.deputy3, desc: t.deputy3Desc, icon: <Globe size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Breadcrumb */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-40">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Home size={18} className="text-gray-500" />
              </Link>
              
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm">
                <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors">
                  {t.home}
                </Link>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-gray-900 font-medium">អំពីអគ្គនាយកដ្ឋាន</span>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-primary-600 font-medium">{t.title}</span>
              </nav>
            </div>

            <div className="flex items-center space-x-1">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Download size={16} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Share2 size={16} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Printer size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Page Header */}
      <Container className="py-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-primary-600 mb-3">
            <Briefcase size={16} />
            <span className="text-xs font-medium uppercase tracking-wider">{t.title}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">{t.title}</h1>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
            {currentLang === 'km' 
              ? 'តួនាទី និងភារកិច្ចចម្បងរបស់អគ្គនាយកដ្ឋានពន្ធនាគារ'
              : 'Main roles and responsibilities of the General Department of Prisons'
            }
          </p>
          <div className="w-12 h-0.5 bg-primary-600 mt-4"></div>
        </div>
      </Container>

      {/* Overview Section */}
      <Container className="pb-8">
        <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border border-primary-100">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary-600 rounded-lg text-white flex-shrink-0">
              <Eye size={24} />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">{t.overview}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.overviewDesc}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Core Functions Section */}
      <Container className="py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
            <Target size={14} className="text-primary-600" />
            <span className="text-xs font-medium text-primary-700 uppercase tracking-wider">
              {t.coreFunctions}
            </span>
          </div>
          <h2 className="text-xl font-light text-gray-900 mb-2">{t.coreFunctions}</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            {currentLang === 'km'
              ? 'មុខងារសំខាន់ៗរបស់អគ្គនាយកដ្ឋាន'
              : 'Key functions of the department'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreFunctions.map((func, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                  {func.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{func.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{func.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Department Responsibilities */}
      <Container className="py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Departments */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 size={20} className="text-primary-600" />
              <h2 className="text-lg font-medium text-gray-900">{t.departments}</h2>
            </div>

            <div className="space-y-3">
              {departmentResponsibilities.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{item.dept}</h3>
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
              <Users size={20} className="text-primary-600" />
              <h2 className="text-lg font-medium text-gray-900">{t.leadership}</h2>
            </div>

            <div className="space-y-3">
              {leadershipResponsibilities.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{item.role}</h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Statistics Section */}
      <Container className="py-8">
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-light text-primary-600 mb-1">២៥+</div>
              <div className="text-xs text-gray-500">{t.stat1}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-primary-600 mb-1">១០០០+</div>
              <div className="text-xs text-gray-500">{t.stat2}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-primary-600 mb-1">១៥,០០០+</div>
              <div className="text-xs text-gray-500">{t.stat3}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-primary-600 mb-1">២០+</div>
              <div className="text-xs text-gray-500">{t.stat4}</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Contact Section */}
      <Container className="py-8">
        <div className="max-w-3xl mx-auto text-center bg-white border border-gray-200 rounded-xl p-8">
          <div className="mb-4">
            <AlertCircle size={24} className="text-primary-400 mx-auto" />
          </div>
          <h3 className="text-base font-medium text-gray-900 mb-2">{t.contact}</h3>
          <p className="text-xs text-gray-500 mb-4">{t.contactDesc}</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            <a href={`mailto:${t.email}`} className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700">
              <Mail size={14} />
              <span>{t.email}</span>
            </a>
            <a href={`tel:${t.phone}`} className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700">
              <Phone size={14} />
              <span>{t.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RolesResponsibilitiesPage;