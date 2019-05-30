import { server } from './index';
 
export const getCategoriesService = () => server.get('public/categoires');

export const getCategoryInfo = () => server.get('shop_info');

export const getCategoryService = id => server.get(`public/categories/${id}`);

export const createCategoryService = category => server.post('categories', category);

export const upadateCategoryService = (id, category) => server.post(`categories/${id}`, category);

export const deleteCategoryService = id => server.delete(`categories/${id}`);