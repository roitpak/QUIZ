import React from 'react';
import {View} from 'react-native';

const CardSection = (props) =>{
    return (
        <View style = {[styles.containerStyle,props.style]}>
        {/* props.style tells use override */}
            {props.children}
        </View>
    );
};
const styles = {
    containerStyle:{
        //borderBottomWidth:1,  //Overrite border witdth for bottm cardsection to remove bottom border
        padding:5,
        //backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative',

    }
}
export {CardSection};