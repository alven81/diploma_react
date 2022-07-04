import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Catalog } from "./pages/Catalog";
import { Home } from "./pages/Home";
import { ProductCard } from "./pages/ProductCard";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} options={{ title: 'Главная страница' }}/>
				<Stack.Screen name="Catalog" component={Catalog}  options={{ title: 'Каталог товаров' }}/>
                <Stack.Screen name="ProductCard" component={ProductCard} options={{ title: 'Информация о товаре' }}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
