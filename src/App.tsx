import { Route, Routes } from "react-router-dom"
import './styles/App.scss';
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Workshop from "./pages/Workshop";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import getCatalogData from "./store/actions/loadCatalogAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatalogData())
    }, [dispatch])

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
