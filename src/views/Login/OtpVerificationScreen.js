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
  KeyboardAvoidingView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { HORIZONTAL_MARGIN } from "../../configs/StylesConstants";
import BoxFormInput from "../../components/common/BoxFormInput";
import LargeButton from "../../components/common/LargeButton";
import { Colors } from "../../res/strings";
import { verifyUser } from "../../redux/actions";
// import { CURVE_LOGIN, LAXMI, MAIL, KEY, CURVE_HEADER } from "../../res/image";

class OtpVerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { otpCode: "" };
  }
  componentDidMount() {
    //when the  component gets 'didfocus' it will get notification again
    this.props.navigation.addListener("didFocus", payload => {
      //payload will not be used
      //your function on starting the did focus\
    });
  }
  _onClickLogin() {
    this.props.navigation.navigate("IntroMessageScreen");
  }
  render() {
    // const { navigation } = this.props;
    // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <View style={styles.container} behavior="padding">
        <Text style={styles.title}>Verification code</Text>
        <Text style={styles.subTitle}>
          Please type the verification code send to
        </Text>
        <Text style={styles.subTitle}>{this.props.mobileNumberRegister}</Text>
        <Text style={styles.heading2}>OTP Code</Text>
        <BoxFormInput
          value={this.state.otpCode}
          onChangeText={value => this.setState({ otpCode: value })}
          keyboardType={"phone-pad"}
          ref={input => {
            this.otpInput = input;
          }}
        />
        <View style={styles.receiveCodeView}>
          <Text style={styles.receiveCode}>
            If you didn't receive your code!
          </Text>
          <TouchableOpacity>
            <Text style={styles.receiveCodeHighLight}> Resend</Text>
          </TouchableOpacity>
        </View>
        <LargeButton
          text={"Verify"}
          onPress={() => {
            this.otpInput.blur();
            this.props.verifyUser(this.state.otpCode);
          }}
          // styleButton={styles.buttonStyles}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: HORIZONTAL_MARGIN,
  },
  title: {
    fontSize: hp("4%"),
    marginTop: hp("10%")
  },
  subTitle: {
    fontSize: 15,
    color: Colors.dark_gray,
    marginTop: 5
  },
  heading2: {
    fontSize: 20,
    color: Colors.darkest_gray,
    marginTop: 30,
    marginBottom: 5
  },
  receiveCodeView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 5
  },
  receiveCode: {
    fontSize: 13,
    color: Colors.dark_gray
  },
  receiveCodeHighLight: {
    fontSize: 14,
    color: Colors.app_color
  }
});

const mapStateToProps = ({ main }) => {
  const { mobileNumberRegister } = main;
  return { mobileNumberRegister };
};
export default connect(mapStateToProps, { verifyUser })(OtpVerificationScreen);
