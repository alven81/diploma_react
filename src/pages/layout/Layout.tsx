import { RootStateOrAny, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import LogModal from "../../components/modal/log/LogIn";
import RegModal from "../../components/modal/reg/Reg";
import { buffer } from "stream/consumers";
import BurgerMenu from "../../components/modal/burger/BurgerMenu";
import { LeftSlideMenu } from "../LeftSlideMenu/LeftSlideMenu";

const Layout = () => {

    const userIsReg = useSelector((state: RootStateOrAny) => state.isOpenReg.isOpenReg);
    const userIsLog = useSelector((state: RootStateOrAny) => state.isOpenLog.isOpenLog);
    const leftSideMenuStatus = useSelector((state: RootStateOrAny) => state.whichIsLeftSideMenuStatus.leftSideMenuStatusIs);
    
    return (
        <div className="main_container">
            <LeftSlideMenu isMenuOpen={leftSideMenuStatus} />
            <NavBar/>
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