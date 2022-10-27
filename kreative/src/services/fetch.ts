import axios from "axios";

const host = `http://localhost:3004/`;

const catalogData = `${host}products`;
const userInfoById = (id: number) => `${host}users/${id}`;
const categories = `${host}categories`;
const searchByCategory = (categoryId: string) => `${host}products?categoryId=${categoryId}`
const searchProduct = (searchText: string) => `${host}products?q=${searchText}`
const searchUserEmail = (eMail: string) => `${host}users/?email=${eMail}`
const usersList = `${host}users/`;

//GET
const getData = (url: string, payload?: any) => {
    return axios.get(url, payload)
}

//POST
const postData = (url: string, payload?: any) => {
    return axios.post(url, payload)
}

//GET
export const getCatalog = () => getData(catalogData);
export const getUserInfoById = (id: number) => getData(userInfoById(id));
export const getCategories = () => getData(categories);
export const getSearchByCategory = (categoryId: string) => getData(searchByCategory(categoryId));
export const getSearchByProduct = (productId: string) => getData(searchProduct(productId));
export const getUserEmail = (eMail: string) => getData(searchUserEmail(eMail));
export const getUserList = () => getData(usersList);

//POST
export const postUserList = (credentials: any) => postData(usersList, credentials);