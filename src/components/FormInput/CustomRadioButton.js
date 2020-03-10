import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../../res/strings/Colors";
import { TICK } from "../../res/image";

export default class CustomRadioButton extends Component {
  constructor() {
    super();
  }

  render() {
    const { selected, label, onClick, labelStyle } = this.props;
    return (
      <TouchableOpacity
        onPress={this.props.onClick}
        // activeOpacity={0.8}
        style={styles.radioButton}
      >
        <View
          style={[
            styles.radioButtonHolder,
            {
              height: 13,
              width: 13,
              borderColor: selected ? Colors.light_color : Colors.dark_gray
            }
          ]}
        >
          {selected ? (
            <View
              style={[
                styles.radioIcon,
                {
                  height: 13,
                  width: 13,
                  borderRadius: 2,
                  backgroundColor: Colors.app_color
                }
              ]}
            >
              <Image
                source={TICK}
                style={{
                  width: 8,
                  height: 8,
                  resizeMode: "contain",
                  tintColor: "white"
                }}
              />
            </View>
          ) : null}
        </View>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2
  },
  radioButtonHolder: {
    borderRadius: 2,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  radioIcon: {
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    marginLeft: 10,
    fontSize: 13,
    alignSelf: "center",
    color: Colors.app_color
  }
});
