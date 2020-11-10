import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import color from '../constants/colors';

const NumberContainer = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.numberTxt}>{props.children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: color.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberTxt: {
        fontSize: 25,
        fontWeight: '700',
        color: color.accent
    }
})