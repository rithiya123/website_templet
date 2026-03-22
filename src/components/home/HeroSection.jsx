// src/components/home/HeroSection.jsx
import React from 'react';
import img from '../../images/Banner-1.jpg';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={img} 
          alt="General Department of Project Impact Resolution Banner"
          className="w-full h-full object-cover"
        />    
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Running Text Banner at Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#2E7D32]/95 to-[#4CAF50]/95 backdrop-blur-sm py-2 md:py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 animate-pulse"></span>
            🇰🇭 សារស្វាគមន៍ពីអគ្គនាយក • WELCOME MESSAGE FROM THE GENERAL DIRECTOR • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោង! • WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PROJECT IMPACT RESOLUTION! • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            ក្នុងនាមជាអគ្គនាយក ខ្ញុំមានសេចក្តីសោមនស្សរីករាយ សូមស្វាគមន៍យ៉ាងកក់ក្តៅ​ចំពោះ​ការចូលទស្សនា​គេហទំព័រនេះ • AS GENERAL DIRECTOR, I AM DELIGHTED TO WELCOME YOU TO THIS WEBSITE • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            យើងខ្ញុំបានបង្កើតគេហទំព័រនេះឡើងដើម្បីផ្តល់ព័ត៌មានអំពីសកម្មភាព និងសេវាកម្មរបស់អគ្គនាយកដ្ឋាន • WE HAVE CREATED THIS WEBSITE TO PROVIDE INFORMATION ABOUT THE ACTIVITIES AND SERVICES OF THE GENERAL DEPARTMENT • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            យើងប្តេជ្ញាផ្តល់សេវាកម្មប្រកបដោយតម្លាភាព យុត្តិធម៌ និងប្រសិទ្ធភាពជូនប្រជាពលរដ្ឋ • WE ARE COMMITTED TO PROVIDING TRANSPARENT, FAIR, AND EFFICIENT SERVICES TO CITIZENS • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            📞 ទំនាក់ទំនង: 071 258 0896 • CONTACT: 071 258 0896 • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            ✉️ info@gdpir.gov.kh • www.gdpir.gov.kh • 
          </span>
          
          {/* Repeat for seamless loop */}
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 animate-pulse"></span>
            🇰🇭 សារស្វាគមន៍ពីអគ្គនាយក • WELCOME MESSAGE FROM THE GENERAL DIRECTOR • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោង! • WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PROJECT IMPACT RESOLUTION! • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            ក្នុងនាមជាអគ្គនាយក ខ្ញុំមានសេចក្តីសោមនស្សរីករាយ សូមស្វាគមន៍យ៉ាងកក់ក្តៅ​ចំពោះ​ការចូលទស្សនា​គេហទំព័រនេះ • AS GENERAL DIRECTOR, I AM DELIGHTED TO WELCOME YOU TO THIS WEBSITE • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            យើងខ្ញុំបានបង្កើតគេហទំព័រនេះឡើងដើម្បីផ្តល់ព័ត៌មានអំពីសកម្មភាព និងសេវាកម្មរបស់អគ្គនាយកដ្ឋាន • WE HAVE CREATED THIS WEBSITE TO PROVIDE INFORMATION ABOUT THE ACTIVITIES AND SERVICES OF THE GENERAL DEPARTMENT • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            យើងប្តេជ្ញាផ្តល់សេវាកម្មប្រកបដោយតម្លាភាព យុត្តិធម៌ និងប្រសិទ្ធភាពជូនប្រជាពលរដ្ឋ • WE ARE COMMITTED TO PROVIDING TRANSPARENT, FAIR, AND EFFICIENT SERVICES TO CITIZENS • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            📞 ទំនាក់ទំនង: 071 258 0896 • CONTACT: 071 258 0896 • 
          </span>
          <span className="text-white text-xs md:text-sm lg:text-base font-medium mx-3 md:mx-4 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
            ✉️ info@gdpir.gov.kh • www.gdpir.gov.kh • 
          </span>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          display: inline-flex;
          white-space: nowrap;
          width: fit-content;
          gap: 0.5rem;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Responsive animation speed */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 100s;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;