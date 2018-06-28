import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class myAccount extends Component {

  static myAccountOptions = ({ navigation }) => ({
    title: 'myAccount',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
      )
  }
}
export default myAccount
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})