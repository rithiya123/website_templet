import apiService from './api.service';
import envConfig from '../../config/env.config';

class NewsService {
  /**
   * Get all news with pagination
   */
  async getAllNews(params = {}) {
    const { page = 1, limit = 10, category = '' } = params;

    const queryParams = { page, limit };
    if (category) queryParams.category = category;

    const response = await apiService.get(envConfig.endpoints.news.getAll, queryParams);

    if (response.success && response.data) {
      const rawData = response.data; // full API body: { success, data[], pagination, category[] }

      return {
        success: true,
        data: this.transformListData(rawData),
        categories: rawData.category || [],
        pagination: rawData.pagination || { page, limit, total: 0, totalPages: 0 },
      };
    }

    return {
      success: false,
      data: { news: [], total: 0, page, limit, totalPages: 0 },
      categories: [],
      pagination: { page, limit, total: 0, totalPages: 0 },
      error: response.error,
    };
  }

  /**
   * Get news by ID
   */
  async getNewsById(id) {
    const response = await apiService.get(envConfig.endpoints.news.getById(id));

    if (response.success && response.data) {
      return {
        success: true,
        data: this.transformNewsData(response.data),
      };
    }

    return {
      success: false,
      data: null,
      error: response.error,
    };
  }

  /**
   * Transform list data
   */
  transformListData(responseData) {
    // responseData.data is the news array from API: { data: [...], pagination, category }
    const newsArray = Array.isArray(responseData.data)
      ? responseData.data
      : Array.isArray(responseData)
      ? responseData
      : [];

    return {
      news: newsArray.map((item) => this.transformNewsData(item)),
      total: responseData.pagination?.total || newsArray.length,
      page: responseData.pagination?.page || 1,
      limit: responseData.pagination?.limit || 10,
      totalPages: responseData.pagination?.totalPages || 1,
    };
  }

  /**
   * Transform individual news item
   */
  transformNewsData(news) {
    return {
      id: news._id || null,

      // Title
      titleKh: news.title?.kh || '',
      titleEn: news.title?.en || '',

      // Article/Content (HTML)
      contentKh: news.article?.kh || '',
      contentEn: news.article?.en || '',

      // Summary (extract from content or use separate field)
      summaryKh: news.summary?.kh || this.extractSummary(news.article?.kh),
      summaryEn: news.summary?.en || this.extractSummary(news.article?.en),

      // Title Image
      mainImage: news.title_image || '',

      // Gallery Images
      images: Array.isArray(news.images) ? news.images : [],

      // Category
      category: news.category || 'other',

      // Author
      authorKh: news.author?.kh || 'នាយកដ្ឋានព័ត៌មាន',
      authorEn: news.author?.en || 'Information Department',

      // Stats
      views: news.views || 0,
      likes: news.likes || 0,
      downloads: news.downloads || 0,

      // Dates
      publishedDate: news.published_date || news.created_date || null,
      createdDate: news.created_date || null,
      updatedDate: news.updated_date || null,

      // Status
      isActive: news.status ?? true,
      isFeatured: news.is_featured || false,

      // Meta
      createdBy: news.created_by || null,
      updatedBy: news.updated_by || null,

      // Attachments
      hasAttachment: !!(news.attachments && news.attachments.length > 0),
      attachments: news.attachments || [],
    };
  }

  /**
   * Extract summary from HTML content
   */
  extractSummary(htmlContent) {
    if (!htmlContent) return '';
    const text = htmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  }

  /**
   * Format date for display
   */
  formatDate(dateString, language = 'km') {
    if (!dateString) return '';

    const date = new Date(dateString);

    if (language === 'km') {
      const khmerMonths = [
        'មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា',
        'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ',
      ];
      const day = date.getDate();
      const month = khmerMonths[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

const newsService = new NewsService();
export default newsService;