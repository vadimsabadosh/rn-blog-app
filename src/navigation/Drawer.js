import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";
import AboutScreen from "../screens/AboutScreen";
import CreateScreen from "../screens/CreateScreen";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
import { THEME } from "../theme";
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: THEME.MAIN_COLOR,
					},
					headerTintColor: "#fff",
					drawerActiveTintColor: THEME.DANGER_COLOR,
				}}
			>
				<Drawer.Screen
					name="Home"
					component={BottomTab}
					options={{
						title: "Home",
						headerShown: false,
					}}
				/>
				<Drawer.Screen
					name="About"
					component={AboutScreen}
					options={{
						title: "About us",
					}}
				/>
				<Drawer.Screen
					name="Create"
					component={CreateScreen}
					options={{
						title: "Create new post",
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
