import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import { THEME } from "../theme";
import { addPost } from "../store/post/actions";
import { useDispatch } from "react-redux";
import PhotoPicker from "../components/PhotoPicker/PhotoPicker";

export default function CreateScreen({ navigation }) {
	const [value, setValue] = useState("");
	const picRef = useRef(null);

	const dispatch = useDispatch();

	const onCreatePost = () => {
		dispatch(
			addPost({
				title: value,
				booked: false,
				image: picRef.current,
				date: Date().toLocaleString(),
			})
		);
		setValue("");
		navigation.navigate("Home");
	};
	const setPicture = (image) => {
		picRef.current = image;
	};
	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismis()}>
				<View style={styles.center}>
					<Text style={styles.title}>Create new post</Text>
					<TextInput
						style={styles.textarea}
						placeholder="Enter the note text"
						value={value}
						multiline
						onChangeText={setValue}
					/>
					<PhotoPicker onPick={setPicture} />
					<Button
						title="Create post"
						color={THEME.MAIN_COLOR}
						onPress={onCreatePost}
						disabled={!value}
					/>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	center: {
		padding: 15,
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		// fontFamily: "bold",
		fontWeight: "bold",
		marginVertical: 15,
	},
	textarea: {
		padding: 15,
	},
});
