import * as Font from "expo-font";
import { DB } from "./db";

export async function bootstrap() {
	try {
		await Font.loadAsync({
			bold: require("../assets/fonts/OpenSans-Bold.ttf"),
			regular: require("../assets/fonts/OpenSans-Regular.ttf"),
		});
		await DB.init();
		console.log("database connected");
	} catch (e) {
		console.log(e);
	}
}
