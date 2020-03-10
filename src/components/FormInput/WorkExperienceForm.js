import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import FloatingTextInput from "./FloatingTextInput";
import DatePicker from "./DatePicker";
import { Colors } from "../../res/strings";
import { REMOVE } from "../../res/image";

export default class WorkExperienceForm extends Component {
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
    const { index, updateAcademicDetails, item, length } = this.props;
    return (
      <View style={{ marginBottom: 40 }}>
        <DatePicker
          title={"From"}
          mode={"date"}
          value={item.from}
          onChangeDate={value =>
            this._updateStateOnMaster("from", value, index)
          }
        />
        <DatePicker
          title={"To"}
          mode={"date"}
          value={item.to}
          onChangeDate={value => this._updateStateOnMaster("to", value, index)}
        />
        <FloatingTextInput
          title="Title of your post"
          attrName={"post_title"}
          value={item.post_title}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"next"}
          onSubmitEditing={() => this.refInput.getInnerRef().focus()}
          autoFocus={false}
          blurOnSubmit={true}
        />
        <FloatingTextInput
          title="Name of Employer"
          attrName={"employer_name"}
          value={item.employer_name}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"next"}
          ref={r => (this.refInput = r)}
          onSubmitEditing={() => this.refInput2.getInnerRef().focus()}
        />
        <FloatingTextInput
          title="Name of Supervisor"
          attrName={"supervisor_name"}
          value={item.supervisor_name}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"next"}
          ref={r => (this.refInput2 = r)}
          onSubmitEditing={() => this.refInput3.getInnerRef().focus()}
        />

        <FloatingTextInput
          title="Reason of Leaving"
          attrName={"reason_of_leaving"}
          value={item.reason_of_leaving}
          updateMasterState={(attribute, value) =>
            this._updateStateOnMaster(attribute, value, index)
          }
          returnKeyType={"done"}
          ref={r => (this.refInput3 = r)}
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
