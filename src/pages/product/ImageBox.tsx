import React, { FC, useEffect, useState } from "react";

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
	useEffect(() => {
		setImageLink(imageMain);
	}, [imageMain]);

	const handlerImage = (item: string) => {
		setImageLink(item);
	};

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
					key={Math.random()}
					className="image_box-mono-pic"
					src={`http://localhost:3000${imageLink}`}
					alt=""
				/>
				<div className={age.length ? "" : "hide"}>
					<span>{age}</span>
				</div>
			</div>
		</div>
	);
};

export { ImageBox };
