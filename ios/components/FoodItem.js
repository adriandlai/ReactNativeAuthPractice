import React, { Component } from 'react';
import { Container, Input, Item, Header, Content,Card, CardItem, Text, List, ListItem, Thumbnail, Body, Right, Button } from 'native-base';

import {TouchableOpacity, StyleSheet, View, Image} from 'react-native'
import { AppConsumer } from '../../AppContext';
import { App } from 'react-native-firebase';


// import React, {Component, Image} from 'react-native';


export default class FoodItem extends Component {
  state = {
    quantity: 1
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  increment = () => {
    this.setState({quantity: this.state.quantity + 1})
  }

  decrement = () => {
    this.setState({quantity: this.state.quantity - 1})
  }

  // const icons = {
  //   success: require('./icons/check.png'),
  //   warning: require('./icons/warning.png'),
  //   error: require('./icons/error.png'),
  // }
  
  // function getImage(status) {
  //   return <img src={icons[status]} alt={status} className='icon' />
  // }



  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'no-title');
    const name = navigation.getParam('name', 'noName');   
    const description = navigation.getParam('description', 'noDescription');
    const id = navigation.getParam('id', 'noID')
    const url = navigation.getParam('url', 'noURL')

    console.log(url)
    return (  
      <React.Fragment>
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem style={styles.container}>
              <Text>{name}</Text>
             </CardItem>
             <CardItem cardBody>
             <Image 
             style={{width: 150, height: 150}}
             source= {{uri: url}} />
            <Text>{description}</Text>
             </CardItem>
           </Card>
        </Content>
      </Container>
      <Container style={styles.container}>
      <Item regular>
            <Text>{this.state.quantity}</Text>
            {/* <Input placeholder={this.state.quantity} /> */}
      </Item>
      
      <Button style= {styles.button} success onPress = {this.increment}><Text>+</Text></Button>
      <Button style= {styles.button} warning onPress = {this.decrement}><Text>-</Text></Button>
      {/* <Button style= {styles.button} success onPress={()=> this.props.navigation.navigate('vendorMenu')}><Text>Add to Cart</Text></Button> */}
      </Container>
      {/* <Button success onPress = {context.postCart(id, quantity)} id ={id}><Text>Add to Cart</Text></Button>   */}
      <AppConsumer>
      {(context) => (
      <Button success onPress = {() => context.postCart(id, this.state.quantity)}><Text>Add to Cart</Text></Button>
      )}
      </AppConsumer>
      </React.Fragment> 
      
    );
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