// src/pages/LegalPage.jsx
import React, { useState, useEffect } from "react";
import {
  FileText, Search, Download, Eye, Calendar, Tag,
  ChevronLeft, ChevronRight, X, List, Filter,
  BookOpen, Copy, Scale, FileCheck, AlertCircle,
  ChevronDown, MoreHorizontal, Share2, Check,
  Facebook, Twitter, Linkedin, MessageCircle,
} from "lucide-react";
import Container from "../components/ui/Container.jsx";
import GlobalBanner from "../components/ui/GlobalBanner.jsx";
import RunningText from "../components/ui/RunningText";
import { useLegalDocuments } from "../hooks/useLegal";
import defaultThumbnail from "../images/pdf/thumbnails/Lor.jpg";

const LegalPage = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "km";
  });
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const { loading, documents, totalPages, categories, total } =
    useLegalDocuments(page, 10, selectedCategory);

  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };
    window.addEventListener("languagechange", handleLanguageChange);
    return () => window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  useEffect(() => {
    if (showModal || showShareModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [showModal, showShareModal]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryDropdownOpen && !event.target.closest('.category-dropdown')) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [categoryDropdownOpen]);

  // Strip HTML tags from text
  const stripHtmlTags = (html) => {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const getCategoryDisplayName = (categoryKey) => {
    if (!Array.isArray(categories) || !categoryKey) return categoryKey;
    const found = categories.find((cat) => cat[categoryKey]);
    if (!found || !found[categoryKey]) return categoryKey;
    return currentLang === 'km'
      ? found[categoryKey].kh || found[categoryKey].en || categoryKey
      : found[categoryKey].en || found[categoryKey].kh || categoryKey;
  };

  const getCategoryIcon = (categoryKey) => {
    const icons = {
      law: <Scale size={14} />,
      regulation: <FileCheck size={14} />,
      decree: <FileText size={14} />,
      proclamation: <AlertCircle size={14} />,
      directive: <BookOpen size={14} />,
      other: <MoreHorizontal size={14} />,
    };
    return icons[categoryKey] || <FileText size={14} />;
  };

  const getCategoryColor = (categoryKey) => {
    const colors = {
      law: "bg-blue-50 text-blue-700 border-blue-200",
      regulation: "bg-green-50 text-green-700 border-green-200",
      decree: "bg-purple-50 text-purple-700 border-purple-200",
      proclamation: "bg-orange-50 text-orange-700 border-orange-200",
      directive: "bg-cyan-50 text-cyan-700 border-cyan-200",
      other: "bg-gray-50 text-gray-700 border-gray-200",
    };
    return colors[categoryKey] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  const getThumbnail = (doc) => doc.coverImage || defaultThumbnail;

  const translations = {
    km: {
      title: "ឯកសារច្បាប់",
      subtitle: "លិខិតបទដ្ឋានគតិយុត្ត និងឯកសារពាក់ព័ន្ធ",
      search: "ស្វែងរកតាមចំណងជើង ឬខ្លឹមសារ...",
      allCategories: "គ្រប់ប្រភេទ",
      download: "ទាញយក",
      downloadKh: "ទាញយកជាភាសាខ្មែរ",
      downloadEn: "ទាញយកជាភាសាអង់គ្លេស",
      view: "មើល",
      published: "ចេញផ្សាយ",
      documentNumber: "លេខឯកសារ",
      previous: "មុន",
      next: "បន្ទាប់",
      noDocuments: "រកមិនឃើញឯកសារ",
      page: "ទំព័រ",
      of: "នៃ",
      viewPdf: "បើកមើល PDF",
      downloadPdf: "ទាញយក PDF",
      showing: "បង្ហាញ",
      to: "ដល់",
      ofTotal: "នៃ",
      documents: "ឯកសារ",
      filter: "តម្រង",
      clearFilters: "សម្អាតតម្រង",
      totalDocuments: "ឯកសារសរុប",
      loading: "កំពុងផ្ទុក...",
      noCategories: "គ្មានប្រភេទ",
      share: "ចែករំលែក",
      shareVia: "ចែករំលែកតាម",
      copyLink: "ចម្លងតំណ",
      copied: "បានចម្លង!",
      back: "ត្រលប់ក្រោយ",
      viewDetails: "មើលលម្អិត",
      publishedDate: "ថ្ងៃចេញផ្សាយ",
      effectiveDate: "ថ្ងៃចូលជាធរមាន",
      department: "ស្ថាប័ន",
      fileSize: "ទំហំឯកសារ",
      format: "ទម្រង់",
      pages: "ទំព័រ",
      description: "សេចក្តីសង្ខេប",
      keywords: "ពាក្យគន្លឹះ",
    },
    en: {
      title: "Legal Documents",
      subtitle: "Legal standards and related documents",
      search: "Search by title or content...",
      allCategories: "All Categories",
      download: "Download",
      downloadKh: "Download in Khmer",
      downloadEn: "Download in English",
      view: "View",
      published: "Published",
      documentNumber: "Document No.",
      previous: "Previous",
      next: "Next",
      noDocuments: "No documents found",
      page: "Page",
      of: "of",
      viewPdf: "View PDF",
      downloadPdf: "Download PDF",
      showing: "Showing",
      to: "to",
      ofTotal: "of",
      documents: "documents",
      filter: "Filter",
      clearFilters: "Clear Filters",
      totalDocuments: "Total Documents",
      loading: "Loading...",
      noCategories: "No categories",
      share: "Share",
      shareVia: "Share via",
      copyLink: "Copy Link",
      copied: "Copied!",
      back: "Back",
      viewDetails: "View Details",
      publishedDate: "Published Date",
      effectiveDate: "Effective Date",
      department: "Department",
      fileSize: "File Size",
      format: "Format",
      pages: "Pages",
      description: "Description",
      keywords: "Keywords",
    },
  };

  const t = translations[currentLang];

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (currentLang === "km") {
      const khmerMonths = [
        "មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា",
        "កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",
      ];
      return `${date.getDate()} ${khmerMonths[date.getMonth()]} ${date.getFullYear()}`;
    }
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  const filteredDocuments = documents.filter((doc) => {
    if (!searchTerm) return true;
    const title = currentLang === "km" ? doc.titleKh : doc.titleEn;
    const desc = currentLang === "km" ? doc.descriptionKh : doc.descriptionEn;
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const itemsPerPage = 10;
  const startItem = filteredDocuments.length > 0 ? (page - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(page * itemsPerPage, filteredDocuments.length);

  const handleDocumentClick = (doc) => {
    setSelectedDocument(doc);
    setShowModal(true);
  };

  const handlePdfAction = (doc, action = "view", language = currentLang) => {
    const pdfUrl = language === "km" ? doc.pdfFileKh : doc.pdfFileEn;
    if (pdfUrl && pdfUrl !== "#") {
      if (action === "download") {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = `${language === "km" ? doc.titleKh : doc.titleEn}.pdf`;
        link.click();
      } else {
        window.open(pdfUrl, "_blank");
      }
    }
  };

  const handleShare = (doc) => {
    setSelectedDocument(doc);
    setShowShareModal(true);
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/legal/${selectedDocument?.id}`;
    navigator.clipboard.writeText(url);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleShareToSocial = (platform) => {
    const url = `${window.location.origin}/legal/${selectedDocument?.id}`;
    const title = currentLang === "km" ? selectedDocument?.titleKh : selectedDocument?.titleEn;
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=500");
    }
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSearchTerm("");
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <RunningText />
      <GlobalBanner
        title={t.title}
        subtitle={t.subtitle}
        height="h-[180px] md:h-[250px] lg:h-[300px]"
        showBreadcrumb={true}
      />

      <Container className="py-8">
        {/* Stats Bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FileText size={18} className="text-[#4CAF50]" />
            <span className="font-medium">{total} {t.totalDocuments.toLowerCase()}</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="p-5">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.search}
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
                  className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent bg-white text-sm"
                />
              </div>

              {/* Category Dropdown - Fixed positioning */}
              <div className="relative lg:w-64 category-dropdown">
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-left text-sm flex items-center justify-between hover:border-gray-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Filter size={16} className="text-gray-400" />
                    <span className={selectedCategory ? "text-gray-900" : "text-gray-500"}>
                      {selectedCategory
                        ? getCategoryDisplayName(selectedCategory)
                        : t.allCategories}
                    </span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-200 ${categoryDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg py-1 z-50 max-h-64 overflow-y-auto">
                    <button
                      onClick={() => { setSelectedCategory(""); setPage(1); setCategoryDropdownOpen(false); }}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${!selectedCategory ? "bg-green-50 text-[#4CAF50]" : "text-gray-700"}`}
                    >
                      <Filter size={14} />
                      <span>{t.allCategories}</span>
                    </button>

                    {!loading && categories.length > 0 ? (
                      categories.map((cat, index) => {
                        const key = Object.keys(cat)[0];
                        const label = currentLang === "km"
                          ? cat[key].kh || cat[key].en || key
                          : cat[key].en || cat[key].kh || key;

                        return (
                          <button
                            key={index}
                            onClick={() => { setSelectedCategory(key); setPage(1); setCategoryDropdownOpen(false); }}
                            className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${selectedCategory === key ? "bg-green-50 text-[#4CAF50]" : "text-gray-700"}`}
                          >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center ${getCategoryColor(key).split(" ")[0]}`}>
                              {getCategoryIcon(key)}
                            </span>
                            <span>{label}</span>
                          </button>
                        );
                      })
                    ) : (
                      <div className="px-4 py-2.5 text-sm text-gray-400">
                        {loading ? t.loading : t.noCategories}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Clear Filters */}
              {(selectedCategory || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <X size={14} />
                  {t.clearFilters}
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Tags */}
          {(selectedCategory || searchTerm) && (
            <div className="px-5 pb-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
              <span className="text-xs text-gray-500">{t.filter}:</span>
              {selectedCategory && (
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${getCategoryColor(selectedCategory)}`}>
                  {getCategoryIcon(selectedCategory)}
                  {getCategoryDisplayName(selectedCategory)}
                  <button onClick={() => setSelectedCategory("")} className="ml-1 hover:bg-black/10 rounded-full p-0.5">
                    <X size={12} />
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  <Search size={12} />
                  "{searchTerm}"
                  <button onClick={() => setSearchTerm("")} className="ml-1 hover:bg-gray-200 rounded-full p-0.5">
                    <X size={12} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        {!loading && (
          <div className="text-sm text-gray-500 mb-4">
            {filteredDocuments.length > 0
              ? `${t.showing} ${startItem}-${endItem} ${t.ofTotal} ${filteredDocuments.length} ${t.documents}`
              : t.noDocuments}
          </div>
        )}

        {/* Loading Skeleton */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 animate-pulse">
                <div className="flex gap-4">
                  <div className="w-36 h-32 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText size={40} className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium text-lg mb-2">{t.noDocuments}</p>
            <p className="text-gray-400 text-sm">
              {currentLang === "km"
                ? "សាកល្បងកែតម្រូវតម្រង ឬពាក្យស្វែងរករបស់អ្នក"
                : "Try adjusting your filters or search term"}
            </p>
            {(selectedCategory || searchTerm) && (
              <button onClick={clearFilters} className="mt-4 px-4 py-2 text-sm text-[#4CAF50] hover:bg-green-50 rounded-lg transition-colors">
                {t.clearFilters}
              </button>
            )}
          </div>
        ) : (
          /* ── List View Only ── */
          <div className="space-y-4">
            {filteredDocuments.map((doc) => {
              const title = currentLang === "km"
                ? doc.titleKh || doc.titleEn
                : doc.titleEn || doc.titleKh;
              const description = currentLang === "km"
                ? doc.descriptionKh || doc.descriptionEn
                : doc.descriptionEn || doc.descriptionKh;
              const plainDescription = stripHtmlTags(description);
              const thumbnail = getThumbnail(doc);

              return (
                <div
                  key={doc.id}
                  className="bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-[#4CAF50]/30 transition-all duration-200 cursor-pointer overflow-hidden"
                  onClick={() => handleDocumentClick(doc)}
                >
                  <div className="flex flex-col sm:flex-row p-4 gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-full sm:w-36 h-32 sm:h-full min-h-[128px] bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = defaultThumbnail; }}
                      />
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-1.5 py-0.5 rounded-md text-[10px] font-medium">
                        PDF
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <span className={`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full border ${getCategoryColor(doc.category)}`}>
                          {getCategoryIcon(doc.category)}
                          <span className="hidden sm:inline">
                            {getCategoryDisplayName(doc.category)}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center text-xs text-gray-400 mb-2">
                        <Calendar size={12} className="mr-1 flex-shrink-0" />
                        <span>{formatDate(doc.publishedDate)}</span>
                        {doc.documentNumber && (
                          <>
                            <span className="mx-2">•</span>
                            <FileText size={12} className="mr-1" />
                            <span>{doc.documentNumber}</span>
                          </>
                        )}
                      </div>

                      <h3 className="font-semibold text-gray-900 text-base mb-2 line-clamp-2 hover:text-[#2E7D32] transition-colors">
                        {title}
                      </h3>

                      {plainDescription && (
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                          {plainDescription}
                        </p>
                      )}

                      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                        <button
                          onClick={(e) => { e.stopPropagation(); handlePdfAction(doc, "view"); }}
                          className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
                        >
                          <Eye size={13} />{t.view}
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handlePdfAction(doc, "download", "km"); }}
                          className="px-3 py-1.5 text-xs bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-colors flex items-center gap-1"
                        >
                          <Download size={13} />{t.downloadKh}
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handlePdfAction(doc, "download", "en"); }}
                          className="px-3 py-1.5 text-xs border border-[#4CAF50] text-[#4CAF50] rounded-lg hover:bg-[#4CAF50] hover:text-white transition-colors flex items-center gap-1"
                        >
                          <Download size={13} />{t.downloadEn}
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleShare(doc); }}
                          className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
                        >
                          <Share2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              let pageNum;
              if (totalPages <= 5) pageNum = i + 1;
              else if (page <= 3) pageNum = i + 1;
              else if (page >= totalPages - 2) pageNum = totalPages - 4 + i;
              else pageNum = page - 2 + i;

              return (
                <button
                  key={i}
                  onClick={() => setPage(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    page === pageNum
                      ? "bg-[#4CAF50] text-white"
                      : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </Container>

      {/* Document Detail Modal */}
      {showModal && selectedDocument && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen px-3 sm:px-4 py-4 sm:py-8">
            <div className="max-w-4xl mx-auto">
              <div className="sticky top-0 bg-white border-b border-gray-100 z-10 py-3 sm:py-4 mb-4 sm:mb-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-[#2E7D32] transition-colors group"
                  >
                    <ChevronRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm">{t.back}</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleShare(selectedDocument)}
                      className="p-1.5 sm:p-2 hover:bg-[#4CAF50] hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <Share2 size={14} className="text-gray-500 hover:text-[#2E7D32] sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                  <div className="relative w-40 sm:w-56 h-auto min-h-[192px] sm:min-h-[288px] bg-gray-100 rounded-xl overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0">
                    <img
                      src={getThumbnail(selectedDocument)}
                      alt={currentLang === 'km' ? selectedDocument.titleKh : selectedDocument.titleEn}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = defaultThumbnail; }}
                    />
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-[#4CAF50] text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-medium">
                      PDF
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${getCategoryColor(selectedDocument.category)}`}>
                        {getCategoryIcon(selectedDocument.category)}
                        {getCategoryDisplayName(selectedDocument.category)}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                      {currentLang === 'km' ? selectedDocument.titleKh : selectedDocument.titleEn}
                    </h2>
                    {(currentLang === 'km' ? selectedDocument.descriptionKh : selectedDocument.descriptionEn) && (
                      <p className="text-xs sm:text-sm text-gray-500 mb-4">
                        {stripHtmlTags(currentLang === 'km' ? selectedDocument.descriptionKh : selectedDocument.descriptionEn)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <Calendar size={14} className="text-[#4CAF50] mb-1 sm:mb-2 sm:w-4 sm:h-4" />
                    <div className="text-[10px] sm:text-xs text-gray-500">{t.publishedDate}</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                      {formatDate(selectedDocument.publishedDate)}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <FileText size={14} className="text-[#4CAF50] mb-1 sm:mb-2 sm:w-4 sm:h-4" />
                    <div className="text-[10px] sm:text-xs text-gray-500">{t.documentNumber}</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                      {selectedDocument.documentNumber || '-'}
                    </div>
                  </div>
                </div>

                <div className="bg-[#4CAF50] bg-opacity-5 rounded-lg p-4 sm:p-6 border border-[#4CAF50] border-opacity-20">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FileText size={20} className="text-[#4CAF50] sm:w-6 sm:h-6" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-1">
                          {currentLang === 'km' ? selectedDocument.titleKh : selectedDocument.titleEn}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-gray-500">PDF</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <button 
                        onClick={() => handlePdfAction(selectedDocument, "view")}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#4CAF50] text-[#2E7D32] text-xs sm:text-sm rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center space-x-1 sm:space-x-2"
                      >
                        <Eye size={12} className="sm:w-4 sm:h-4" />
                        <span>{t.viewPdf}</span>
                      </button>
                      <button 
                        onClick={() => handlePdfAction(selectedDocument, "download", "km")}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white text-xs sm:text-sm rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-1 sm:space-x-2"
                      >
                        <Download size={12} className="sm:w-4 sm:h-4" />
                        <span className="hidden xs:inline">{t.downloadKh}</span>
                        <span className="xs:hidden">ខ្មែរ</span>
                      </button>
                      <button 
                        onClick={() => handlePdfAction(selectedDocument, "download", "en")}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 border border-[#4CAF50] text-[#2E7D32] text-xs sm:text-sm rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-200 flex items-center space-x-1 sm:space-x-2"
                      >
                        <Download size={12} className="sm:w-4 sm:h-4" />
                        <span className="hidden xs:inline">{t.downloadEn}</span>
                        <span className="xs:hidden">EN</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && selectedDocument && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-900">{t.shareVia}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={18} className="text-gray-500 sm:w-5 sm:h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button onClick={() => handleShareToSocial('facebook')} className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#1877F2] text-white rounded-lg">
                  <Facebook size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Facebook</span>
                </button>
                <button onClick={() => handleShareToSocial('twitter')} className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#1DA1F2] text-white rounded-lg">
                  <Twitter size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Twitter</span>
                </button>
                <button onClick={() => handleShareToSocial('linkedin')} className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#0077B5] text-white rounded-lg">
                  <Linkedin size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">LinkedIn</span>
                </button>
                <button onClick={() => handleShareToSocial('telegram')} className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#26A5E4] text-white rounded-lg">
                  <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Telegram</span>
                </button>
              </div>
              
              <div className="border-t border-gray-100 pt-3 sm:pt-4 mt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={`${window.location.origin}/legal/${selectedDocument.id}`}
                    readOnly
                    className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-lg text-xs sm:text-sm bg-gray-50 text-gray-600"
                  />
                  <button onClick={handleCopyLink} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-colors flex items-center space-x-1 sm:space-x-2">
                    {copySuccess ? <Check size={14} className="sm:w-4 sm:h-4" /> : <Copy size={14} className="sm:w-4 sm:h-4" />}
                    <span className="text-xs sm:text-sm">{copySuccess ? t.copied : t.copyLink}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LegalPage;