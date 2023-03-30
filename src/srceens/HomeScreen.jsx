import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList } from 'react-native'
import React, {} from 'react'
import BackgroundPoly from '../components/BackgroundPoly'
import colors from '../components/colors'
import RoutineListItem from '../components/RoutineListItem'
import { rutinas } from '../../mocks/SampleRoutines'
import Animated, { useSharedValue, withTiming, useAnimatedStyle, withSpring  } from 'react-native-reanimated'

const HomeScreen = ({ navigation }) => {
  const viewableItems = useSharedValue([]) 
  


  return (
    <View style={styles.container}>
     
        <View style={styles.backGround}>
          <BackgroundPoly/>
        </View> 
     
      <View style= {styles.topContainer}>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.routineMainText}>My routines</Text>
        <FlatList 
        showsVerticalScrollIndicator={false}
        snapToOffsets={rutinas.map((x, i) => (i*100))}
        snapToInterval={100}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 40
        }}
          style={styles.scrollContainer} 
          data={rutinas}
          contentContainerStyle={{paddingTop: 20, paddingBottom: 80}}
          renderItem= {({item}) => (
              <RoutineListItem navigation={navigation} item={item} 
              onPress={() => navigation.push('Detail', {item})}
              viewableItems={viewableItems}
              />
            )}
            keyExtractor={item => item.id}
            onViewableItemsChanged={({viewableItems: vItems}) => {
              viewableItems.value = vItems;
            }}
        />
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
  }
})