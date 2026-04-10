// src/pages/LegalPage.jsx
import React, { useState, useEffect } from "react";
import {
  FileText, Search, Download, Eye, Calendar, Tag,
  ChevronLeft, ChevronRight, X, Grid, List, Filter,
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
  const [viewMode, setViewMode] = useState("list");
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

  // ─── Helpers ──────────────────────────────────────────────────────────────

  // ✅ KEY FIX: reads kh or en from category object based on currentLang
  // categories = [ { law: { kh: 'ច្បាប់', en: 'Law' } }, ... ]
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
      law: "bg-blue-100 text-blue-700 border-blue-200",
      regulation: "bg-green-100 text-green-700 border-green-200",
      decree: "bg-purple-100 text-purple-700 border-purple-200",
      proclamation: "bg-orange-100 text-orange-700 border-orange-200",
      directive: "bg-cyan-100 text-cyan-700 border-cyan-200",
      other: "bg-gray-100 text-gray-700 border-gray-200",
    };
    return colors[categoryKey] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getThumbnail = (doc) => doc.coverImage || defaultThumbnail;

  // ─── Translations ─────────────────────────────────────────────────────────
  const translations = {
    km: {
      title: "ឯកសារច្បាប់",
      subtitle: "លិខិតបទដ្ឋានគតិយុត្ត និងឯកសារពាក់ព័ន្ធ",
      search: "ស្វែងរកតាមចំណងជើង ឬខ្លឹមសារ...",
      allCategories: "គ្រប់ប្រភេទ",
      download: "ទាញយក",
      downloadKh: "ខ្មែរ",
      downloadEn: "អង់គ្លេស",
      view: "មើល",
      published: "ចេញផ្សាយ",
      documentNumber: "លេខឯកសារ",
      previous: "មុន",
      next: "បន្ទាប់",
      noDocuments: "រកមិនឃើញឯកសារ",
      page: "ទំព័រ",
      of: "នៃ",
      viewPdf: "មើល PDF",
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
    },
    en: {
      title: "Legal Documents",
      subtitle: "Legal standards and related documents",
      search: "Search by title or content...",
      allCategories: "All Categories",
      download: "Download",
      downloadKh: "Khmer",
      downloadEn: "English",
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
    },
  };

  const t = translations[currentLang];

  // ─── Utilities ────────────────────────────────────────────────────────────
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

  // ─── Event Handlers ───────────────────────────────────────────────────────
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

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-visible mb-6">
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
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent bg-gray-50/50 text-sm"
                />
              </div>

              {/* ✅ Category Dropdown — shows KH or EN label based on currentLang */}
              <div className="relative lg:w-64 z-50">
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-left text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
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
                    className={`text-gray-400 transition-transform ${categoryDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {categoryDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setCategoryDropdownOpen(false)} />
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 max-h-64 overflow-y-auto">

                      {/* All Categories */}
                      <button
                        onClick={() => { setSelectedCategory(""); setPage(1); setCategoryDropdownOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${!selectedCategory ? "bg-green-50 text-[#4CAF50]" : "text-gray-700"}`}
                      >
                        <Filter size={14} />
                        <span>{t.allCategories}</span>
                      </button>

                      {/* ✅ API categories — label switches KH/EN with currentLang */}
                      {!loading && categories.length > 0 ? (
                        categories.map((cat, index) => {
                          const key = Object.keys(cat)[0]; // "law", "decree", etc.
                          // ✅ pick kh or en based on currentLang, fallback to the other
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
                  </>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 rounded-lg transition-all duration-200 ${viewMode === "list" ? "bg-white text-[#4CAF50] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                  <List size={18} />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 rounded-lg transition-all duration-200 ${viewMode === "grid" ? "bg-white text-[#4CAF50] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                  <Grid size={18} />
                </button>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2"
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
                  {/* ✅ also uses getCategoryDisplayName which respects currentLang */}
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
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-4"}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 animate-pulse">
                <div className="flex gap-4">
                  <div className="w-28 h-32 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="text-center py-20">
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

        ) : viewMode === "grid" ? (
          /* ── Grid View ── */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocuments.map((doc) => {
              // ✅ title switches based on currentLang
              const title = currentLang === "km"
                ? doc.titleKh || doc.titleEn
                : doc.titleEn || doc.titleKh;
              const thumbnail = getThumbnail(doc);

              return (
                <div
                  key={doc.id}
                  className="bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#4CAF50]/30 transition-all duration-300 group cursor-pointer overflow-hidden"
                  onClick={() => handleDocumentClick(doc)}
                >
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    <img
                      src={thumbnail}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = defaultThumbnail; }}
                    />
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-0.5 rounded-md text-[10px] font-medium shadow-lg">
                      PDF
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border ${getCategoryColor(doc.category)}`}>
                        {getCategoryIcon(doc.category)}
                        {/* ✅ category label in correct language */}
                        {getCategoryDisplayName(doc.category)}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2 group-hover:text-[#2E7D32] transition-colors">
                      {title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      {doc.publishedDate && (
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(doc.publishedDate)}
                        </span>
                      )}
                      {doc.documentNumber && (
                        <span className="flex items-center gap-1">
                          <FileText size={12} />
                          {doc.documentNumber}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                      <button
                        onClick={(e) => { e.stopPropagation(); handlePdfAction(doc, "view"); }}
                        className="flex-1 py-2 text-xs font-medium text-gray-600 hover:text-[#4CAF50] hover:bg-green-50 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <Eye size={14} />{t.view}
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handlePdfAction(doc, "download"); }}
                        className="flex-1 py-2 text-xs font-medium text-white bg-[#4CAF50] rounded-lg hover:bg-[#2E7D32] transition-colors flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Download size={14} />{t.download}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        ) : (
          /* ── List View ── */
          <div className="space-y-4">
            {filteredDocuments.map((doc) => {
              // ✅ title and description switch based on currentLang
              const title = currentLang === "km"
                ? doc.titleKh || doc.titleEn
                : doc.titleEn || doc.titleKh;
              const description = currentLang === "km"
                ? doc.descriptionKh || doc.descriptionEn
                : doc.descriptionEn || doc.descriptionKh;
              const thumbnail = getThumbnail(doc);

              return (
                <div
                  key={doc.id}
                  className="bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-[#4CAF50]/30 transition-all duration-200 cursor-pointer overflow-hidden"
                  onClick={() => handleDocumentClick(doc)}
                >
                  <div className="flex flex-col sm:flex-row p-4 gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-full sm:w-36 h-32 sm:h-full min-h-[128px] bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
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
                            {/* ✅ category on thumbnail also in correct language */}
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

                      {description && (
                        <p
                          className="text-sm text-gray-500 mb-3 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
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
                          className="px-3 py-1.5 text-xs bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-colors flex items-center gap-1 shadow-sm"
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
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
                  className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-medium transition-colors ${
                    page === pageNum
                      ? "bg-[#4CAF50] text-white shadow-md"
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
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </Container>

      {/* ── Document Detail Modal ─────────────────────────────────────────── */}
      {showModal && selectedDocument && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm p-5 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900 pr-4 line-clamp-1">
                {/* ✅ modal title in correct language */}
                {currentLang === "km"
                  ? selectedDocument.titleKh || selectedDocument.titleEn
                  : selectedDocument.titleEn || selectedDocument.titleKh}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
                <X size={20} />
              </button>
            </div>

            <div className="p-5">
              {selectedDocument.coverImage && (
                <div className="mb-5">
                  <img
                    src={selectedDocument.coverImage}
                    alt={currentLang === "km" ? selectedDocument.titleKh : selectedDocument.titleEn}
                    className="w-full rounded-xl"
                    onError={(e) => { e.target.src = defaultThumbnail; }}
                  />
                </div>
              )}

              <div className="space-y-4 mb-6">
                {(selectedDocument.descriptionKh || selectedDocument.descriptionEn) && (
                  <div
                    className="text-gray-600 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: currentLang === "km"
                        ? selectedDocument.descriptionKh || selectedDocument.descriptionEn
                        : selectedDocument.descriptionEn || selectedDocument.descriptionKh,
                    }}
                  />
                )}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border ${getCategoryColor(selectedDocument.category)}`}>
                    <Tag size={12} />
                    {/* ✅ modal category tag in correct language */}
                    {getCategoryDisplayName(selectedDocument.category)}
                  </span>
                  {selectedDocument.documentNumber && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                      <FileText size={12} />{selectedDocument.documentNumber}
                    </span>
                  )}
                  {selectedDocument.publishedDate && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                      <Calendar size={12} />{formatDate(selectedDocument.publishedDate)}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handlePdfAction(selectedDocument, "view")}
                  className="flex-1 py-2.5 border border-[#4CAF50] text-[#4CAF50] rounded-xl hover:bg-[#4CAF50] hover:text-white transition-all duration-200 font-medium text-sm"
                >
                  {t.viewPdf}
                </button>
                <button
                  onClick={() => handlePdfAction(selectedDocument, "download")}
                  className="flex-1 py-2.5 bg-[#4CAF50] text-white rounded-xl hover:bg-[#2E7D32] transition-all duration-200 font-medium text-sm shadow-sm hover:shadow"
                >
                  {t.downloadPdf}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Share Modal ───────────────────────────────────────────────────── */}
      {showShareModal && selectedDocument && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{t.shareVia}</h3>
              <button onClick={() => setShowShareModal(false)} className="p-1 hover:bg-gray-100 rounded-lg">
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => handleShareToSocial("facebook")} className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#1877F2] text-white rounded-lg">
                  <Facebook size={16} /><span className="text-sm">Facebook</span>
                </button>
                <button onClick={() => handleShareToSocial("twitter")} className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#1DA1F2] text-white rounded-lg">
                  <Twitter size={16} /><span className="text-sm">Twitter</span>
                </button>
                <button onClick={() => handleShareToSocial("linkedin")} className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#0077B5] text-white rounded-lg">
                  <Linkedin size={16} /><span className="text-sm">LinkedIn</span>
                </button>
                <button onClick={() => handleShareToSocial("telegram")} className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#26A5E4] text-white rounded-lg">
                  <MessageCircle size={16} /><span className="text-sm">Telegram</span>
                </button>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={`${window.location.origin}/legal/${selectedDocument.id}`}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#2E7D32] transition-colors flex items-center space-x-2"
                  >
                    {copySuccess ? <Check size={16} /> : <Copy size={16} />}
                    <span className="text-sm">{copySuccess ? t.copied : t.copyLink}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default LegalPage;