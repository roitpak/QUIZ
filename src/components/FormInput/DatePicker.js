import React, { Component } from "react";
import {
  View,
  Button,
  Platform,
  Modal,
  TouchableHighlight,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Colors from "../../res/strings/Colors";

export default class DatePicker extends Component {
  state = {
    date: new Date("2020-06-12T14:42:42"),
    mode: "date",
    show: false
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === "ios" ? true : false,
      date
    });
    this.props.onChangeDate(date);
  };

  show = mode => {
    this.setState({
      show: true,
      mode
    });
  };

  datepicker = () => {
    this.show("date");
  };

  //   timepicker = () => {
  //     this.show("time");
  //   };
  returnPicker() {
    if (Platform.OS == "ios") {
      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.show}
          //   onRequestClose={() => {
          //     alert("Modal has been closed.");
          //   }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>{this.props.title}</Text>
              <DateTimePicker
                value={this.state.date}
                mode={this.props.mode}
                is24Hour={false}
                display="default"
                onChange={this.setDate}
              />
              <View
                style={{
                  width: "90%",
                  alignItems: "flex-end",
                  justifyContent: "flex-end"
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.onChangeDate(this.state.date);
                    this.setState({ show: false });
                  }}
                >
                  <Text style={styles.submit}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    } else if (this.state.show) {
      //Similar to modal shown for android devices
      return (
        <DateTimePicker
          value={this.state.date}
          mode={this.props.mode}
          is24Hour={false}
          display="default"
          onChange={this.setDate}
        />
      );
    }
  }
  _returnTextValue(value) {
    if (value == "" || value == undefined) {
      return <Text style={styles.touchable}>YYYY-MM-DD</Text>;
    }
    return <Text style={styles.touchable}>{value}</Text>;
  }
  _returnStar(required) {
    if (required) {
      return <Text style={styles.requiredStyle}>*</Text>;
    }
  }
  _returnTitle(title) {
    if (title == undefined) return;
    if (title == "") return;
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  render() {
    const { show, date } = this.state;
    const { title, mode, onChangeDate, value, required } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this.datepicker}>
        {this._returnTitle(title)}
        <View style={{ width: "100%" }}>{this._returnTextValue(value)}</View>
        {this.returnPicker()}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // width: "100%",
    borderBottomWidth: 1,
    height: 55,
    // marginVertical: 4,
    borderBottomColor: Colors.light_color,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  title: {
    fontSize: 13,
    // marginLeft: 5,
    color: Colors.dark_gray
  },
  requiredStyle: {
    // position: "absolute",
    color: Colors.app_color,
    marginLeft: 5,
    fontSize: 13
  },
  touchable: {
    // marginLeft: 5,
    color: Colors.app_color,
    fontSize: 11,
    textAlign: "justify"
  },
  modal: {
    width: wp("80%"),
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 20
  },
  submit: {
    color: Colors.app_color
  }
});
