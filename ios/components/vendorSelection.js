import React, { Component } from 'react';
import { Button, Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import {TouchableOpacity} from 'react-native'
import { AppConsumer } from '../../AppContext';


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
      <React.Fragment>
   
      <TouchableOpacity
      key={i}
      // style={styles.item}
      onPress={() => this.props.navigation.navigate('vendorMenu', { title: vendor.name })}
    >
      {/* <Text style={styles.itemText}>{item.name}</Text> */}
      <Text>{vendor.name}</Text>
      </TouchableOpacity>
      <AppConsumer>
          {(context) => (
            <React.Fragment>
              <Text>{context.state.users.user[0].email}</Text>
              {/* {console.log(context.state.user)} */}
              {/* <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button> */}
            </React.Fragment>
          )}
        </AppConsumer>
        </React.Fragment>
 
  
    
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