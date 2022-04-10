import { Navigate, Route, Routes } from "react-router-dom"
import './App.scss';
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
