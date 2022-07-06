import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home page</Text>
            {/* <Button
                title="Go to Catalog"
                onPress={() => navigation.navigate("Catalog")}
            /> */}
        </View>
    );
};

export { Home };
