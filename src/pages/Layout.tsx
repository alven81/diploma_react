import { RootStateOrAny, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import LogModal from "../components/modal/log/LogIn";
import RegModal from "../components/modal/reg/Reg";

const Layout = () => {

    const userIsReg = useSelector((state: RootStateOrAny) => state.isOpenReg.isOpenReg);
    const userIsLog = useSelector((state: RootStateOrAny) => state.isOpenLog.isOpenLog);

    return (
        <div className="main_container">
            <NavBar />
                <main>
                    <Outlet />
                    {
                        userIsLog && < LogModal />
                    }
                    {
                        userIsReg && < RegModal />
                    }
                </main>
            <Footer />
        </div>
    )
}
export default Layout