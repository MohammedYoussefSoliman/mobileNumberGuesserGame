import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import {Header} from './components/header.component';
import StartGame from './screens/startGame.screen';
import GameScreen from './screens/Game.screen';
import GameOverScreen from './screens/GameOver.screen';
export default function App() {

  const [userNum, setUserNum] = useState();
  const [guessedRounds, setGussedRounds] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'Montserrat-Thin': require('./assets/fonts/Montserrat/MontserratAlternates-Thin.ttf'),
      'Montserrat-ExtraLight': require('./assets/fonts/Montserrat/MontserratAlternates-ExtraLight.ttf'),
      'Montserrat-Light': require('./assets/fonts/Montserrat/MontserratAlternates-Light.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat/MontserratAlternates-Regular.ttf'),
      'Montserrat-Medium': require('./assets/fonts/Montserrat/MontserratAlternates-Medium.ttf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat/MontserratAlternates-Bold.ttf'),
      'Montserrat-ExtraBold': require('./assets/fonts/Montserrat/MontserratAlternates-ExtraBold.ttf'),
      'Montserrat-Black': require('./assets/fonts/Montserrat/MontserratAlternates-Black.ttf')
    })
  }

  if(!isDataLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={()=>{setIsDataLoaded(true)}} onError={err => console.log(err)}/>
    )
  }

  const gameOverRestartHandler = () => {
    setGussedRounds(0);
    setUserNum(null)
  }
  
  const startGameHandler = (num)=>{
    setUserNum(num)
  }

  const guessedRoundsHandler = (gussed) => {
    setGussedRounds(gussed)
  }

  return (
    <View style={styles.screen}>
      <Header title="Guss a number"/>
      {!userNum && <StartGame onStartGame={startGameHandler} />}
      {(userNum && guessedRounds <= 0) && <GameScreen userChoice={userNum} onGameOver={guessedRoundsHandler} />}
      {(guessedRounds > 0) && <GameOverScreen userNum={userNum} onRestart={gameOverRestartHandler} rounds={guessedRounds}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})