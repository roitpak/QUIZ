import React, { PureComponent } from "react";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { NEXT } from "../../res/image";
import { Colors } from "../../res/strings";

export default class LargeButton extends PureComponent {
  render() {
    const {
      onPress,
      text,
      styleButton,
      appColorTrue,
      right,
      left,
      styleText
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8} // default is .2
        style={[
          styles.container,
          styleButton,
          {
            backgroundColor: appColorTrue === true ? Colors.app_color : "white"
          }
        ]}
        onPress={onPress}
      >
        {left && (
          <Text
            style={{
              color: appColorTrue === true ? "white" : Colors.app_color,
              alignSelf: "center",
              fontSize: 15
            }}
          >
            {"<"}
          </Text>
          // <Image
          //   source={NEXT}
          //   style={[
          //     styles.image,
          //     {
          //       transform: [
          //         {
          //           rotate: "180deg",
          //           tintColor: appColorTrue === true ? "white" : "black"
          //         }
          //       ]
          //     }
          //   ]}
          // />
        )}
        <Text
          style={[
            styles.buttonText,
            { color: appColorTrue === true ? "white" : Colors.app_color },
            styleText
          ]}
        >
          {text}
        </Text>
        {right && (
          <Text
            style={[
              {
                color: appColorTrue === true ? "white" : Colors.app_color,
                alignSelf: "center",
                fontSize: 15,
                margin: 10
              }
            ]}
          >
            {">"}
          </Text>
          // <Image
          //   source={NEXT}
          //   // tintColor={appColorTrue === true ? "white" : "black"}
          //   style={{ tintColor: appColorTrue === true ? "white" : "black" }}
          // />
        )}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7
  },
  buttonText: {
    fontSize: 14,
    marginVertical: 8,
    marginLeft: 8
  },
  image: {
    height: 15,
    width: 15,
    resizeMode: "contain"
  }
});
