import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Typo = ({children, fontStyle, style, wieght}) => {

    const fontStyleHandler = (fontStyle, wieght) => {
        let fontStyleContainer = {...styles.regular}
        let wieghtContainer = {...styles.normal}

        if(fontStyle) {
            switch(fontStyle) {
                case 'title':
                    fontStyleContainer = {...styles.title}
                    break
                case 'subTitle':
                    fontStyleContainer = {...styles.subTitle}
                    break
                case 'regular':
                    fontStyleContainer = {...styles.regular}
                    break
                case 'small':
                    fontStyleContainer = {...styles.small}
                    break
                default:
                    fontStyleContainer = {...styles.regular}
            }
        }

        if(wieght) {
            switch(wieght) {
                case "black":
                    wieghtContainer = {...styles.black}
                    break
                case "bold":
                    wieghtContainer = {...styles.bold}
                    break
                case "medium":
                    wieghtContainer = {...styles.medium}
                    break
                case "normal":
                    wieghtContainer = {...styles.normal}
                    break
                case "light":
                    wieghtContainer = {...styles.light}
                    break
                default:
                    wieghtContainer = {...styles.normal}
            }
        }

        
        return {...fontStyleContainer, ...wieghtContainer}
    }
    // console.log({...fontStyleHandler(fontStyle, wieght), ...style})
    
    return (
        <Text style={{...fontStyleHandler(fontStyle, wieght), ...style}}>{children}</Text>
    )
}

export default Typo

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        marginVertical: 16
    },
    subTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 21,
        marginBottom: 10
    },
    regular: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginBottom: 8
    },
    small: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
    },
    // fontWieght
    black: {
        fontFamily: 'Montserrat-Black',
    },
    extraBold: {
        fontFamily: 'Montserrat-ExtraBold',
    },
    bold: {
        fontFamily: 'Montserrat-Bold',
    },
    medium: {
        fontFamily: 'Montserrat-Medium',
    },
    normal: {
        fontFamily: 'Montserrat-Regular',
    },
    light: {
        fontFamily: 'Montserrat-Light',
    }
})