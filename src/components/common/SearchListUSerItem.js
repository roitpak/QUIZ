import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "../../res/strings";
import CustomImage from "../common/CustomImage";

export default class SearchListUSerItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
        <View style={styles.nameAndInfo}>
          <Text style={styles.name}>{item.SubjectName}</Text>
          <Text style={styles.spec}>{item.MobileNo}</Text>
        </View>

        <Text style={styles.informationHeadingStyle}>{item.CompanyRegNo}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: Colors.lighter_color,
    justifyContent: "space-between"
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: "grey",
    borderRadius: 20
  },
  nameAndInfo: {
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 13
  },
  informationHeadingStyle: {
    fontSize: 12,
    color: Colors.dark_gray
  },
  spec: {
    fontSize: 11,
    color: Colors.dark_gray
  }
});
