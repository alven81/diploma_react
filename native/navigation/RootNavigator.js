import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Catalog } from "../pages/Catalog";
import { Home } from "../pages/Home";
import { ProductCard } from "../pages/product/ProductCard";
import colors from "../res/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CatalogStack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarScrollEnabled: true,
				}}
			>
				<Tab.Screen
					name="Главная"
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons
								name="home"
								color={color}
								size={size}
							/>
						),
					}}
				>
					{() => (
						<HomeStack.Navigator initialRouteName="Home">
							<HomeStack.Screen
								name="Home"
								component={Home}
								options={{
									title: "Главная страница",
									headerStyle: {
										backgroundColor: colors.headerBckg,
									},
									headerTintColor: colors.mainWhite,
									headerTitleStyle: {
										fontWeight: "bold",
									},
									//headerShown: false
								}}
							/>
						</HomeStack.Navigator>
					)}
				</Tab.Screen>
				<Tab.Screen
					name="Каталог"
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons
								name="store"
								color={color}
								size={size}
							/>
						),
					}}
				>
					{() => (
						<CatalogStack.Navigator>
							<CatalogStack.Screen
								name="Catalog"
								component={Catalog}
								options={{
									title: "Каталог товаров",
									headerStyle: {
										backgroundColor: colors.headerBckg,
									},
									headerTintColor: colors.mainWhite,
									headerTitleStyle: {
										fontWeight: "bold",
									},
								}}
							/>
							<Stack.Screen
								name="ProductCard"
								component={ProductCard}
								options={{
									title: "Информация о товаре",
									headerStyle: {
										backgroundColor: colors.headerBckg,
									},
									headerTintColor: colors.mainWhite,
									headerTitleStyle: {
										fontWeight: "bold",
									},
								}}
							/>
						</CatalogStack.Navigator>
					)}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export { RootNavigator };
