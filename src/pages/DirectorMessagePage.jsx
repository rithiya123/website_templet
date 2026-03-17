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
  Sparkles
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
      directorName: 'ឯកឧត្តម ឈន សាណាត',
      directorTitle: 'អគ្គនាយក នៃអគ្គនាយកដ្ឋានពន្ធនាគារ',
      date: 'ថ្ងៃទី ១៥ ខែ មីនា ឆ្នាំ ២០២៦',
      greeting: 'សូមស្វាគមន៍',
      message1: 'ក្នុងនាមជាអគ្គនាយកនៃអគ្គនាយកដ្ឋានពន្ធនាគារ ខ្ញុំសូមស្វាគមន៍យ៉ាងកក់ក្តៅចំពោះការចូលទស្សនាគេហទំព័រផ្លូវការរបស់យើងខ្ញុំ។ គេហទំព័រនេះត្រូវបានបង្កើតឡើងក្នុងគោលបំណងផ្តល់ព័ត៌មានអំពីសកម្មភាព និងសេវាកម្មរបស់អគ្គនាយកដ្ឋាន ព្រមទាំងបង្ហាញពីការប្តេជ្ញាចិត្តរបស់យើងក្នុងការគ្រប់គ្រងពន្ធនាគារប្រកបដោយតម្លាភាព យុត្តិធម៌ និងប្រសិទ្ធភាព។',
      message2: 'អគ្គនាយកដ្ឋានពន្ធនាគារ មានតួនាទីយ៉ាងសំខាន់ក្នុងការធានាសុវត្ថិភាព និងសណ្តាប់ធ្នាប់ក្នុងពន្ធនាគារ ព្រមទាំងផ្តល់កម្មវិធីអប់រំកែប្រែ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈដល់អ្នកទោស ដើម្បីឱ្យពួកគេអាចក្លាយជាពលរដ្ឋល្អ និងមានប្រយោជន៍សម្រាប់សង្គម បន្ទាប់ពីរំដោះខ្លួន។',
      message3: 'យើងខ្ញុំប្តេជ្ញាបន្តកែលម្អ និងអភិវឌ្ឍន៍ប្រព័ន្ធគ្រប់គ្រងពន្ធនាគារឱ្យកាន់តែទំនើប ប្រកបដោយតម្លាភាព និងគណនេយ្យភាពខ្ពស់ ព្រមទាំងពង្រឹងសមត្ថភាពមន្រ្តីពន្ធនាគារ ដើម្បីផ្តល់សេវាកម្មប្រកបដោយគុណភាព និងវិជ្ជាជីវៈខ្ពស់។',
      message4: 'ជាទីបញ្ចប់ ខ្ញុំសូមថ្លែងអំណរគុណចំពោះការគាំទ្រពីរាជរដ្ឋាភិបាល ដៃគូអភិវឌ្ឍន៍ អង្គការសង្គមស៊ីវិល និងប្រជាពលរដ្ឋទាំងអស់ ដែលបានចូលរួមចំណែកក្នុងការអភិវឌ្ឍវិស័យពន្ធនាគារកម្ពុជា។',
      signature: 'ដោយការគោរព និងក្តីស្រឡាញ់ខ្ពស់',
      directorSignature: 'ឯកឧត្តម ឈន សាណាត',
      directorTitle2: 'អគ្គនាយក',
      
      // Stats
      experience: 'បទពិសោធន៍',
      experienceYears: '២៥+ ឆ្នាំ',
      prisons: 'ពន្ធនាគារ',
      prisonsCount: '២៥+',
      staff: 'មន្រ្តី',
      staffCount: '១០០០+',
      programs: 'កម្មវិធី',
      programsCount: '២០+',
      
      // Quotes
      quote1: 'ការកែប្រែអ្នកទោស គឺជាការវិនិយោគដ៏មានតម្លៃបំផុតសម្រាប់អនាគតសង្គម',
      quote2: 'ពន្ធនាគារមិនមែនគ្រាន់តែជាកន្លែងឃុំខ្លួនទេ ប៉ុន្តែជាសាលារៀនសម្រាប់កែប្រែចិត្តគំនិត',
      
      // Contact
      email: 'director@prison.gov.kh',
      phone: '023 123 456',
      office: 'ការិយាល័យអគ្គនាយក'
    },
    en: {
      title: 'Message from the Director General',
      home: 'Home',
      download: 'Download',
      share: 'Share',
      print: 'Print',
      directorName: 'H.E. Chhon Sanath',
      directorTitle: 'Director General of the General Department of Prisons',
      date: 'March 15, 2026',
      greeting: 'Welcome',
      message1: 'As the Director General of the General Department of Prisons, I warmly welcome you to our official website. This website has been created to provide information about the activities and services of the department, as well as to demonstrate our commitment to managing prisons with transparency, fairness, and efficiency.',
      message2: 'The General Department of Prisons plays a crucial role in ensuring safety and order within prisons, as well as providing rehabilitation programs and vocational training to prisoners so they can become good and productive citizens after their release.',
      message3: 'We are committed to continuously improving and modernizing prison management systems with transparency and high accountability, as well as strengthening the capacity of prison officers to provide quality and professional services.',
      message4: 'Finally, I would like to express my gratitude to the Royal Government, development partners, civil society organizations, and all citizens who have contributed to the development of Cambodia\'s prison sector.',
      signature: 'With respect and high esteem',
      directorSignature: 'H.E. Chhon Sanath',
      directorTitle2: 'Director General',
      
      // Stats
      experience: 'Experience',
      experienceYears: '25+ Years',
      prisons: 'Prisons',
      prisonsCount: '25+',
      staff: 'Staff',
      staffCount: '1,000+',
      programs: 'Programs',
      programsCount: '20+',
      
      // Quotes
      quote1: 'Rehabilitating prisoners is the most valuable investment for the future of society',
      quote2: 'Prison is not just a place of detention, but a school for transforming minds',
      
      // Contact
      email: 'director@prison.gov.kh',
      phone: '023 123 456',
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
            <User size={16} />
            <span className="text-xs font-medium uppercase tracking-wider">{t.title}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">{t.title}</h1>
          <div className="w-12 h-0.5 bg-primary-600 mt-4"></div>
        </div>
      </Container>

      {/* Main Content */}
      <Container className="pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Director Info & Stats */}
          <div className="md:col-span-1">
            {/* Director Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
              {/* Director Image */}
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary-100 overflow-hidden border-4 border-primary-100">
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
                <div className="absolute bottom-0 right-1/2 transform translate-x-16 bg-primary-600 text-white p-1.5 rounded-full">
                  <Shield size={14} />
                </div>
              </div>

              {/* Director Name & Title */}
              <div className="text-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">{t.directorName}</h2>
                <p className="text-xs text-gray-500 mt-1">{t.directorTitle}</p>
              </div>

              {/* Date */}
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 mb-4">
                <Calendar size={12} />
                <span>{t.date}</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-primary-600">{t.experienceYears}</div>
                  <div className="text-xs text-gray-500">{t.experience}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-primary-600">{t.prisonsCount}</div>
                  <div className="text-xs text-gray-500">{t.prisons}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-primary-600">{t.staffCount}</div>
                  <div className="text-xs text-gray-500">{t.staff}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-primary-600">{t.programsCount}</div>
                  <div className="text-xs text-gray-500">{t.programs}</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-medium text-gray-500 mb-3">{t.office}</p>
                <div className="space-y-2">
                  <a href={`mailto:${t.email}`} className="flex items-center space-x-2 text-xs text-gray-600 hover:text-primary-600">
                    <Mail size={12} className="text-primary-500" />
                    <span>{t.email}</span>
                  </a>
                  <a href={`tel:${t.phone}`} className="flex items-center space-x-2 text-xs text-gray-600 hover:text-primary-600">
                    <Phone size={12} className="text-primary-500" />
                    <span>{t.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Message Content */}
          <div className="md:col-span-2">
            {/* Quote Banner */}
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 mb-8 relative">
              <Quote size={24} className="text-primary-300 absolute top-4 left-4" />
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
            <div className="my-8 border-l-2 border-primary-600 pl-4">
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

            {/* Social Engagement */}
            <div className="mt-8 flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-xs text-gray-500 hover:text-primary-600">
                <ThumbsUp size={14} />
                <span>មានប្រយោជន៍</span>
              </button>
              <button className="flex items-center space-x-2 text-xs text-gray-500 hover:text-primary-600">
                <MessageCircle size={14} />
                <span>មតិយោបល់</span>
              </button>
              <button className="flex items-center space-x-2 text-xs text-gray-500 hover:text-primary-600">
                <Share2 size={14} />
                <span>ចែករំលែក</span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Achievements Section */}
      <div className="bg-gray-50 border-t border-gray-100">
        <Container className="py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <Award size={14} className="text-primary-600" />
              <span className="text-xs font-medium text-primary-700 uppercase tracking-wider">
                {currentLang === 'km' ? 'សមិទ្ធផលថ្មីៗ' : 'Recent Achievements'}
              </span>
            </div>
            <h2 className="text-xl font-light text-gray-900 mb-2">
              {currentLang === 'km' ? 'សមិទ្ធផលក្រោមការដឹកនាំ' : 'Achievements Under Leadership'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    <Star size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                      {currentLang === 'km' ? 'កំណែទម្រង់ប្រព័ន្ធ' : 'System Reform'}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {currentLang === 'km' 
                        ? 'ការកែលម្អប្រព័ន្ធគ្រប់គ្រងពន្ធនាគារឱ្យកាន់តែទំនើប'
                        : 'Improving prison management systems to be more modern'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

    </div>
  );
};

export default DirectorMessagePage;