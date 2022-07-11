import {
	Alert,
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect } from "react";
import { THEME } from "../theme";
import { useSelector, useDispatch } from "react-redux";
import { removePost } from "../store/post/actions";

export default function PostScreen({ route, navigation }) {
	const { id } = route.params;
	const post = useSelector((state) =>
		state.post.allPosts.find((item) => item.id === id)
	);

	const dispatch = useDispatch();

	const booked = useSelector((state) =>
		state.post.favoritePosts.some((post) => post.id === id)
	);

	useEffect(() => {
		navigation.setParams({ booked });
	}, [booked]);

	const onRemovePost = () => {
		Alert.alert(
			"Remove post",
			"Are you sure?",
			[
				{
					text: "Cancel",
					onPress: () => console.log("s"),
					style: "cancel",
				},
				{
					text: "Remove",
					onPress: () => {
						navigation.goBack();
						dispatch(removePost(id));
					},
					style: "destructive",
				},
			],
			{ cancelable: false }
		);
	};
	if (!post) {
		return null;
	}
	return (
		<ScrollView>
			<View style={styles.center}>
				<Image source={{ uri: post.image }} style={styles.image} />
				<View style={styles.textWrap}>
					<Text style={styles.text}>{post.title}</Text>
				</View>
				<Button
					title="Remove"
					color={THEME.DANGER_COLOR}
					onPress={onRemovePost}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		width: "100%",
		resizeMode: "contain",
		height: 400,
	},
	textWrap: {
		padding: 10,
		width: "100%",
	},
	text: {
		fontFamily: "regular",
		textAlign: "left",
	},
});
