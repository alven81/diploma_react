import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image, FlatList, ActivityIndicator } from "react-native";

export default function App() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
         const response = await fetch('http://10.33.10.31:3004/categiries');
         const json = await response.json();
         setData(json);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

     
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<>
			<View style={styles.container}>
				<View style={styles.logo}>
					<Image source={require("./assets/logo.png")} />
				</View>
				<View style={styles.navBlock}>
					<View style={styles.navButtons}>
						<Button
							style={styles.button}
							color="#fc5185"
							title="Рукоделие"
						/>
					</View>
					<View style={styles.navButtons}>
						<Button
							style={styles.button}
							color="#fc5185"
							title="Рисование"
						/>
					</View>
					<View style={styles.navButtons}>
						<Button
							style={styles.button}
							color="#fc5185"
							title="Моделирование"
						/>
					</View>
					<View style={styles.navButtons}>
						<Button
							style={styles.button}
							color="#fc5185"
							title="Украшение"
						/>
					</View>
				</View>
				<StatusBar style="auto" />
			</View>

			<View style={{ flex: 1, padding: 24 }}>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<FlatList
						data={data}
						keyExtractor={({ id }, index) => id}
						renderItem={({ item }) => (
							<Text>
								{item.id}
							</Text>
						)}
					/>
				)}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		//justifyContent: "center",
	},
	navBlock: {
		margin: 10,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		//alignItems: "center",
		//justifyContent: "flex-start",
		flex: 1,
	},
	navButtons: {
		//paddingHorizontal: 8,
		//paddingVertical: 6,
		//flexDirection: "row",
		justifyContent: "space-around",
		//flexWrap: "wrap",
		borderRadius: 8,
		backgroundColor: "oldlace",
		//alignSelf: "center",
		margin: 4,
		width: "45%",
		textAlign: "center",
		//flex: 1,
	},
	logo: {
		//flex: 1,
		backgroundColor: "#fff",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
});
