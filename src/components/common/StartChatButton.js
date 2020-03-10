import React, { PureComponent } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../res/strings";
import MessageStartChatSVG from "../../res/svgImage/MessageStartChatSVG";

export default class StartChatButton extends PureComponent {
  render() {
    const {} = this.props;
    // console.log(uri, "is the uri");
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.image}>
          <MessageStartChatSVG />
        </View>
        <Text style={styles.text}>Start Chat</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.app_color,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  },
  text: {
    fontSize: 12,
    color: "white"
  }
});
