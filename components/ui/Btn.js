import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import color from '../../constants/colors';

const Btn = ({children, style, onPress, fullwidth, btnColor, outline, txtBlack}) => {

    const btnStyleHandler = (fullwidth, txtBlack, btnColor, outline) => {
        let btnStyleContainer = {...styles.btn, ...styles.btnColor_primary}
        let btnTxtStyleContainer = {...styles.btnTxt}

        if(fullwidth) {
            btnStyleContainer = {...btnStyleContainer, ...styles.fullwidth}
        }

        if(btnColor) {
            if(!outline) {
                console.log(true)
                switch(btnColor) {
                    case 'success':
                        btnStyleContainer = {...btnStyleContainer, ...styles.btnColor_success}
                        break
                    case 'secondary':
                        btnStyleContainer = {...btnStyleContainer, ...styles.btnColor_secondary}
                        break
                    case 'warning':
                        btnStyleContainer = {...btnStyleContainer, ...styles.btnColor_warning}
                        break
                    case 'danger':
                        btnStyleContainer = {...btnStyleContainer, ...styles.btnColor_danger}
                        break
                    case 'disabled':
                        btnStyleContainer = {...btnStyleContainer, ...styles.btnColor_disabled}
                        btnTxtStyleContainer = {...btnTxtStyleContainer, ...styles.btnColor_txt_disabled}
                        break
                    default:
                        btnStyleContainer = {...btnStyleContainer}
                }
            }else{
                btnStyleContainer = {...styles.btn, ...styles.outline_general}
                btnTxtStyleContainer = {...styles.btnTxt, ...styles.outline_txt_primary}
                switch(btnColor) {
                    case 'success':
                        btnStyleContainer = {...btnStyleContainer, ...styles.outline_success}
                        btnTxtStyleContainer = {...btnTxtStyleContainer, ...styles.outline_txt_success}
                        break
                    case 'secondary':
                        btnStyleContainer = {...btnStyleContainer, ...styles.outline_secondary}
                        btnTxtStyleContainer = {...btnTxtStyleContainer, ...styles.outline_txt_secondary}
                        break
                    case 'warning':
                        btnStyleContainer = {...btnStyleContainer, ...styles.outline_warning}
                        btnTxtStyleContainer = {...btnTxtStyleContainer, ...styles.outline_txt_warning}
                        break
                    case 'danger':
                        btnStyleContainer = {...btnStyleContainer, ...styles.outline_danger}
                        btnTxtStyleContainer = {...btnTxtStyleContainer, ...styles.outline_txt_danger}
                        break
                    case 'disabled':
                        btnStyleContainer = {...btnStyleContainer, ...styles.outline_disabled}
                        btnTxtStyleContainer = {...btnTxtStyleContainer, ...styles.outline_txt_disabled}
                        break
                    default:
                        btnStyleContainer = {...btnStyleContainer}
                        btnTxtStyleContainer = {...btnTxtStyleContainer, ...styles.outline_txt_primary}
                }
            }
        }

        if(txtBlack) {
            btnTxtStyleContainer = {...btnTxtStyleContainer, ...styles.txtBlack}
        }

        return {
            btnStyle: btnStyleContainer,
            btnTxtStyle: btnTxtStyleContainer
        }

    }

    console.log(btnStyleHandler(fullwidth, txtBlack, btnColor, outline))

    return <TouchableOpacity onPress={onPress}>
        <View style={{...btnStyleHandler(fullwidth, txtBlack, btnColor, outline).btnStyle, ...style}}>
            <Text style={{...btnStyleHandler(fullwidth, txtBlack, btnColor, outline).btnTxtStyle, ...style}}>{children}</Text>
        </View>
    </TouchableOpacity>
}

export default Btn

const styles = StyleSheet.create({
    btn: { // can not nest mor objects for styling
        paddingVertical: 10,
        paddingHorizontal: 16,
        justifyContent: 'center',
        borderRadius: 3,
        elevation: 4,
        // IOS shado
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 3,
        shadowOpacity: 0.25,
    },
    btnTxt: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: color.white
    },
    fullwidth: {
        width: '100%'
    },
    btnColor_primary: {
        backgroundColor: color.primary
    },
    btnColor_secondary: {
        backgroundColor: color.secondary
    },
    btnColor_success: {
        backgroundColor: color.green
    },
    btnColor_warning: {
        backgroundColor: color.orange
    },
    btnColor_disabled: {
        backgroundColor: color.grey,
    },
    btnColor_txt_disabled: {
        color: color.textGrey
    },
    btnColor_danger: {
        backgroundColor: color.red,
    },
    //outline style
    outline_general: {
        backgroundColor: color.white,
        borderWidth: 1
    },
    outline_primary: {
        borderColor: color.primary,
    },
    outline_secondary: {
        borderColor: color.secondary,
        
    },
    outline_success: {
        backgroundColor: color.green,
    },
    outline_warning: {
        backgroundColor: color.orange,
    },
    outline_danger: {
        backgroundColor: color.red,
    },
    outline_txt_disabled: {
        backgroundColor: color.textGrey,
    },
    //outline text style
    outline_txt_primary: {
        color: color.primary
    },
    outline_txt_secondary: {
        color: color.secondary
    },
    outline_txt_success: {
        color: color.green
    },
    outline_txt_warning: {
        color: color.orange
    },
    outline_txt_danger: {
        color: color.red,
    },
    outline_txt_disabled: {
        color: color.textGrey,
    },
    txtBlack: {
        color: color.black
    }
})