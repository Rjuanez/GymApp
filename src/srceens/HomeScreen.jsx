import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import BackgroundPoly from '../components/BackgroundPoly'
import colors from '../components/colors'
import RoutineListItem from '../components/RoutineListItem'
import { rutinas } from '../../mocks/SampleRoutines'
import Animated, { useSharedValue, withTiming, useAnimatedStyle, withSpring  } from 'react-native-reanimated'

const HomeScreen = ({ navigation }) => {
  
  


  return (
    <View style={styles.container}>
     
        <View style={styles.backGround}>
          <BackgroundPoly/>
        </View> 
     
      <View style= {styles.topContainer}>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.routineMainText}>My routines</Text>
        <ScrollView style={styles.scrollContainer} >
          {
            rutinas.map((item) => (
              <RoutineListItem key={item.id} navigation={navigation} item={item} onPress={() => navigation.push('Detail', {item})}/>
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen
const backgroundCol = colors.background;
const Width= Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundCol,
    flexDirection: 'column',
    display: 'flex'
  },
  backGround: {
    position: 'absolute',
    top: '20%',
    width: '100%',
    height: '100%'
  },
  topContainer: {
    flex: 4,
  },
  bottomContainer: {
    flex: 5,

  },
  routineMainText: {
    fontFamily: 'Bold',
    fontSize: 40,
    color: colors.textOverColor,
    marginLeft: Width*0.06
  },
  scrollContainer: {
    width: '100%',
    paddingTop: 20
  }
})