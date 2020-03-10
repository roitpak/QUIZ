import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import FloatingTextInput from "./FloatingTextInput";
import DatePicker from "./DatePicker";
import { REMOVE } from "../../res/image";
import { Colors } from "../../res/strings";

export default class ChildrenFormItem extends Component {
  constructor() {
    super();
  }
  _updateChildrenName = (attributeName, value) => {
    const { updateChildrenState, index } = this.props;
    updateChildrenState(attributeName, value, index);
  };
  _updateChildrenRelation = (attributeName, value) => {
    const { updateChildrenState, index } = this.props;
    updateChildrenState(attributeName, value, index);
  };
  _updateDate = date => {
    const { attributeDate, updateChildrenState, index } = this.props;
    updateChildrenState(attributeDate, date, index);
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
    const {
      attributeFullName,
      attributeRelationShip,
      index,
      updateChildrenState,
      item,
      length
    } = this.props;
    return (
      <View
        style={{
          marginBottom: 40,
          // borderBottomWidth: 1,
          // borderBottomColor: "grey"
        }}
      >
        <FloatingTextInput
          attrName={attributeFullName}
          title="Full Name"
          value={item.full_name}
          updateMasterState={this._updateChildrenName}
          required={true}
        />
        <DatePicker
          mode={"date"}
          title={"Date of Birth"}
          value={item.dob}
          onChangeDate={this._updateDate}
          required={true}
        />
        <FloatingTextInput
          attrName={attributeRelationShip}
          title="RelationShip"
          value={item.relationship}
          updateMasterState={this._updateChildrenRelation}
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
