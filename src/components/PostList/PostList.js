import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Post from "../Post/Post";

export default function PostList({ list, onOpen }) {
	if (!list.length) {
		return (
			<View style={styles.empty}>
				<Text style={styles.emptyText}>You have not added notes yet...</Text>
			</View>
		);
	}
	return (
		<View style={styles.center}>
			<FlatList
				data={list}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Post item={item} onOpen={onOpen} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	center: {
		padding: 10,
	},
	empty: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	emptyText: {
		textAlign: "center",
		fontFamily: "bold",
		fontSize: 20,
	},
});
