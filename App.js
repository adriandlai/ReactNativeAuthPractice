import React from 'react'
import Navigator from './Navigator'
import { AppProvider } from './AppContext'

class App extends React.Component {

  render() {
    return (
      <AppProvider>
        <Navigator />
      </AppProvider >
    )
  }
}

export default App