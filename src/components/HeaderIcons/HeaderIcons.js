import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
import { FontAwesome } from "@expo/vector-icons";

export const IoniconsHeaderIcons = (props) => (
	<HeaderButton IconComponent={Ionicons} iconSize={24} {...props} />
);
export const AwesomeHeaderIcons = (props) => (
	<HeaderButton IconComponent={FontAwesome} iconSize={24} {...props} />
);
