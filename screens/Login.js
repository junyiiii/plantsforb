// type 'rafce' to make new component
import { useState } from 'react';
import { StyleSheet, Button, SafeAreaView, Text, TextInput } from 'react-native';

const Login = ({ navigation }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEnteredEmail} value={enteredEmail}/>
      <TextInput style={styles.input} placeholder="Password" onChangeText={setEnteredPassword} value={enteredPassword}/>
      <Button 
        style={styles.button} 
        title="Login" 
        onPress={() => navigation.navigate('MyGarden')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#65a77c'
  },
  button: {
    backgroundColor: '#65a77c'
  }
});

export default Login;