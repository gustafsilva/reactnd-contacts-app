import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ListContacts from './Components/ListContacts'
import CreateContact from './Components/CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    /* Capturando todos os contatos cadastrados quando o componente for renderizado */
    ContactsAPI.getAll().then((contacts) => this.setState({
      contacts
    }))
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />

        <Route
          path='/create'
          component={CreateContact}
        />        
      </div>
    )
  }
}

export default App
