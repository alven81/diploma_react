import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import IElement from "../../types/element";
import { addItemIndex } from "../../store/actions/indexAction";
import Product from "../product/Product";

interface CatElementProps {
	catalog: IElement;
}

const CatElement: FC<CatElementProps> = ({ catalog }) => {

    const {theme, id} = useParams();
	const discountPercent = Math.round(
		((catalog.price - catalog.discount_price) / catalog.price) * 100
	);
	const dispatch = useDispatch();
	return (
		<div className="catalog_main-element">
			<div className="catalog_main-element-image">
				<div>
					<img
						className={catalog.new === true ? "new pulse" : "hide"}
						src="/assets/img/new.svg"
						alt=""
					/>
				</div>
				<div className="catalog_main-element-image-overflow">
					<Link key={catalog.id} to={`/catalog/${theme ? theme : "id"}/${catalog.id}`}>
						<img
							className="catalog_main-element-image-main"
							onClick={() => {
								dispatch(addItemIndex(catalog.id));
								<Product />;
							}}
							src={`http://localhost:3000${catalog.image}`}
							alt=""
						/>
					</Link>
				</div>
				<div
					className={
						catalog.discount === true ? "discount_block" : "hide"
					}
				>
					<div className="catalog_main-element-disc_top">СКИДКА</div>
					<div className="catalog_main-element-disc_bottom">
						{discountPercent}%
					</div>
				</div>
			</div>
			<div className="catalog_main-element-price">
				<p className={catalog.discount === true ? "overline" : ""}>
					{`${catalog.price} руб.`}
				</p>
				<p className={catalog.discount === true ? "discount" : "hide"}>
					{`${catalog.discount_price} руб.`}
				</p>
			</div>
			<div className="catalog_main-element-title">
				<p>{catalog.title.slice(0, 50) + "..."}</p>
			</div>
		</div>
	);
};
export default CatElement;
