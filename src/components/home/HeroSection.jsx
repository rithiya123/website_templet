// src/components/home/HeroSection.jsx
import React from 'react';
import img from '../../images/Banner-1.jpg';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={img} 
          alt="General Department of Prisons Banner"
          className="w-full h-full object-cover"
        />    
      </div>

      {/* Running Text Banner at Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-blue-900/90 to-blue-700/90 backdrop-blur-sm py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white text-sm md:text-base font-medium mx-4">
            🇰🇭 សារស្វាគមន៍របស់អគ្គនាយក • WELCOME MESSAGE FROM THE GENERAL DIRECTOR • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានពន្ធនាគារ! • WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PRISONS! • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            ក្នុងនាមជាអគ្គនាយកខ្ញុំមានសេចក្តីសោមនស្សរីករាយ សូមស្វាគមន៍យ៉ាងកក់ក្តៅ​ចំពោះ​ការចូលទស្សនា​គេហទំព័រនេះ • AS GENERAL DIRECTOR, I AM DELIGHTED TO WELCOME YOU TO THIS WEBSITE • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            យើងខ្ញុំបានបង្កើតគេហទំព័រនេះឡើងដើម្បីផ្តល់ព័ត៌មានអំពីសកម្មភាព និងសេវាកម្មរបស់អគ្គនាយកដ្ឋានពន្ធនាគារ • WE HAVE CREATED THIS WEBSITE TO PROVIDE INFORMATION ABOUT THE ACTIVITIES AND SERVICES OF THE GENERAL DEPARTMENT OF PRISONS • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            យើងប្តេជ្ញាផ្តល់សេវាកម្មដ៏ល្អបំផុតដល់ប្រជាពលរដ្ឋ និងស្ថាប័នពាក់ព័ន្ធ • WE ARE COMMITTED TO PROVIDING THE BEST SERVICES TO CITIZENS AND RELATED INSTITUTIONS • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            📞 ទំនាក់ទំនង: 071 258 0896 • CONTACT: 071 258 0896 • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            ✉️ info@gdp.gov.kh • www.gdp.gov.kh • 
          </span>
          
          {/* Repeat for seamless loop */}
          <span className="text-white text-sm md:text-base font-medium mx-4">
            🇰🇭 សារស្វាគមន៍របស់អគ្គនាយក • WELCOME MESSAGE FROM THE GENERAL DIRECTOR • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់អគ្គនាយកដ្ឋានពន្ធនាគារ! • WELCOME TO THE OFFICIAL WEBSITE OF THE GENERAL DEPARTMENT OF PRISONS! • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            ក្នុងនាមជាអគ្គនាយកខ្ញុំមានសេចក្តីសោមនស្សរីករាយ សូមស្វាគមន៍យ៉ាងកក់ក្តៅ​ចំពោះ​ការចូលទស្សនា​គេហទំព័រនេះ • AS GENERAL DIRECTOR, I AM DELIGHTED TO WELCOME YOU TO THIS WEBSITE • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            យើងខ្ញុំបានបង្កើតគេហទំព័រនេះឡើងដើម្បីផ្តល់ព័ត៌មានអំពីសកម្មភាព និងសេវាកម្មរបស់អគ្គនាយកដ្ឋានពន្ធនាគារ • WE HAVE CREATED THIS WEBSITE TO PROVIDE INFORMATION ABOUT THE ACTIVITIES AND SERVICES OF THE GENERAL DEPARTMENT OF PRISONS • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            យើងប្តេជ្ញាផ្តល់សេវាកម្មដ៏ល្អបំផុតដល់ប្រជាពលរដ្ឋ និងស្ថាប័នពាក់ព័ន្ធ • WE ARE COMMITTED TO PROVIDING THE BEST SERVICES TO CITIZENS AND RELATED INSTITUTIONS • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            📞 ទំនាក់ទំនង: 071 258 0896 • CONTACT: 071 258 0896 • 
          </span>
          <span className="text-white text-sm md:text-base font-medium mx-4">
            ✉️ info@gdp.gov.kh • www.gdp.gov.kh • 
          </span>
        </div>
      </div>

      {/* Animation Styles - Moved to a regular style tag */}
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
          animation: marquee 60s linear infinite;
          display: inline-block;
          white-space: nowrap;
          width: fit-content;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;