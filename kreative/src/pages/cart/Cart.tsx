import { useSelector } from "react-redux";

import CartElement from "pages/cart/CartElement";
import { cartLanguage } from "lng";
import IInCart from "types/inCart";
import createLink from "utils/createLink";
import ICategoryLanguage from "types/ICategoryLanguage";
import IProducts from "types/IProducts";

const Cart = () => {
	const whatInTheCart: IInCart = useSelector((state: IInCart) => state.loadCart.inCart);
	const fullCatalog: Array<IProducts> = useSelector((state: any) => state.loadData.loadCatalog);
	const setLang: string = useSelector((state: ICategoryLanguage) => state.loadLanguage.languageIs);

	const calcCartContent = whatInTheCart.reduce(
		(acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
		{}
	);

	function calcCart(calcCartContent: any) {
		let i: number = 0;
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

	function calcCost(whatInTheCart: IInCart) {
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
			<p>{createLink(cartLanguage.shop_cart_ui, setLang)}</p>
			<ul className="cart">
				{cartContent.map((item) => (
					<CartElement
						key={item.id}
						item={item}
					/>
				))}
			</ul>
			<p>
				{createLink(cartLanguage.total_in_cart_ui, setLang)}: {whatInTheCart.length},
				{" "}{createLink(cartLanguage.order_cost_ui,setLang)}{" "}
				{calcCost(whatInTheCart).toFixed(2)}
				{" "}{createLink(cartLanguage.rub_cost_ui,setLang)}.
			</p>
		</div>
	);
};

export default Cart;
