import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemIndex } from "store/actions/indexAction";
import Product from "pages/product/Product";

const ReviewUsers = ({ array }) => {
	const { productId, review } = array;
	const dispatch = useDispatch();

	return (
		<li className="reviews_main">
			<div className="reviews_main-image">
				<Link key={productId.id} to={`/catalog/id/${productId.id}`}>
					<img
						onClick={() => {
							dispatch(addItemIndex(productId.id));
							<Product />;
						}}
						src={`http://localhost:3000${productId.image}`}
						alt=""
					/>
				</Link>
				<p>{review.data}</p>
				<Rating
					name="half-rating"
					defaultValue={null}
					value={Number(review.rate)}
					precision={0.5}
					readOnly
				/>
			</div>
			<div className="reviews_main-title">
				<p>
					<b>{productId.title}</b>
				</p>
				<p>{review.text}</p>
			</div>
			<div className="reviews_main-price">
				<p className={productId.discount === true ? "overline" : ""}>
					{`${productId.price} руб.`}
				</p>
				<p
					className={
						productId.discount === true ? "discount" : "hide"
					}
				>
					{`${productId.discount_price} руб.`}
				</p>
			</div>
		</li>
	);
};
export { ReviewUsers };
