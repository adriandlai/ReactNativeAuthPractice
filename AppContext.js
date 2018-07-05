import React from 'react'
import firebase from 'react-native-firebase'
import {Alert} from 'react-native'
import Navigator from './Navigator'
// import { withNavigation } from 'react-navigation'


const usersUrl = 'http://localhost:3000/user'
const vendorUrl = 'http://localhost:3000/vendor'
const productUrl = 'http://localhost:3000/product'

// const inititalState = {
//     loggedIn: true,
//     users: [],
// }

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            product:[],
            vendor:[],
            currentUser: 2,
            currentCart: []
            // setState = ()
        }
    }
    
    fetchUser = (url) => {
        return fetch(url)
        .then(response => response.json())
        .then(users => this.setState({
            users
        }))

    }
    fetchVendor = (url) => {
        return fetch(url)
        .then(response => response.json())
        .then(vendor => this.setState({
            vendor
        }))

    }
    fetchProduct = (url) => {
        return fetch(url)
        .then(response => response.json())
        .then(product => this.setState({
            product
        }))

    }

    postCart = (product_id, quantity) => {
        // navigation.navigate('vendorMenu') 
        const url = 'http://localhost:3000/cart'
        let content = {
          product_tb_id: product_id,
          order_tb_id: 4,
          quantity: quantity  
        }
    
       return fetch(url, {
          method: 'POST',
          body: JSON.stringify(content),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(currentCart => {
          this.setState(
            {currentCart}
          )
        // console.log('currentCart', currentCart)
        })
        .catch(function(error) {
          console.log('error')
        })

      }
    

    
    // setCurrentUser = () =>{
    //     const { currentUser } = firebase.auth()
    //     this.setState({
    //         currentUser: currentUser
    //     })
    // }

    componentDidMount() {
    this.fetchUser(usersUrl)
    this.fetchVendor(vendorUrl)
    this.fetchProduct(productUrl)
    // this.setCurrentUser()
       
    }

    // toggleAuthState = () => {
    //     this.setState({ loggedIn: !this.state.loggedIn })
    // }

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                setCurrentUser: this.setCurrentUser,
                postCart:this.postCart
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}