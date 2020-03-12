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
import { useSafeArea } from "react-native-safe-area-context";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import { CAMERA } from "../../res/image";

class CustomDrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //when the  component gets 'didfocus' it will get notification again
  }
  render() {
    // const { navigation } = this.props;
    // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <ScrollView
        contentContainerStyle={[
          {
            paddingTop: 20
          }
        ]}
        style={styles.container}
      >
        <DrawerItem
          label="Screen2"
          onPress={() => {
            this.props.navigation.navigate("Dashboard");
          }}
          icon={({ focused, color, size }) => (
            <Image
              source={CAMERA}
              style={{ width: size, height: size, padding: focused ? 10 : 0 }}
            />
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = ({ main }) => {
  return {};
};
export default connect(mapStateToProps, {})(CustomDrawerContent);
