import React from 'react'
import { SafeAreaView, Animated, StyleSheet, Text, View, Image } from 'react-native'
import Navbar from '../components/Navbar'

const MyGarden = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.pageheader}>MyGarden</Text>
      <Image style={styles.onecolumn} source={require('../assets/random-succulent.png')}/>
      <View style={styles.twocolumns}>
        <View style={styles.card1}>
          <Image source={require('../assets/seed-currency.png')}/>
          <View>
            <Text style={styles.bold}>100</Text>
            <Text>collected</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <Image source={require('../assets/desert-group-icon.png')}/>
          <View>
            <Text style={styles.bold}>11</Text>
            <Text>collected</Text>
          </View>
        </View>
      </View>
      <Text style={styles.title2}>Plants in Progress</Text>
      <View style={styles.plants}>
        <View style={styles.plant1}>
          <Image source={require('../assets/rose-icon.png')}/>
        </View>
        <View>
          <Text>Rose</Text>
          <View style={styles.progressBar}>
            <Animated.View style={[StyleSheet.absoluteFill, styles.progressOverlay1]} />
          </View>
          <Text>25 more days to go</Text>
        </View>
      </View>
      <View style={styles.plants}>
        <View style={styles.plant2}>
          <Image source={require('../assets/sunflower-icon.png')}/>
        </View>
        <View>
          <Text>Sunflower</Text>
          <View style={styles.progressBar}>
            <Animated.View style={[StyleSheet.absoluteFill, styles.progressOverlay2]} />
          </View>
          <Text>3 more days to go</Text>
        </View>
      </View>
      <Navbar />
    </SafeAreaView>
  )
}

export default MyGarden

const styles = StyleSheet.create({
    body: {
      padding: 20
    },
    pageheader: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    onecolumn: {
      width: '100%'
    },
    twocolumns: {
      display: 'flex',
      flexDirection: 'row'
    },
    bold: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    card1: {
      padding: 20,
      borderRadius: 10,
      width: '50%',
      backgroundColor: '#a58772',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }, 
    card2: {
      padding: 20,
      borderRadius: 10,
      width: '50%',
      backgroundColor: '#cee8d7',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    title2: {
      paddingTop: 20,
      fontSize: 20,
      fontWeight: '600',
    },
    plant1: {
      backgroundColor: '#e1eeff',
      borderRadius: 20,
      width: 70,
      height: 70,
      display: 'flex',
      alignItems: 'center'
    },
    plant2: {
      backgroundColor: '#cee8d7',
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
      flexDirection: 'row'
    }
})