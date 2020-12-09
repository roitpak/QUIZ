import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  Image,
  Platform,
  Linking,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { logOut, showAlertPopUp } from "../../redux/actions";
import { HOUSE } from "../../res/image";
import { Colors } from "../../res/strings";
import questions from "../../res/strings/questions.json";
import Answers from "./Answers";

// --------------------------------------------------------------------------------
// No redux is implemented for the quiz page,
// First the questions.json is shuffled and stored in state,

// when answer is chosen inside Answer Component the value is also stored here
//  answer is stored in chosenAnswers array

// count is increased on every next question

// when 10th question is finished "finished" boolean is set to true
// chosen answer array is compared with shuffled array of question and marks is displayed

// when retry is clicked all the values is reset and questions are re shuffled
// -----------------------------------------------------------------------------------

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      chosenAnswers: [],
      shuffledQuestions: [],
      finished: false,
    };
  }
  componentDidMount() {
    var tempQuestion = questions;
    tempQuestion.map((item, index) => {
      tempQuestion[index].answers == this.shuffle(tempQuestion[index].answers);
    });
    tempQuestion = this.shuffle(tempQuestion);
    this.setState({ shuffledQuestions: tempQuestion });
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  _onClickLogin() {
    this.props.navigation.navigate("IntroMessageScreen");
  }
  _onCLickAnswer(chosen) {
    var answer = this.state.chosenAnswers;

    answer[this.state.count] = chosen;
    // here the answer is stored in chosen answer array as index of answer

    this.setState({ chosenAnswers: answer });
  }
  _returnNextOrFinish() {
    if (this.state.count == 9) {
      return "Finish";
    } else {
      return "Next";
    }
  }
  _returnQuestionCount() {
    return this.state.count + 1 + " out of 10";
  }
  _onPressNExt() {
    if (this.state.chosenAnswers[this.state.count] == undefined) {
      this.props.showAlertPopUp("Quiz", "Please select answer");
      return;
    }
    var tempCount = this.state.count + 1;
    if (tempCount == 10) {
      this.setState({ finished: true });
    } else {
      this.setState({ count: tempCount });
    }
  }
  _returnMarks() {
    var marks = 0;
    this.state.shuffledQuestions.map((item, index) => {
      if (item.correctAnswer == this.state.chosenAnswers[index]) {
        marks++;
      }
    });
    return "You obtained " + marks + " out of 10";
  }
  _returnQuestion() {
    if (this.state.finished) {
      return (
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <Text style={styles.marksObtained}>{this._returnMarks()}</Text>
          <TouchableOpacity
            onPress={() => {
              // when retry clicked re shuffled and state reset
              var tempQuestion = questions;
              tempQuestion.map((item, index) => {
                tempQuestion[index].answers ==
                  this.shuffle(tempQuestion[index].answers);
              });
              tempQuestion = this.shuffle(tempQuestion);
              this.setState({ shuffledQuestions: tempQuestion });
              this.setState({
                count: 0,
                chosenAnswers: [],
                finished: false,
              });
            }}
          >
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View>
        <Text style={styles.question}>
          {questions[this.state.count].question}
        </Text>
        <Answers
          key={this.state.count}
          answers={questions[this.state.count].answers}
          onClick={(chosen) => {
            this._onCLickAnswer(chosen);
          }}
        />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => this._onPressNExt()}
        >
          <Text style={{ fontSize: 15, color: Colors.darkest_gray }}>
            {this._returnNextOrFinish()}
          </Text>
          <Text
            style={{ fontSize: 11, color: Colors.darkest_gray, marginTop: 5 }}
          >
            {this._returnQuestionCount()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    // const { navigation } = this.props;
    // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <ScrollView
        style={styles.container}
        behavior="padding"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.logOut();
          }}
          style={styles.logout}
        >
          <Text style={{ fontSize: 15 }}>LOGOUT</Text>
        </TouchableOpacity>
        <Text style={styles.title}>ALPHA BETA THETA QUIZ</Text>

        {this._returnQuestion()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },
  logout: {
    margin: 10,
    padding: 5,
    alignSelf: "flex-end",
  },
  curveImage: {
    position: "absolute",
    left: -wp("10%"),
    top: -hp("3%"),
    height: hp("30%"),
    // backgroundColor: Colors.light_color,
    width: wp("120%"),
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.app_color,
    marginTop: 20,
  },
  question: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 60,
    color: Colors.darkest_gray,
  },
  nextButton: {
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 10,
    backgroundColor: Colors.app_color,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  marksObtained: {
    fontSize: 25,
    color: Colors.app_color,
  },
  retryText: {
    fontSize: 15,
    marginTop: 20,
    color: Colors.app_color_mid,
  },
});

const mapStateToProps = ({ main }) => {
  return {};
};
export default connect(mapStateToProps, { showAlertPopUp, logOut })(
  DashboardScreen
);
