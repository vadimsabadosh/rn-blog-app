import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import { THEME } from "../theme";
import { StatusBar } from "expo-status-bar";
import { MoreIconWithHiddenMenu } from "../components/HeaderHiddenMenu/HeaderHiddenMenu";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";

const HomeStack = createNativeStackNavigator();

export function HomeStackNav() {
	return (
		<>
			<HomeStack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: THEME.MAIN_COLOR,
					},
					headerTintColor: "#fff",
				}}
			>
				<HomeStack.Screen
					name="Home"
					component={MainScreen}
					options={{
						title: "Home",
						headerLeft: () => <HeaderMenu />,
					}}
				/>
				<HomeStack.Screen
					name="Post"
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
			</HomeStack.Navigator>
			<StatusBar style="light" />
		</>
	);
}
