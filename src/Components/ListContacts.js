import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Contact from './Contact'
import InfoContacts from './InfoContacts'


class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (newQuery) => {
    this.setState({
      query: newQuery
    })
  }

  render() {
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props


    const showingContacts = query === ''
      ? contacts
      : contacts.filter((c) => (
        c.name.toLowerCase().includes(query.toLowerCase()) // caso tenha algum filtro (query)
      ))

    const contactsList = contacts.length > 0
        ? showingContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))
        : <p className='contact-details'>No registered contacts.</p>
    
    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link
            to='/create'
            className='add-contact'
          >
            Add contact
          </Link>
        </div>

        { showingContacts.length !== contacts.length && (
          <InfoContacts
            lenShowingContacts={showingContacts.length}
            lenContacts={contacts.length}
            updateQuery={this.updateQuery}
          />
        )}

        <ol className='contact-list'>
          {contactsList}
        </ol>
      </div>
    )
  }
}


export default ListContacts
