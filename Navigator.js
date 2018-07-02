import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator, StackNavigator, TabNavigator } from 'react-navigation'

// import the different screens
import Loading from './ios/components/Loading'
import SignUp from './ios/components/SignUp'
import Login from './ios/components/Login'
import Main from './ios/components/Main'
import cartTotal from './ios/components/cartTotal'
import checkout from './ios/components/checkout'
import FoodItem from './ios/components/FoodItem'
import MyAccount from './ios/components/myAccount'
import newOrder from './ios/components/newOrder'
import PastOrders from './ios/components/pastOrders'
import vendorMenu from './ios/components/vendorMenu'
import vendorSelection from './ios/components/vendorSelection'


const OrderNavigator = StackNavigator({
  Home: Main,
  PastOrder: PastOrders,
  NewOrder: newOrder,
  vendorSelection: vendorSelection,
  vendorMenu: vendorMenu,
  FoodItem: FoodItem,
  pastOrders: PastOrders,
  cartTotal: cartTotal,
  checkout: checkout

}, {
  initialRouteName: 'Home',
})

// const checkoutNavigator = StackNavigator({
//   Order: cartTotal,
//   vendorMenu: vendorMenu,
//   NewOrder: newOrder,
//   vendorSelection: vendorSelection,
//   vendorMenu: vendorMenu,
//   FoodItem: FoodItem,
//   pastOrders: PastOrders
// }, {
//   initialRouteName: 'Order',
// })

const Tabs = TabNavigator(
  {
  // Main: {screen: Main},
  MyAccount: { screen: OrderNavigator},
  Cart: {screen: cartTotal}
  // PastOrders: { screen: PastOrders }
},
 {
  order: ['Cart', 'MyAccount']
})

// create our app's navigation stack
const Navigator = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main: Tabs
  },
  {
    initialRouteName: 'Loading'
  }
)

export default Navigator


// export const Stack = StackNavigator({
//   ItemList: { screen: ItemList },
//   Item: { screen: Item },
// }, {
//   initialRouteName: 'ItemList',
// })




// import React from 'react';
// import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

// import firebase from 'react-native-firebase';

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       // firebase things?
//     };
//   }

//   componentDidMount() {
//     // firebase things?
//   }

//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//         <Image source={require('./assets/RNFirebase.png')} style={[styles.logo]} />
//         <Text style={styles.welcome}>
//           Welcome to the React Native{'\n'}Firebase starter project!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         {Platform.OS === 'ios' ? (
//           <Text style={styles.instructions}>
//             Press Cmd+R to reload,{'\n'}
//             Cmd+D or shake for dev menu
//           </Text>
//         ) : (
//           <Text style={styles.instructions}>
//             Double tap R on your keyboard to reload,{'\n'}
//             Cmd+M or shake for dev menu
//           </Text>
//         )}
//         <View style={styles.modules}>
//           <Text style={styles.modulesHeader}>The following Firebase modules are enabled:</Text>
//           {firebase.admob.nativeModuleExists && <Text style={styles.module}>Admob</Text>}
//           {firebase.analytics.nativeModuleExists && <Text style={styles.module}>Analytics</Text>}
//           {firebase.auth.nativeModuleExists && <Text style={styles.module}>Authentication</Text>}
//           {firebase.crashlytics.nativeModuleExists && <Text style={styles.module}>Crashlytics</Text>}
//           {firebase.firestore.nativeModuleExists && <Text style={styles.module}>Cloud Firestore</Text>}
//           {firebase.messaging.nativeModuleExists && <Text style={styles.module}>Cloud Messaging</Text>}
//           {firebase.links.nativeModuleExists && <Text style={styles.module}>Dynamic Links</Text>}
//           {firebase.iid.nativeModuleExists && <Text style={styles.module}>Instance ID</Text>}
//           {firebase.notifications.nativeModuleExists && <Text style={styles.module}>Notifications</Text>}
//           {firebase.perf.nativeModuleExists && <Text style={styles.module}>Performance Monitoring</Text>}
//           {firebase.database.nativeModuleExists && <Text style={styles.module}>Realtime Database</Text>}
//           {firebase.config.nativeModuleExists && <Text style={styles.module}>Remote Config</Text>}
//           {firebase.storage.nativeModuleExists && <Text style={styles.module}>Storage</Text>}
//         </View>
//         </View>    
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   logo: {
//     height: 80,
//     marginBottom: 16,
//     marginTop: 32,
//     width: 80,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   modules: {
//     margin: 20,
//   },
//   modulesHeader: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   module: {
//     fontSize: 14,
//     marginTop: 4,
//     textAlign: 'center',
//   }
// });
