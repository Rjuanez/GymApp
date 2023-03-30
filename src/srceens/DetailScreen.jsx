import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import BackgroundPoly from '../components/BackgroundPoly'
import colors from '../components/colors'
import Animated, { useSharedValue, withTiming, useAnimatedStyle, withDelay  } from 'react-native-reanimated'
import { Audio } from 'expo-av'

const DetailScreen = ({route, navigation}) => {
  

  async function playSound() {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(require('../../assets/audio/hello.mp3'), {shouldPlay: true});
      await sound.setPositionAsync(0);
      await sound.playAsync();
    } catch (error) {
      console.error(error)
    }
  }

  const progress = useSharedValue(20);

  useEffect(() => {
    playSound();
    progress.value = withDelay(300, withTiming(40, {duration: 1000})); 
  }, [])

  const styleA = useAnimatedStyle(() => {
    return {
      top: `${progress.value}%`,
    };
  });

  const backToHome = () => {
    progress.value = withDelay(300, withTiming(20, {duration: 1000})); 
    setTimeout(() => {
      navigation.push('Home');
    }, 1400);
    
  }

  return (
    <View style={styles.container} >
        <Animated.View style={[styles.backGround, styleA]}>
          <BackgroundPoly/>
        </Animated.View>  
        <TouchableOpacity style={{top: 50}} onPress={() => backToHome()}>
         <Text>APRETA</Text> 
        </TouchableOpacity>
    </View>
  )
}


export default DetailScreen

const backgroundCol = colors.background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundCol
  },
  backGround: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    height: '100%'
  }
})