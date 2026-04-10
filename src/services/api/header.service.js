// src/services/api/header.service.js

import apiService from './api.service';
import envConfig from '../../config/env.config';

class HeaderService {
  /**
   * Get header configuration
   */
  async getHeaderConfig() {
    const response = await apiService.get(envConfig.endpoints.sections.header);
    
    if (response.success && response.data) {
      return {
        success: true,
        data: this.transformData(response.data),
      };
    }
    
    return {
      success: false,
      data: null,
      error: response.error,
    };
  }

  /**
   * Transform API data
   */
  transformData(data) {
    if (!data) return null;

    return {
      id: data._id || null,
      
      // Names
      nameFullKh: data.mef_name_full || '',
      nameFullEn: data.mef_name_full_en || '',
      nameShortKh: data.mef_name_short || '',
      nameShortEn: data.mef_name_short_en || '',
      
      // Running texts
      runningTextKh: this.extractTexts(data.running_text),
      runningTextEn: this.extractTexts(data.running_text_en),
      
      // Assets
      logo: data.url_logo || '',
      banner: data.url_banner || '',
      
      // Status - Force to true to show header
      isActive: true,
      
      // Meta
      createdBy: data.created_by || null,
      updatedBy: data.updated_by || null,
      createdDate: data.created_date || null,
      updatedDate: data.updated_date || null,
    };
  }

  /**
   * Extract text from array
   */
  extractTexts(textArray) {
    if (!Array.isArray(textArray)) return [];
    return textArray.map(item => item.text || '').filter(Boolean);
  }
}

const headerService = new HeaderService();
export default headerService;