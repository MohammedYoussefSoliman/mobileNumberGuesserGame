import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../constants/colors'
export const Header = ({title}) => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 35,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: color.white,
        fontSize: 18
    }
})