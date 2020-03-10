import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image
} from "react-native";

import { Colors } from "../../res/strings";
import { MAIL } from "../../res/image";
import { BORDER_RADIUS_SMALL } from "../../configs/StylesConstants";
import SecureTextSVG from "../../res/svgImage/SecureTextSVG";
import SecureTextFalseSVG from "../../res/svgImage/SecureTextFalseSVG";

//----- pass props like this
// placeholder={"email@email.com"}
// leftImageSource={MAIL}
// leftImage={true}
// value={this.props.username}
// onChangeText={value => this.props.changeUsername(value)}
// returnKeyType={"next"}
// onSubmitEditing={() => {
//   this.secondTextInput.focus();
// }}
// blurOnSubmit={false}

export default class BoxFormInputPassword extends PureComponent {
  state = {
    focused: false,
    secureText: true
  };
  onFocus() {
    this.setState({
      focused: true
    });
  }

  onBlur() {
    this.setState({
      focused: false
    });
  }
  static defaultProps = {
    placeholder: "",
    secureTextEntry: false,
    styleInput: {},
    returnKeyType: null,
    autoFocus: false,
    secureTextEntry: false,
    onSubmitEditing: () => {}
  };
  inputRef() {
    return this.refs.input;
  }

  focus() {
    this.inputRef().focus();
  }

  blur() {
    this.inputRef().blur();
  }

  isFocused() {
    return this.inputRef().isFocused();
  }

  clear() {
    this.inputRef().clear();
  }
  _returnSVGImage() {
    if (this.state.secureText) {
      return <SecureTextSVG />;
    } else {
      return <SecureTextFalseSVG />;
    }
  }
  render() {
    const {
      placeholder,
      value,
      onChangeText,
      keyboardType,
      editable,
      styleInput,
      returnKeyType,
      autoFocus,
      onSubmitEditing,
      leftImage,
      leftImageSource,
      blurOnSubmit,
      ref,
      textContentType
    } = this.props;
    return (
      <View
        style={[
          this.state.focused ? styles.container : styles.containerUnfocused,
          styleInput
        ]}
      >
        {leftImage && <Image style={styles.image} source={leftImageSource} />}

        <TextInput
          style={styles.formInput}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          secureTextEntry={this.state.secureText}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          selectionColor={Colors.appColor}
          value={value}
          autoCapitalize="none"
          textContentType={textContentType}
          autoCorrect={false}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          editable={editable}
          returnKeyType={returnKeyType}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          ref="input"
        />
        <TouchableOpacity
          onPress={() =>
            this.setState({
              secureText: !this.state.secureText
            })
          }
          style={styles.image}
        >
          {this._returnSVGImage()}
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.app_color,
    borderRadius: BORDER_RADIUS_SMALL,
    backgroundColor: Colors.light_color,
    padding: 5,
    justifyContent: "space-between"
  },
  containerUnfocused: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: BORDER_RADIUS_SMALL,
    backgroundColor: Colors.light_gray,
    justifyContent: "space-between"
  },
  formInput: {
    paddingVertical: 4,
    marginVertical: 4,
    paddingHorizontal: 10,
    flex: 1,
    width: "100%",
    fontSize: 14,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 8,
    //fontFamily: Fonts.type.Book,
    color: Colors.darkest_gray
  },
  image: {
    alignSelf: "center",
    marginRight: 7,
    height: 15,
    width: 15,
    margin: 2,
    resizeMode: "contain",
    tintColor: "grey"
  }
});
