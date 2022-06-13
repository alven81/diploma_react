import { NavLink } from "react-router-dom";

const Workshop = ({ buttonTo, buttonName, picture }) => {
	return (
		<>
			<div className="home_main-workshop-element">
				<div>
					<NavLink to={buttonTo}>
						<div className="button_container">
							<button>{buttonName}</button>
						</div>
					</NavLink>
				</div>
				<div className="home_main-workshop-element-image">
					<div>
						<img src={picture} alt={buttonName} />
					</div>
				</div>
			</div>
		</>
	);
};
export default Workshop;
