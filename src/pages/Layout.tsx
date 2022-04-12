import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Layout = () => {
    return (
        <div className="main_container">
            <NavBar />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}
export default Layout