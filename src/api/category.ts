import apiClient from './index';

export const fetchCategories = async () => {
  const response = await apiClient.get('/categories');
  return response.data;
};