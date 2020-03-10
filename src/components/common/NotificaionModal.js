import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import NotificationBellSVG from "../../res/svgImage/NotificationBellSVG";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { Colors } from "../../res/strings";
import { hideNotificationUpFront } from "../../redux/actions";
import CustomImage from "./CustomImage";

let NOTIFICATION_TYPE = 1;
let MESSAGE_TYPE = 2;

class NotificationModal extends Component {
  constructor() {
    super();
  }
  _returnMessageOrNotification(item) {
    if (item.type == NOTIFICATION_TYPE) {
      return (
        <TouchableOpacity
          style={styles.insideContainer}
          onPress={() => {
            console.log("I am clicked");
          }}
        >
          <View style={styles.notificationBell}>
            <View style={{ height: 20, width: 20 }}>
              <NotificationBellSVG />
            </View>
          </View>
          <View style={styles.messageBox}>
            <Text numberOfLines={3} style={styles.textMessage}>
              {item.messageData.body}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.insideContainer}
        onPress={() => {
          this._navigateToChat(item);
        }}
      >
        <View style={styles.notificationBell}>
          <Image
            source={{ uri: item.messageData.sender_image }}
            style={styles.image}
          />
        </View>
        <View style={styles.messageBox}>
          <Text numberOfLines={3} style={styles.textMessageName}>
            {item.messageData.sender_name}
          </Text>
          <Text numberOfLines={3} style={styles.textMessage}>
            {item.messageData.content}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  _navigateToChat(item) {
    let tempItem = {
      id: item.messageData.sender_id,
      name: item.messageData.sender_name
    };
    console.log("I am navigating to chat item");
  }
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.hideNotificationUpFront()}
      >
        {this._returnMessageOrNotification(item)}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  notificationBell: {
    flex: 0.3,
    backgroundColor: Colors.lighter_color,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  insideContainer: {
    width: wp("60%"),
    height: hp("10%"),
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: "absolute",
    top: hp("5%"),
    right: wp("5%"),
    borderRadius: 10,
    borderTopRightRadius: 0
  },
  messageBox: {
    flex: 0.7,
    justifyContent: "center",
    flexDirection: "column",
    padding: 5
  },
  textMessage: {
    fontSize: 12,
    color: Colors.dark_gray,
    textAlign: "justify",
    marginHorizontal: 5
  },
  textMessageName: {
    fontSize: 13,
    color: Colors.dark_gray,
    textAlign: "justify",
    marginHorizontal: 5,
    fontWeight: "bold"
  }
});

const mapStateToProps = ({ main }) => {
  return {};
};
export default connect(mapStateToProps, { hideNotificationUpFront })(
  NotificationModal
);
