import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import color from '../../constants/colors';

const Input = props => {

    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 35,
        marginVertical: 10,
        borderBottomColor: color.grey,
        borderBottomWidth: 1 
    }
})