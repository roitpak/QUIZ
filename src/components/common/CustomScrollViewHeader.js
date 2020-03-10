import React, { PureComponent } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
  StatusBar,
  NativeModules
} from "react-native";
import { LAXMI, CURVE_HEADER, LAXMI_CROPPED } from "../../res/image";
import { Colors } from "../../res/strings";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import CustomImage from "./CustomImage";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

const HEADER_MAX_HEIGHT = hp("30%");
const HEADER_MIN_HEIGHT = hp("10%");
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class CustomScrollViewHeader extends PureComponent {
  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  _returnImage() {
    if (this.props.image == undefined) return;
    return <CustomImage source={this.props.image} style={styles.ceoImage} />;
  }
  render() {
    const { style, title, subTitle, image } = this.props;
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 150, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp"
    });
    const imageTranslate2 = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -100],
      extrapolate: "clamp"
    });
    return (
      <View style={styles.fill}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Image
            style={[
              styles.curveImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate2 }]
              }
            ]}
            source={CURVE_HEADER}
            resizeMode={"stretch"}
          />
          <Animated.View
            style={[
              styles.headerContainer,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate2 }]
              }
            ]}
          >
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            {this._returnImage()}
          </Animated.View>
        </Animated.View>
        <ScrollView
          style={[style, { marginTop: STATUSBAR_HEIGHT }]}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16
  },
  fill: {
    flex: 1
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: Colors.app_color,
    overflow: "hidden"
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 18
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  backgroundImage1: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "contain"
  },
  curveImage: {
    position: "absolute",
    left: -wp("10%"),
    top: -hp("3%"),
    height: hp("30%"),
    // backgroundColor: Colors.light_color,
    width: wp("120%"),
    zIndex: 1
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: hp("20%"),
    alignItems: "center",
    zIndex: 2,
    position: "absolute",
    left: 0,
    top: 0,
    width: wp("100%"),
    justifyContent: "space-between",
    zIndex: 1.1
  },
  title: {
    fontSize: wp("5%"),
    marginLeft: wp("8%"),
    color: "white"
  },
  subTitle: {
    fontSize: wp("5%"),
    marginTop: wp("1%"),
    marginLeft: wp("8%"),
    color: "white",
    zIndex: 2
  },
  ceoImage: {
    width: wp("20%"),
    height: wp("20%"),
    borderRadius: wp("10%"),
    marginRight: wp("8%"),
    zIndex: 2
  }
});
