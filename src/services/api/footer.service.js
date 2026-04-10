// src/services/api/footer.service.js

import apiService from './api.service';
import envConfig from '../../config/env.config';

class FooterService {
  /**
   * Get footer configuration
   */
  async getFooterConfig() {
    const response = await apiService.get(envConfig.endpoints.sections.footer);
    
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
   * Transform API data - extract only what we need
   */
  transformData(data) {
    if (!data) return null;

    return {
      id: data._id || null,
      email: data.email || '',
      title: data.title || '',
      titleEn: data.title_en || '',
      fullAddress: data.full_address || '',
      fullAddressEn: data.full_address_en || '',
      copyRight: data.copy_right || '',
      copyRightEn: data.copy_right_en || '',
      copyRightBelow: data.copy_right_below || '',
      copyRightBelowEn: data.copy_right_below_en || '',
      urlMef: data.url_mef || '',
      status: data.status ?? false,
    };
  }
}

const footerService = new FooterService();
export default footerService;