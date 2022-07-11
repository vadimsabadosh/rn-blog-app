import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function PhotoPicker({ onPick }) {
	const [image, setImage] = useState(null);
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setImage(result.uri);
			onPick(result.uri);
		}
	};

	return (
		<View style={styles.wrapper}>
			<Button title="Pick an image" onPress={pickImage} />
			{image && <Image source={{ uri: image }} style={styles.image} />}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	image: {
		width: "100%",
		height: 350,
		resizeMode: "contain",
		marginTop: 20,
	},
});
