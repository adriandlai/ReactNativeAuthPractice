import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class SucessfulPayment extends Component {

//   static navigationOptions = ({ navigation }) => ({
//     title: 'pastOrders',
//   })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Thanks for your payment!</Text>
        <Text style={styles.text}>Your food will be waiting for you at check-in!</Text>
      </View>
      )
  }
}
export default SucessfulPayment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',

    // backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})