import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CatElement from "../catalog/CatElement";

const New = () => {
	const catalog = useSelector((state) => state.loadData.loadCatalog);

	const [newCatalog, setNewCatalog] = useState();

	useEffect(() => {
		setNewCatalog(catalog.filter((catalog) => catalog.new));
	}, [catalog]);

	const Carousel = useRef(null);

	let timer = 0;

	const handleCarouselLeftDown = () => {
		timer = setInterval(() => {
			Carousel.current.scrollLeft -= 2;
		}, 8);
	};

	const handleCarouselLeftUp = () => {
		clearInterval(timer);
	};

	const handleCarouselRightDown = () => {
		timer = setInterval(() => {
			Carousel.current.scrollLeft += 2;
		}, 6);
	};

	const handleCarouselRightUp = () => {
		clearInterval(timer);
	};

	return (
		<div className="new_block">
			<div>
				<p className="new-main-header">NEW IN THIS CATEGORY</p> {/* НОВИНКИ В ЭТОЙ КАТЕГОРИИ */}

				<div className="new-main-block">
					<button
						onMouseDown={() => handleCarouselLeftDown()}
						onMouseUp={() => handleCarouselLeftUp()}
						className="prev"
					/>

					<div className="new-main" ref={Carousel}>
						{newCatalog &&
							newCatalog.map((catalog) => (
								<CatElement
									key={catalog.id}
									catalog={catalog}
								/>
							))}
					</div>

					<button
						onMouseDown={() => handleCarouselRightDown()}
						onMouseUp={() => handleCarouselRightUp()}
						className="next"
					/>
				</div>
			</div>
		</div>
	);
};
export { New };
