import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home page</Text>
            <Button
                title="Go to Catalog"
                onPress={() => navigation.navigate("Catalog")}
            />
        </View>
    );
};

export { Home };
