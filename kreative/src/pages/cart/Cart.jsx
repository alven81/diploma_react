import { useSelector } from "react-redux";

import CartElement from "pages/cart/CartElement";

import { cartLanguage } from "lng";

const Cart = () => {
	const whatInTheCart = useSelector((state) => state.loadCart.inCart);
	const fullCatalog = useSelector((state) => state.loadData.loadCatalog);
	const setLang = useSelector((state) => state.loadLanguage.languageIs);

	const calcCartContent = whatInTheCart.reduce(
		(acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
		{}
	);

	function calcCart(calcCartContent) {
		let i = 0;
		const cartItemContent = [];

		for (let key in calcCartContent) {
			cartItemContent[i] = {
				id: Number(key),
				quantity: calcCartContent[key],
			};
			i++;
		}
		return cartItemContent;
	}

	const cartContent = calcCart(calcCartContent);

	function calcCost(whatInTheCart) {
		let price = 0;
		whatInTheCart.forEach((value) => {
			price +=
				fullCatalog[value - 1].discount_price ||
				fullCatalog[value - 1].price;
		});
		return price;
	}

	return (
		<div className="cart-name container">
			<p>{cartLanguage.shop_cart_ui[setLang]}</p>
			<ul className="cart">
				{cartContent.map((item) => (
					<CartElement
						key={item.id}
						item={item}
					/>
				))}
			</ul>
			<p>
				{cartLanguage.total_in_cart_ui[setLang]}: {whatInTheCart.length},
				{" "}{cartLanguage.order_cost_ui[setLang]}{" "}
				{calcCost(whatInTheCart).toFixed(2)}
				{" "}{cartLanguage.rub_cost_ui[setLang]}.
			</p>
		</div>
	);
};

export default Cart;
