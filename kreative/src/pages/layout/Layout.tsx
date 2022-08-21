import { RootStateOrAny, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import LogModal from "../../components/modal/log/LogIn";
import RegModal from "../../components/modal/reg/Reg";
import { LeftSlideMenu } from "../leftSlideMenu/LeftSlideMenu";
import Alert from "../../components/modal/Alert";
import { ZoomImage } from "../product/ZoomImage";

const Layout = () => {
	const userIsReg = useSelector(
		(state: RootStateOrAny) => state.isOpenReg.isOpenReg
	);
	const userIsLog = useSelector(
		(state: RootStateOrAny) => state.isOpenLog.isOpenLog
	);
	const leftSideMenuStatus = useSelector(
		(state: RootStateOrAny) =>
			state.whichIsLeftSideMenuStatus.leftSideMenuStatusIs
	);
	const showAlert = useSelector(
		(state: RootStateOrAny) => state.alertMessage.alertIs
	);
	const zoomImage = useSelector(
		(state: RootStateOrAny) => state.imageZoom.showZoomImage
	);

	return (
		<div className="main_container">
			<LeftSlideMenu isMenuOpen={leftSideMenuStatus} />
			<NavBar />
			<main>
				<Outlet />
				{userIsLog && <LogModal />}
				{userIsReg && <RegModal />}
				{showAlert.status && <Alert alertMessage={showAlert.message} />}
                {zoomImage[0] && <ZoomImage image={zoomImage[1]}/>}
			</main>
			<Footer />
		</div>
	);
};
export default Layout;
