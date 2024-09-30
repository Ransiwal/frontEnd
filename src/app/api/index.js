import axios from "axios";
const url = 'https://backend-1-5x5q.onrender.com';

export const fetchCategoryList = () => axios.get(`${url}/api/categoryList`)
export const fetchAllProducts = (limit , offset) => axios.get(`${url}/api/products?limit=${limit}&offset=${offset}`)
// export const fetchAllProducts = () => axios.get(`${url}/api/products`)

export const fetchCategory = (category) => axios.get(`${url}/api/cat/${category}`)
