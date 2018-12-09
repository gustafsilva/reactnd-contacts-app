import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';


class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery(newQuery) {
    this.setState({
      query: newQuery
    });
  }

  render() {
    const { onDeleteContact } = this.props;

    const contacts = this.props.contacts.map((contact) => (
      <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
    ));

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
        </div>

        <ol className='contact-list'>
          {contacts}
        </ol>
      </div>
    );
  }
}


export default ListContacts;
