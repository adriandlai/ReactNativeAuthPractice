import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, Button } from 'native-base';



import { AppConsumer } from '../../AppContext';


export default class cartTotal extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
            <Left>
                <Text>1</Text>
              </Left>
              <Text>Paleo Burger</Text>
              <Right>
                <Text>$14.95</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Left><Text>2</Text></Left> 
              <Text>Kale Salad</Text>
              <Right>
                <Text>$14.95</Text>
              </Right>
             </CardItem>
             <CardItem>
             <Left><Text>1</Text></Left> 
              <Text>Delivery Fee</Text>
              <Right>
                <Text>$7.00</Text>
              </Right>
             </CardItem>
             <CardItem>
             <Left><Text>1</Text></Left>  
              <Text>BizEatz Convenience Fee</Text>
              <Right>
                <Text>$6.95</Text>
              </Right>
             </CardItem>
             <CardItem>
             <Left><Text> </Text></Left>  
              <Text>Total</Text>
              <Right>
                <Text>$58.80</Text>
              </Right>
             </CardItem>
           </Card>
           <Button onPress={()=> this.props.navigation.navigate('vendorMenu')} success>><Text>Back to Menu</Text></Button>  
           <Button onPress={()=> this.props.navigation.navigate('checkout')} success>><Text>Continue to Checkout</Text></Button>   
         </Content>
      </Container>
    );
  }
}