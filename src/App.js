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

  createContact = (contact) => {
    ContactsAPI.create(contact)
      .then((contact) => {
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
      })
      .catch((err) => {
        console.error('create contact', err)
      })
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  renderListContacts = () => {
    return (
      <ListContacts
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}
      />
    )
  }
  renderCreateContact = ({ history }) => {
    return (
      <CreateContact onCreateContact={(contact) => {
        this.createContact(contact)
        history.push('/')
      }} />
    )
  }
  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={this.renderListContacts}
        />

        <Route
          path='/create'
          render={this.renderCreateContact}
        />
      </div>
    )
  }
}

export default App
