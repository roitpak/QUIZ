import React, { PureComponent } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import UserSVG from "../../res/svgImage/UserSVG";
import { Colors } from "../../res/strings";

export default class CustomImage extends PureComponent {
  render() {
    const { source, style } = this.props;
    // console.log(uri, "is the uri");
    if (source == undefined || source == "") {
      return (
        <View
          style={[
            style,
            { padding: 12, backgroundColor: Colors.lighter_color }
          ]}
        >
          <UserSVG />
        </View>
      );
    } else {
      return <Image style={style} source={{ uri: source }} />;
    }
  }
}
const styles = StyleSheet.create({});
