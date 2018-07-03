import React from 'react'
import firebase from 'react-native-firebase'
import { Container, Header, Content, Button, Text, H2, H1 } from 'native-base';
import {StyleSheet, Image} from 'react-native'
import { AppConsumer } from '../../AppContext';
import {YellowBox} from 'react-native';


export default class Main extends React.Component {

state = { currentUser: null }


onPressLogOut = async()=> {
    try {
    await firebase.auth()
    .signOut()
    .then(()=> this.props.navigation.navigate('Auth'))   
    } catch (e) {
        console.log(e);
    }
  }

  postNewOrder = () => {

    const url = 'http://localhost:3000/order'
    let content = {
      current_order: true,
      user_tb_id: 2,  
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(currentOrder => {
      this.setState(
        {currentOrder}
      )
    })
    .catch(function(error) {
      console.log('error')
    })
  
  }




  

componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
    this.postNewOrder()
    // this.props.context.setCurrentUser(currentUser)

} 

render() {
    const { currentUser } = this.state
return (
    <Container style = {styles.container}>
    <Image
          style={{width: 400, height: 100}}
          source={require('../../assets/finalName.jpg')}
        />
    <H2 style= {styles.header}>
    Hi {currentUser && currentUser.email}!
    </H2>
    <Content>
      <Button success style= {styles.button}
      onPress={()=> this.props.navigation.navigate('NewOrder')}>
      <Text> New Order </Text>
      </Button>
      <Button warning style= {styles.button} onPress={()=> this.props.navigation.navigate('pastOrders')}><Text> Past Order </Text></Button>
      <Button danger style= {styles.button} onPress={this.onPressLogOut}><Text> Logout </Text></Button>
    </Content>
  </Container>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    header: {
        marginTop:20
    },
    // image: {
    //      width: 400,
    //      height:100,
    // //   borderColor: 'gray',
    // //   borderWidth: 1,
    // //   marginTop: 8
    // },
    button: {
      marginTop: 50,
      alignSelf: 'auto'
    }
  })