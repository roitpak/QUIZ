// import Constants from "expo-constants";
// import * as Permissions from "expo-permissions";
// import * as Location from "expo-location";

// import React, { Component } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   RefreshControl,
//   Text,
//   Image,
//   Platform,
//   Linking,
//   TouchableOpacity,
//   KeyboardAvoidingView
// } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp
// } from "react-native-responsive-screen";
// import { connect } from "react-redux";
// import MapView from "react-native-maps";

// // import { CURVE_LOGIN, LAXMI, MAIL, KEY, CURVE_HEADER } from "../../res/image";

// class IntroMessageScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mapRegion: {
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//       },
//       locationResult: null,
//       location: { coords: { latitude: 37.78825, longitude: -122.4324 } }
//     };
//   }
//   componentDidMount() {
//     this._getLocationAsync();
//     //when the  component gets 'didfocus' it will get notification again
//     this.props.navigation.addListener("didFocus", payload => {
//       //payload will not be used
//       //your function on starting the did focus\
//     });
//   }
//   _handleMapRegionChange = mapRegion => {
//     this.setState({ mapRegion });
//   };
//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== "granted") {
//       this.setState({
//         locationResult: "Permission to access location was denied",
//         location
//       });
//     }

//     let location = await Location.getCurrentPositionAsync({});

//     this.setState({ locationResult: JSON.stringify(location), location });
//     this.animateMap(location.coords.latitude, location.coords.longitude);
//   };
//   animateMap(lat, lng) {
//     this._map.animateToRegion({
//       latitude: parseFloat(lat),
//       longitude: parseFloat(lng),
//       latitudeDelta: 0.015 * 1, //more the multiplication alue more the zoom
//       longitudeDelta: 0.0121 * 1
//     });
//   }
//   returnMarker() {
//     if (this.state.location == "") return;
//     return (
//       <MapView.Marker
//         coordinate={{
//           latitude: this.state.location.coords.latitude,
//           longitude: this.state.location.coords.longitude
//         }}
//         title={"test"}
//         description={"test2"}
//       />
//     );
//   }
//   render() {
//     // const { navigation } = this.props;
//     // const username = navigation.getParam('userName', 'No Username Found');
//     // const role = navigation.getParam('role', 'No role found');
//     return (
//       <View style={styles.container}>
//         {/* <MapView
//           style={{ alignSelf: "stretch", height: 200 }}
//           region={{
//             latitude: this.state.location.coords.latitude,
//             longitude: this.state.location.coords.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421
//           }}
//           onRegionChange={this._handleMapRegionChange}
//         >
//           <MapView
//             coordinate={this.state.location.coords}
//             title="My Marker"
//             description="Some description"
//           />
//         </MapView> */}
//         <View
//           style={{
//             height: hp("100%"),
//             width: wp("100%"),
//             backgroundColor: "grey"
//           }}
//         >
//           <MapView
//             ref={component => (this._map = component)}
//             style={{ flex: 1, backgroundColor: "white" }}
//             loadingEnabled={true}
//             loadingIndicatorColor="#666666"
//             loadingBackgroundColor="#eeeeee"
//             moveOnMarkerPress={true}
//             showsUserLocation={true}
//             showsCompass={true}
//             showsPointsOfInterest={false}
//             provider="google"
//           >
//             {this.returnMarker()}
//           </MapView>
//         </View>
//         <Text>Location: {this.state.locationResult}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: "#ecf0f1"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#34495e"
//   }
// });

// const mapStateToProps = ({ main }) => {
//   return {};
// };
// export default connect(mapStateToProps, {})(IntroMessageScreen);
