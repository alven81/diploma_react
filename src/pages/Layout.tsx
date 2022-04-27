import { Outlet } from "react-router-dom"
import Footer from "../components/layout/Footer"
import NavBar from "../components/layout/NavBar"
import RegModal from "../components/modal/reg/Reg"

const Layout = () => {

const userIsLogin = true;

    return (
        <div className="main_container">
            <NavBar />
                <main>
                    <Outlet />
                    {
                        userIsLogin && < RegModal />
                    }
                </main>
            <Footer />
        </div>
    )
}
export default Layout