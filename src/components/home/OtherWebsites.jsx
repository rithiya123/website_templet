// src/components/home/OtherWebsites.jsx
import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Globe, 
  ChevronRight, 
  Building2, 
  Landmark, 
  Scale,
  DollarSign,
  TrendingUp,
  Shield,
  BarChart3,
  PieChart,
  ArrowUpRight
} from 'lucide-react';

const OtherWebsites = () => {
  const [currentLang, setCurrentLang] = useState('km');
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      title: 'គេហទំព័រផ្សេងទៀត',
      subtitle: 'ស្ថាប័នពាក់ព័ន្ធ',
      visit: 'ចូលទៅកាន់',
      all: 'មើលទាំងអស់',
      government: 'គេហទំព័ររបស់រដ្ឋាភិបាល',
      description: 'ចូលទៅកាន់គេហទំព័រផ្លូវការរបស់ស្ថាប័នពាក់ព័ន្ធ',
      explore: 'ស្វែងរកបន្ថែម'
    },
    en: {
      title: 'Other Websites',
      subtitle: 'Related Institutions',
      visit: 'Visit',
      all: 'View All',
      government: 'Government Websites',
      description: 'Access official websites of related institutions',
      explore: 'Explore More'
    }
  };

  const t = translations[currentLang];

  // Function to get icon based on website name
  const getIcon = (name, index) => {
    const icons = [
      <Landmark size={18} />,
      <Scale size={18} />,
      <Shield size={18} />,
      <Building2 size={18} />,
      <DollarSign size={18} />,
      <BarChart3 size={18} />,
      <TrendingUp size={18} />,
      <PieChart size={18} />,
      <Globe size={18} />,
      <Building2 size={18} />
    ];
    return icons[index % icons.length];
  };

  const otherWebsites = [
    { 
      name: { 
        km: "ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ", 
        en: "Ministry of Economy and Finance" 
      }, 
      href: "#", 
      category: "finance" 
    },
    { 
      name: { 
        km: "ក្រុមប្រឹក្សាភិបាលគណនេយ្យ និងសវនកម្ម", 
        en: "Accounting and Auditing Regulator" 
      }, 
      href: "#", 
      category: "audit" 
    },
    { 
      name: { 
        km: "និយ័តករសន្តិសុខសង្គម", 
        en: "Social Security Regulator" 
      }, 
      href: "#", 
      category: "social" 
    },
    { 
      name: { 
        km: "និយ័តករទុកចិត្ត", 
        en: "Trust Regulator" 
      }, 
      href: "#", 
      category: "trust" 
    },
    { 
      name: { 
        km: "និយ័តករនៃគណៈកម្មការមូលបត្រកម្ពុជា", 
        en: "Securities and Exchange Regulator of Cambodia" 
      }, 
      href: "#", 
      category: "securities" 
    },
    { 
      name: { 
        km: "និយ័តករអាជីវកម្មអចលនទ្រព្យ និងបញ្ចាំ", 
        en: "Real Estate Business & Pawnshop Regulator" 
      }, 
      href: "#", 
      category: "realestate" 
    },
    { 
      name: { 
        km: "អង្គភាពសវនកម្មផ្ទៃក្នុង", 
        en: "Internal Audit Unit" 
      }, 
      href: "#", 
      category: "audit" 
    },
    { 
      name: { 
        km: "ក្រសួងយុត្តិធម៌", 
        en: "Ministry of Justice" 
      }, 
      href: "#", 
      category: "justice" 
    },
    { 
      name: { 
        km: "ក្រសួងពាណិជ្ជកម្ម", 
        en: "Ministry of Commerce" 
      }, 
      href: "#", 
      category: "commerce" 
    },
    { 
      name: { 
        km: "ធនាគារជាតិនៃកម្ពុជា", 
        en: "National Bank of Cambodia" 
      }, 
      href: "#", 
      category: "bank" 
    }
];

  return (
    <div className="mt-16">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
            {t.title}
          </h2>
          <p className="text-sm text-gray-500 flex items-center">
            <Globe size={14} className="mr-1 text-blue-500" />
            {t.subtitle}
          </p>
        </div>
        
        <a 
          href="#" 
          className="group flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 font-medium mt-2 sm:mt-0"
        >
          <span>{t.all}</span>
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Websites Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {otherWebsites.map((site, index) => (
          <a
            key={index}
            href={site.href}
            className="group relative bg-white rounded-xl border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Blue hover background */}
            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="p-5 relative">
              <div className="flex items-start justify-between">
                {/* Icon and Name */}
                <div className="flex items-center space-x-3">
                  {/* Icon Container */}
                  <div className="bg-gray-100 group-hover:bg-blue-100 p-2.5 rounded-xl transition-colors duration-300">
                    <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                      {getIcon(site.name, index)}
                    </div>
                  </div>

                  {/* Website Name */}
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-900 transition-colors line-clamp-2 max-w-[180px]">
                      {currentLang === 'km' ? site.name.km : site.name.en}
                    </h3>
                    
                    {/* Category Tag */}
                    <span className="inline-block mt-1 text-[10px] text-gray-500 bg-gray-100 group-hover:bg-blue-100 group-hover:text-blue-700 px-2 py-0.5 rounded-full transition-colors duration-300">
                      {site.category}
                    </span>
                  </div>
                </div>

                {/* External Link Icon */}
                <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? 'bg-blue-600 scale-110' : ''
                }`}>
                  <ArrowUpRight size={14} className={`transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-white' : 'text-gray-500'
                  }`} />
                </div>
              </div>

              {/* Visit Link */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors">
                  {t.visit}
                </span>
                <ExternalLink size={12} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom Banner - Single Color */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-3 sm:mb-0">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Globe size={20} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">
                {t.government}
              </h4>
              <p className="text-xs text-gray-500">
                {t.description}
              </p>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow flex items-center space-x-2">
            <span>{t.explore}</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > a {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .grid > a:nth-child(1) { animation-delay: 0.1s; }
        .grid > a:nth-child(2) { animation-delay: 0.15s; }
        .grid > a:nth-child(3) { animation-delay: 0.2s; }
        .grid > a:nth-child(4) { animation-delay: 0.25s; }
        .grid > a:nth-child(5) { animation-delay: 0.3s; }
        .grid > a:nth-child(6) { animation-delay: 0.35s; }
        .grid > a:nth-child(7) { animation-delay: 0.4s; }
        .grid > a:nth-child(8) { animation-delay: 0.45s; }
        .grid > a:nth-child(9) { animation-delay: 0.5s; }
        .grid > a:nth-child(10) { animation-delay: 0.55s; }
      `}</style>
    </div>
  );
};

export default OtherWebsites;