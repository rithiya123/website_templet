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
  Award
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
      title: 'តួនាទី និងការទទួលខុសត្រូវ',
      home: 'ទំព័រដើម',
      download: 'ទាញយក',
      share: 'ចែករំលែក',
      print: 'បោះពុម្ព',
      overview: 'ទិដ្ឋភាពទូទៅ',
      coreFunctions: 'តួនាទីស្នូល (Key Roles)',
      departments: 'រចនាសម្ព័ន្ធនាយកដ្ឋាន',
      leadership: 'ឋានានុក្រមគ្រប់គ្រង',
      responsibilities: 'ភារកិច្ចតាមដំណាក់កាល',
      keyResponsibilities: 'ភារកិច្ចសំខាន់ៗ',
      organizationalStructure: 'រចនាសម្ព័ន្ធអង្គភាព',
      readMore: 'អានបន្ត',
      viewDetails: 'មើលលម្អិត',
      
      // Overview
      overviewDesc: 'យោងតាម ប្រកាសលេខ ៧១១ តួនាទី និងការទទួលខុសត្រូវរបស់ អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ (GDR) ត្រូវបានកំណត់យ៉ាងច្បាស់លាស់ ដើម្បីធានាថាការអនុវត្តគម្រោងហេដ្ឋារចនាសម្ព័ន្ធរូបវន្ត (ផ្លូវ ស្ពាន សំណង់ផ្សេងៗ) ប្រព្រឹត្តទៅដោយរលូន។',
      
      // Core Roles
      role1: 'សេនាធិការបច្ចេកទេស',
      role1Desc: 'ផ្តល់យោបល់ជូនក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ និងរាជរដ្ឋាភិបាល លើរាល់បញ្ហាពាក់ព័ន្ធនឹងការដោះស្រាយផលប៉ះពាល់ដីធ្លី។',
      role2: 'ប្រតិបត្តិករវាស់វែង និងវាយតម្លៃ',
      role2Desc: 'ដឹកនាំក្រុមការងារអន្តរក្រសួង (IRC-WG) ដើម្បីចុះធ្វើជំរឿន និងកំណត់អត្តសញ្ញាណទ្រព្យសម្បត្តិដែលរងផលប៉ះពាល់។',
      role3: 'អ្នកគ្រប់គ្រងថវិកាសំណង',
      role3Desc: 'រៀបចំផែនការប្រើប្រាស់ថវិកាជាតិ ឬថវិកាកម្ចីពីបរទេស ដើម្បីទូទាត់សំណងជូនប្រជាពលរដ្ឋឱ្យបានត្រឹមត្រូវ។',
      
      // Phase Responsibilities
      phase1: 'ដំណាក់កាលរៀបចំ (Preparation)',
      phase1_1: 'ការសិក្សាបឋម',
      phase1_1Desc: 'វាយតម្លៃបឋមលើផលប៉ះពាល់សង្គម ដើម្បីរៀបចំរបាយការណ៍បច្ចេកទេស។',
      phase1_2: 'ការរៀបចំផែនការ',
      phase1_2Desc: 'ចងក្រង "ផែនការដោះស្រាយផលប៉ះពាល់" (Resettlement Plan) ដែលមានចែងពីចំនួនគ្រួសាររងគ្រោះ និងទំហំសំណងដែលត្រូវផ្តល់។',
      phase2: 'ដំណាក់កាលអនុវត្ត (Implementation)',
      phase2_1: 'ការចរចា និងចុះកិច្ចសន្យា',
      phase2_1Desc: 'ធ្វើការជាមួយប្រជាពលរដ្ឋម្នាក់ៗ ដើម្បីឯកភាពលើទំហំផលប៉ះពាល់ និងចំនួនទឹកប្រាក់សំណង។',
      phase2_2: 'ការទូទាត់សំណង',
      phase2_2Desc: 'ធានាថាប្រាក់សំណងត្រូវបានបើកជូនប្រជាពលរដ្ឋមុនពេលការឈូសឆាយដី ឬការចាប់ផ្តើមការដ្ឋានសំណង់។',
      phase2_3: 'ការរៀបចំដីឡូត៍សាងសង់ថ្មី',
      phase2_3Desc: 'ទទួលខុសត្រូវលើការរៀបចំទីតាំងតាំងទីលំនៅថ្មី (Relocation Site) ឱ្យមានទឹក ភ្លើង និងផ្លូវថ្នល់សមរម្យ។',
      phase3: 'ដំណាក់កាលត្រួតពិនិត្យ និងដោះស្រាយវិវាទ',
      phase3_1: 'ការតាមដាន',
      phase3_1Desc: 'ពិនិត្យមើលថាតើការរស់នៅរបស់ប្រជាពលរដ្ឋក្រោយពេលទទួលបានសំណង មានភាពប្រសើរឡើង ឬយ៉ាងហោចណាស់ក៏ស្មើនឹងកម្រិតមុនពេលមានគម្រោង។',
      phase3_2: 'ការដោះស្រាយបណ្តឹង',
      phase3_2Desc: 'ទទួលយកបណ្តឹងតវ៉ាពីប្រជាពលរដ្ឋ (ដូចជា ការវាស់វែងខ្វះ ឬមិនទាន់ទទួលបានប្រាក់) និងស្វែងរកដំណោះស្រាយតាមផ្លូវច្បាប់ដោយសន្តិវិធី។',
      
      // Department Responsibilities
      dept1: 'នាយកដ្ឋានកិច្ចការទូទៅ',
      dept1Desc: 'ទទួលបន្ទុករដ្ឋបាល បុគ្គលិក ហិរញ្ញវត្ថុ ភស្តុភារ និងការបណ្តុះបណ្តាល។',
      dept2: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ១',
      dept2Desc: 'អនុវត្តការដោះស្រាយផលប៉ះពាល់សម្រាប់គម្រោងថវិកាជាតិ។',
      dept3: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ២',
      dept3Desc: 'អនុវត្តការដោះស្រាយផលប៉ះពាល់សម្រាប់គម្រោងហិរញ្ញប្បទានដោយ ADB ។',
      dept4: 'នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ៣',
      dept4Desc: 'អនុវត្តការដោះស្រាយផលប៉ះពាល់សម្រាប់គម្រោងហិរញ្ញប្បទានដោយ World Bank ។',
      dept5: 'នាយកដ្ឋានត្រួតពិនិត្យផ្ទៃក្នុង និងគ្រប់គ្រងទិន្នន័យ',
      dept5Desc: 'តាមដានការអនុវត្តការងារ ធានាតម្លាភាព និងរៀបចំប្រព័ន្ធព័ត៌មានវិទ្យាសម្រាប់រក្សាទុកទិន្នន័យ។',
      
      // Leadership Responsibilities
      director: 'អគ្គនាយក',
      directorDesc: 'ដឹកនាំ និងសម្រេចចិត្តលើគោលការណ៍រួម និងចុះហត្ថលេខាលើឯកសារសំណងសំខាន់ៗ។',
      deputy1: 'អគ្គនាយករង',
      deputy1Desc: 'ជួយអគ្គនាយកក្នុងការត្រួតពិនិត្យនាយកដ្ឋាននីមួយៗតាមជំនាញ និងតំបន់ភូមិសាស្ត្រ។',
      deputy2: 'ប្រធាននាយកដ្ឋាន',
      deputy2Desc: 'ដឹកនាំមន្រ្តីបច្ចេកទេសចុះអនុវត្តការងារផ្ទាល់នៅតាមការដ្ឋាន និងធ្វើរបាយការណ៍វឌ្ឍនភាព។',
      
      // Statistics
      stat1: 'នាយកដ្ឋាន',
      stat2: 'មន្រ្តីជំនាញ',
      stat3: 'គម្រោងដែលបានដោះស្រាយ',
      stat4: 'គ្រួសារទទួលសំណង',
      
      contact: 'ទំនាក់ទំនងបន្ថែម',
      contactDesc: 'សម្រាប់ព័ត៌មានបន្ថែមអំពីតួនាទី និងការទទួលខុសត្រូវ សូមទំនាក់ទំនង',
      email: 'info@gdpir.gov.kh',
      phone: '071 258 0896'
    },
    en: {
      title: 'Roles & Responsibilities',
      home: 'Home',
      download: 'Download',
      share: 'Share',
      print: 'Print',
      overview: 'Overview',
      coreFunctions: 'Key Roles',
      departments: 'Department Structure',
      leadership: 'Management Hierarchy',
      responsibilities: 'Phase Responsibilities',
      keyResponsibilities: 'Key Responsibilities',
      organizationalStructure: 'Organizational Structure',
      readMore: 'Read More',
      viewDetails: 'View Details',
      
      // Overview
      overviewDesc: 'According to Prakas No. 711, the roles and responsibilities of the General Department of Project Impact Resolution (GDR) are clearly defined to ensure the smooth implementation of physical infrastructure projects (roads, bridges, and other structures).',
      
      // Core Roles
      role1: 'Technical Secretariat',
      role1Desc: 'Provide advice to the Ministry of Economy and Finance and the Royal Government on all matters related to land impact resolution.',
      role2: 'Measurement and Evaluation Operator',
      role2Desc: 'Lead the Inter-Ministerial Working Group (IRC-WG) to conduct census and identify affected properties.',
      role3: 'Compensation Budget Manager',
      role3Desc: 'Prepare plans for utilizing national budget or foreign loans to properly compensate citizens.',
      
      // Phase Responsibilities
      phase1: 'Preparation Phase',
      phase1_1: 'Preliminary Study',
      phase1_1Desc: 'Conduct preliminary assessment of social impacts to prepare technical reports.',
      phase1_2: 'Planning',
      phase1_2Desc: 'Compile the "Resettlement Plan" detailing affected households and compensation amounts to be provided.',
      phase2: 'Implementation Phase',
      phase2_1: 'Negotiation and Contracting',
      phase2_1Desc: 'Work with individual citizens to agree on the extent of impact and compensation amount.',
      phase2_2: 'Compensation Payment',
      phase2_2Desc: 'Ensure compensation is paid to citizens before land clearance or construction begins.',
      phase2_3: 'New Site Preparation',
      phase2_3Desc: 'Responsible for preparing relocation sites with adequate water, electricity, and roads.',
      phase3: 'Monitoring & Grievance Phase',
      phase3_1: 'Monitoring',
      phase3_1Desc: 'Check whether citizens\' living conditions improve or at least remain at pre-project levels after receiving compensation.',
      phase3_2: 'Complaint Resolution',
      phase3_2Desc: 'Receive complaints from citizens (such as measurement errors or delayed payments) and seek peaceful legal resolutions.',
      
      // Department Responsibilities
      dept1: 'Department of General Affairs',
      dept1Desc: 'Responsible for administration, personnel, finance, logistics, and training.',
      dept2: 'Impact Resolution Department 1',
      dept2Desc: 'Implement impact resolution for national budget projects.',
      dept3: 'Impact Resolution Department 2',
      dept3Desc: 'Implement impact resolution for ADB-funded projects.',
      dept4: 'Impact Resolution Department 3',
      dept4Desc: 'Implement impact resolution for World Bank-funded projects.',
      dept5: 'Department of Internal Inspection and Data Management',
      dept5Desc: 'Monitor work implementation, ensure transparency, and organize IT systems for data storage.',
      
      // Leadership Responsibilities
      director: 'Director General',
      directorDesc: 'Lead and make decisions on overall policies and sign important compensation documents.',
      deputy1: 'Deputy Director General',
      deputy1Desc: 'Assist the Director General in supervising departments according to expertise and geographical areas.',
      deputy2: 'Department Director',
      deputy2Desc: 'Lead technical officers to implement work on-site and prepare progress reports.',
      
      // Statistics
      stat1: 'Departments',
      stat2: 'Expert Staff',
      stat3: 'Projects Resolved',
      stat4: 'Families Compensated',
      
      contact: 'Further Contact',
      contactDesc: 'For more information about roles and responsibilities, please contact',
      email: 'info@gdpir.gov.kh',
      phone: '071 258 0896'
    }
  };

  const t = translations[currentLang];

  const coreFunctions = [
    { icon: <FileSignature size={24} />, title: t.role1, desc: t.role1Desc },
    { icon: <Ruler size={24} />, title: t.role2, desc: t.role2Desc },
    { icon: <Landmark size={24} />, title: t.role3, desc: t.role3Desc }
  ];

  const phaseResponsibilities = [
    {
      title: t.phase1,
      items: [
        { icon: <BookOpen size={20} />, name: t.phase1_1, desc: t.phase1_1Desc },
        { icon: <FileText size={20} />, name: t.phase1_2, desc: t.phase1_2Desc }
      ]
    },
    {
      title: t.phase2,
      items: [
        { icon: <Award size={20} />, name: t.phase2_1, desc: t.phase2_1Desc },
        { icon: <DollarSign size={20} />, name: t.phase2_2, desc: t.phase2_2Desc },
        { icon: <Building2 size={20} />, name: t.phase2_3, desc: t.phase2_3Desc }
      ]
    },
    {
      title: t.phase3,
      items: [
        { icon: <LineChart size={20} />, name: t.phase3_1, desc: t.phase3_1Desc },
        { icon: <MessageCircle size={20} />, name: t.phase3_2, desc: t.phase3_2Desc }
      ]
    }
  ];

  const departmentResponsibilities = [
    { dept: t.dept1, desc: t.dept1Desc, icon: <Building2 size={20} /> },
    { dept: t.dept2, desc: t.dept2Desc, icon: <Scale size={20} /> },
    { dept: t.dept3, desc: t.dept3Desc, icon: <Globe size={20} /> },
    { dept: t.dept4, desc: t.dept4Desc, icon: <TrendingUp size={20} /> },
    { dept: t.dept5, desc: t.dept5Desc, icon: <FileText size={20} /> }
  ];

  const leadershipResponsibilities = [
    { role: t.director, desc: t.directorDesc, icon: <Shield size={20} /> },
    { role: t.deputy1, desc: t.deputy1Desc, icon: <Users size={20} /> },
    { role: t.deputy2, desc: t.deputy2Desc, icon: <Target size={20} /> }
  ];

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
                <Link to="/" className="text-gray-500 hover:text-[#2E7D32] transition-colors">
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
            <span className="text-xs font-medium uppercase tracking-wider">{t.title}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">{t.title}</h1>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
            {currentLang === 'km' 
              ? 'តួនាទី និងការទទួលខុសត្រូវរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍'
              : 'Roles and responsibilities of the General Department of Project Impact Resolution'
            }
          </p>
          <div className="w-12 h-0.5 bg-[#4CAF50] mt-4"></div>
        </div>
      </Container>

      {/* Overview Section */}
      <Container className="pb-8">
        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 backdrop-blur-sm">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#2E7D32] rounded-lg text-white flex-shrink-0">
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

      {/* Core Roles Section */}
      <Container className="py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-[#4CAF50] bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <Target size={14} className="text-[#2E7D32]" />
            <span className="text-xs font-medium text-[#2E7D32] uppercase tracking-wider">
              {t.coreFunctions}
            </span>
          </div>
          <h2 className="text-xl font-light text-gray-900 mb-2">{t.coreFunctions}</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            {currentLang === 'km'
              ? 'GDR ដើរតួនាទីជា "អ្នកសម្របសម្រួលកណ្តាល" រវាងរដ្ឋម្ចាស់គម្រោង និងប្រជាពលរដ្ឋ'
              : 'GDR acts as a "central coordinator" between the project owner and citizens'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coreFunctions.map((func, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#4CAF50] transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#2E7D32]">
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

      {/* Phase Responsibilities Section */}
      <Container className="py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-[#4CAF50] bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <ClipboardList size={14} className="text-[#2E7D32]" />
            <span className="text-xs font-medium text-[#2E7D32] uppercase tracking-wider">
              {t.responsibilities}
            </span>
          </div>
          <h2 className="text-xl font-light text-gray-900 mb-2">{t.responsibilities}</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            {currentLang === 'km'
              ? 'ការទទួលខុសត្រូវរបស់ GDR ត្រូវបានបែងចែកជាដំណាក់កាលៗ'
              : 'GDR responsibilities are divided into phases'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phaseResponsibilities.map((phase, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#4CAF50] transition-all duration-300 backdrop-blur-sm">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-medium text-[#2E7D32] text-sm">{phase.title}</h3>
              </div>
              <div className="p-4 space-y-3">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <div className="p-1.5 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#2E7D32] mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
              <Building2 size={20} className="text-[#2E7D32]" />
              <h2 className="text-lg font-medium text-gray-900">{t.departments}</h2>
            </div>

            <div className="space-y-3">
              {departmentResponsibilities.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#4CAF50] transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#2E7D32]">
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
              <Users size={20} className="text-[#2E7D32]" />
              <h2 className="text-lg font-medium text-gray-900">{t.leadership}</h2>
            </div>

            <div className="space-y-3">
              {leadershipResponsibilities.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#4CAF50] transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#2E7D32]">
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

  
    </div>
  );
};

export default RolesResponsibilitiesPage;