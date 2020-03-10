import React, { PureComponent } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../res/strings";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import User from "../../res/svgImage/UserSVG";
import Logout from "../../res/svgImage/LogoutSVG";
import MessagesSVG from "../../res/svgImage/MessagesSVG";
import ELearningSVG from "../../res/svgImage/ELearningSVG";
import EmployeeDirectorySVG from "../../res/svgImage/EmployeeDirectorySVG";
import PollsSVG from "../../res/svgImage/PollsSVG";
import FAQsSVG from "../../res/svgImage/FAQsSVG";
import FeedbackSVF from "../../res/svgImage/FeedbackSVF";

export default class DashboardItem extends PureComponent {
  _onPress = item => {};
  _returnImage = item => {
    switch (item.routeName) {
      case "SearchScreen":
        return (
          <View style={styles.imageBox}>
            <EmployeeDirectorySVG />
          </View>
        );
      case "BSVRNavigator":
        return (
          <View style={styles.imageBox}>
            <ELearningSVG />
          </View>
        );
      case "CSVRNavigator":
        console.log(item.routeName);
        return (
          <View style={styles.imageBox}>
            <PollsSVG />
          </View>
        );
      default:
        return (
          <View style={styles.imageBox}>
            <Logout />
          </View>
        );
    }
  };
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container]}
        onPress={() => {
          this._onPress(item);
        }}
      >
        {this._returnImage(item)}
        <Text style={styles.buttonText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter_color,
    borderRadius: 20,
    height: 35,
    width: wp("95%"),
    height: hp("18%"),
    alignSelf: "center",
    marginHorizontal: wp("5%"),
    marginVertical: hp("2%"),
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 15,
    color: Colors.app_color,
    margin: 10
  },
  imageBox: { height: 70, width: 70, margin: 5 }
});
