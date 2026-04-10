// src/hooks/useHeader.js
import { useState, useEffect, useCallback } from 'react';
import { headerService } from '../services/api';

export const useHeader = (language = 'km') => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await headerService.getHeaderConfig();
      
      if (response.success && response.data) {
        setData(response.data);
      } else {
        setData(null);
        setError(response.error || 'Failed to fetch header data');
      }
    } catch (err) {
      console.error('Error fetching header data:', err);
      setData(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getOrgName = useCallback((type = 'full') => {
    if (!data) return '';
    
    return language === 'km' 
      ? (type === 'full' ? data.nameFullKh : data.nameShortKh)
      : (type === 'full' ? data.nameFullEn : data.nameShortEn);
  }, [data, language]);

  const getRunningTexts = useCallback(() => {
    if (!data) return [];
    
    return language === 'km' ? data.runningTextKh : data.runningTextEn;
  }, [data, language]);

  return {
    loading,
    error,
    data,
    // Computed values based on current language
    orgNameFull: getOrgName('full'),
    orgNameShort: getOrgName('short'),
    runningTexts: getRunningTexts(),
    // Direct data access
    logo: data?.logo || '',
    banner: data?.banner || '',
    isActive: data?.isActive ?? false,
    // Refetch function
    refetch: fetchData,
  };
};