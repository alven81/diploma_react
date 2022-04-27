import { Route, Routes } from "react-router-dom"
import './styles/App.scss';
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Workshop from "./pages/Workshop";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { store, userLogInfo } from './store/index';
import getCatalogData from "./store/actions/loadCatalogAction";
import { isUserLogIn } from "./store/actions/isUserLogInAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        store.dispatch(getCatalogData())
    }, [dispatch])


    useEffect(() => {
    userLogInfo.dispatch(isUserLogIn({
        "id": 0,
        "avatar": "/assets/avatars/1.jpg",
        "firstName": "Unnamed",
        "lastName": "Unnamed",
        "email": "-"
    }))}, []);

    
   
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
