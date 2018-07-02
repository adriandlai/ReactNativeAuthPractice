import React, { Component } from 'react';
import { Button,Container, Header,Form, Item, Picker, Content, Card, CardItem, Text, Icon, Right, DatePicker} from 'native-base';
import {StyleSheet} from 'react-native'



export default class newOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(),
    selected2: undefined
  }
    this.setDate = this.setDate.bind(this);
    
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  } 

  render() {
    return (
      <Container style= {styles.container}>
       <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                // iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your City"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Denver" value="key0" />
                <Picker.Item label="Other" value="key1" />
                {/* <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" /> */}
              </Picker>
            </Item>
          </Form>
        {/* <Header /> */}
        <DatePicker
            defaultDate={new Date(2018, 7, 4)}
            minimumDate={new Date(2018, 6, 4)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            />
            {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
         <Button style={styles.button} onPress={()=> this.props.navigation.navigate('vendorSelection')} success>><Text>Search</Text></Button>   
        
      </Container>
    );
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