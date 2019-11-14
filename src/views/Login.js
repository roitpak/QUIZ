import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  Linking,
  TabBarIOS,
  Alert,
  ActivityIndicator,
  Modal,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { connect } from "react-redux";
import axios from "axios";
import { LinearGradient } from "expo";
import { Input, CardSection } from "../components/common";
import { LOGIN_USER, CURVE } from "../res/image";
import { LOGIN_USERNAME_PLACEHOLDER } from "../res/strings/appStrings";
import { changeUsername } from "../actions";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  TouchableOpacity,
  TouchableHighlight
} from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true //component will start with refreshng state
    };
  }
  registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      alert("Notification permissions required");
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
  };
  async componentDidMount() {
    //when the  component gets 'didfocus' it will get notification again
    this.props.navigation.addListener("didFocus", payload => {
      //payload will not be used
      //your function on starting the did focus
    });
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
    await this.registerForPushNotificationsAsync();
  }
  _handleNotification = notification => {
    Alert.alert(
      "Notificaiton Received",
      "this is body",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true }
    );
    console.log(notification);
    // https://photos.app.goo.gl/dZQ1jxSU9fmNgqhB6
  };
  _onRefresh = () => {
    this.setState({ refreshing: true });
  };
  goBack() {
    this.props.navigation.goBack();
  }
  onUsernameChanged(text) {
    this.props.changeUsername(text);
  }
  onPressedButton() {
    this.props.navigation.navigate("DemoScreen");
  }
  // callme = () => {
  //   let localNotification =  {
  //     title:'HEllo Local ',
  //     body:'This is to test test testing the testers to test all the test',
  //     actionId: null,
  //     data: 'Object {}',
  //     isMultiple: false,
  //     notificationId: '-787829461',
  //     origin: "received",
  //     remote: true,
  //     userText: null
  //   }
  //   Notifications.presentLocalNotificationAsync(localNotification);
  // }
  render() {
    // const { navigation } = this.props;
    // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <View>
        <Image
          style={{
            width: wp("100%"),
            height: hp("20%"),
            tintColor: "#d95a16",
            resizeMode: "stretch"
          }}
          source={CURVE}
        />
        <Text>{this.props.username}</Text>
        <CardSection
          style={{
            marginLeft: 5,
            borderColor: "grey",
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 10,
            marginRight: 5
          }}
        >
          <Input
            image={LOGIN_USER}
            placeholder={LOGIN_USERNAME_PLACEHOLDER}
            onChangeText={this.onUsernameChanged.bind(this)}
            value={this.props.username}
          />
        </CardSection>
        <TouchableOpacity
          style={{ width: 300, alignSelf: "center", margin: 10 }}
          onPress={() => this.onPressedButton()}
        >
          <Icon.Button name="plane" size={30} backgroundColor="#32a852">
            CLICK ME!
          </Icon.Button>
        </TouchableOpacity>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewPager: {
    flex: 1
  }
});

const mapStateToProps = ({ main }) => {
  return {
    username: main.username
  };
};
export default connect(mapStateToProps, {
  changeUsername
})(Login);
