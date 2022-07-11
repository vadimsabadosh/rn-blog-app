import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_FAV } from "./actions";

const initState = {
	allPosts: [],
	favoritePosts: [],
	loading: true,
};

const handlerReducer = {
	[ADD_POST]: (state, { post }) => {
		return {
			...state,
			allPosts: [post, ...state.allPosts],
		};
	},
	[REMOVE_POST]: (state, { id }) => {
		return {
			...state,
			allPosts: state.allPosts.filter((p) => p.id !== id),
			favoritePosts: state.favoritePosts.filter((p) => p.id !== id),
		};
	},
	[LOAD_POSTS]: (state, { posts }) => {
		return {
			...state,
			allPosts: posts,
			favoritePosts: posts.filter((item) => item.booked),
			loading: false,
		};
	},
	[TOGGLE_FAV]: (state, { id }) => {
		const allPosts = state.allPosts.map((post) => {
			if (post.id === id) {
				post.booked = !post.booked;
			}
			return post;
		});

		return {
			...state,
			allPosts,
			favoritePosts: allPosts.filter((item) => item.booked),
		};
	},
	DEFAULT: (state) => {
		return { ...state };
	},
};

export const postReducer = (state = initState, action) => {
	const handler = handlerReducer[action.type] || handlerReducer.DEFAULT;
	return handler(state, action);
};
