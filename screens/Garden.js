import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { useState } from 'react'
import Body from '../components/Body.js'

const Garden = () => {
    const [Watered, setWatered] = useState('Water');
  return (
    <Body>
        <View style={styles.titles}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Garden</Text>
            <Text style={{fontSize: 18}}>Rose</Text>
            <Text>25 Days Left</Text>
        </View>
        <Image style={styles.plant} source={require('../assets/rose-icon.png')} />
        <View style={styles.actions}>
            <View style={[styles.desc, {backgroundColor: '#fff48c'}]}>
                <Text>Special</Text>
            </View>
            <View style={[styles.desc, {backgroundColor: '#d088dc'}]}>
                <Text>Special</Text>
            </View>
            <View style={[styles.desc, {backgroundColor: '#a58772'}]}>
                <Text>Min 3</Text>
                <Image style={styles.seed} source={require('../assets/seed-currency.png')} />
            </View>
        </View>
        <View>
            <TouchableOpacity  
                style={[styles.action, {backgroundColor: '#6f95ff'}]}
                onPress={() => {
                    setWatered('Watered!')
                    setTimeout(() => {
                        setWatered('Harvest Now!')
                    }, 3000)
                }} 
            >
                <Image source={require('../assets/watering-can.png')} />
                <Text style={styles.white}>{Watered}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.actions}>
            <TouchableOpacity style={[styles.action, styles.action2, {backgroundColor: '#2c5e46'}]}>
                <Text style={styles.white}>Fertilise</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.action, styles.action2, {backgroundColor: '#a95656'}]}>
                <Text style={styles.white}>Delete</Text>
            </TouchableOpacity>
        </View>
    </Body>
  )
}

export default Garden

const styles = StyleSheet.create({
    titles: {
        display: 'flex',
        flexDirection: 'column',
        height: 90,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20
    },
    white: {
        color: 'white'
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        padding: 10
    },
    action2: {
        width: '49%'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    desc: {
        width: '28%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 5,
        borderRadius: 10
    }, 
    plant: {
        alignSelf: 'center',
        height: 200,
        width: '100%',
        resizeMode: 'contain',
        marginBottom: 20
    }, 
    seed: {
        height: 20,
        resizeMode: 'contain'
    }
})