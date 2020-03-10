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

export default class FormInput extends PureComponent {
  state = {
    backgroundColor: Colors.white
  };
  onFocus() {
    this.setState({
      backgroundColor: Colors.lighter_color
    });
  }

  onBlur() {
    this.setState({
      backgroundColor: ""
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
  render() {
    const {
      placeholder,
      value,
      onChangeText,
      secureTextEntry,
      keyboardType,
      onPress,
      editable,
      styleInput,
      returnKeyType,
      autoFocus,
      onSubmitEditing,
      leftImage,
      leftImageSource,
      blurOnSubmit,
      ref
    } = this.props;
    return (
      <View style={[{ flexDirection: "row" }, styles.container, styleInput]}>
        {leftImage && <Image style={styles.image} source={leftImageSource} />}

        <TextInput
          style={styles.formInput}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          selectionColor={Colors.appColor}
          value={value}
          autoCapitalize="none"
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_color
  },
  formInput: {
    paddingVertical: 5,
    marginVertical: 5,
    flex: 1,
    fontSize: 14,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 8,
    //fontFamily: Fonts.type.Book,
    color: Colors.app_color
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
