import { NavLink } from "react-router-dom";

interface IWorkshop {
	buttonTo: string;
	buttonName: string;
	picture: string;
}

const Workshop = ({ buttonTo, buttonName, picture }: IWorkshop) => {

	return (
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
	);
};

export default Workshop;
