import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Body = (props) => {
  return (
    <View style={styles.body}>
      <Text style={styles.pageheader}>{props.title}</Text>
      {props.children}
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    body: {
        padding: 20
      },
    pageheader: {
        fontSize: 30,
        fontWeight: 'bold',
    },
})