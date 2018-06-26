import React from 'react'
import firebase from 'react-native-firebase'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'

export default class Main extends React.Component {

state = { currentUser: null }

signOutUser = async () => {
    try {
        await firebase.auth().signOut();
        navigate('Auth');
    } catch (e) {
        console.log(e);
    }
}
onPressLogOut = async()=> {
    // console.log('state', this.state)
    try {
        await firebase.auth().signOut();
        navigate('Login');
    } catch (e) {
        console.log(e);
    }
    // firebase
    // .auth()
    // .signOut()
    // .then(() => {
    //     this.setState({
        //   email: '',
        //   password: '',
        //   authenticating: false,
        //   currentUser: null
    //     })
    //   }, error => {
    //     console.error('Sign Out Error', error);
    //   });
  }

componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
} 

render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="Logout" onPress={this.onPressLogOut} />
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})