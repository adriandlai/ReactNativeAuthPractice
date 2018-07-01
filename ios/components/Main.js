import React from 'react'
import firebase from 'react-native-firebase'
import { Container, Header, Content, Button, Text } from 'native-base';
import { AppConsumer } from '../../AppContext';

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
    <Container>
    <Header />
    <Text>
    Hi {currentUser && currentUser.email}!
    </Text>
    <Content>
      <Button success 
      onPress={()=> this.props.navigation.navigate('NewOrder')}>
      <Text> New Order </Text>
      </Button>
      <Button warning onPress={()=> this.props.navigation.navigate('pastOrders')}><Text> Past Order </Text></Button>
      <Button danger title="Logout" onPress={this.onPressLogOut}><Text> Logout </Text></Button>
      {/* <AppConsumer>
        {(context)=> context.setCurrentUser(currentUser)}
      </AppConsumer>   */}
    </Content>
  </Container>
    )
  }
}

const MainElement = () => (
<AppConsumer>
    {(context) => (
           <Main context = {context}/>
      )}
</AppConsumer>   
)
