import { useState } from "react";
import {
	View,
	TextInput,
	TouchableHighlight,
	StyleSheet,
	Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { getSearchProduct } from "../store/actions/actions";
import colors from "../res/colors";

const Search = ({ navigation }) => {
	const dispatch = useDispatch();

	const [searchText, setSearchText] = useState("");

	const handleSearch = (searchText) => {
		dispatch(getSearchProduct(searchText));
	};

	return (
		<View style={styles.search}>
			<TextInput
				style={{
					borderColor: colors.mainPinc,
					borderWidth: 1,
					borderRadius: 5,
					paddingHorizontal: 5,
					width: "90%",
				}}
				//defaultValue="Что ищем?"
				onChangeText={setSearchText}
				value={searchText}
			/>
			<TouchableHighlight onPress={() => handleSearch(searchText)}>
				<Image
					source={require("../assets/loupe.svg")}
					style={{
						height: 30,
						width: 30,
					}}
				/>
			</TouchableHighlight>
		</View>
	);
};

export { Search };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 5,
		paddingBottom: 10,
		//justifyContent: "flex-start",
		marginHorizontal: 16,
		backgroundColor: colors.mainWhite,
	},
	logo: {
		padding: 5,
		//justifyContent: "flex-start",
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
		//justifyContent: "space-between",
		width: "100%",
		minHeight: 30,
		maxHeight: 30,
	},
});
