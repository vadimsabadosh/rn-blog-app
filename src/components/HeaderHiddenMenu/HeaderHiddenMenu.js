import React, { useCallback, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
	HeaderButtons,
	HiddenItem,
	Item,
	OverflowMenu,
} from "react-navigation-header-buttons";
import { AwesomeHeaderIcons } from "../HeaderIcons/HeaderIcons";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../store/post/actions";

export function MoreIconWithHiddenMenu(props) {
	const post = props.route.params;
	const dispatch = useDispatch();

	const iconName = post.booked ? "star" : "star-o";

	const onHandleFavorite = useCallback(() => {
		dispatch(toggleFavorite(post));
	}, [dispatch, post.id]);

	return (
		<HeaderButtons HeaderButtonComponent={AwesomeHeaderIcons}>
			<Item
				iconName={iconName}
				color="#fff"
				iconSize={22}
				onPress={onHandleFavorite}
				style={{
					marginHorizontal: 5,
				}}
			/>
			<OverflowMenu
				color="#fff"
				OverflowIcon={({ color }) => (
					<Ionicons name="ios-ellipsis-vertical" size={24} color={color} />
				)}
			>
				<HiddenItem title="Edit" onPress={() => alert("Edit")} />
				<HiddenItem
					title="Remove"
					onPress={() => alert("hidden1")}
					destructive
				/>
			</OverflowMenu>
		</HeaderButtons>
	);
}
