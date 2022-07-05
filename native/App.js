import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Catalog } from "./pages/Catalog";
import { Home } from "./pages/Home";
import { ProductCard } from "./pages/product/ProductCard";
import colors from "./res/colors";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
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
                    }}
                />
                <Stack.Screen
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
