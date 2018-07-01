import React, { Component } from 'react';
import { Container, Input, Item, Header, Content,Card, CardItem, Text, List, ListItem, Thumbnail, Body, Icon, Right, Button } from 'native-base';
import {TouchableOpacity} from 'react-native'
import { AppConsumer } from '../../AppContext';


export default class item extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  addItem = () => {
    console.log('hello')
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'no-title');
    const name = navigation.getParam('name', 'noName');   
    const description = navigation.getParam('description', 'noDescription');
    const id = navigation.getParam('id', 'noID')

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

      <Button success onClick = {this.addItem} id ={id}><Text>+</Text></Button>
      <Button warning onClick = {this.addItem} id ={id}><Text>-</Text></Button>
      </React.Fragment>
    );
  }
}