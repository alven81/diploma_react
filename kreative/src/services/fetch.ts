import axios from "axios";
import IUser from "types/user";

export const apiHost = `http://localhost:3004/`;
export const webHost = `http://localhost:3000/`;

const catalogData: string = `${apiHost}products`;
const userInfoById = (id: number): string => `${apiHost}users/${id}`;
const categories: string = `${apiHost}categories`;
const searchByCategory = (categoryId: string): string => `${apiHost}products?categoryId=${categoryId}`
const searchProduct = (searchText: string): string => `${apiHost}products?q=${searchText}`
const searchUserEmail = (eMail: string): string => `${apiHost}users/?email=${eMail}`
const usersList: string = `${apiHost}users/`;

//GET
const getData = (url: string, payload?: any) => {
    return axios.get(url, payload)
}

//POST
const postData = (url: string, payload?: any) => {
    return axios.post(url, payload)
}

//PATCH
const patchData = (url: string, payload?: any) => {
    return axios.patch(url, payload)
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
export const postUserList = (credentials: IUser) => postData(usersList, credentials);

//PATCH
export const patchUserInfoById = (id: number, payload: any) => patchData(userInfoById(id), payload);
