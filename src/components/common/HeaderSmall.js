import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "../../res/strings";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import BackSVG from "../../res/svgImage/BackSVG";

export default class HeaderSmall extends Component {
  constructor() {
    super();
  }
  _returnBack() {
    if (this.props.left) {
      return (
        <TouchableOpacity style={styles.backButton} onPress={this.props.goBack}>
          <BackSVG />
        </TouchableOpacity>
      );
    }
  }
  render() {
    const { name, goBack, left } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[
            Colors.app_color,
            Colors.app_color_mid,
            Colors.app_color_dark
          ]}
          style={{ height: 80 }}
        />
        <LinearGradient
          colors={[
            Colors.app_color,
            Colors.app_color_mid,
            Colors.app_color_dark
          ]}
          style={styles.headerView}
        >
          <View style={styles.titleAndBack}>
            {this._returnBack()}
            <View style={styles.titleBox}>
              <Text style={styles.title}>{this.props.name}</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={{ height: 20 }} />
        {/* <Text style={styles.informationHeadingStyle}>{informationHeading}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  headerView: {
    width: wp("100%"),
    height: 100,
    justifyContent: "flex-end",
    flexDirection: "column",
    borderRadius: 20,
    position: "absolute",
    zIndex: 1
  },
  titleAndBack: {
    width: wp("100%"),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    color: "white",
    alignSelf: "center"
  },
  titleBox: {
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center"
  },
  backButton: {
    width: 20,
    height: 20,
    position: "absolute",
    margin: 30,
    zIndex: 1
  }
});
