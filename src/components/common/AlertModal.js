import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { Colors } from "../../res/strings";
import { hideAlertPopUp } from "../../redux/actions";

let NOTIFICATION_TYPE = 1;
let MESSAGE_TYPE = 2;

class AlertModal extends Component {
  constructor() {
    super();
  }
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <Text style={{ fontSize: 17 }}>{this.props.alertMessage.title}</Text>
          <Text
            style={{
              fontSize: 13,
              color: Colors.dark_gray,
              marginVertical: 15
            }}
          >
            {this.props.alertMessage.message}
          </Text>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => this.props.hideAlertPopUp()}
          >
            <Text style={{ color: Colors.app_color }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(24, 24, 24, 0.5)"
  },
  modalBox: {
    flexDirection: "column",
    backgroundColor: "white",
    shadowColor: "#000",
    width: wp("80%"),
    padding: 25,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});

const mapStateToProps = ({ main }) => {
  const { showAlert, alertMessage } = main;
  return { showAlert, alertMessage };
};
export default connect(mapStateToProps, {
  hideAlertPopUp
})(AlertModal);
