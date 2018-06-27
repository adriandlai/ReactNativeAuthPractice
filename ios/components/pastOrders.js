import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class pastOrders extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'pastOrders',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab A</Text>
      </View>
      )
  }
}
export default pastOrders
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