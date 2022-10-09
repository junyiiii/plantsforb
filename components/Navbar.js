// type 'rnfe'

import { View, StyleSheet, Button, Image } from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.center}>
        <Image source={require('../assets/home-bold.png')} />
        <Button style={styles.navbartab} title='Home'/>
      </View>
      <View style={styles.center}>
        <Image source={require('../assets/wallet-icon.png')} />
        <Button style={styles.navbartab} title='Wallet'/>
      </View>
      <View style={styles.center}>
        <Image source={require('../assets/store-icon.png')} />
        <Button style={styles.navbartab} title='Store'/>
      </View>
      <View style={styles.center}>
        <Image source={require('../assets/donate-icon.png')} />
        <Button style={styles.navbartab} title='Donate'/>
      </View>
    </View>
  )
}

export default Navbar;

const styles = StyleSheet.create({
  navbartab: {
    width: 20,
    height: 20,
    color: '#9db2ce'
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
})