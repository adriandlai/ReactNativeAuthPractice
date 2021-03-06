import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

import {TouchableOpacity, StyleSheet} from 'react-native'
import { AppConsumer } from '../../AppContext';

export default class vendorSelection extends Component {

  static navigationOptions = {
    title: 'Vendor Selection'
  }

  render() {
    return (
      <Container style ={styles.container}>
      <AppConsumer>
          {(context) => (
            <React.Fragment>
            {context.state.vendor.vendor.map((vendor,index)=>{
              return(
                // <Container>
                  
                  // <Header />
                  // <Content>
                    <List>   
                      <ListItem>
                        <Thumbnail square size={80} source={{ uri: 'https://www.cleaneatsmealprep.com/wp-content/uploads/2017/08/Clean-Eats-Word-Logo.png'}} />
                        {/* ('./assets/RNFirebase.png') */}
                        <Body>
                        <TouchableOpacity
                          key={vendor.id}
                          onPress={() => this.props.navigation.navigate('vendorMenu', { title: vendor.name})}
                         > 
                          <Text>{vendor.name}</Text>
                          {/* <Text note>{vendor.description} . .</Text> */}
                          </TouchableOpacity>
                        </Body>
                      </ListItem>
                    </List>
                  // </Content>
                // </Container>
              )


            })} 
            </React.Fragment>
          )}
        </AppConsumer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
 
  }
})



