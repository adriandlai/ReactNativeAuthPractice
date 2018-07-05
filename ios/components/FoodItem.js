import React, { Component } from 'react';
import { Container, Input,H2, Item, Header, Content,Card, CardItem, Text, List, ListItem, Thumbnail, Body, Right, Button } from 'native-base';

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
      <Container style={styles.container}>
        {/* <Header /> */}
        <Content padder>
          {/* <Header/> */}
          <Card style={styles.card} transparent>
            <CardItem header bordered>
              <H2>{name}</H2>
            </CardItem>
             <CardItem style={styles.container} cardBody>
             <Image 
             style={{width: 75, height: 100}}
             source= {{uri: url}} />
              <Text 
              style= {{width:250}}
              >{description}
              </Text>
             </CardItem>
           </Card>
      <Item regular style= {styles.container}>
            <Text>{this.state.quantity}</Text>
      </Item>
      <View style = {styles.container}>
      <Button style= {styles.button} success onPress = {this.increment}><Text>+</Text></Button>
      <Button style= {styles.button} warning onPress = {this.decrement}><Text>-</Text></Button>
      <AppConsumer>
      {(context) => (
      <Button style={styles.buttonAdd} success onPress = {() => 
       context.postCart(id, this.state.quantity).then(()=>
        {
        this.props.navigation.navigate('vendorMenu')}
      )}><Text>Add to Cart</Text>
      </Button>
      )}
      </AppConsumer>
      </View>
      </Content>
      </Container>
      </React.Fragment> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
    // width: 100
    // flexGrow:1
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  button: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'auto',
    width: 75
  },

  buttonAdd: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'auto',
    width: 200

  }
})