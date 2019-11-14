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
} from "react-native";
import Constants from "expo-constants";
import { connect } from "react-redux";
import axios from "axios";
import { LinearGradient } from "expo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";

class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true, //component will start with refreshng state
      userIcon: ""
    };
  }
  componentDidMount() {
    //when the  component gets 'didfocus' it will get notification again
    this.props.navigation.addListener("didFocus", payload => {
      //payload will not be used
      //your function on starting the did focus\
    });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
  };
  goBack() {
    this.props.navigation.goBack();
  }
  render() {
    // const { navigation } = this.props;
    // const username = navigation.getParam('userName', 'No Username Found');
    // const role = navigation.getParam('role', 'No role found');
    return (
      <View>
        <Text style={{ fontSize: wp("20%") }}>hello world</Text>
        {/* <Icon.Button name="facebook" backgroundColor="#3b5998">
          Login with Facebook
        </Icon.Button> */}
      </View>
    );
  }
  //-----------------------------------DOWNLOAD----------------------------------DOWNLOAD-----------------------------DOWNLOAD--------------
  checkBeforeDownload() {
    const urL = "http://techslides.com/demos/sample-videos/small.mp4";
    //check platform and route to broweser if IOS
    Platform.OS === "ios" ? Linking.openURL(urL) : this.downloadFile(urL);
  }
  downloadFile(urL) {
    var res = urL.split("/");
    var fileName = res[res.length - 1];
    console.log(fileName, "is the file name");
    let fileUri = FileSystem.documentDirectory + fileName;

    FileSystem.downloadAsync(urL, fileUri)
      .then(({ uri }) => {
        this.saveFile(uri);
      })
      .catch(error => {
        console.error(error);
      });
  }

  saveFile = async (fileUri: string) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);
      console.log(asset, "is the asset");
      console.log(fileUri, "is the file URI");
    }
  };

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------

  //-------------------------------DOCUMENT----------------PICKER---------------------------------------------------------------------------------------
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    this._startUpload(result);
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });

    alert(result.uri);
  };
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------UPLOAD----------------FILE------------------------------------------------------------------------------------------------------------------
  _startUpload(result) {
    console.log(result, "inside start the upload");
    let formData = new FormData();
    formData.append("photo", result);

    axios
      .post("http://10.13.192.250/demo/public/settings/test_api", {
        method: "POST",
        headers: {
          "Content-Type":
            'multipart/form-data; charset=utf-8; boundary="another cool boundary";'
        },
        body: formData
      })
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
    // axios
    //   .post(`http://10.13.192.250/demo/public/settings/test_api`, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data"
    //     }
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(errors => {
    //     console.log(errors);
    //   });
    // axios
    //   .post(`http://10.13.192.250/demo/public/settings/test_api`, formData)
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(errors => {
    //     console.log(errors);
    //   });
    // axios
    //   .create({
    //     baseURL: 'http://10.13.192.250/demo/public/settings/test_api',
    //     timeout: 600000, // 10 Minutes
    //     method: "POST",
    //     data: formData
    //     // Add any further headers here such as auth
    //   })
    //   .request()
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(errors => {
    //     console.log(errors);
    //   });

    // axios
    //   .post(`http://10.13.192.250/demo/public/settings/test_api`, formData, {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "multipart/form-data",
    //     },
    //     // onUploadProgress: (callback) => this.progress(callback)
    //   })
    //   .then(function(response) {
    //     console.log('response',response);
    //   })
    //   .catch(function(error,) {
    //     console.log('error ocurred',error);
    //   });
  }
  progress(callback) {
    console.log(callback);
  }
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = ({ main }) => {
  return {
    username: main.username
  };
};
export default connect(mapStateToProps, {})(DemoScreen);
