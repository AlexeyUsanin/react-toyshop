import { server } from './index';
 
export const getProductsService = () => server.get('public/products');

export const getProdService = id => server.get(`public/product/${id}`);

export const upadateCProductService = (id, product) => server.post(`products/${id}`, product);

export const deleteProductService = id => server.delete(`products/${id}`);