import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "../../res/strings";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class Answers extends Component {
  constructor() {
    super();
    this.state = { chosen: -1 };
  }
  _onChoose(index) {
    this.setState({ chosen: index });
  }

  render() {
    const { answers, onClick } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this._onChoose(0);
            onClick(answers[0]);
          }}
          style={
            this.state.chosen == 0 ? styles.chosenQuestion : styles.question
          }
        >
          <Text
            style={
              this.state.chosen == 0
                ? styles.chosenQuestionText
                : styles.questionText
            }
          >
            {answers[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this._onChoose(1);
            onClick(answers[1]);
          }}
          style={
            this.state.chosen == 1 ? styles.chosenQuestion : styles.question
          }
        >
          <Text
            style={
              this.state.chosen == 1
                ? styles.chosenQuestionText
                : styles.questionText
            }
          >
            {answers[1]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this._onChoose(2);
            onClick(answers[2]);
          }}
          style={
            this.state.chosen == 2 ? styles.chosenQuestion : styles.question
          }
        >
          <Text
            style={
              this.state.chosen == 2
                ? styles.chosenQuestionText
                : styles.questionText
            }
          >
            {answers[2]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this._onChoose(3);
            onClick(answers[3]);
          }}
          style={
            this.state.chosen == 3 ? styles.chosenQuestion : styles.question
          }
        >
          <Text
            style={
              this.state.chosen == 3
                ? styles.chosenQuestionText
                : styles.questionText
            }
          >
            {answers[3]}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light_gray,
    padding: 20,
    borderRadius: 10,
    margin: 10,
    marginVertical: 20,
  },
  question: {
    padding: 20,
  },
  chosenQuestion: {
    backgroundColor: Colors.light_color,
    padding: 20,

    borderRadius: 10,
  },

  questionText: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.darkest_gray,
  },
  chosenQuestionText: {
    fontSize: 22,
    textAlign: "center",
    color: Colors.darkest_gray,
  },
});
