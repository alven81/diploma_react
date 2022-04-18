import { Route, Routes } from "react-router-dom"
import './styles/App.scss';
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Workshop from "./pages/Workshop";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { FC, useEffect } from "react";
import axios from "axios"
import IElement from "./types/element";
import { addCatalogData } from "./store/actions/catalogAction";

const App: FC = () => {


    //const catalog = useSelector((state: RootStateOrAny) => state.catalogData.catalogList)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get<IElement[]>('http://localhost:3004/products')
        .then(res => dispatch(addCatalogData(res.data)))

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
