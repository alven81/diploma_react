import { Text, Image, View, StyleSheet } from "react-native";
import colors from "../res/colors";
import fonts from "../res/fonts";
import { Link } from "@react-navigation/native";

const Product = ({ item }) => {
    return (
        <Link
            to={{
                screen: "ProductCard",
                params: {id: item.id}
            }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    {item.title.slice(0, 50) + "..."}
                </Text>

                <Image
                    source={{
                        uri: `http://localhost:3000${item.image}`,
                    }}
                    style={styles.image}
                />

                <View style={styles.price}>
                    <Text
                        style={{
                            textDecorationLine:
                                item.discount === true ? "line-through" : "",
                            fontFamily: fonts.main,
                        }}
                    >
                        {`${item.price} руб.`}
                    </Text>
                    <Text
                        style={{
                            color: item.discount === true ? "#fc5185" : "#fff",
                            fontFamily: fonts.main,
                        }}
                    >
                        {`${item.discount_price} руб.`}
                    </Text>
                </View>
            </View>
        </Link>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 16,
        borderColor: colors.mainPinc,
        borderWidth: 1,
        borderRadius: 6,
    },
    title: {
        fontWeight: 700,
        fontFamily: fonts.main,
    },
    image: {
        margin: 10,
        height: 350,
        width: 250,
        borderRadius: 5,
    },
    price: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
    },
});

export { Product };
