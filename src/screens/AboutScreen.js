import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AboutScreen() {
	return (
		<View style={styles.center}>
			<Text>Application for notes</Text>
			<Text>version 1.0.0</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
