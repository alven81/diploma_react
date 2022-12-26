import { RootStateOrAny, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Footer from "pages/layout/Footer";
import NavBar from "pages/layout/NavBar";
import LogModal from "components/modal/log/LogIn";
import RegModal from "components/modal/reg/Reg";
import { LeftSlideMenu } from "pages/LeftSlideMenu/LeftSlideMenu";
import Alert from "components/modal/Alert";
import { ZoomImage } from "pages/product/ZoomImage";
import IZoomImage from "types/IZoomImage";
import IShowAlert from "types/IShowAlert";

const Layout = () => {

	const userIsReg: boolean = useSelector(
		(state: RootStateOrAny) => state.isOpenReg.isOpenReg
	);

	const userIsLog: boolean = useSelector(
		(state: RootStateOrAny) => state.isOpenLog.isOpenLog
	);

	const leftSideMenuStatus: boolean = useSelector(
		(state: RootStateOrAny) =>
			state.whichIsLeftSideMenuStatus.leftSideMenuStatusIs
	);

	const showAlert: IShowAlert = useSelector(
		(state: RootStateOrAny) => state.alertMessage.alertIs
	);

	const zoomImage: IZoomImage = useSelector(
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
                {zoomImage.isVisible && <ZoomImage imageLink={zoomImage.imageLink}/>}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
