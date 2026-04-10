// src/hooks/useLegal.js
import { useState, useEffect, useCallback } from 'react';
import { legalService } from '../services/api';

export const useLegalDocuments = (page = 1, limit = 10, category = '') => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ documents: [], total: 0 });
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0, totalPages: 0 });
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await legalService.getLegalDocuments(page, limit, category);
      
      if (response.success) {
        setData(response.data);
        setCategories(response.categories || []);
        setPagination(response.pagination || { page, limit, total: 0, totalPages: 0 });
        setError(null);
      } else {
        setError(response.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, limit, category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    documents: data.documents,
    total: data.total,
    page: pagination.page,
    limit: pagination.limit,
    totalPages: pagination.totalPages,
    categories,
    refetch: fetchData,
  };
};

export const useLegalDocument = (id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!id) return;
    
    try {
      setLoading(true);
      const response = await legalService.getLegalDocumentById(id);
      
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
    document: data,
    refetch: fetchData,
  };
};