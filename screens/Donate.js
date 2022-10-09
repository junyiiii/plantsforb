// rnfes

import { Animated, StyleSheet, Text, View, Component, SafeAreaView, ScrollView, Card } from 'react-native'
import React from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { AppRegistry, Image, Button} from 'react-native';  

//import this
// import ScrollingButtonMenu from 'react-native-scroll-menu';

const Donate = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.pageheader}>Donate Today</Text>
      <View style={styles.jumbotron}>
      <Text style={styles.title}>Why donate?</Text>
      <Text style={styles.j_body}>Over 1,000 animals go extinct everyday as a result of deforestation, and more.</Text>
      <Text></Text>
      <Text style={styles.j_body}>At (App Name), we will match your donations and work directly with partners to ensure more is done.</Text>
      </View>
      <View style={styles.ecosystems}>
        <Text style={styles.pageheader}>My Ecosystems</Text> 
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <Image style={styles.img} source={require('../assets/rainforest.jpg')}/>
        </View>
        {/* <View style={styles.text}>
          <View>
            <Text>Forests of Amazon</Text>
            <View style={styles.progressBar}>
              <Animated.View style={[StyleSheet.absoluteFill, styles.progressOverlay1]} />
            </View>
            <Text>25 more days to go</Text>
          </View>
          <Text>75% Funded</Text>
        </View>  */}
        
        <View style={styles.card}>
          <Image style={styles.img} source={require('../assets/desert.jpg')}/>
          {/* <View style={styles.text}>
            <Text>Deserts</Text>
            <Text>75% Funded</Text>
          </View>  */}
        </View>
        <View style={styles.card}>
          <Image style={styles.img} source={require('../assets/arctic.jpg')}/>
          {/* <View style={styles.text}>
            <Text>Arctic</Text>
            <Text>75% Funded</Text>
          </View> */}
        </View>
      </ScrollView>

      <View style={styles.environments}>
        <Text style={styles.pageheader}>Environments</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/desert.jpg')}/>
          </View>
          <View>
            <Text></Text>
          </View>
          <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/random-succulent.png')}/>
          </View>
          <View>
            {/* <Text>Succulent</Text> */}
          </View>
          <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/desert.jpg')}/>
          </View>


        </ScrollView>
      </View>


    </View> 
  )
}

export default Donate

const styles = StyleSheet.create({
  pageheader: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
  },
  jumbotron: {
    backgroundColor: '#2C5E46',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom:5,
  },
  j_body:{
    fontSize: 15,
    color:'#FEFFFA',
  },
  card: {    
    textAlign: 'center',
  },
  img: {
    width: 125,
    height: 125,
    padding:20,
    marginLeft: 20,
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
  },
})
