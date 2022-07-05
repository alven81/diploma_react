import { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import fonts from "../res/fonts";



const Features = ({ features }) => {

    const [isLoading, setLoading] = useState(true);

    return (

        !features ? (
            <Text
                style={{
                    fontWeight: 600,
                }}
            >
                Загрузка
            </Text>
        ) : (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={styles.title}>Характеристики</Text>
				<View style={features.weight ? styles.description : styles.hide}>
					<Text>Вес товара с упаковкой (г)</Text>
					<Text>{features.weight}</Text>
				</View>
                <View style={features.creation.length ? styles.description : styles.hide}>
					<Text>Вид творчества</Text>

                    {features.creation.map((text, index) => (
                        <Text
                            key={index}
                        >
                            {text};
                        </Text>
				    ))}


					<Text>{features.creation}</Text>
				</View>
				{/* <View className={product.features.creation.length ? "" : "hide"}>
					<p>Вид творчества</p>
					<em></em>
					<span>{product.features.creation}</span>
				</View>
				<View className={product.features.age.length ? "" : "hide"}>
					<p>Возрастные ограничения</p>
					<em></em>
					<span>{product.features.age}</span>
				</View>
				<View className={product.features.height_gross ? "" : "hide"}>
					<p>Высота упаковки (см)</p>
					<em></em>
					<span>{product.features.height_gross}</span>
				</View>
				<View className={product.features.deep ? "" : "hide"}>
					<p>Глубина упаковки (см)</p>
					<em></em>
					<span>{product.features.deep}</span>
				</View>
				<View className={product.features.width ? "" : "hide"}>
					<p>Ширина упаковки (см)</p>
					<em></em>
					<span>{product.features.width}</span>
				</View>
				<View className={product.features.height ? "" : "hide"}>
					<p>Высота изделия (см)</p>
					<em></em>
					<span>{product.features.height}</span>
				</View>
				<View className={product.features.creation.length ? "" : "hide"}>
					<p>Страна производства</p>
					<span>{product.features.origin}</span>
				</View> */}
        </View>
        )
    );
};

const styles = StyleSheet.create({
    hide: {
        display: "none"
    },
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 50,
	},
	title: {
		padding: 5,
		fontFamily: fonts.main,
		fontSize: 18,
		fontWeight: 700,
		textAlign: "center",
	},
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
