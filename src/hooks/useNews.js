import { useState, useEffect, useCallback } from 'react';
import newsService from '../services/api/news.service';

export const useNews = (params = {}) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await newsService.getAllNews(params);
      
      // ADD THESE LOGS
      console.log('=== FULL RESPONSE ===', response);
      console.log('=== CATEGORIES ===', response.categories);
      
      if (response.success) {
        setNews(response.data.news || []);
        setTotal(response.data.total || 0);
        setTotalPages(response.data.totalPages || 0);
        setCategories(response.categories || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    news,
    total,
    totalPages,
    categories,
    refetch: fetchData,
  };
};

export const useNewsDetail = (id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);
      const response = await newsService.getNewsById(id);

      if (response.success) {
        setData(response.data);
        setError(null);
      } else {
        setError(response.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    news: data,
    refetch: fetchData,
  };
};