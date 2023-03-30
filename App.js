import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';




import HomeScreen from './src/srceens/HomeScreen';
import DetailScreen from './src/srceens/DetailScreen';


import {enableScreens} from 'react-native-screens'
import {NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

enableScreens();
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

let customFonts = {
  'Black' : require('./assets/fonts/ZenMaruGothic-Black.ttf'),
  'Bold' : require('./assets/fonts/ZenMaruGothic-Bold.ttf'),
  'Light' : require('./assets/fonts/ZenMaruGothic-Light.ttf'),
  'Medium' : require('./assets/fonts/ZenMaruGothic-Medium.ttf'),
  'Regular' : require('./assets/fonts/ZenMaruGothic-Regular.ttf'),
}

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
 

  return (
    <NavigationContainer
    onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component ={HomeScreen} options={{ animation: 'fade' }}/>
        <Stack.Screen name='Detail' component ={DetailScreen} options={{ animation: 'fade' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
