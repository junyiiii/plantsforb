import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { PlantData } from '../constants/PlantData'

const MyGarden = () => {
  return (
    <View>
      <Text style={styles.pageheader}>MyGarden</Text>
        <FlatList
            data={ PlantData }
            renderItem={({ plant }) => <Text>{plant.name}</Text>}
            keyExtractor={plant => plant.id}
        />
    </View>
  )
}

export default MyGarden

const styles = StyleSheet.create({
    pageheader: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
    }
})