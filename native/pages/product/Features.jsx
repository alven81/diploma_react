import { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import fonts from "../../res/fonts";

const Features = ({ features, chars }) => {
	const [isLoading, setLoading] = useState(true);

	return !features ? (
		<ActivityIndicator />
	) : (
		<View>
			<Text style={chars}>Характеристики:</Text>
			<View style={features.weight ? styles.description : styles.hide}>
				<Text>Вес товара с упаковкой (г):</Text>
				<Text>{features.weight}</Text>
			</View>
			<View
				style={
					features.creation.length ? styles.description : styles.hide
				}
			>
				<Text>Вид творчества:</Text>
				{features.creation.map((text, index) => (
					<Text key={index}>- {text};</Text>
				))}
			</View>
			<View style={features.age ? styles.description : styles.hide}>
				<Text>Возрастные ограничения:</Text>
				<Text>{features.age}</Text>
			</View>
			<View
				style={features.height_gross ? styles.description : styles.hide}
			>
				<Text>Высота упаковки (см):</Text>
				<Text>{features.height_gross}</Text>
			</View>
			<View style={features.deep ? styles.description : styles.hide}>
				<Text>Глубина упаковки (см):</Text>
				<Text>{features.deep}</Text>
			</View>
			<View style={features.width ? styles.description : styles.hide}>
				<Text>Ширина упаковки (см):</Text>
				<Text>{features.width}</Text>
			</View>
			<View style={features.height ? styles.description : styles.hide}>
				<Text>Высота изделия (см):</Text>
				<Text>{features.height}</Text>
			</View>
			<View
				style={
					features.creation.length ? styles.description : styles.hide
				}
			>
				<Text>Страна производства:</Text>
				<Text>{features.origin}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	hide: {
		display: "none",
	},
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 50,
	},
	// title: {
	//     padding: 5,
	// 	fontFamily: fonts.main,
	// 	textTransform: "uppercase",
	// 	fontSize: 16,
	// 	fontWeight: 700,
	// 	textAlign: "left",
	// },
	price: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		padding: 10,
	},
	description: {
		padding: 10,
		textAlign: "justify",
	},
});

export { Features };
