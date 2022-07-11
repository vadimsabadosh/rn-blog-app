import * as FileSystem from "expo-file-system";
import { DB } from "../../db";

// ACTION TYPES
export const ADD_POST = "ADD_POST";
export const LOAD_POSTS = "LOAD_POSTS";
export const TOGGLE_FAV = "TOGGLE_FAV";
export const REMOVE_POST = "REMOVE_POST";

// ACTION CREATORS
export const addPost = (post) => async (dispatch) => {
	const fileName = post.image.split("/").pop();
	const newPath = FileSystem.documentDirectory + fileName;

	try {
		await FileSystem.moveAsync({
			from: post.image,
			to: newPath,
		});
	} catch (e) {
		console.log(e);
	}
	const payload = { ...post, image: newPath };

	const id = await DB.createPost(payload);
	const newPost = { ...payload, id };
	console.log("addPost ~ newPost", newPost);
	dispatch({ type: ADD_POST, newPost });
};

export const loadPosts = () => async (dispatch) => {
	const data = await DB.getPosts();
	dispatch({ type: LOAD_POSTS, posts: data });
};

export const toggleFavorite = (post) => async (dispatch) => {
	await DB.updatePost(post);
	dispatch({ type: TOGGLE_FAV, id: post.id });
};

export const removePost = (id) => async (dispatch) => {
	await DB.removePost(id);
	dispatch({ type: REMOVE_POST, id });
};
