import { useDispatch } from "react-redux";

import { showAlertMessage } from "store/actions/AlertAction";

type AlertMessage = {
	alertMessage: string
}

const Alert = ({ alertMessage }: AlertMessage) => {
	const dispatch = useDispatch();

	const handleCloseAlert = () =>
		dispatch(
			showAlertMessage({
				status: false,
				message: null,
			})
		);

	return (
		<section className="fullscreen-box">
			<div className="alert">
				<div>
					<p>{alertMessage}</p>
				</div>
				<div className="button_container">
					<button
						onClick={handleCloseAlert}
					>
						Close
					</button>
				</div>
			</div>
		</section>
	);
};
export default Alert;
