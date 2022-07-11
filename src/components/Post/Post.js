import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import React from "react";

export default function Post({ item, onOpen }) {
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={() => onOpen(item)}>
			<View style={styles.post}>
				<ImageBackground source={{ uri: item.image }} style={styles.image}>
					<View style={styles.textWrapp}>
						<Text style={styles.title}>{item.title}</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	post: {
		marginBottom: 15,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	textWrapp: {
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingVertical: 5,
		alignItems: "center",
		width: "100%",
	},
	title: {
		color: "#fff",
		fontFamily: "regular",
	},
});
