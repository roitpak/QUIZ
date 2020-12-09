import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { LoginNavigation } from "../navigation/AppNavigator";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Colors } from "../res/strings";
import { userLogout } from "../redux/actions";
import AlertModal from "../components/common/AlertModal";

import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import WelcomeScreen from "./Login/WelcomeScreen";
import LoginScreen from "./Login/LoginScreen";
import DashboardScreen from "./Dashboard/DashboardScreen";
import { navigationRef } from "../navigation/RootNavigation";
import RootNavigation from "../navigation/RootNavigation";
import { useSafeArea } from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.app_color,
    background: "white",
  },
};
function DrawerScreens() {
  return (
    <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true, //component will start with refreshng state
    };
  }
  componentDidMount() {}
  _returnNavigation() {
    if (!this.props.loggedIn) {
      return (
        <Stack.Navigator initialRouteName="WelcomeScreen" headerMode="none">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator initialRouteName="Drawer" headerMode="none">
          {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
          <Stack.Screen name="Drawer" component={DrawerScreens} />
        </Stack.Navigator>
      );
    }
  }
  render() {
    // const { navigation } = this.props;
    // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <View style={styles.container}>
        <NavigationContainer theme={MyTheme} ref={navigationRef}>
          {this._returnNavigation()}
        </NavigationContainer>
        {/* below modal is shown when loading indicator need to be shown */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.loading}
        >
          <View style={styles.modalBox}>
            <View style={styles.box}>
              <ActivityIndicator color={Colors.app_color} size={"small"} />
              <Text style={styles.loadingText}>
                {this.props.loadingMessage}
              </Text>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.showAlert}
        >
          <AlertModal />
        </Modal>
        {/* below modal is shown if login token expired, checkResponse() response checked after each network request */}

        {/* below modal is shown when notification is received, contains two types, notification or modal */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  box: {
    height: 80,
    // width: 200,
    paddingHorizontal: 30,
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    // padding: 10
  },
  box2: {
    height: 80,
    // width: 200,
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    padding: 10,
    paddingHorizontal: 20,
  },
  loadingText: {
    fontSize: 14,
    color: "grey",
  },
  loginText: {
    fontSize: 15,
    color: Colors.app_color,
    alignSelf: "flex-end",
  },
});

const mapStateToProps = ({ main }) => {
  const { loading, loadingMessage, showAlert, loggedIn, users } = main;
  return {
    loading,
    loadingMessage,
    showAlert,
    loggedIn,
    users,
  };
};
export default connect(mapStateToProps, {
  userLogout,
})(Login);
