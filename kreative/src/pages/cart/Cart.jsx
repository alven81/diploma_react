import { useSelector } from "react-redux";
import CartElement from "../cart/CartElement";

const Cart = () => {
	const whatInTheCart = useSelector((state) => state.loadCart.inCart);
	const fullCatalog = useSelector((state) => state.loadData.loadCatalog);

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
			 <p>Shopping cart</p>     {/* Корзина заказов */}
			<ul className="cart">
				{cartContent.map((item) => (
					<CartElement key={item.id} item={item} />
				))}
			</ul>
			<p>
                Total items in cart: {whatInTheCart.length}, order   {/* Всего товаров в корзине / стоимость*/}
				cost {calcCost(whatInTheCart).toFixed(2)} PLN.         {/* рублей */}
			</p>
		</div>
	);
};
export default Cart;
