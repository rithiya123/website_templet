// src/pages/RolesResponsibilitiesPage.jsx
import React, { useState, useEffect } from "react";
import {
  Building2,
  Users,
  Target,
} from "lucide-react";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import RunningText from "../components/ui/RunningText";
import { useRoleAndResponsibility } from "../hooks/useEvent";

const RolesResponsibilitiesPage = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "km";
  });

  // Fetch role and responsibility data from API
  const { loading, data, error } = useRoleAndResponsibility();

  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };

    window.addEventListener("languagechange", handleLanguageChange);
    return () => window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  // Get dynamic content based on language
  const getTitle = () => {
    if (loading || !data) {
      return currentLang === "km" 
        ? "តួនាទី និងការទទួលខុសត្រូវ" 
        : "Roles & Responsibilities";
    }
    return currentLang === "km" ? data.titleKh : data.titleEn;
  };

  const getMissionTitle = () => {
    if (loading || !data) {
      return currentLang === "km"
        ? "អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍ បំពេញមុខងារជាសេនាធិការឱ្យក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ លើការងារដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍នានា ដោយមានបេសកកម្មដូចខាងក្រោម៖"
        : "Mission statement...";
    }
    return currentLang === "km" ? data.titleKh : data.titleEn;
  };

  const getArticle = () => {
    if (loading || !data) return "";
    return currentLang === "km" ? data.articleKh : data.articleEn;
  };

  const getDepartments = () => {
    if (loading || !data) return [];
    return data.departments || [];
  };

  const getLeadership = () => {
    if (loading || !data) return [];
    return data.leadership || [];
  };

  const translations = {
    km: {
      title: "តួនាទី និងការទទួលខុសត្រូវ",
      subtitle: "តួនាទី និងការទទួលខុសត្រូវរបស់អគ្គនាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ដោយសារគម្រោងអភិវឌ្ឍន៍",
      mission: "បេសកកម្ម",
      departments: "នាយកដ្ឋាន",
      leadership: "ថ្នាក់ដឹកនាំ",
    },
    en: {
      title: "Roles & Responsibilities",
      subtitle: "Roles and responsibilities of the General Department of Resettlement",
      mission: "Mission",
      departments: "Departments",
      leadership: "Leadership",
    },
  };

  const t = translations[currentLang];

  // Department data (can be moved to API later)
  const departmentList = [
    { name: currentLang === "km" ? "នាយកដ្ឋានកិច្ចការទូទៅ" : "Department of General Affairs", icon: <Building2 size={20} /> },
    { name: currentLang === "km" ? "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ១" : "Impact Resolution Department 1", icon: <Building2 size={20} /> },
    { name: currentLang === "km" ? "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ២" : "Impact Resolution Department 2", icon: <Building2 size={20} /> },
    { name: currentLang === "km" ? "នាយកដ្ឋានដោះស្រាយផលប៉ះពាល់ទី ៣" : "Impact Resolution Department 3", icon: <Building2 size={20} /> },
    { name: currentLang === "km" ? "នាយកដ្ឋានត្រួតពិនិត្យផ្ទៃក្នុង និងគ្រប់គ្រងទិន្នន័យ" : "Department of Internal Inspection and Data Management", icon: <Building2 size={20} /> },
  ];

  const leadershipList = [
    { role: currentLang === "km" ? "អគ្គនាយក" : "Director General", icon: <Users size={20} /> },
    { role: currentLang === "km" ? "អគ្គនាយករង" : "Deputy Director General", icon: <Users size={20} /> },
    { role: currentLang === "km" ? "ប្រធាននាយកដ្ឋាន" : "Department Director", icon: <Users size={20} /> },
  ];

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <RunningText />
        <GlobalBanner
          title={t.title}
          subtitle={t.subtitle}
          height="h-[200px] md:h-[280px] lg:h-[350px]"
          showBreadcrumb={true}
        />
        <Container className="py-8">
          <div className="text-center mb-8">
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
            <div className="h-20 w-full max-w-3xl bg-gray-200 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Running Text Component */}
      <RunningText />

      {/* Global Banner */}
      <GlobalBanner
        title={t.title}
        subtitle={t.subtitle}
        height="h-[200px] md:h-[280px] lg:h-[350px]"
        showBreadcrumb={true}
      />

      {/* Mission Section - From API */}
      <Container className="py-8">
        <div className="text-center mb-8">
          <div className="flex flex-col items-center justify-center mb-6 text-center">
            <div className="flex items-center space-x-2">
              <Target size={20} className="text-[#2E7D32]" style={{ marginTop: "-10px" }} />
              <h1 className="text-lg" style={{ marginTop: "5px" }}>
                {t.mission}
              </h1>
            </div>
            <label
              style={{
                paddingLeft: "70px",
                paddingRight: "70px",
                color: "black",
              }}
            >
              {getMissionTitle()}
            </label>
          </div>

          {/* Article/Mission Items - Rendered as HTML from API */}
          {getArticle() && (
            <div
              className="mission-content text-left max-w-4xl mx-auto"
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
              dangerouslySetInnerHTML={{ __html: getArticle() }}
            />
          )}
        </div>
      </Container>

      {/* Departments and Leadership */}
      <Container className="py-0">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Departments */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 size={20} className="text-[#2E7D32]" />
              <h2 className="text-lg font-medium text-gray-900" style={{ marginTop: "15px" }}>
                {t.departments}
              </h2>
            </div>

            <div className="space-y-3">
              {departmentList.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#4CAF50] transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#2E7D32]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Leadership */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Users size={20} className="text-[#2E7D32]" />
              <h2 className="text-lg font-medium text-gray-900" style={{ marginTop: "15px" }}>
                {t.leadership}
              </h2>
            </div>

            <div className="space-y-3">
              {leadershipList.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#4CAF50] transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#4CAF50] bg-opacity-10 rounded-lg text-[#2E7D32]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        {item.role}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <br />
      <br />
      <br />

      {/* Custom styles for API HTML content */}
      <style jsx>{`
        .mission-content ul {
          list-style-type: disc;
          padding-left: 20px;
        }
        .mission-content li {
          margin-top: 15px;
          color: #4a5568;
          line-height: 1.6;
        }
        .mission-content p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default RolesResponsibilitiesPage;