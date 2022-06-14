import { useDispatch } from "react-redux";
import { showZoomImage } from "../../store/actions/zoomAction";

const ZoomImage = ({ image }) => {
    const dispatch = useDispatch();

    const handlerZoomImage = () => {
        dispatch(showZoomImage(false));
    };

    return (
        <div className="image_box-zoom" onClick={() => handlerZoomImage()}>
            <img src={image} alt="" />
        </div>
    );
};
export { ZoomImage };
