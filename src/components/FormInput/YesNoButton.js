import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../../res/strings/Colors";
import { TICK } from "../../res/image";

export default class YesNoButton extends Component {
  constructor() {
    super();
  }

  render() {
    const { selected, label, onYes, onNo } = this.props;
    return (
      <View activeOpacity={0.8} style={styles.radioButton}>
        <Text style={[styles.label, { color: Colors.dark_gray }]}>{label}</Text>
        <View style={styles.yesNoButtons}>
          <TouchableOpacity
            onPress={onYes}
            style={[
              styles.radioButtonHolder,
              {
                height: 17,
                width: 17,
                borderColor: selected ? Colors.app_color : Colors.light_color,
                backgroundColor: selected
                  ? Colors.app_color
                  : "'rgba(52, 52, 52, 0)'",
                alignItems: "center",
                justifyContent: "center"
              }
            ]}
          >
            <Image
              source={TICK}
              style={{
                width: 10,
                height: 10,
                resizeMode: "contain",
                tintColor: "white"
              }}
            />
          </TouchableOpacity>
          <Text style={styles.yesNoText}>Yes</Text>
          <TouchableOpacity
            onPress={onNo}
            style={[
              styles.radioButtonHolder,
              {
                height: 17,
                width: 17,
                borderColor: !selected ? Colors.app_color : Colors.light_color,
                backgroundColor: !selected
                  ? Colors.app_color
                  : "'rgba(52, 52, 52, 0)'",
                alignItems: "center",
                justifyContent: "center"
              }
            ]}
          >
            <Image
              source={TICK}
              style={{
                width: 10,
                height: 10,
                resizeMode: "contain",
                tintColor: "white"
              }}
            />
          </TouchableOpacity>
          <Text style={styles.yesNoText}>No</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    marginVertical: 10,
    flexDirection: "column"
  },
  radioButtonHolder: {
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  radioIcon: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 7
  },
  yesNoButtons: {
    flexDirection: "row"
  },
  yesNoText: {
    fontSize: 13,
    color: Colors.app_color,
    alignSelf: "center",
    marginRight: 10,
    marginLeft: 5
  }
});
