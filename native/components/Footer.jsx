import {
    Text,
    StyleSheet,
    View,
    Linking,
    FlatList,
    Image,
    TouchableHighlight,
    ImageBackground,
} from "react-native";
import colors from "../res/colors";
import fonts from "../res/fonts";

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contact}>
                <View style={styles.contactBlock}>
                    <Image
                        source={require("../assets/f_phone.svg")}
                        style={styles.contactBlockImage}
                    />
                    <Text
                        style={styles.contactText}
                        onPress={() => Linking.openURL("tel:+375295779286")}
                    >
                        +375295779286
                    </Text>
                </View>
                <View style={styles.contactBlock}>
                    <Text style={styles.contactText}>
                        Творческая мастерская-магазин
                    </Text>
                </View>
                <View style={styles.contactBlock}>
                    <Image
                        source={require("../assets/f_clock.svg")}
                        style={styles.contactBlockImage}
                    />
                    <Text style={styles.contactText}>10.00-21.00</Text>
                </View>
                <View style={styles.contactBlock}>
                    <Image
                        source={require("../assets/f_mail.svg")}
                        style={styles.contactBlockImage}
                    />
                    <Text
                        style={styles.contactText}
                        onPress={() =>
                            Linking.openURL("mailto:kyasarina@gmail.com")
                        }
                    >
                        kyasarina@gmail.com
                    </Text>
                </View>
                <Image
                    source={require("../assets/f_flower.png")}
                    style={{
                        height: 150,
                        width: 150,
                    }}
                />
            </View>
            <View style={styles.about}>
                <Text style={styles.aboutText}>О нас</Text>
                <FlatList
                    data={[
                        { key: "История" },
                        { key: "Контакты" },
                        { key: "Блог" },
                        { key: "Бренды" },
                        { key: "Вакансии" },
                    ]}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item.key}</Text>
                    )}
                />
                <Text style={styles.aboutText}>Помощь</Text>
                <FlatList
                    data={[
                        { key: "Оплата" },
                        { key: "Доставка" },
                        { key: "Правила возврата" },
                        { key: "Публичная оферта" },
                        { key: "Калькулятор расхода пряжи" },
                    ]}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item.key}</Text>
                    )}
                />
                <Text style={styles.aboutText}>
                    Карта постоянного покупателя
                </Text>
                <FlatList
                    data={[
                        { key: "Информация" },
                        { key: "Активация" },
                        { key: "Восстановление" },
                        { key: "Вопрос" },
                    ]}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item.key}</Text>
                    )}
                />
                <Text style={styles.aboutText}>Обратная связь</Text>
                <FlatList
                    data={[
                        { key: "Задать вопрос" },
                        { key: "Отзывы" },
                        { key: "Подарочная карта" },
                        { key: "Поставщикам товаров и услуг" },
                    ]}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item.key}</Text>
                    )}
                />
                <View style={styles.social}>
                    <TouchableHighlight
                        onPress={() =>
                            Linking.openURL("https://www.facebook.com/")
                        }
                    >
                        <Image
                            source={require("../assets/facebook.svg")}
                            style={{
                                height: 40,
                                width: 40,
                            }}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => Linking.openURL("https://twitter.com/")}
                    >
                        <Image
                            source={require("../assets/twitter.svg")}
                            style={{
                                height: 40,
                                width: 40,
                            }}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => Linking.openURL("https://vk.com/")}
                    >
                        <Image
                            source={require("../assets/vk.svg")}
                            style={{
                                height: 40,
                                width: 40,
                            }}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => Linking.openURL("https://telegram.org/")}
                    >
                        <Image
                            source={require("../assets/telegram.svg")}
                            style={{
                                height: 40,
                                width: 40,
                            }}
                        />
                    </TouchableHighlight>
                </View>

                {/* <View className="footer_main-block-middle">
                    <Text>Идеи, мастерские, конкурсы, новинки, акции!</Text>
                </View>
                <View className="footer_main-block-bottom">
                    <Text>Дизайн - Ляшкевич Екатерина</Text>
                    <Text>Верстка - Кот Александр</Text>
                </View> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 2,
        backgroundColor: colors.footerBckg,
    },
    contact: {
        backgroundColor: colors.mainWhite,
        paddingTop: 20,
    },
    contactBlock: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        minHeight: 20,
        maxHeight: 20,
        padding: 20,
    },
    contactBlockImage: {
        height: 20,
        width: 20,
        marginRight: 5,
    },
    contactText: {
        color: "#f2785f",
    },
    about: {
        padding: 5,
    },
    aboutText: {
        color: colors.mainWhite,
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: 600,
        margin: 3,
        marginTop: 20,
        fontFamily: fonts.main
    },
    item: {
        color: colors.mainWhite,
        padding: 5,
        fontSize: 16,
        textDecorationLine: "underline",
        height: 25,
        marginBottom: 10,
        fontFamily: fonts.main
    },
    social: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        minHeight: 50,
        maxHeight: 50,
    },
});

export { Footer };
