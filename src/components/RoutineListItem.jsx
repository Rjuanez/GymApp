import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import colors from './colors'
import RoutineItemPoly from '../components/RoutineItemPoly'
import Animated, { useSharedValue, withTiming, useAnimatedStyle, withDelay  } from 'react-native-reanimated'

const RoutineListItem = ({item, onPress, viewableItems, navigation}) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const rStyle = useAnimatedStyle(()=> {
    const isVisible = Boolean( 
      viewableItems.value
      .filter((item)=>item.isViewable)
      .find((viewableItems)=> viewableItems.item.id === item.id)
      );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{
        scale: withTiming(isVisible ? 1 : 0.6)
      }]
    }
  })

  return (
    <Animated.View style= {rStyle}>
    <TouchableOpacity
    style={[styles.container]}
    onPress= {onPress}
    >
      <View style= {styles.backContainer}>
      <View style={styles.background}><RoutineItemPoly color={item.color}/></View>
      </View>
      
      <View style={styles.mainTexts}>
      <Text style={styles.titleText}>{item.titulo}</Text>
        <Text style={styles.subText}>{`${item.ejercicios} ejercicios de ${item.seriesMedias} series aprox.`}</Text>
      </View>
      <View style= {styles.times}> 
        <Text style={styles.numText}>{item.vecesSemana}</Text>
        <Text style={styles.descText}>veces</Text>
      </View>
      <View style= {styles.minutes}> 
        <Text style={styles.numText}>{item.tiempoMedio}</Text>
        <Text style={styles.descText}>min</Text>
      </View>

    </TouchableOpacity>
    </Animated.View>
  )
}

export default RoutineListItem
const Width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row', 
    width: Width*0.85,
    height: 80,
    borderRadius: 15, 
    marginVertical: 12,
    alignSelf: 'center',
    backgroundColor: colors.background,
    padding: 20
  },
  backContainer: {
    position: 'absolute',
    width: Width*0.85,
    height: 80,
    marginLeft: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  background: {
   
    
  },
  mainTexts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1
  },
  times: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%'
    
  },
  minutes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numText: {
    fontFamily: 'Bold',
    fontSize: 20,
    color: colors.textOverColor,
    marginBottom: -5,
  },
  descText: {
    fontFamily: 'Bold',
    fontSize: 12,
    letterSpacing: -0.5,
    color: colors.textOverColor
  },
  titleText: {
    fontFamily: 'Bold',
    fontSize: 20,
    color: colors.mainText,
    marginBottom: -2  

  },
  subText: {
    fontFamily: 'Medium',
    fontSize: 12,
    color: colors.mainText,
    opacity: 0.7
  }
})