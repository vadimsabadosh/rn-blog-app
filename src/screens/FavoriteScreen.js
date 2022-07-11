import React from "react";
import { useSelector } from "react-redux";
import PostList from "../components/PostList/PostList";

export default function FavoriteScreen({ navigation }) {
	const { favoritePosts } = useSelector((state) => state.post);
	const openPost = (post) => {
		navigation.navigate("PostScreen", post);
	};

	return <PostList list={favoritePosts} onOpen={openPost} />;
}
