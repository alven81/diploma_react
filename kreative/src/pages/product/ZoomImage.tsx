import { useDispatch } from "react-redux";

import { showZoomImage } from "store/actions/zoomAction";

type ZoomImage = {
    imageLink: string;
}

const ZoomImage = ({ imageLink }: ZoomImage) => {
    const dispatch = useDispatch();

    const handlerZoomImage = () => {
        dispatch(showZoomImage(false));
    };

    return (
        <div className="image_box-zoom" onClick={() => handlerZoomImage()}>
            <img src={imageLink} alt="" />
        </div>
    );
};

export { ZoomImage };
