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
import { CURVE_LOGIN, LAXMI, MAIL, KEY, LOKSEWA } from "../../res/image";
import Colors from "../../res/strings/Colors";
import FormInput from "../../components/common/FormInput";
import LargeButton from "../../components/common/LargeButton";
import {
  changeUsername,
  changePassword,
  loginUser,
  setLoadingFalse
} from "../../redux/actions";
import BoxFormInput from "../../components/common/BoxFormInput";
import { HORIZONTAL_MARGIN } from "../../configs/StylesConstants";
import BoxFormInputPassword from "../../components/common/BoxFormInputPassword";
import CustomRadioButton from "../../components/FormInput/CustomRadioButton";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { securePasswordText: true, rememberMe: false };
  }
  componentDidMount() {
    this.props.setLoadingFalse();
    //when the  component gets 'didfocus' it will get notification again
    this.props.navigation.addListener("didFocus", payload => {});
  }
  _onClickLogin() {
    // this.props.loginUser(
    //   this.props.username,
    //   this.props.password,
    //   this.props.expoToken
    // );
    // this.props.navigation.navigate("ScreenRestrictTestScreen");
    this.props.loginUser(this.props.username, this.props.password);
  }
  _returnLoginButton() {
    if (this.props.loggingIn) {
      return <ActivityIndicator size="large" color={Colors.app_color} />;
    }
    return (
      <LargeButton
        text={"LOGIN"}
        onPress={() => this._onClickLogin()}
        styleButton={styles.buttonStyles}
      />
    );
  }
  _returnSecureTextImage() {
    if (this.state.securePasswordText) {
    } else {
      return;
    }
  }
  render() {
    // const { navigation } = this.props;
    // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          style={{ flex: 1, flexDirection: "column" }}
          showsVerticalScrollIndicator={false}
        >
          <Image style={styles.logo} source={LOKSEWA} resizeMode={"contain"} />
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.signTo}>Login to your account</Text>
          <View style={styles.inputField}>
            <Text style={styles.inputHeading}>Mobile Number</Text>
            <BoxFormInput
              value={this.props.username}
              onChangeText={value => this.props.changeUsername(value)}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              keyboardType={"phone-pad"}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.inputHeading}>Password</Text>
            <BoxFormInputPassword
              value={this.props.password}
              onChangeText={value => this.props.changePassword(value)}
              returnKeyType={"done"}
              ref={input => {
                this.secondTextInput = input;
              }}
              onSubmitEditing={() => {
                this._onClickLogin();
              }}
            />
          </View>
          <View style={styles.rememberAndForgotBox}>
            <CustomRadioButton
              label={"Remember me"}
              labelStyle={{ fontSize: 12, color: Colors.app_color }}
              selected={this.state.rememberMe}
              onClick={() =>
                this.setState({
                  rememberMe: !this.state.rememberMe
                })
              }
            />
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ForgotPasswordScreen")
              }
            >
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonMaster}>{this._returnLoginButton()}</View>
          <View style={styles.loginView}>
            <Text style={styles.acceptTextStyle}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("WelcomeScreen")}
            >
              <Text style={styles.acceptTextStyleHighlighted}>Register</Text>
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "grey",
              borderWidth: 1,
              borderColo: "black"
            }}
          >
            <User />
          </View> */}
        </ScrollView>
        {/* <KeyboardSpacer /> */}
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
  logo: {
    width: wp("40%"),
    resizeMode: "contain",
    marginTop: hp("5%")
  },
  welcome: {
    color: Colors.darkest_gray,
    fontSize: hp("4%")
  },
  signTo: {
    color: Colors.dark_gray,
    fontSize: hp("2%"),
    marginBottom: hp("7%")
  },
  inputField: {
    marginBottom: 25
  },
  rememberAndForgotBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputHeading: {
    color: Colors.darkest_gray,
    marginBottom: 10,
    fontSize: 14
  },
  buttonMaster: {
    width: "100%",
    // height: hp("5%"),
    alignSelf: "center",
    margin: hp("2%")
  },
  forgotPassword: { fontSize: 12, color: Colors.app_color },
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
    marginTop: 35,
    marginBottom: 35
  }
});

const mapStateToProps = ({ main }) => {
  const { password, username } = main;
  return { password, username };
};
export default connect(mapStateToProps, {
  changeUsername,
  changePassword,
  loginUser,
  setLoadingFalse
})(LoginScreen);
