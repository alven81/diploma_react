import axios from "axios";

const host = `http://localhost:3004/`;

const catalogData = `${host}products`;
const userInfoById = (id: number) => `${host}users/${id}`;
const categories = `${host}categories`;
const searchByCategory = (categoryId: string) => `${host}products?categoryId=${categoryId}`
const searchProduct = (searchText: string) => `${host}products?q=${searchText}`

const getData = (url: string, payload?: any) => {
    return axios.get(url, payload)
}

export const getCatalog = () => getData(catalogData);
export const getUserInfoById = (id: number) => getData(userInfoById(id));
export const getCategories = () => getData(categories);
export const getSearchByCategory = (categoryId: string) => getData(searchByCategory(categoryId));
export const getSearchByProduct = (productId: string) => getData(searchProduct(productId));
