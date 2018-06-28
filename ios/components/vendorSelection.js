import React, { Component } from 'react';
import { Button, Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import {TouchableOpacity} from 'react-native'


const vendors = [
  {name: 'Vendorone'},
  {name: 'Vendortwo'},
  {name: 'Vendorthree'},
  {name: 'Vendorfour'}
]


export default class vendorSelection extends Component {

  static navigationOptions = {
    title: 'Stack'
  }

  renderVendor = (vendor, i) => {
    return(
      <TouchableOpacity
      key={i}
      // style={styles.item}
      onPress={() => this.props.navigation.navigate('vendorMenu', { title: vendor.name })}
    >
      {/* <Text style={styles.itemText}>{item.name}</Text> */}
      <Text>{vendor.name}</Text>
  
    </TouchableOpacity>
    )
  }
  
  render() {
    return (
      <Container>
        {vendors.map(this.renderVendor)}
      </Container>
    );
  }
}