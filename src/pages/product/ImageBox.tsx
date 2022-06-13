import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showZoomImage } from "../../store/actions/zoomAction";
//import { ZoomImage } from "./ZoomImage";

interface ImageBoxProps {
	imageList: [];
	newProduct: boolean;
	imageMain: string;
	age: string;
}

const ImageBox: FC<ImageBoxProps> = ({
	imageList,
	newProduct,
	imageMain,
	age,
}) => {

    const dispatch = useDispatch();

	useEffect(() => {
		setImageLink(imageMain);
	}, [imageMain]);

	const handlerImage = (item: string) => {
		setImageLink(item);
	};

    // const zoomImage = useSelector(
	// 	(state: RootStateOrAny) => state.imageZoom.showZoomImage
	// );

    const handlerZoomImage = () => {
        dispatch(showZoomImage([true, `http://localhost:3000${imageLink}`]));
    }

	const [imageLink, setImageLink] = useState<string>();

	useState(() => {
		setImageLink(imageMain);
	});

	return (
		<div className="image_box">
			<div className="image_box-combo">
				{newProduct}
				{imageList.map((item) => (
					<div key={Math.random()}>
						<img
							className=""
							src={`http://localhost:3000${item}`}
							alt=""
							onMouseOver={() => handlerImage(item)}
						/>
					</div>
				))}
			</div>
			<div className="image_box-mono">
				<img
					//key={Math.random()}
					className="image_box-mono-pic"
					src={`http://localhost:3000${imageLink}`}
					alt=""
                    onClick={() => handlerZoomImage()}
				/>
				<div className={age.length ? "" : "hide"}>
					<span>{age}</span>
				</div>
			</div>
		</div>
	);
};

export { ImageBox };
