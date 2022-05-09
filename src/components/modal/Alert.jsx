import { useDispatch } from "react-redux"
import { showAlertMessage } from "../../store/actions/AlertAction";

const Alert = ({alertMessage}) => {

    const dispatch = useDispatch();

    const handleCloseAlert = () => {
        dispatch(showAlertMessage({
            status: false,
            message : null
        }))
    }

    return (
        <div className="alert">
            <div>
                <p>{alertMessage}</p>
            </div>
            <div class="button_container">
                <button onClick={handleCloseAlert} >Закрыть</button>
            </div>
        </div>
    )
}
export default Alert