import React from 'react'

const usersUrl = 'http://localhost:3000/user'

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
            users: []
        }
    }
    
    componentDidMount() {
        return fetch(usersUrl)
            .then(response => response.json())
            .then(users => this.setState({
                users: users
            }))
    }

    // toggleAuthState = () => {
    //     this.setState({ loggedIn: !this.state.loggedIn })
    // }

    render() {
        return (
            <AppContext.Provider value={{
                state: {
                    // loggedIn: this.state.loggedIn,
                    users: this.state.users,
                    // toggleAuthState: this.toggleAuthState,
                },
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}