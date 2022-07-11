import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postReducer } from "./post/reducer";
const initialState = {};
const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
	post: postReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
	persistedReducer,
	initialState,
	applyMiddleware(thunk)
);
const persistor = persistStore(store);

export { store, persistor };
