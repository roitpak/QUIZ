import React, { PureComponent } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { Colors } from "../../res/strings";

export default class LargeButton extends PureComponent {
  render() {
    const { onPress, text, styleButton } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, styleButton]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.app_color,
    borderRadius: 5,
    justifyContent: "center",
    height: 40
  },
  buttonText: {
    fontSize: 15,
    color: "white"
  }
});
