import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import RegModal from "../components/RegModal"

const Layout = () => {

const isOpenRegModal = true;

    return (
        <div className="main_container">
            <NavBar />
                <main>
                    <Outlet />
                    {
                        isOpenRegModal && < RegModal />
                    }
                </main>
            <Footer />
        </div>
    )
}
export default Layout