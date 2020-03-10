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
// import { CURVE_LOGIN, LAXMI, MAIL, KEY, CURVE_HEADER } from "../../res/image";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <Text style={{ fontSize: 30 }}>Side Menu </Text>
        {/* <Image
          style={styles.curveImage}
          source={CURVE_HEADER}
          resizeMode={"stretch"}
        />
        <View>
          <View>
            <Text>Message From</Text>
            <Text>CEO/HR</Text>
          </View>
          <Image/>
        </View> */}
        {/* <KeyboardSpacer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  curveImage: {
    position: "absolute",
    left: -wp("10%"),
    top: -hp("3%"),
    height: hp("30%"),
    // backgroundColor: Colors.light_color,
    width: wp("120%")
  }
});

const mapStateToProps = ({ main }) => {
  return {};
};
export default connect(mapStateToProps, {})(SideMenu);
