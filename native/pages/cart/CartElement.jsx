import { useEffect, useState } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { Link } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addItemIndex } from "../../store/actions/indexAction";
import { Product } from "../../components/Product";
import axios from "axios";
import loadCart from "../../store/actions/loadCartAction";
import fonts from "../../res/fonts";
import colors from "../../res/colors";
import { Separator } from "../../components/Separator";

const CartElement = ({ item, navigation }) => {
	const { id, quantity } = item;

	useEffect(() => {
		setQty(quantity);
	}, [quantity]);

	const [qty, setQty] = useState(null);
	const dispatch = useDispatch();

	const fullCatalog = useSelector((state) => state.loadData.loadCatalog);
	let whatInTheCart = useSelector((state) => state.loadCart.inCart);
	const catalog = fullCatalog[id - 1];

	const handleCost = () => {
		return qty * (catalog.discount_price || catalog.price);
	};

	const handleQuantity = async (e) => {
		if (e > 0) {
			await whatInTheCart.push(Number(id));
			await axios
				.patch(`http://localhost:3004/users/0`, {
					cart: whatInTheCart,
				})
				.catch(function (error) {
					if (error.response) {
						console.log(error.response.status);
					}
				});
			dispatch(loadCart(0));
		}

		if (e < 0) {
			const index = whatInTheCart.indexOf(id);
			whatInTheCart = whatInTheCart
				.splice(index + 1)
				.concat(whatInTheCart.splice(0, index));
			await axios
				.patch(`http://localhost:3004/users/0`, {
					cart: whatInTheCart,
				})
				.catch(function (error) {
					if (error.response) {
						console.log(error.response.status);
					}
				});
			dispatch(loadCart(0));
		}

		if (!qty & (e < 0)) return;
		let calcQty = qty + e;
		setQty(calcQty);
	};

	return (
		<View>
			
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					padding: 5,
					minHeight: 100,
				}}
			>
				<Image
					key={catalog.id}
					source={{
						uri: `http://localhost:3000${catalog.image}`,
					}}
					style={{ width: 80, height: 110, borderRadius: 5 }}
				/>

				<Text
					style={{
						margin: 5,
						fontFamily: fonts.main,
						fontSize: 16,
						fontWeight: 600,
					}}
				>
					{catalog.title}
				</Text>
			</View>

			<View
				style={{
					flex: 1,
					flexDirection: "row",
					padding: 5,
					maxHeight: 20,
					justifyContent: "flex-start",
					alignItems: "baseline",
				}}
			>
				<Text
					style={{
						marginRight: 20,
					}}
				>
					Цена:
				</Text>
				<Text
					style={{
						textDecorationLine:
							catalog.discount === true ? "line-through" : "",
						fontFamily: fonts.main,
						textAlign: "left",
						marginRight: 20,
					}}
				>
					{`${catalog.price} руб.`}
				</Text>
				<Text
					style={{
						display: catalog.discount === true ? "" : "none",
						color: colors.mainPinc,
						fontFamily: fonts.main,
						textAlign: "left",
						fontWeight: 700,
					}}
				>
					Цена со скидкой: {`${catalog.discount_price} руб.`}
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					padding: 10,
					maxHeight: 70,
				}}
			>
				<TouchableHighlight
					onPress={() => handleQuantity(-1)}
					style={{
						flex: 2,
						justifyContent: "center",
						alignItems: "center",
						height: 40,
						borderRadius: 40,
						backgroundColor: colors.mainPinc,
						margin: 5,
					}}
				>
					<Text
						style={{
							color: colors.mainWhite,
							fontFamily: fonts.main,
							fontSize: 30,
						}}
					>
						-
					</Text>
				</TouchableHighlight>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						height: 40,
					}}
				>
					<Text
						style={{
							color: colors.mainPinc,
							fontFamily: fonts.main,
							fontSize: 30,
						}}
					>
						{qty}
					</Text>
				</View>
				<TouchableHighlight
					onPress={() => handleQuantity(1)}
					style={{
						flex: 2,
						justifyContent: "center",
						alignItems: "center",
						height: 40,
						borderRadius: 40,
						backgroundColor: colors.mainPinc,
						margin: 5,
					}}
				>
					<Text
						style={{
							color: colors.mainWhite,
							fontFamily: fonts.main,
							fontSize: 30,
						}}
					>
						+
					</Text>
				</TouchableHighlight>
			</View>
			<Text
				style={{
					textAlign: "center",
					fontFamily: fonts.main,
					fontWeight: 600,
				}}
			>
				Итоговая стоимость: {handleCost().toFixed(2)}
			</Text>
            <Separator />
		</View>
        
	);
};
export default CartElement;
