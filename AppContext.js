import React from 'react'
import firebase from 'react-native-firebase'
import {Alert} from 'react-native'


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
            currentUser: 2
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

    // fetchCart = () =>{
    //     (

    //     )
    // }

    // setCurrentUser = (currentUser) =>
    // {
    //     this.setState({
    //         currentUser
    //     })
    // }

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
                setCurrentUser: this.setCurrentUser
                // {
                //     // loggedIn: this.state.loggedIn,
                //     users: this.state.users,
                //     product: this.state.product,
                //     vendor: this.state.vendor,
                //     // setStateFunct: (keyValue, newValue) => this.setStatel({keyValue: newValue})
                //     // setUser: (currentUser) => this.setState({ currentUser: currentUser})

                //     // toggleAuthState: this.toggleAuthState,
                // },
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}