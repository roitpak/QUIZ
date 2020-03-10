import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import FloatingTextInput from "./FloatingTextInput";
import DatePicker from "./DatePicker";
import { REMOVE } from "../../res/image";
import { Colors } from "../../res/strings";

export default class AcademicQualificationForm extends Component {
  constructor() {
    super();
  }
  _updateStateOnMaster = (attributeName, value, index) => {
    this.props.updateAcademicDetails(attributeName, value, index);
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
    const { index, updateAcademicDetails, length, item } = this.props;
    return (
      <View style={{ marginBottom: 40 }}>
        <FloatingTextInput
          title="Academic Level (Degree)"
          attrName={"academic_level"}
          value={item.academic_level}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"next"}
          onSubmitEditing={() => this.refInput.getInnerRef().focus()}
          autoFocus={false}
          blurOnSubmit={true}
        />
        <FloatingTextInput
          title="Name of institute and University"
          attrName={"institute"}
          value={item.institute}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"next"}
          ref={r => (this.refInput = r)}
          onSubmitEditing={() => this.refInput2.getInnerRef().focus()}
        />
        <FloatingTextInput
          title="Place / Country"
          attrName={"address"}
          value={item.address}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          ref={r => (this.refInput2 = r)}
        />
        <DatePicker
          title={"Graduation Year"}
          mode={"date"}
          value={item.graduating_year}
          onChangeDate={value =>
            this._updateStateOnMaster("graduating_year", value, index)
          }
        />
        <FloatingTextInput
          title="Major Subject"
          attrName={"major_subject"}
          value={item.major_subject}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
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
