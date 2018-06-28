import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

export default class vendorMenu extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render() {
    return (
      <Container>
        <Text>{`I'm item # ${this.props.navigation.state.params.title}`}</Text>
      </Container>
    );
  }
}