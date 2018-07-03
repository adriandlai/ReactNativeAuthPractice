import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import {StyleSheet, View, TextInput, Image} from 'react-native'
import { AppConsumer } from '../../AppContext';
import React, { Component } from 'react'

export default class Login extends React.Component {

  
  
  render() {
    return (
      <View style={styles.container}>
         <Image
          style={{width: 250, height: 200}}
          // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          source={require('../../assets/Final.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Credit Card Number"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Security Code"
        />
        <TextInput
          style={styles.textInput}
          placeholder="MM/YY"
        />
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
        <Text>
          Pay $58.80
        </Text>  
        </Button>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  button: {
    marginTop: 10,
    alignSelf: 'auto'
  }
})








// import {
//   requireNativeComponent,
//   findNodeHandle,
//   StyleSheet,
//   View,
//   TouchableWithoutFeedback,
//   ViewPropTypes,
// } from 'react-native'
// import PropTypes from 'prop-types'
// import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType'
// import ViewStylePropTypes from 'react-native/Libraries/Components/View/ViewStylePropTypes'
// import TextInputState from 'react-native/Libraries/Components/TextInput/TextInputState'

// const FieldStylePropType = {
//   ...ViewStylePropTypes,
//   color: PropTypes.string,
// }

// const nativeComponents = {}

// function getNativeComponent(name) {
//   if (nativeComponents[name]) {
//     return nativeComponents[name]
//   }

//   nativeComponents[name] = requireNativeComponent(name, checkout, {
//     nativeOnly: {
//       // borderColor: true,
//       // borderWidth: true,
//       cornerRadius: true,
//       textColor: true,
//       fontFamily: true,
//       fontWeight: true,
//       fontStyle: true,
//       fontSize: true,
//       enabled: true,
//       params: true,
//       keyboardAppearance: true,
//       onChange: true,
//     },
//   })

//   return nativeComponents[name]
// }

// const NativePaymentCardTextField = getNativeComponent('TPSCardField')



// export default class checkout extends Component {
//   static propTypes = {
//     ...ViewPropTypes,
//     style: StyleSheetPropType(FieldStylePropType), // eslint-disable-line new-cap

//     cursorColor: PropTypes.string,
//     textErrorColor: PropTypes.string,
//     placeholderColor: PropTypes.string,

//     numberPlaceholder: PropTypes.string,
//     expirationPlaceholder: PropTypes.string,
//     cvcPlaceholder: PropTypes.string,

//     disabled: PropTypes.bool,

//     /**
//      * Determines the color of the keyboard.
//      * @platform ios
//      */
//     keyboardAppearance: PropTypes.oneOf(['default', 'light', 'dark']),

//     onChange: PropTypes.func,
//     onValueChange: PropTypes.func,
//   }

//   static defaultProps = {
//     ...View.defaultProps,
//   }

//   valid = false // eslint-disable-line react/sort-comp
//   params = {
//     number: '',
//     expMonth: 0,
//     expYear: 0,
//     cvc: '',
//   }

//   componentWillUnmount() {
//     if (this.isFocused()) {
//       this.blur()
//     }
//   }

//   isFocused = () => (
//     TextInputState.currentlyFocusedField() === findNodeHandle(this)
//   )

//   focus = () => {
//     TextInputState.focusTextInput(findNodeHandle(this))
//   }

//   blur = () => {
//     TextInputState.blurTextInput(findNodeHandle(this))
//   }

//   setParams = (params) => {
//     this.field.setNativeProps({ params })
//   }

//   handlePress = () => {
//     this.focus()
//   }

//   handleChange = (event) => {
//     const { onChange, onParamsChange } = this.props
//     const { nativeEvent } = event

//     this.valid = nativeEvent.valid
//     this.params = nativeEvent.params

//     if (onChange) {
//       onChange(event)
//     }

//     if (onParamsChange) {
//       onParamsChange(nativeEvent.valid, nativeEvent.params)
//     }
//   }

//   render() {
//     const {
//       style,
//       disabled,
//       cursorColor,
//       textErrorColor,
//       placeholderColor,
//       numberPlaceholder,
//       expirationPlaceholder,
//       cvcPlaceholder,
//       keyboardAppearance,
//       ...rest
//     } = this.props
//     const {
//       // borderColor,
//       // borderWidth,
//       borderRadius = 5,
//       fontFamily,
//       fontWeight,
//       fontStyle,
//       fontSize,
//       color,
//       // ...fieldStyles
//     } = StyleSheet.flatten(style)
//     return (
//       <TouchableWithoutFeedback
//         onPress={this.handlePress}
//         testID={rest.testID}
//         accessible={rest.accessible}
//         accessibilityLabel={rest.accessibilityLabel}
//         accessibilityTraits={rest.accessibilityTraits}
//         rejectResponderTermination>
//         <NativePaymentCardTextField
//           ref={field => this.field = field}
//           style={[styles.field, fieldStyles]}
//           // borderColor={borderColor}
//           // borderWidth={borderWidth}
//           cornerRadius= '5'
//           textColor={color}
//           fontFamily={fontFamily}
//           fontWeight={fontWeight}
//           fontStyle={fontStyle}
//           fontSize={fontSize}
//           enabled={!disabled}
//           cursorColor={cursorColor}
//           textErrorColor={textErrorColor}
//           placeholderColor={placeholderColor}
//           numberPlaceholder={numberPlaceholder}
//           expirationPlaceholder={expirationPlaceholder}
//           cvcPlaceholder={cvcPlaceholder}
//           keyboardAppearance={keyboardAppearance}
//           onChange={this.handleChange}
//         />
//       </TouchableWithoutFeedback>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   field: {
//     // The field will conform to whatever width is given, but we do
//     // have to set the component's height explicitly on the
//     // surrounding view to ensure it gets rendered.
//     height: 44,
//     // Set default background color to prevent transparent background
//     backgroundColor: '#ffffff',
//   },
// })