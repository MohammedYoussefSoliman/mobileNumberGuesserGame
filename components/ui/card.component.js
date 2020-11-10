import React from 'react';
import {View, StyleSheet} from 'react-native';
import color from '../../constants/colors'

const Card = props => {
return <View style={{...styles.Card, ...props.style}}>{props.children}</View>
}

export default Card

const styles = StyleSheet.create({
    Card: {
        shadowColor: color.black,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.25,
        elevation: 8, // this is how to apply shadow on android devices and the rest shadow props are for IOS
        backgroundColor: color.white,
        padding: 20,
        borderRadius: 10
    }
})