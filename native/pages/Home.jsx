import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";
import { Separator } from "../components/Separator";
import colors from "../res/colors";
import fonts from "../res/fonts";
import loadCart from "../store/actions/loadCartAction";
import getCatalogData from "../store/actions/loadCatalogAction";

const Home = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadCart(0));
	}, []);

	useEffect(() => {
		dispatch(getCatalogData());
	}, [dispatch]);

	return (
		<ScrollView style={styles.container} nestedScrollEnabled={true}>
			<View style={styles.logo}>
				
				<Image
					source={require("../assets/logo.png")}
					style={{
						height: 70,
						width: 210,
					}}
				/>
                <Text
					style={{
						fontWeight: 700,
						color: colors.mainPinc,
						marginBottom: 10,
						fontFamily: fonts.main,
					}}
				>
					Добрый день, Таинственный незнакомец!
				</Text>
			</View>

			<Footer />
			<StatusBar style="auto" />
		</ScrollView>
	);
};

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

export { Home };
