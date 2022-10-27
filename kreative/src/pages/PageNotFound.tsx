import { NavLink } from "react-router-dom";

const PageNotFound = () => {

	return (
		<section className="pnf container">
			<div>
				<div className="cloud x1"></div>
				<div className="cloud x1_5"></div>
				<div className="cloud x2"></div>
				<div className="cloud x3"></div>
				<div className="cloud x4"></div>
				<div className="cloud x5"></div>
			</div>

			<div className="c">
				<div className="_404">404</div>
				<hr className="hr"></hr>
				<div className="_1">PAGE</div>  {/* СТРАНИЦА */}
				<div className="_2">IN DEVELOPING</div>  {/* В РАЗРАБОТКЕ */}
				<button className="btn">
					<NavLink className="btn" to="/">
                        Switch to Main page  {/* Перейти на главную */}
					</NavLink>
				</button>

				<hr className="hr"></hr>
			</div>
		</section>
	);
};

export default PageNotFound;
