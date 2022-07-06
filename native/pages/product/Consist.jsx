import { View, Text, ActivityIndicator } from "react-native";

const Consist = ({ consist, chars }) => {
	return !consist ? (
		<ActivityIndicator />
	) : (
		<View style={{padding: 5}}>
			<Text style={chars}>Состав:</Text>
			{consist.map((value, id) => (
				<Text key={id}>- {value};</Text>
			))}
		</View>
	);
};

export { Consist };
