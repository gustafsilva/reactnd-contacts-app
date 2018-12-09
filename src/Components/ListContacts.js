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

  updateQuery = (newQuery) => {
    this.setState({
      query: newQuery
    });
  }

  clearQuery = () => {
    this.updateQuery('');
  }

  renderShowingContacts(contacts) {
    const { onDeleteContact } = this.props;

    return contacts.map((contact) => (
      <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
    ));
  }

  render() {
    const { query } = this.state;
    const { contacts } = this.props;


    const showingContacts = query === ''
      ? contacts
      : contacts.filter((c) => (
        c.name.toLowerCase().includes(query.toLowerCase())
      ))
    
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

        { showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery }>Show all</button>
          </div>
        )}

        <ol className='contact-list'>
          {this.renderShowingContacts(showingContacts)}
        </ol>
      </div>
    );
  }
}


export default ListContacts;
