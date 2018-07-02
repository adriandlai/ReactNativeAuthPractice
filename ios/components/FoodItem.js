import React, { Component } from 'react';
import { Container, Input, Item, Header, Content,Card, CardItem, Text, List, ListItem, Thumbnail, Body, Icon, Right, Button } from 'native-base';
import {TouchableOpacity} from 'react-native'
import { AppConsumer } from '../../AppContext';
import { App } from 'react-native-firebase';


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
    // const quantity = 4

    return (
      <React.Fragment>
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Text>{name}</Text>
              <Text>{description}</Text>
             </CardItem>
           </Card>
        </Content>
      </Container>
      <Item regular>
            <Text>{this.state.quantity}</Text>
            {/* <Input placeholder={this.state.quantity} /> */}
      </Item>
      <Button success onPress = {this.increment}><Text>+</Text></Button>
      <Button warning onPress = {this.decrement}><Text>-</Text></Button>
      <Button success onPress={()=> this.props.navigation.navigate('vendorMenu')}><Text>Add to Cart</Text></Button>
      {/* <Button success onPress = {context.postCart(id, quantity)} id ={id}><Text>Add to Cart</Text></Button>   */}
      {/* <AppConsumer>
      {(context) => (
      <Button success onPress = {context.postCart(id, this.state.quantity)} id ={id}><Text>Add to Cart</Text></Button>
      )}
      </AppConsumer> */}
      </React.Fragment>
    );
  }
}