import { Route, Routes } from "react-router-dom"
import './App.scss';
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Workshop from "./pages/Workshop";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="workshop" element={<Workshop />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
