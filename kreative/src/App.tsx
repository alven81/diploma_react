import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/product/Product";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import getCatalogData from "./store/actions/loadCatalogAction";
import { isUserLogIn } from "./store/actions/isUserLogInAction";
import Catalog from "./pages/catalog/Catalog";
import Cart from "./pages/cart/Cart";
import Search from "./pages/search/Search";
import Reviews from "./pages/reviews/Reviews";
import { Administration } from "./pages/Administration";
import Theme from "./pages/Theme";
import Likes from "./pages/likes/Likes";
import { uiLanguage } from "./store/actions/uiLanguage";

const App = () => {
    const dispatch = useDispatch();
    const defaultUser = {
        id: 0,
        avatar: "/assets/avatars/0.jpg",
        firstName: "Mysterious Stranger",   //Таинственный незнакомец
        lastName: "",
        email: "",
    };

    const lang = "eng";

    useEffect(() => {
        dispatch(getCatalogData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(isUserLogIn(defaultUser));
        dispatch(uiLanguage(lang));
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="catalog/:theme" element={<Theme />} />
                    <Route path="catalog/:theme/:id" element={<Product />} />
                    <Route path="search" element={<Search />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="administration" element={<Administration />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="likes" element={<Likes />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
