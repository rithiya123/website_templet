// src/components/home/ManagementStructure.jsx
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
  X,
  Calendar,
  Award,
  BookOpen,
  Clock,
  Download,
  Share2,
  Printer,
  User,
  MessageCircle,
  Heart,
  FileText,
  Briefcase,
  Star,
  ChevronLeft
} from 'lucide-react';
import defaultImg from '../../images/image.png';

const ManagementStructure = ({ onViewFull }) => {
  const [currentLang, setCurrentLang] = useState('km');
  const [hoveredDept, setHoveredDept] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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

  // Lock body scroll when detail is open
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
      title: 'រចនាសម្ព័ន្ធគ្រប់គ្រង',
      subtitle: 'អង្គភាពក្រោមឱវាទ',
      viewAll: 'មើលទាំងអស់',
      director: 'អគ្គនាយក',
      departments: 'នាយកដ្ឋាន',
      staff: 'នាក់',
      view: 'មើល',
      back: 'ត្រលប់ក្រោយ',
      overview: 'ទិដ្ឋភាពទូទៅ',
      team: 'ក្រុមការងារ',
      projects: 'គម្រោង',
      contact: 'ទំនាក់ទំនង',
      departmentHead: 'ប្រធាននាយកដ្ឋាន',
      email: 'អ៊ីមែល',
      phone: 'ទូរស័ព្ទ',
      employees: 'បុគ្គលិក',
      established: 'បង្កើតឡើង',
      description: 'ការពិពណ៌នា',
      responsibilities: 'ភារកិច្ច',
      achievements: 'សមិទ្ធិផល',
      viewFullProfile: 'មើលប្រវត្តិរូបពេញលេញ',
      share: 'ចែករំលែក',
      download: 'ទាញយក',
      print: 'បោះពុម្ព',
      save: 'រក្សាទុក'
    },
    en: {
      title: 'Management Structure',
      subtitle: 'Subordinate Units',
      viewAll: 'View All',
      director: 'Director General',
      departments: 'Departments',
      staff: 'staff',
      view: 'View',
      back: 'Back',
      overview: 'Overview',
      team: 'Team',
      projects: 'Projects',
      contact: 'Contact',
      departmentHead: 'Department Head',
      email: 'Email',
      phone: 'Phone',
      employees: 'Employees',
      established: 'Established',
      description: 'Description',
      responsibilities: 'Responsibilities',
      achievements: 'Achievements',
      viewFullProfile: 'View Full Profile',
      share: 'Share',
      download: 'Download',
      print: 'Print',
      save: 'Save'
    }
  };

  const t = translations[currentLang];

  const departments = [
    {
      id: 1,
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
      team: [
        { name: { km: 'លោក សុខ វុទ្ធី', en: 'Mr. Sok Vuthy' }, role: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' }, image: 'https://i.pravatar.cc/150?img=1' },
        { name: { km: 'លោកស្រី ច័ន្ទ សុភាព', en: 'Ms. Chan Sopheap' }, role: { km: 'អនុប្រធាន', en: 'Deputy Director' }, image: 'https://i.pravatar.cc/150?img=8' },
        { name: { km: 'លោក រស់ វុទ្ធី', en: 'Mr. Ros Vuthy' }, role: { km: 'ប្រធានការិយាល័យ', en: 'Office Chief' }, image: 'https://i.pravatar.cc/150?img=9' }
      ]
    },
    {
      id: 2,
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
      team: [
        { name: { km: 'លោកស្រី ជា ស្រីពេជ្រ', en: 'Ms. Chea Srey Pich' }, role: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' }, image: 'https://i.pravatar.cc/150?img=2' },
        { name: { km: 'លោក សុខ ដារ៉ា', en: 'Mr. Sok Dara' }, role: { km: 'អនុប្រធាន', en: 'Deputy Director' }, image: 'https://i.pravatar.cc/150?img=5' }
      ]
    },
    {
      id: 3,
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
      team: [
        { name: { km: 'លោក ហេង សុខា', en: 'Mr. Heng Sokha' }, role: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' }, image: 'https://i.pravatar.cc/150?img=3' },
        { name: { km: 'លោកស្រី នួន ស្រីនាថ', en: 'Ms. Nuon Sreinath' }, role: { km: 'អនុប្រធាន', en: 'Deputy Director' }, image: 'https://i.pravatar.cc/150?img=6' }
      ]
    },
    {
      id: 4,
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
      team: [
        { name: { km: 'លោកស្រី ពៅ ម៉ាលី', en: 'Ms. Pau Mali' }, role: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' }, image: 'https://i.pravatar.cc/150?img=4' }
      ]
    },
    {
      id: 5,
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
      team: [
        { name: { km: 'លោក សុខ ដារ៉ា', en: 'Mr. Sok Dara' }, role: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' }, image: 'https://i.pravatar.cc/150?img=5' }
      ]
    },
    {
      id: 6,
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
      team: [
        { name: { km: 'លោកស្រី នួន ស្រីនាថ', en: 'Ms. Nuon Sreinath' }, role: { km: 'ប្រធាននាយកដ្ឋាន', en: 'Department Director' }, image: 'https://i.pravatar.cc/150?img=6' }
      ]
    }
  ];

  // Director General
  const directorGeneral = {
    name: { km: 'ឯកឧត្តម អ៊ឹង កន្ថាផាវ័ន្ធ', en: 'H.E. Ung Kunthaphavorn' },
    position: { km: 'អគ្គនាយក', en: 'Director General' },
    email: 'director.general@irc.gov.kh',
    phone: '023 123 455',
    image: 'https://i.pravatar.cc/150?img=7'
  };

  // Get color classes
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

  const handleViewDetail = (dept) => {
    setSelectedDept(dept);
    setShowDetail(true);
    setActiveTab('overview');
    window.scrollTo(0, 0);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedDept(null);
  };

  const handleViewFullChart = () => {
    if (onViewFull) {
      onViewFull();
    }
  };

  return (
    <div className="mt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {t.title}
          </h2>
          <p className="text-sm text-gray-500 flex items-center">
            <Building2 size={14} className="mr-1" />
            {t.subtitle}
          </p>
        </div>
        
        <a 
          href="#" 
          className="group flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <span>{t.viewAll}</span>
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Director General Card - Top Level */}
      <div className="mb-8">
        <div className="bg-gray-900 text-white rounded-lg p-4 max-w-md mx-auto">
          <div className="flex items-center space-x-4">
            {/* Profile Image */}
            <div className="w-16 h-16 rounded-full border-2 border-white/30 overflow-hidden flex-shrink-0">
              <img 
                src={directorGeneral.image} 
                alt={directorGeneral.name[currentLang]}
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = defaultImg}
              />
            </div>
            
            {/* Info */}
            <div className="flex-1">
              <p className="text-xs text-gray-400 mb-1">{t.director}</p>
              <p className="text-base font-semibold">{directorGeneral.name[currentLang]}</p>
              <p className="text-xs text-gray-400 mt-1">{directorGeneral.name[currentLang === 'km' ? 'en' : 'km']}</p>
              
              {/* Contact Icons */}
              <div className="flex items-center space-x-3 mt-2">
                <a href={`mailto:${directorGeneral.email}`} className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={14} />
                </a>
                <a href={`tel:${directorGeneral.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  <Phone size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connecting Line */}
        <div className="w-0.5 h-8 bg-gray-300 mx-auto mt-2"></div>
        <div className="text-xs text-gray-400 text-center mt-1">{t.departments}</div>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept, index) => {
          const colorClasses = getColorClasses(dept.color);
          
          return (
            <div
              key={index}
              className={`group relative bg-white border ${colorClasses.split(' ')[0]} rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer`}
              onMouseEnter={() => setHoveredDept(index)}
              onMouseLeave={() => setHoveredDept(null)}
              onClick={() => handleViewDetail(dept)}
            >
              {/* Color Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${colorClasses.split(' ')[1]} rounded-t-lg`}></div>
              
              <div className="p-4">
                {/* Department Header with Icon */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className={`p-2 ${colorClasses.split(' ')[1]} ${colorClasses.split(' ')[2]} rounded-lg`}>
                    {dept.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 flex-1">
                    {dept.name[currentLang]}
                  </h3>
                </div>

                {/* Profile Section */}
                <div className="flex items-center space-x-3 mb-3">
                  {/* Profile Image */}
                  <div className="w-12 h-12 rounded-full border-2 border-gray-200 overflow-hidden flex-shrink-0">
                    <img 
                      src={dept.image} 
                      alt={dept.head[currentLang]}
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.src = defaultImg}
                    />
                  </div>
                  
                  {/* Head Info */}
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">{dept.position[currentLang]}</p>
                    <p className="text-sm font-medium text-gray-800">{dept.head[currentLang]}</p>
                    
                    {/* Contact Icons */}
                    <div className="flex items-center space-x-2 mt-1">
                      <a href={`mailto:${dept.email}`} onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Mail size={12} />
                      </a>
                      <a href={`tel:${dept.phone}`} onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Phone size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Staff Count and View Link */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-1">
                    <Users size={12} className="text-gray-400" />
                    <span className="text-xs text-gray-500">{dept.staff} {t.staff}</span>
                  </div>
                  
                  <span className="flex items-center space-x-1 text-xs text-gray-400 hover:text-gray-900 transition-colors">
                    <span>{t.view}</span>
                    <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Hover Effect - Bottom Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${colorClasses.split(' ')[1]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          );
        })}
      </div>

      {/* Organization Chart Link - Updated to use onViewFull prop */}
      <div className="mt-8 text-center">
        <button
          onClick={handleViewFullChart}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all duration-300 group"
        >
          <Globe size={16} className="text-gray-500 group-hover:text-gray-900" />
          <span className="text-sm text-gray-600 group-hover:text-gray-900">
            {currentLang === 'km' ? 'មើលតារាងរចនាសម្ព័ន្ធពេញលេញ' : 'View Full Organization Chart'}
          </span>
          <ChevronRight size={14} className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
        </button>      
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
        <span className="flex items-center">
          <span className="w-3 h-3 bg-blue-50 border border-blue-200 rounded-sm mr-1"></span>
          គ្រប់គ្រងក្រុមហ៊ុន
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-green-50 border border-green-200 rounded-sm mr-1"></span>
          ហិរញ្ញវត្ថុ
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-purple-50 border border-purple-200 rounded-sm mr-1"></span>
          ច្បាប់
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-orange-50 border border-orange-200 rounded-sm mr-1"></span>
          គោលនយោបាយ
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-red-50 border border-red-200 rounded-sm mr-1"></span>
          ស្ថិតិ
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-teal-50 border border-teal-200 rounded-sm mr-1"></span>
          ធនធានមនុស្ស
        </span>
      </div>

      {/* Department Detail Modal */}
      {showDetail && selectedDept && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto animate-slideInRight">
          {/* Sticky Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleCloseDetail}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-colors group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span>{t.back}</span>
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

          {/* Content */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            {/* Hero Section with Department Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img 
                src={selectedDept.image} 
                alt={selectedDept.name[currentLang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Department Name on Image */}
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {selectedDept.name[currentLang]}
                </h1>
                <p className="text-sm text-gray-200 mt-2">{selectedDept.name[currentLang === 'km' ? 'en' : 'km']}</p>
              </div>

              {/* Established Badge */}
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm flex items-center">
                <Calendar size={14} className="mr-1" />
                {t.established}: {selectedDept.established}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Users size={20} className="mx-auto text-blue-900 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{selectedDept.staff}</div>
                <div className="text-xs text-gray-500">{t.employees}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Award size={20} className="mx-auto text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-xs text-gray-500">{t.achievements}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Briefcase size={20} className="mx-auto text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-xs text-gray-500">{t.projects}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Star size={20} className="mx-auto text-yellow-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                    activeTab === 'overview'
                      ? 'text-blue-900 border-b-2 border-blue-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {t.overview}
                </button>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                    activeTab === 'team'
                      ? 'text-blue-900 border-b-2 border-blue-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {t.team} ({selectedDept.team.length})
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                    activeTab === 'contact'
                      ? 'text-blue-900 border-b-2 border-blue-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {t.contact}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Description */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <FileText size={18} className="mr-2 text-blue-900" />
                    {t.description}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedDept.description[currentLang]}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <BookOpen size={18} className="mr-2 text-blue-900" />
                    {t.responsibilities}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {selectedDept.responsibilities[currentLang].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Award size={18} className="mr-2 text-blue-900" />
                    {t.achievements}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {selectedDept.achievements[currentLang].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="space-y-4">
                {/* Department Head */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-sm font-medium text-blue-900 mb-4">{t.departmentHead}</h3>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={selectedDept.image} 
                      alt={selectedDept.head[currentLang]}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{selectedDept.head[currentLang]}</h4>
                      <p className="text-sm text-gray-600">{selectedDept.position[currentLang]}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <a href={`mailto:${selectedDept.email}`} className="text-gray-500 hover:text-blue-900">
                          <Mail size={14} />
                        </a>
                        <a href={`tel:${selectedDept.phone}`} className="text-gray-500 hover:text-blue-900">
                          <Phone size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <h3 className="text-lg font-semibold mt-6 mb-3">{t.team}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedDept.team.map((member, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={member.image} 
                          alt={member.name[currentLang]}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{member.name[currentLang]}</h4>
                          <p className="text-sm text-gray-500">{member.role[currentLang]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail size={18} className="text-blue-900" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{t.email}</p>
                        <a href={`mailto:${selectedDept.email}`} className="text-sm text-blue-900 hover:underline">
                          {selectedDept.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone size={18} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{t.phone}</p>
                        <a href={`tel:${selectedDept.phone}`} className="text-sm text-gray-900 hover:text-blue-900">
                          {selectedDept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map or Location (optional) */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Location</h3>
                  <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">
                    Map integration here
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ManagementStructure;