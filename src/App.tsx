import { Route, Routes } from "react-router-dom"
import './styles/App.scss';
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Workshop from "./pages/Workshop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { store } from './store/index';
import getCatalogData from "./store/actions/loadCatalogAction";
import { isUserLogIn } from "./store/actions/isUserLogInAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatalogData())
    }, [dispatch])


    useEffect(() => {
        dispatch(isUserLogIn({
            "id": 0,
            "avatar": "/assets/avatars/0.jpg",
            "firstName": "Таинственный незнакомец",
            "lastName": "",
            "email": "-"
    }))}, [dispatch]);

    
   
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="product/:id" element={<Product/>} />
                    <Route path="workshop" element={<Workshop />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
