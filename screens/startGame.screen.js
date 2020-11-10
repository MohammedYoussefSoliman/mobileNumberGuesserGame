import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import color from '../constants/colors'
import Card from '../components/ui/card.component';
import Input from '../components/ui/input.component';
import Typo from '../components/ui/Typo';

import NumberContainer from '../components/numberContainer.component';


const StartGame = ({onStartGame}) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [enteredNumber, setEnteredNumber] = useState();

    const handleEnteredNumberValidation = (txt) => {
        setEnteredValue(txt.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
        Keyboard.dismiss();
    }

    const confirmInputHandler = () => {
        const num = parseInt(enteredValue);
        
        if(isNaN(num) || num <= 0 || num > 99) {
            Alert.alert('Invalid Number', 'Entered number should be between 1 and 99', [
                {text: 'Reset', style: 'destructive', onPress: resetInputHandler}
            ]);
            return
        }
        setEnteredNumber(num)
        setConfirmed(true);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Typo fontStyle="title" wieght="extraBold">Game Screen!</Typo>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={txt=>handleEnteredNumberValidation(txt)} value={enteredValue}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={color.primary}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={color.accent}/>
                        </View>
                    </View>
                </Card>
            {confirmed && <Card style={styles.summeryContainer}>
                    <View>
                        <Text>Selected number</Text>
                    </View>
                    <NumberContainer>
                        {enteredNumber}
                    </NumberContainer>
                    <Button title="start game" onPress={()=>onStartGame(enteredNumber)}/>
                </Card>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 21,
        marginVertical: 10,
        fontFamily: 'Montserrat-Bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    button: {
        width: 100
    },
    input: {
        minWidth: 30,
        textAlign: 'center'
    },
    summeryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})
