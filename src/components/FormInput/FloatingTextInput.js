import React, { Component } from "react";
import { View, Animated, StyleSheet, TextInput, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Colors from "../../res/strings/Colors";
/*----------------------------------------
attrName is used for the key value for setting state 

------------------------------------------*/
export default class FloatingTextInput extends Component {
  static defaultProps = {
    keyboardType: "default",
    titleActiveSize: 11,
    titleInActiveSize: 13,
    titleActiveColor: "black",
    titleInactiveColor: "dimgrey",
    textInputStyles: {},
    otherTextInputAttributes: {}
  };
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false
    };
  }
  _handleFocus = () => {
    if (!this.state.isFieldActive) {
      this.setState({ isFieldActive: true });
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150
      }).start();
    }
  };

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({ isFieldActive: false });
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150
      }).start();
    }
  };
  _onChangeText = updatedValue => {
    const { attrName, updateMasterState } = this.props;
    updateMasterState(attrName, updatedValue);
  };
  _returnAnimatedTitleStyles = () => {
    const { isFieldActive } = this.state;
    const {
      titleActiveColor,
      titleInactiveColor,
      titleActiveSize,
      titleInActiveSize
    } = this.props;
    if (this.props.value == undefined) {
      this._handleFocus();
      return;
    }
    if (this._returnValue().trim() !== "") {
      this._handleFocus();
    }
    if (this._returnValue().trim() !== "") {
      this._handleBlur();
    }

    return {
      top: this.position.interpolate({
        inputRange: [0, 1.3],
        outputRange: [10, 0]
      }),
      fontSize: 13,
      color:
        isFieldActive || this.props.value !== ""
          ? Colors.dark_gray
          : Colors.app_color
    };
  };
  _returnValue() {
    return this.props.value + "";
  }
  _returnAnimatedTitleStyles2 = () => {
    const { isFieldActive } = this.state;
    const {
      titleActiveColor,
      titleInactiveColor,
      titleActiveSize,
      titleInActiveSize
    } = this.props;
    if (this.props.value == undefined) {
      this._handleFocus();
      return;
    }
    if (this._returnValue().trim() !== "") {
      this._handleFocus();
    }
    if (this._returnValue().trim() !== "") {
      this._handleBlur();
    }

    return {
      top: this.position.interpolate({
        inputRange: [0, 1.3],
        outputRange: [10, 0]
      }),
      fontSize: 13,
      color:
        isFieldActive || this.props.value !== ""
          ? Colors.dark_gray
          : Colors.app_color
    };
  };
  _returnStar(required) {
    if (required) {
      return (
        <Animated.Text
          style={[styles.requiredStyle, this._returnAnimatedTitleStyles2()]}
        >
          *
        </Animated.Text>
      );
    }
  }
  getInnerRef = () => this.ref;
  render() {
    const {
      editable,
      returnKeyType,
      autoFocus,
      onSubmitEditing,
      blurOnSubmit,
      placeholder,
      secureTextEntry,
      required,
      endOfList
    } = this.props; // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <View
        style={[
          styles.container,
          endOfList
            ? { borderBottomWidth: 1, borderBottomColor: Colors.app_color }
            : { borderBottomWidth: 1, borderBottomColor: Colors.light_color }
        ]}
      >
        <Animated.View
          style={[styles.titleContainer, this._returnAnimatedTitleStyles()]}
        >
          <Animated.Text
            style={[styles.titleStyles, this._returnAnimatedTitleStyles()]}
          >
            {this.props.title}
          </Animated.Text>
          {this._returnStar(required)}
        </Animated.View>
        <TextInput
          style={[styles.textInput, this.props.textInputStyles]}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          onBlur={this._handleBlur}
          onFocus={this._handleFocus}
          selectionColor={Colors.appColor}
          value={this._returnValue()}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this._onChangeText}
          keyboardType={this.props.keyboardType}
          editable={editable}
          returnKeyType={returnKeyType}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          ref={r => (this.ref = r)}
          {...this.props.otherTextInputProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    marginVertical: 4
  },
  textInput: {
    fontSize: 13,
    marginTop: 10,
    color: Colors.app_color,
    flex: 1,
    marginLeft: 5
  },
  titleStyles: {
    // position: "absolute",
  },
  requiredStyle: {
    // position: "absolute",
    color: Colors.app_color,
    marginLeft: 5,
    fontSize: 13
  },
  titleContainer: {
    flexDirection: "row",
    position: "absolute",
    left: 0
  }
});
