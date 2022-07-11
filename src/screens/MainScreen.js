import React, { useEffect } from "react";
import PostList from "../components/PostList/PostList";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/post/actions";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function MainScreen({ navigation }) {
	const dispatch = useDispatch();
	const { allPosts, loading } = useSelector((state) => state.post);

	useEffect(() => {
		dispatch(loadPosts());
	}, [dispatch]);

	const openPost = (post) => {
		navigation.navigate("Post", post);
	};

	if (loading)
		return (
			<View style={styles.center}>
				<ActivityIndicator />
			</View>
		);

	return <PostList list={allPosts} onOpen={openPost} />;
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
