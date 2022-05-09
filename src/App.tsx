import { Route, Routes } from "react-router-dom"
import './styles/App.scss';
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/product/Product";
import Workshop from "./pages/Workshop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import getCatalogData from "./store/actions/loadCatalogAction";
import { isUserLogIn } from "./store/actions/isUserLogInAction";
import Catalog from "./pages/catalog/Catalog";
import Cart from "./pages/cart/Cart";
import Search from "./pages/search/Search";
import Reviews from "./pages/reviews/Reviews";
import { Administration } from "./pages/Administration";
import Craft from "./pages/Craft";
import Paint from "./pages/Paint";
import Model from "./pages/Model";
import Decor from "./pages/Decor";
import Flora from "./pages/Flora";

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
                    <Route path="search" element={<Search />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="administration" element={<Administration />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="craft" element={<Craft />} />
                    <Route path="paint" element={<Paint />} />
                    <Route path="model" element={<Model />} />
                    <Route path="decor" element={<Decor />} />
                    <Route path="flora" element={<Flora />} />
                    <Route path="product/:id" element={<Product/>} />
                    <Route path="cart" element={<Cart/>} />
                    <Route path="workshop" element={<Workshop />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
