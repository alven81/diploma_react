import { useDispatch } from "react-redux";
import { showAlertMessage } from "store/actions/AlertAction";

const Alert = ({ alertMessage }) => {
	const dispatch = useDispatch();

	const handleCloseAlert = () => {
		dispatch(
			showAlertMessage({
				status: false,
				message: null,
			})
		);
	};

	return (
		<section className="fullscreen-box">
			<div className="alert">
				<div>
					<p>{alertMessage}</p>
				</div>
				<div className="button_container">
					<button onClick={handleCloseAlert}>Close</button>    {/* Закрыть */}
				</div>
			</div>
		</section>
	);
};
export default Alert;
