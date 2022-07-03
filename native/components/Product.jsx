import { Text, Image, View, StyleSheet } from "react-native";

const Product = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title.slice(0, 50) + "..."}</Text>

            <Image
                source={{
                    uri: `http://localhost:3000${item.image}`,
                }}
                style={styles.image}
            />

            <Text
                style={{
                    fontWeight: 700,
                }}
            >
                Стоимость:
            </Text>

            <View style={styles.price}>
                <Text
                    style={{
                        textDecorationLine:
                            item.discount === true ? "line-through" : "",
                    }}
                >
                    {`${item.price} руб.`}
                </Text>
                <Text
                    style={{
                        color: item.discount === true ? "#fc5185" : "#fff",
                    }}
                >
                    {`${item.discount_price} руб.`}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 16,
        borderColor: "#fc5185",
        borderWidth: 1,
        borderRadius: 6,
    },
    title: {
        fontWeight: 700,
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
