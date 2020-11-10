import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Typo from '../components/ui/Typo';

const GameOverScreen = ({userNum, rounds, onRestart}) => {

    return (
        <View style={styles.screen}>
            <Typo fontStyle="subTitle" wieght="bold">the game is over</Typo>
            <View style={styles.imgContainer}>
                {/* <Image style={styles.img} source={require('../assets/images/success.png')} resizeMode="cover"/> */}
                <Image style={styles.img} source={{uri: 'https://static.wikia.nocookie.net/metalgear/images/d/df/Mantis-image.png'}} resizeMode="cover"/>
            </View>
            <Typo>User Number: <Typo wieght="bold">{userNum}</Typo></Typo>
            <Typo>Rounds: <Typo wieght="bold">{rounds}</Typo></Typo>
            <View>
                <Button title="play again" onPress={onRestart}/>
            </View>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: 20,
    },
    img: {
        width: '100%',
        height: '100%'
    }
})