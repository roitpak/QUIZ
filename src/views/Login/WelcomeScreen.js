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
  ActivityIndicator
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { MAIL, KEY, CURVE2 } from "../../res/image";
import Colors from "../../res/strings/Colors";
import FormInput from "../../components/common/FormInput";
import BoxFormInput from "../../components/common/BoxFormInput";
import LargeButton from "../../components/common/LargeButton";
import {
  changeUsername,
  changePassword,
  changeFullNameRegister,
  changeNumberRegister,
  changePasswordRegister,
  changeRepeatPasswordRegister,
  registerUser,
  setLoadingFalse
} from "../../redux/actions";
import { HORIZONTAL_MARGIN } from "../../configs/StylesConstants";
import CustomRadioButton from "../../components/FormInput/CustomRadioButton";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { acceptBoolean: false };
  }
  componentDidMount() {
    this.props.setLoadingFalse();
    //when the  component gets 'didfocus' it will get notification again
    this.props.navigation.addListener("didFocus", payload => {
      // this.props.userLogout();
      // return;
      //payload will not be used
      //your function on starting the did focus\
    });
  }
  _registerUser() {
    const {
      fullNameRegister,
      mobileNumberRegister,
      passwordRegister,
      repeatPasswordRegister
    } = this.props;
    if (this.state.acceptBoolean) {
      this.props.registerUser(
        fullNameRegister,
        mobileNumberRegister,
        passwordRegister,
        repeatPasswordRegister
      );
    }
    // this.props.loginUser(this.props.username, this.props.password);
    // this.props.navigation.navigate("IntroMessageScreen");
  }
  _goToLogin() {
    // LoginScreen
    this.props.navigation.navigate("LoginScreen");
  }
  _returnLoginButton() {
    if (this.props.loggingIn) {
      return <ActivityIndicator size="large" color={Colors.app_color} />;
    }
    return (
      <LargeButton
        text={"Register"}
        onPress={() => this._registerUser()}
        // styleButton={styles.buttonStyles}
      />
    );
  }
  render() {
    // const { navigation } = this.props;
    // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, flexDirection: "column" }}
        >
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.signTo}>create an account</Text>
          <Text style={styles.subHeading}>
            Your mobile number will be your account ID.
          </Text>

          <View style={styles.inputField}>
            <Text style={styles.inputHeading}>Full Name</Text>
            <BoxFormInput
              value={this.props.fullNameRegister}
              onChangeText={value => this.props.changeFullNameRegister(value)}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.inputHeading}>Mobile Number</Text>
            <BoxFormInput
              value={this.props.mobileNumberRegister}
              onChangeText={value => this.props.changeNumberRegister(value)}
              returnKeyType={"next"}
              ref={input => {
                this.secondTextInput = input;
              }}
              keyboardType={"phone-pad"}
              onSubmitEditing={() => {
                this.secondTextInput2.focus();
              }}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.inputHeading}>Password</Text>
            <BoxFormInput
              secureTextEntry
              value={this.props.passwordRegister}
              onChangeText={value => this.props.changePasswordRegister(value)}
              returnKeyType={"next"}
              ref={input => {
                this.secondTextInput2 = input;
              }}
              textContentType="newPassword"
              onSubmitEditing={() => {
                this.secondTextInput3.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.inputHeading}>Repeat Password</Text>
            <BoxFormInput
              secureTextEntry
              value={this.props.repeatPasswordRegister}
              onChangeText={value =>
                this.props.changeRepeatPasswordRegister(value)
              }
              ref={input => {
                this.secondTextInput3 = input;
              }}
              textContentType="newPassword"
              blurOnSubmit={true}
            />
          </View>
          <View style={styles.acceptView}>
            <CustomRadioButton
              selected={this.state.acceptBoolean}
              onClick={() =>
                this.setState({
                  acceptBoolean: !this.state.acceptBoolean
                })
              }
            />
            <Text style={styles.acceptTextStyle}>I accept </Text>
            <TouchableOpacity>
              <Text style={styles.acceptTextStyleHighlighted}>
                Terms and Condition{" "}
              </Text>
            </TouchableOpacity>
            <Text style={styles.acceptTextStyle}>& </Text>
            <TouchableOpacity>
              <Text style={styles.acceptTextStyleHighlighted}>
                Privacy Policy{" "}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonMaster}>
            {this._returnLoginButton()}
            {/* <TouchableOpacity style={{ marginTop: hp("1%") }}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.loginView}>
            <Text style={styles.acceptTextStyle}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity onPress={() => this._goToLogin()}>
              <Text style={styles.acceptTextStyleHighlighted}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: HORIZONTAL_MARGIN,
  },
  welcome: {
    // color: Colors.app_color,
    fontSize: hp("4%"),
    marginTop: hp("10%")
  },
  signTo: {
    // color: Colors.light_color,
    fontSize: hp("2.5%"),
    fontWeight: "bold"
  },
  subHeading: {
    fontSize: hp("1.75%"),
    marginTop: 5,
    color: Colors.dark_gray,
    marginBottom: 30
  },
  inputField: {
    marginBottom: 25
  },
  inputHeading: {
    color: Colors.darkest_gray,
    marginBottom: 10,
    fontSize: 14
  },
  buttonMaster: {
    width: "100%",
    alignSelf: "center"
  },
  acceptView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25
  },
  acceptTextStyle: {
    fontSize: 12,
    color: Colors.dark_gray
  },
  acceptTextStyleHighlighted: {
    fontSize: 13,
    color: Colors.app_color
  },
  loginView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25
  }
});

const mapStateToProps = ({ main }) => {
  const {
    password,
    username,
    fullNameRegister,
    mobileNumberRegister,
    passwordRegister,
    repeatPasswordRegister
  } = main;
  return {
    password,
    username,
    fullNameRegister,
    mobileNumberRegister,
    passwordRegister,
    repeatPasswordRegister
  };
};
export default connect(mapStateToProps, {
  changeUsername,
  changePassword,
  changeFullNameRegister,
  changeNumberRegister,
  changePasswordRegister,
  changeRepeatPasswordRegister,
  registerUser,
  setLoadingFalse
})(WelcomeScreen);
