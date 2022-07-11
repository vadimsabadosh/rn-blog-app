import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNav } from "./HomeStack";
import { FavoriteStackNav } from "./FavoriteStack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

const Tab = createBottomTabNavigator();

export default function BottomTab(props) {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: THEME.MAIN_COLOR,
			}}
		>
			<Tab.Screen
				name="Main"
				component={HomeStackNav}
				options={{
					tabBarLabel: "All",
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons name="ios-albums" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={FavoriteStackNav}
				options={{
					tabBarLabel: "Favorite",
					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome
							name={focused ? "star" : "star-o"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
