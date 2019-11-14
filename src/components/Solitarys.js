import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ScrollView, RefreshControl,} from 'react-native';
import Constants from "expo-constants";
import { connect } from 'react-redux';
import axios from 'axios';
import { LinearGradient } from 'expo';
import { Header } from '../common';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Solitarys extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true, //component will start with refreshng state
        };
    }
    componentDidMount() {
        //when the  component gets 'didfocus' it will get notification again
        this.props.navigation.addListener(
            'didFocus',
            payload => {   //payload will not be used 
                //your function on starting the did focus
            }
        );
    }
    _onRefresh = () => {
        this.setState({ refreshing: true });
    }
    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        // const { navigation } = this.props;
        // const username = navigation.getParam('userName', 'No Username Found');
        // const role = navigation.getParam('role', 'No role found');
        return (
            <LinearGradient
                style={styles.container}
                >
                <View style={{ height: Constants.statusBarHeight }} />
                <Header headerText='Calender' onLeftMenupressed={this.goBack.bind(this)} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                </ScrollView>
            </LinearGradient>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = ({ auth }) => {
    const { data } = auth;
    return {
        data, //this data contains response from the first login 
    };
};
export default connect(mapStateToProps, {
})(Solitarys);
