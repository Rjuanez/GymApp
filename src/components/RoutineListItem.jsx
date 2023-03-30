import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from './colors'
import RoutineItemPoly from '../components/RoutineItemPoly'

const RoutineListItem = ({item, onPress, navigation}) => {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress= {onPress}
    >
      <View style={styles.background}><RoutineItemPoly color={item.color}/></View>
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
  )
}

export default RoutineListItem

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row', 
    width: '85%',
    height: 80,
    borderRadius: 15, 
    marginVertical: 12,
    alignSelf: 'center',
    backgroundColor: colors.background,
    padding: 20
  },
  background: {
    position: 'absolute',
    left: 2
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