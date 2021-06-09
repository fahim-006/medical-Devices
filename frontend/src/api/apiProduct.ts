import { API } from '../utils/config';
import axios from 'axios';

export const getProducts = (sortBy: any, order: any, limit: any) => {
    return axios.get(`${API}/product?sortBy=${sortBy}&order=${order}&limit=${limit}`)
}

export const getProductDetails = (id: any) => {
    return axios.get(`${API}/product/${id}`)
}

export const getCategories = () => {
    return axios.get(`${API}/category`)
}