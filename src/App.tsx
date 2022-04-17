import { Route, Routes } from "react-router-dom"
import './styles/App.scss';
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Workshop from "./pages/Workshop";

const App = () => {
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
