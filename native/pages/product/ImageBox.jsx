import { useState } from "react";
import {
	StyleSheet,
	ActivityIndicator,
	ScrollView,
	Image,
	View,
	Text,
	Dimensions,
} from "react-native";
import colors from "../../res/colors";
import fonts from "../../res/fonts";

const { width } = Dimensions.get("window");
const height = width * 1.5;

const ImageBox = ({ images, newProduct, age }) => {
	const [active, setActive] = useState(0);

	const change = ({ nativeEvent }) => {
		const slide = Math.ceil(
			nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
		);
		if (slide !== active) {
			setActive(slide);
		}
	};

	return !images ? (
		<ActivityIndicator />
	) : (
		<View style={styles.container}>
			{!newProduct ? "" : <Text style={styles.new}>New!</Text>}
            {!age.age ? "" : <Text style={styles.age}>{age.age}</Text>}
			<ScrollView
				pagingEnabled
				horizontal
				onScroll={change}
				showsHorizontalScrollIndicator={false}
				style={styles.scroll}
			>
				{images.map((image, index) => (
					<Image
						key={index}
						source={{
							uri: `http://localhost:3000${image}`,
						}}
						style={styles.image}
					/>
				))}
			</ScrollView>
			<View style={styles.pagination}>
				{images.map((i, k) => (
					<Text
						key={k}
						style={
							k === active
								? styles.pagingActiveText
								: styles.pagingText
						}
					>
						⬤
					</Text>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width,
		height,
		zIndex: 0,
	},
	new: {
		position: "absolute",
		top: 20,
		left: 20,
		color: colors.mainPinc,
		borderWidth: 3,
		borderColor: colors.mainPinc,
		borderRadius: 8,
		padding: 5,
		fontFamily: fonts.main,
		fontSize: 30,
		zIndex: 10,
	},
    age: {
		position: "absolute",
		top: 20,
		right: 20,
		color: colors.mainPinc,
		borderWidth: 3,
		borderColor: colors.mainPinc,
		borderRadius: 30,
		padding: 5,
		fontFamily: fonts.main,
		fontSize: 20,
		zIndex: 10,
	},
	scroll: {
		width,
		height,
	},
	image: {
		width,
		height,
		resizeMode: "cover",
	},
	pagination: {
		flexDirection: "row",
		position: "absolute",
		bottom: 0,
		alignSelf: "center",
	},
	pagingText: {
		fontSize: width / 30,
		color: colors.mainPinc,
		margin: 3,
	},
	pagingActiveText: {
		fontSize: width / 30,
		color: colors.mainWhite,
		margin: 3,
	},
});

export { ImageBox };
