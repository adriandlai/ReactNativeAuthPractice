import React from 'react'
import {Button} from 'native-base'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import firebase from 'react-native-firebase'

export default class Login extends React.Component {

  state = { email: '', password: '', errorMessage: null }
  
  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
      

    }
  render() {
    return (
      <View style={styles.container}>
         <Image
          style={{width: 250, height: 200}}
          // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          source={require('../../assets/Final.png')}
        />
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button style={styles.button} success onPress={this.handleLogin}>
        <Text>Login</Text>
        </Button>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
        <Text>
          I need to create an Account
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
    alignItems: 'center'
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