import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { bootstrap } from "./src/bootstrap";
import DrawerNavigation from "./src/navigation/Drawer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/index";

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (
			<AppLoading
				onFinish={() => setIsReady(true)}
				onError={(e) => console.log(e)}
				startAsync={bootstrap}
			/>
		);
	}
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<DrawerNavigation />
			</PersistGate>
		</Provider>
	);
}
