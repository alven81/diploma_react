import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Catalog } from "./pages/Catalog";
import { Home } from "./pages/Home";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }}/>
				<Stack.Screen name="Catalog" component={Catalog} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
