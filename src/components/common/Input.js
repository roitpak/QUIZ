import React from 'react';
import { TextInput, View, Image } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, image }) => {
    const { inputStyle, containerStyle, imageStyle } = styles;
    return (
        <View
            style={containerStyle}
        >
            <Image
                style={imageStyle}
                source={image}
            />
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize='none'
                placeholderTextColor='grey'
            />
        </View>
    );
}

const styles = {
    inputStyle: {
        color: 'grey',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 13,
        flex: 2,
    },
    imageStyle: {
        width: 20,
        height: 20,
        alignItems: 'center',
        resizeMode: 'contain',
        tintColor: 'grey',
    },

    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width:100
    },
};

export { Input };