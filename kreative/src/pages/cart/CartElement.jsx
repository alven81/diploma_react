import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemIndex } from "store/actions/indexAction";
import Product from "pages/product/Product";
import axios from "axios";
import loadCart from "store/actions/loadCartAction";
import { showAlertMessage } from "store/actions/AlertAction";

const CartElement = ({ item }) => {
	const { id, quantity } = item;

	useEffect(() => {
		setQty(quantity);
	}, [quantity]);

	const [qty, setQty] = useState(null);
	const dispatch = useDispatch();

	const fullCatalog = useSelector((state) => state.loadData.loadCatalog);
	const user = useSelector((state) => state.isUserLogIn.isUserLogInInfo);
	let whatInTheCart = useSelector((state) => state.loadCart.inCart);
	const catalog = fullCatalog[id - 1];

	const handleCost = () => {
		return qty * (catalog.discount_price || catalog.price);
	};

	const handleQuantity = async (e) => {
		if (!user.id)
			return dispatch(
				showAlertMessage({
					status: true,
					message:
						"Only registered users can add items to cart!", //Только зарегистрированные пользователи могут добавлять товары в корзину
				})
			);

		if (e > 0) {
			await whatInTheCart.push(Number(id));
			await axios
				.patch(`http://localhost:3004/users/${user.id}`, {
					cart: whatInTheCart,
				})
				.catch(function (error) {
					if (error.response) {
						console.log(error.response.status);
					}
				});
			dispatch(loadCart(user.id));
		}

		if (e < 0) {
			const index = whatInTheCart.indexOf(id);
			whatInTheCart = whatInTheCart
				.splice(index + 1)
				.concat(whatInTheCart.splice(0, index));
			await axios
				.patch(`http://localhost:3004/users/${user.id}`, {
					cart: whatInTheCart,
				})
				.catch(function (error) {
					if (error.response) {
						console.log(error.response.status);
					}
				});
			dispatch(loadCart(user.id));
		}

		if (!qty & (e < 0)) return;
		let calcQty = qty + e;
		setQty(calcQty);
	};

	return (
		<li className="cart_main">
			<div className="cart_main-image">
				<Link key={catalog.id} to={`/catalog/id/${catalog.id}`}>
					<img
						onClick={() => {
							dispatch(addItemIndex(catalog.id));
							<Product />;
						}}
						src={`http://localhost:3000${catalog.image}`}
						alt=""
					/>
				</Link>
			</div>
			<div className="cart_main-title">
				<p>{catalog.title}</p>
			</div>
			<div className="cart_main-price">
				<p className={catalog.discount === true ? "overline" : ""}>
					{`${catalog.price} руб.`}
				</p>
				<p className={catalog.discount === true ? "discount" : "hide"}>
					{`${catalog.discount_price} руб.`}
				</p>
			</div>
			<div className="cart_main-quantity">
				<div>
					<button onClick={() => handleQuantity(-1)}>-</button>
				</div>
				<div>{qty}</div>
				<div>
					<button onClick={() => handleQuantity(1)}>+</button>
				</div>
			</div>
			<div className="cart_main-cost">
				<p>{handleCost().toFixed(2)}</p>
			</div>
		</li>
	);
};
export default CartElement;
