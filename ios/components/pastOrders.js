import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
// import { STATUS_CODES } from 'http';

const url = 'http://localhost:3000/cart/orderdetails/2'

class pastOrders extends Component {

  constructor(props) {
    super(props)
    this.state = {
        pastOrders: {}
        // setState = ()
    }
}


  static navigationOptions = ({ navigation }) => ({
    title: 'pastOrders',
  })

  
  fetchPastOrder = (url) => {
    return fetch(url)
    .then(response => response.json())
    .then(pastOrders => this.setState({
        pastOrders
    }))
  }
     
  componentDidMount() {
      this.fetchPastOrder(url)
    }



  render () {
    console.log(this.state)
    return (
      <View style={styles.container}>
        {/* <Text style={this.state.pastOrders.pastOrders}>I'm a past Order</Text> */}
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