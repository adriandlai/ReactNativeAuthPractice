import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native'
import { AppConsumer } from '../../AppContext';
    

export default class vendorMenu extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })
//   <List containerStyle={{ marginBottom: 20 }}>
//   {list.map((l, i) =>
//     <ListItem
//       roundAvatar
//       avatar={{ uri: l.avatar_url }}
//       key={i}
//       title={l.name}
//     />
//   )}
// </List>


  render() {
    return (
      // <Container style = {styles.container}>
      <Container style = {styles.container}>

      <Content>
      <AppConsumer>
          {(context) => (
            <React.Fragment>
            {context.state.product.product.map((product,index)=>{
              return(
                    <List>   
                      <ListItem>
                        <Thumbnail square size={80} source={{ uri: product.picture_url}} />
                        <Body>
                        <TouchableOpacity
                           key={product.id}
                           onPress={() => this.props.navigation.navigate('FoodItem', 
                           {title: product.name,
                            url: product.picture_url,
                            id: product.id,
                            description: product.description,
                            name: product.name
                            })}
                          > 
                          <Text>{product.name}</Text>
                          <Text>{"$"+(product.price)/100}</Text>
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
        </Content> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',

    // backgroundColor: '#c0392b',
    // padding: 20,
  }})