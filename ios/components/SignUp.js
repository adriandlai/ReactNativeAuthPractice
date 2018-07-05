import React from 'react'
import firebase from 'react-native-firebase'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import {Button} from 'native-base'
import { AppConsumer } from '../../AppContext';


export default class SignUp extends React.Component {
  
state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Main'))
    .catch(error => this.setState({ errorMessage: error.message }))
  console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 250, height: 200}}
          source={require('../../assets/Final.png')}
        />
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button style={styles.button} success onPress={this.handleSignUp}>
        <Text>Sign Up!</Text>
        </Button>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
        <Text>
          I already have an account. Let's Login
        </Text>  
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'

  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  button: {
    marginTop: 10,
    alignSelf: 'auto'
  }
})