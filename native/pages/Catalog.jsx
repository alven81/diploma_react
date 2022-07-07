import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	FlatList,
	ActivityIndicator,
	TextInput,
	TouchableHighlight,
	ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { Product } from "../components/Product";
import { Search } from "../components/Search";
import { Separator } from "../components/Separator";
import colors from "../res/colors";
import fonts from "../res/fonts";

const Catalog = () => {

	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [product, setProduct] = useState([]);
	const dispatch = useDispatch();


	const getCategories = async () => {
		try {
			const response = await fetch("http://localhost:3004/categories");
			const json = await response.json();
			setData(json);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const getProducts = async (id) => {
		try {
			const response = await fetch(
				`http://localhost:3004/products?categoryId=${id}`
			);
			const json = await response.json();
			setProduct(json);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const getAllProducts = async () => {
		try {
			const response = await fetch(`http://localhost:3004/products`);
			const json = await response.json();
			setProduct(json);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const search = useSelector((state) => state.searchData.search);

	useEffect(() => {
		getCategories();
		getAllProducts();
	}, []);

	useEffect(() => {
		setProduct(search);
	}, [search]);

	return (
		<ScrollView style={styles.container} nestedScrollEnabled={true}>
			<Search />
			<View style={styles.fixToText}>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<FlatList
						data={data}
						keyExtractor={({ id }, index) => id}
						renderItem={({ item }) => (
							<View
								style={{
									margin: 3,
								}}
							>
								<Button
									onPress={() => getProducts(item.id)}
									color={colors.mainPinc}
									key={item.id}
									title={item.category}
								/>
							</View>
						)}
					/>
				)}
			</View>
			<Separator />
			<View>
				{!product.length ? (
					<Text
						style={{
							fontWeight: 600,
						}}
					>
						К сожалению ничего не найдено
					</Text>
				) : isLoading ? (
					<ActivityIndicator />
				) : (
					<View>
						<Text>Найдено товаров {product.length}:</Text>

						<FlatList
							data={product}
							keyExtractor={({ id }, index) => id}
							renderItem={({ item }) => (
								<Product key={item.id} item={item} />
							)}
						/>
					</View>
				)}
			</View>
			<Footer />
			<StatusBar style="auto" />
		</ScrollView>
	);
};

export { Catalog };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 5,
		paddingBottom: 10,
		marginHorizontal: 16,
		backgroundColor: colors.mainWhite,
	},
	logo: {
		padding: 5,
		alignItems: "center",
	},
	separator: {
		marginVertical: 8,
		borderBottomColor: colors.mainPinc,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	search: {
		flex: 1,
		flexDirection: "row",
		width: "100%",
		minHeight: 30,
		maxHeight: 30,
	},
});
