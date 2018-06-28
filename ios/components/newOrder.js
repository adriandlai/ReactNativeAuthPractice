import React, { Component } from 'react';
import { Button,Container, Header, Content, Card, CardItem, Text, Icon, Right} from 'native-base';

export default class newOrder extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              {/* <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
              <Icon name="arrow-forward" />
              </Right> */}
             </CardItem>
           </Card>
           <Button onPress={()=> this.props.navigation.navigate('vendorSelection')} success><Text> Search </Text></Button>
        </Content>
      </Container>
    );
  }
}