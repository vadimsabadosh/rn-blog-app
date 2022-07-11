import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEME } from "../theme";
import { StatusBar } from "expo-status-bar";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
import FavoriteScreen from "../screens/FavoriteScreen";
import { MoreIconWithHiddenMenu } from "../components/HeaderHiddenMenu/HeaderHiddenMenu";
import PostScreen from "../screens/PostScreen";

const FavoriteStack = createNativeStackNavigator();

export function FavoriteStackNav() {
	return (
		<>
			<FavoriteStack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: THEME.MAIN_COLOR,
					},
					headerTintColor: "#fff",
				}}
			>
				<FavoriteStack.Screen
					name="FavoriteScreen"
					component={FavoriteScreen}
					options={{
						title: "Favorite",
						headerLeft: () => <HeaderMenu />,
					}}
				/>
				<FavoriteStack.Screen
					name="PostScreen"
					component={PostScreen}
					options={({ route, navigation }) => ({
						title: route.params.title,
						headerRight: (props) => (
							<MoreIconWithHiddenMenu
								{...props}
								route={route}
								navigation={navigation}
							/>
						),
					})}
				/>
			</FavoriteStack.Navigator>
			<StatusBar style="light" />
		</>
	);
}
