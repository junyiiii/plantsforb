import React from 'react'
import { Animated, StyleSheet, Text, View, Image } from 'react-native'
import Body from '../components/Body.js'

const Home = () => {
  return (
    <Body title='My Garden'>
      <Image style={styles.onecolumn} source={require('../assets/random-succulent.png')}/>
      <View style={styles.twocolumns}>
        <View style={[styles.card, {backgroundColor: '#a58772'}]}>
          <Image source={require('../assets/seed-currency.png')}/>
          <View>
            <Text style={styles.bold}>100</Text>
            <Text>collected</Text>
          </View>
        </View>
        <View style={[styles.card, {backgroundColor: '#cee8d7'}]}>
          <Image source={require('../assets/desert-group-icon.png')}/>
          <View>
            <Text style={styles.bold}>11</Text>
            <Text>collected</Text>
          </View>
        </View>
      </View>
      <Text style={styles.title2}>Plants in Progress</Text>
      <View style={styles.plants}>
        <View style={[styles.plant, {backgroundColor: '#e1eeff'}]}>
          <Image source={require('../assets/rose-icon.png')}/>
        </View>
        <View style={styles.plantdesc}>
          <Text>Rose</Text>
          <View style={styles.progressBar}>
            <Animated.View style={[StyleSheet.absoluteFill, styles.progressOverlay1]} />
          </View>
          <Text>25 more days to go</Text>
        </View>
      </View>
      <View style={styles.plants}>
        <View style={[styles.plant, {backgroundColor: '#cee8d7'}]}>
          <Image source={require('../assets/sunflower-icon.png')}/>
        </View>
        <View style={styles.plantdesc}>
          <Text>Sunflower</Text>
          <View style={styles.progressBar}>
            <Animated.View style={[StyleSheet.absoluteFill, styles.progressOverlay2]} />
          </View>
          <Text>3 more days to go</Text>
        </View>
      </View>
    </Body>
  )
}

export default Home

const styles = StyleSheet.create({
    onecolumn: {
      width: '100%',
      marginBottom: 20
    },
    twocolumns: {
      display: 'flex',
      flexDirection: 'row'
    },
    bold: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    card: {
      padding: 20,
      borderRadius: 10,
      width: '50%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }, 
    title2: {
      paddingTop: 20,
      paddingBottom: 20,
      fontSize: 20,
      fontWeight: '600',
    },
    plant: {
      borderRadius: 20,
      width: 70,
      height: 70,
      display: 'flex',
      alignItems: 'center'
    },
    progressBar: {
      height: 20,
      width: '100%',
      backgroundColor: '#d9d9d9',
      borderRadius: 10
    },
    progressOverlay1: {
      backgroundColor: "#5ac2fc", 
      width: '50%',
      borderRadius: 10
    },
    progressOverlay2: {
      backgroundColor: "#5ac2fc", 
      width: '90%',
      borderRadius: 10
    },
    plants: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 20
    },
    plantdesc: {
      paddingLeft: 20,
      width: '80%'
    }
})