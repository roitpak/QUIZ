import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../../res/strings/Colors";
import { TICK } from "../../res/image";
import FloatingTextInput from "./FloatingTextInput";
import { REMOVE } from "../../res/image";

export default class RelativeInBankForm extends Component {
  constructor() {
    super();
  }
  _updateStateOnMaster = (attributeName, value, index) => {
    this.props.updateMasterState(attributeName, value, index);
  };
  _returnDelete(length, index) {
    if (index == 0) {
      return;
    }
    if (index + 1 == length) {
      return (
        <TouchableOpacity
          onPress={() => this.props.removeLastIndex()}
          style={styles.touchable}
        >
          <Image style={styles.image} source={REMOVE} />
        </TouchableOpacity>
      );
    }
  }
  render() {
    const { index, item, length } = this.props;
    return (
      <View style={{ marginBottom: 40 }}>
        <FloatingTextInput
          title="Full Name"
          attrName={"full_name"}
          value={item.full_name}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"next"}
          onSubmitEditing={() => this.refInput.getInnerRef().focus()}
          autoFocus={false}
          blurOnSubmit={true}
          required={true}
        />
        <FloatingTextInput
          title="Relationship"
          attrName={"relationship"}
          value={item.relationship}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"next"}
          ref={r => (this.refInput = r)}
          onSubmitEditing={() => this.refInput2.getInnerRef().focus()}
          required={true}
        />
        <FloatingTextInput
          title="Organization"
          attrName={"organisation"}
          value={item.organisation}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"done"}
          ref={r => (this.refInput2 = r)}
          required={true}
        />
        {this._returnDelete(length, index)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: Colors.app_color
  },
  touchable: { position: "absolute", top: 15, right: 0 }
});
