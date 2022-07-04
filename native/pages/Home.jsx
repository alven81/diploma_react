import { Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {
	return (
		<>
			<Text>Home page</Text>
			<Button
				title="Go to Catalog"
				onPress={() => navigation.navigate("Catalog")}
			/>
		</>
	);
};

export { Home };
