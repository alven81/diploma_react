const HomeElementContainer = ({ inlayElement }) => {

	return (
		<div className="home">
			<div className="home_element">
				<div className="home_element-top">
					<span className="home_element-top-left"></span>
					<span className="home_element-top-right"></span>
				</div>

				<div className="home_element-middle">
					<div className="home_element-middle-left">
						<span className="home_element-middle-left-top"></span>
						<span className="home_element-middle-left-bottom"></span>
					</div>
					<>{inlayElement}</>
					<div className="home_element-middle-right">
						<span className="home_element-middle-right-top"></span>
						<span className="home_element-middle-right-bottom"></span>
					</div>
				</div>

				<div className="home_element-bottom">
					<span className="home_element-bottom-left"></span>
					<span className="home_element-bottom-right"></span>
				</div>
			</div>
		</div>
	);
};

export { HomeElementContainer };
