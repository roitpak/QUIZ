import React from "react";
import { ActivityIndicator, View, AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/redux/reducers";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import MainScreen from "./src/views/MainScreen";

const persistConfig = {
  key: "1",
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export default class App extends React.Component {
  constructor(properties) {
    super(properties);
  }
  renderLoading = () => {
    <View style={{}}>
      <ActivityIndicator size="large" />
    </View>;
  };
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={this.renderLoading()} persistor={persistor}>
          <MainScreen />
        </PersistGate>
      </Provider>
    );
  }
}
