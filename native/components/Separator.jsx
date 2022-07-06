import {
    StyleSheet,
    View,
} from "react-native";
import colors from "../res/colors";

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: colors.mainPinc,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export { Separator }