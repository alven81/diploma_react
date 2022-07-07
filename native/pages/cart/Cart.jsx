import { Text, ScrollView, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import CartElement from "./CartElement";
import fonts from "../../res/fonts";

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

	return !cartContent ? (
		<ActivityIndicator />
	) : (
		<ScrollView nestedScrollEnabled={true}>
			{cartContent.map((item) => (
				<CartElement key={item.id} item={item} />
			))}
			<Text
				style={{
					fontFamily: fonts.main,
					fontSize: 18,
					fontWeight: 600,
					margin: 5,
				}}
			>
				Всего товаров в корзине: {whatInTheCart.length}.
			</Text>
			<Text
				style={{
					fontFamily: fonts.main,
					fontSize: 18,
					fontWeight: 600,
					margin: 5,
				}}
			>
				Cтоимость заказа {calcCost(whatInTheCart).toFixed(2)} рублей.
			</Text>
		</ScrollView>
	);
};
export { Cart };
