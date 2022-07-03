import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    FlatList,
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableHighlight,
} from "react-native";
import { Footer } from "./components/Footer";
import { Product } from "./components/Product";

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);
    const [searchText, setSearchText] = useState("");

    const Separator = () => <View style={styles.separator} />;

    const getCategories = async () => {
        try {
            const response = await fetch("http://localhost:3004/categories");
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getProducts = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3004/products?categoryId=${id}`
            );
            const json = await response.json();
            setProduct(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getAllProducts = async () => {
        try {
            const response = await fetch(`http://localhost:3004/products`);
            const json = await response.json();
            setProduct(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getSearchProduct = async (searchText) => {
        try {
            const response = await fetch(
                `http://localhost:3004/products?q=${searchText}`
            );
            const json = await response.json();
            setProduct(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCategories();
        getAllProducts();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Text
                    style={{
                        fontWeight: 700,
                        color: "#fc5185",
                        marginBottom: 10,
                    }}
                >
                    Добрый день, Таинственный незнакомец!
                </Text>
                <Image
                    source={require("./assets/logo.png")}
                    style={{
                        height: 70,
                        width: 210,
                    }}
                />
            </View>
            <Separator />
            <View style={styles.search}>
                <TextInput
                    style={{
                        borderColor: "#fc5185",
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingHorizontal: 5,
                        width: "90%",
                    }}
                    //defaultValue="Что ищем?"
                    onChangeText={setSearchText}
                    value={searchText}
                />
                <TouchableHighlight
                    onPress={() => getSearchProduct(searchText)}
                >
                    <Image
                        source={require("./assets/loupe.svg")}
                        style={{
                            height: 30,
                            width: 30,
                        }}
                    />
                </TouchableHighlight>
            </View>

            <Separator />
            <View style={styles.fixToText}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    margin: 3,
                                }}
                            >
                                <Button
                                    onPress={() => getProducts(item.id)}
                                    color="#fc5185"
                                    key={item.id}
                                    title={item.category}
                                />
                            </View>
                        )}
                    />
                )}
            </View>
            <Separator />
            <ScrollView>
                {!product.length ? (
                    <Text
                        style={{
                            fontWeight: 600,
                        }}
                    >
                        К сожалению ничего не найдено
                    </Text>
                ) : isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <>
                        <Text>Найдено товаров {product.length}:</Text>
                        <FlatList
                            data={product}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => <Product item={item} />}
                        />
                    </>
                )}
            </ScrollView>
            <Footer />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 10,
        justifyContent: "flex-start",
        marginHorizontal: 16,
    },
    logo: {
        padding: 5,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: "#fc5185",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    search: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        minHeight: 30,
        maxHeight: 30,
    },
});
