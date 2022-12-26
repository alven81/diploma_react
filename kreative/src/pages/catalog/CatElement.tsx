import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import IProducts from "types/products";
import { addItemIndex } from "store/actions/indexAction";
import Product from "pages/product/Product";
import { apiHost } from "services/fetch";

interface ICatElementProps {
	catalog: IProducts;
}

const CatElement = ({ catalog }: ICatElementProps) => {

    const {theme} = useParams();
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
							src={`${apiHost}${catalog.image}`}
							alt=""
						/>
					</Link>
				</div>
				<div
					className={
						catalog.discount === true ? "discount_block" : "hide"
					}
				>
					<div className="catalog_main-element-disc_top">DISCOUNT</div>     {/* СКИДКА */}
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
