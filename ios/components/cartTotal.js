import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, Button } from 'native-base';
import {StyleSheet} from 'react-native'
import { AppConsumer } from '../../AppContext';


export default class cartTotal extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Card style= {styles.card}>
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
      {/* <Container style = {styles.container}> */}
           <Button style = {styles.button} onPress={()=> this.props.navigation.navigate('vendorMenu')} success>><Text>Back to Menu</Text></Button>  
           <Button style = {styles.button} onPress={()=> this.props.navigation.navigate('checkout')} success>><Text>Continue to Checkout</Text></Button>  
      {/* </Container>  */}
         </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // width:400
  },
  card: {
    marginTop: 150,
    // width: 200
  
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
    // alignSelf: 'auto'
  }
})