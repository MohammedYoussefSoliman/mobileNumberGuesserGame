import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Alert, ScrollView, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import NumberContainer from '../components/numberContainer.component';
import Card from '../components/ui/card.component';
import Typo from '../components/ui/Typo';
import Btn from '../components/ui/Btn';
import colors from '../constants/colors';

const GameScreen = ({userChoice, onGameOver}) => {

    const lowest = useRef(1);
    const highest = useRef(100);

    const generateRandomNumber = (min, max, exclude) => {

        const minNum = Math.ceil(min);
        const maxNum = Math.floor(max);
        const rndNum = Math.floor(Math.random()*(maxNum-minNum))+minNum;
        if(rndNum===exclude) {
            return generateRandomNumber(min, max, exclude)
        }else{
            return rndNum
        }
        
    }

    const initGuess = generateRandomNumber(1, 100, userChoice);
    const [currentGuess, setCurrentGuess] = useState(initGuess);
    const [pastGuesses, setPastGuesses] = useState([initGuess.toString()])
    
    const gussedNumberHandler = dir => {
        if((dir === 'lower' && currentGuess < userChoice) || (dir === 'greater' && currentGuess > userChoice)) {
            Alert.alert('dont\'t lie', `Nonscence your selection is ${dir} than the gussed number`, [{text: 'never mind', style: 'cancel'}]);
            return
        }else{
            if(dir === 'lower') {
                highest.current = currentGuess
            }else{
                lowest.current = currentGuess+1 // one added because the function that generates the number excludes the highest value but not the lowest
            }
            const nextNum = generateRandomNumber(lowest.current, highest.current, currentGuess);
            setCurrentGuess(nextNum);
            // setRounds(roundNum => roundNum+1)
            setPastGuesses(curPstGus => [nextNum.toString(), ...curPstGus])
        }
    }

    const renderList = (itemLength, itemData) => (
        <View key={itemData.item} style={styles.listItem}>
            <Typo style={styles.listItemTxt} fontStyle="subTitle">#{itemLength - itemData.index}</Typo>
            <Typo style={styles.listItemTxt} fontStyle="subTitle">{itemData.item}</Typo>
        </View>
    )

    useEffect(()=>{
        if(currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])
    
    return (
        <View style={styles.screen}>
            <Typo fontStyle="subTitle">Opponent's Guess</Typo>
                <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <Btn btnColor="warning" onPress={gussedNumberHandler.bind(this, 'lower')}>
                    <Entypo name="minus" size={21} />
                </Btn>
                {/* <Button title="greater" onPress={gussedNumberHandler.bind(this, 'greater')}/> */}
                <Btn btnColor="success" onPress={gussedNumberHandler.bind(this, 'greater')}>
                    <Entypo name="plus" size={21} />
                </Btn>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderList(guess, pastGuesses.length - index))}
                </ScrollView> */}

                <FlatList keyExtractor={item=>item} data={pastGuesses} renderItem={renderList.bind(this, pastGuesses.length)} contentContainerStyle={styles.list} />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-between'
    },
    listContainer: {
        flex: 1,
        width: "60%",
        justifyContent: 'center'
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        
    },
    listItem: {
        width: "100%",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 4,
        padding: 15,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.white
    },
    listItemTxt: {
        marginBottom: 0
    }
})