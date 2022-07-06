import { View, Text, Button } from "react-native";

const Cart = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Cart</Text>
            {/* <Button
                title="Go to Catalog"
                onPress={() => navigation.navigate("Catalog")}
            /> */}
        </View>
    );
};

export { Cart };
