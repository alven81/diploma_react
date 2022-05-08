import { RootStateOrAny, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import LogModal from "../../components/modal/log/LogIn";
import RegModal from "../../components/modal/reg/Reg";
import { buffer } from "stream/consumers";
import BurgerMenu from "../../components/modal/burger/BurgerMenu";

const Layout = () => {

    const userIsReg = useSelector((state: RootStateOrAny) => state.isOpenReg.isOpenReg);
    const userIsLog = useSelector((state: RootStateOrAny) => state.isOpenLog.isOpenLog);
    
    const burgerPress = () => {

    }

    return (
        <div className="main_container">
            <NavBar/>
                <main>
                    <Outlet />
                    {
                        userIsLog && < LogModal />
                    }
                    {
                        userIsReg && < RegModal />
                    }       
                    {
                        //burgerPressed && < BurgerMenu />
                    }
                </main>
            <Footer />
        </div>
    )
}
export default Layout