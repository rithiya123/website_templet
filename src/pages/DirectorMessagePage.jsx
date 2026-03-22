// src/pages/DirectorMessagePage.jsx
import React, { useState, useEffect } from 'react';
import { 
  Home,
  ChevronRight,
  User,
  Calendar,
  Clock,
  Award,
  Heart,
  Target,
  Eye,
  BookOpen,
  Quote,
  Mail,
  Phone,
  Download,
  Share2,
  Printer,
  Star,
  MessageCircle,
  ThumbsUp,
  Users,
  Shield,
  TrendingUp,
  Globe,
  FileText,
  Sparkles,
  Building2,
  Scale,
  Database,
  Landmark,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container.jsx';
import directorImage from '../images/director.jpg'; // You'll need to add this image

const DirectorMessagePage = () => {
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
      title: 'សារពីឯកឧត្តម អគ្គនាយក',
      home: 'ទំព័រដើម',
      download: 'ទាញយក',
      share: 'ចែករំលែក',
      print: 'បោះពុម្ព',
      directorName: 'ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា',
      directorTitle: 'អគ្គនាយក នៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោង',
      date: 'ថ្ងៃទី ១៥ ខែ មីនា ឆ្នាំ ២០២៦',
      greeting: 'សូមស្វាគមន៍',
      message1: 'ក្នុងនាមជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ ខ្ញុំសូមស្វាគមន៍យ៉ាងកក់ក្តៅចំពោះការចូលទស្សនាគេហទំព័រផ្លូវការរបស់យើងខ្ញុំ។ គេហទំព័រនេះត្រូវបានបង្កើតឡើងក្នុងគោលបំណងផ្តល់ព័ត៌មានអំពីសកម្មភាព និងសេវាកម្មរបស់អគ្គនាយកដ្ឋាន ព្រមទាំងបង្ហាញពីការប្តេជ្ញាចិត្តរបស់យើងក្នុងការដោះស្រាយផលប៉ះពាល់ប្រកបដោយតម្លាភាព យុត្តិធម៌ និងប្រសិទ្ធភាព។',
      message2: 'អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ មានតួនាទីយ៉ាងសំខាន់ក្នុងការធានានូវយុត្តិធម៌សង្គម ការកំណត់អត្តសញ្ញាណប្រជាពលរដ្ឋរងផលប៉ះពាល់ ការវាស់វែង និងកំណត់តម្លៃសំណង ក៏ដូចជាការចរចា និងទូទាត់សំណងប្រកបដោយតម្លាភាព និងសមធម៌។',
      message3: 'យើងខ្ញុំប្តេជ្ញាបន្តកែលម្អ និងអភិវឌ្ឍន៍ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យឱ្យកាន់តែទំនើប ប្រកបដោយតម្លាភាព និងគណនេយ្យភាពខ្ពស់ ព្រមទាំងពង្រឹងសមត្ថភាពមន្ត្រីជំនាញ ដើម្បីផ្តល់សេវាកម្មប្រកបដោយគុណភាព និងវិជ្ជាជីវៈខ្ពស់ដល់ប្រជាពលរដ្ឋរងផលប៉ះពាល់។',
      message4: 'ជាទីបញ្ចប់ ខ្ញុំសូមថ្លែងអំណរគុណចំពោះការគាំទ្រពីរាជរដ្ឋាភិបាល ដៃគូអភិវឌ្ឍន៍ អាជ្ញាធរមូលដ្ឋាន និងប្រជាពលរដ្ឋទាំងអស់ ដែលបានចូលរួមចំណែកក្នុងការអភិវឌ្ឍវិស័យដោះស្រាយផលប៉ះពាល់កម្ពុជា។',
      signature: 'ដោយការគោរព និងក្តីស្រឡាញ់ខ្ពស់',
      directorSignature: 'ឯកឧត្តម អ៊ឹម សិទ្ធីរ៉ា',
      directorTitle2: 'អគ្គនាយក',
      
      
      
      // Quotes
      quote1: 'ការដោះស្រាយផលប៉ះពាល់ប្រកបដោយយុត្តិធម៌ គឺជាមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍប្រកបដោយចីរភាព',
      quote2: 'តម្លាភាព និងគណនេយ្យភាព គឺជាគន្លឹះនៃភាពជោគជ័យក្នុងការដោះស្រាយផលប៉ះពាល់',
      
      // Contact
      email: 'xxx@mef.gov.kh',
      phone: '(+885) xx xxx xxxx',
      office: 'ការិយាល័យអគ្គនាយក'
    },
    en: {
      title: 'Message from the Director General',
      home: 'Home',
      download: 'Download',
      share: 'Share',
      print: 'Print',
      directorName: 'H.E. Im Sitthyra',
      directorTitle: 'Director General of the General Department of Project Impact Resolution',
      date: 'March 15, 2026',
      greeting: 'Welcome',
      message1: 'As the Director General of the General Department of Project Impact Resolution, I warmly welcome you to our official website. This website has been created to provide information about the activities and services of the department, as well as to demonstrate our commitment to resolving impacts with transparency, fairness, and efficiency.',
      message2: 'The General Department of Project Impact Resolution plays a crucial role in ensuring social justice, identifying affected citizens, measuring and determining compensation values, as well as negotiating and disbursing compensation with transparency and equity.',
      message3: 'We are committed to continuously improving and modernizing data management systems with transparency and high accountability, as well as strengthening the capacity of professional officers to provide quality and professional services to affected citizens.',
      message4: 'Finally, I would like to express my gratitude to the Royal Government, development partners, local authorities, and all citizens who have contributed to the development of Cambodia\'s impact resolution sector.',
      signature: 'With respect and high esteem',
      directorSignature: 'H.E. Im Sitthyra',
      directorTitle2: 'Director General',
      
  
      // Quotes
      quote1: 'Fair impact resolution is the foundation of sustainable development',
      quote2: 'Transparency and accountability are the keys to success in impact resolution',
      
      // Contact
      email: 'xxx@mef.gov.kh',
      phone: '(+885) xx xxx xxxx',
      office: 'Director\'s Office'
    }
  };

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Breadcrumb */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-40">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
              >
                <Home size={18} className="text-gray-500" />
              </Link>
              
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm">
                <Link to="/" className="text-gray-500 hover:text-[#2E7D32] transition-colors">
                  {t.home}
                </Link>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-gray-700">អំពីអគ្គនាយកដ្ឋាន</span>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-[#2E7D32] font-medium">{t.title}</span>
              </nav>
            </div>
          </div>
        </Container>
      </div>

      {/* Page Header */}
      <Container className="py-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-[#2E7D32] mb-3">
            <User size={16} />
            <span className="text-xs font-medium uppercase tracking-wider">{t.title}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">{t.title}</h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] mt-4"></div>
        </div>
      </Container>

      {/* Main Content */}
      <Container className="pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Director Info & Stats */}
          <div className="md:col-span-1">
            {/* Director Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24 shadow-sm">
              {/* Director Image */}
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] overflow-hidden border-4 border-[#4CAF50]">
                  <img 
                    src={directorImage} 
                    alt={t.directorName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                </div>
                <div className="absolute bottom-0 right-1/2 transform translate-x-16 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white p-1.5 rounded-full">
                  <Shield size={14} />
                </div>
              </div>

              {/* Director Name & Title */}
              <div className="text-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">{t.directorName}</h2>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{t.directorTitle}</p>
              </div>

              {/* Date */}
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 mb-4">
                <Calendar size={12} />
                <span>{t.date}</span>
              </div>

           

              {/* Contact Info */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-medium text-gray-500 mb-3">{t.office}</p>
                <div className="space-y-2">
                  <a href={`mailto:${t.email}`} className="flex items-center space-x-2 text-xs text-gray-600 hover:text-[#2E7D32] transition-colors group">
                    <Mail size={12} className="text-[#4CAF50] group-hover:text-[#2E7D32]" />
                    <span>{t.email}</span>
                  </a>
                  <a href={`tel:${t.phone}`} className="flex items-center space-x-2 text-xs text-gray-600 hover:text-[#2E7D32] transition-colors group">
                    <Phone size={12} className="text-[#4CAF50] group-hover:text-[#2E7D32]" />
                    <span>{t.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Message Content */}
          <div className="md:col-span-2">
            {/* Quote Banner */}
            <div className="bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-xl p-6 mb-8 relative">
              <Quote size={24} className="text-[#4CAF50] absolute top-4 left-4 opacity-50" />
              <p className="text-sm text-gray-700 italic leading-relaxed pl-10">
                "{t.quote1}"
              </p>
            </div>

            {/* Greeting */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t.greeting},</h3>
            </div>

            {/* Message Paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t.message1}</p>
              <p>{t.message2}</p>
              <p>{t.message3}</p>
              <p>{t.message4}</p>
            </div>

            {/* Second Quote */}
            <div className="my-8 border-l-4 border-[#4CAF50] pl-4">
              <p className="text-sm text-gray-500 italic">
                "{t.quote2}"
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">{t.signature}</p>
              <p className="text-base font-medium text-gray-900">{t.directorSignature}</p>
              <p className="text-xs text-gray-500 mt-1">{t.directorTitle2}</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Achievements Section */}
      <div className="bg-gray-50 border-t border-gray-100">
        <Container className="py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <Award size={14} className="text-[#2E7D32]" />
              <span className="text-xs font-medium text-[#2E7D32] uppercase tracking-wider">
                {currentLang === 'km' ? 'សមិទ្ធផលថ្មីៗ' : 'Recent Achievements'}
              </span>
            </div>
            <h2 className="text-xl font-light text-gray-900 mb-2">
              {currentLang === 'km' ? 'សមិទ្ធផលក្រោមការដឹកនាំ' : 'Achievements Under Leadership'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow hover:border-[#4CAF50]">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-50 rounded-lg text-[#2E7D32]">
                  <Database size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {currentLang === 'km' ? 'ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យ' : 'Data Management System'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {currentLang === 'km' 
                      ? 'បង្កើតប្រព័ន្ធគ្រប់គ្រងទិន្នន័យស្វ័យប្រវត្តិសម្រាប់អ្នករងផលប៉ះពាល់'
                      : 'Created automated data management system for affected people'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow hover:border-[#4CAF50]">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-50 rounded-lg text-[#2E7D32]">
                  <Scale size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {currentLang === 'km' ? 'យុត្តិធម៌ក្នុងសំណង' : 'Compensation Justice'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {currentLang === 'km' 
                      ? 'ការទូទាត់សំណងជូនប្រជាពលរដ្ឋជាង ១០០០ គ្រួសារ'
                      : 'Compensated over 1,000 families'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow hover:border-[#4CAF50]">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-50 rounded-lg text-[#2E7D32]">
                  <Users size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {currentLang === 'km' ? 'ការពង្រឹងសមត្ថភាព' : 'Capacity Building'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {currentLang === 'km' 
                      ? 'បណ្តុះបណ្តាលមន្ត្រីជំនាញចំនួន ១២០ នាក់'
                      : 'Trained 120 professional officers'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </div>
  );
};

export default DirectorMessagePage;