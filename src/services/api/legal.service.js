// src/services/api/legal.service.js

import apiService from './api.service';
import envConfig from '../../config/env.config';

class LegalService {
  /**
   * Get all legal documents with pagination
   */
  async getLegalDocuments(page = 1, limit = 10, category = '') {
    const params = { page, limit };
    if (category) params.category = category;
    
    const response = await apiService.get(envConfig.endpoints.legal.getAll, params);
    
    if (response.success && response.data) {
      return {
        success: true,
        data: this.transformListData(response.data),
        categories: response.data.category || [],
        pagination: response.data.pagination || { page, limit, total: 0, totalPages: 0 },
      };
    }
    
    return {
      success: false,
      data: { documents: [], total: 0, page, limit },
      categories: [],
      pagination: { page, limit, total: 0, totalPages: 0 },
      error: response.error,
    };
  }

  /**
   * Get legal document by ID
   */
  async getLegalDocumentById(id) {
    const response = await apiService.get(envConfig.endpoints.legal.getById(id));
    
    if (response.success && response.data) {
      return {
        success: true,
        data: this.transformDocumentData(response.data),
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
    // Handle both array and object response
    const documents = Array.isArray(responseData) 
      ? responseData 
      : responseData.data || [];
    
    return {
      documents: documents.map(doc => this.transformDocumentData(doc)),
      total: responseData.pagination?.total || documents.length,
      page: responseData.pagination?.page || 1,
      limit: responseData.pagination?.limit || 10,
      totalPages: responseData.pagination?.totalPages || 1,
    };
  }

  /**
   * Transform document data
   */
  transformDocumentData(doc) {
    return {
      id: doc._id || null,
      
      // Title
      titleKh: doc.title?.kh || '',
      titleEn: doc.title?.en || '',
      
      // Description
      descriptionKh: doc.description?.kh || '',
      descriptionEn: doc.description?.en || '',
      
      // PDF File
      pdfFileKh: doc.pdf_file?.kh || '',
      pdfFileEn: doc.pdf_file?.en || '',
      
      // Cover Image
      coverImage: doc.cover_image || '',
      
      // Category
      category: doc.category || 'other',
      
      // Document Number
      documentNumber: doc.document_number || '',
      
      // Published Date
      publishedDate: doc.published_date || null,
      
      // Status
      isActive: doc.status ?? true,
      
      // Meta
      createdBy: doc.created_by || null,
      updatedBy: doc.updated_by || null,
      createdDate: doc.created_date || null,
      updatedDate: doc.updated_date || null,
    };
  }

  /**
   * Get category name by key and language
   */
  getCategoryName(categories, categoryKey, language = 'km') {
    if (!categories || !Array.isArray(categories)) return categoryKey;
    
    const categoryObj = categories.find(cat => cat[categoryKey]);
    if (categoryObj && categoryObj[categoryKey]) {
      return categoryObj[categoryKey][language] || categoryKey;
    }
    return categoryKey;
  }
}

const legalService = new LegalService();
export default legalService;