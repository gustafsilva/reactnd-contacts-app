import React from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';

const ListContacts = (props) => {
  const { onDeleteContact } = props;

  const contacts = props.contacts.map((contact) => (
    <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
  ));
  
  return (
    <ol className='contact-list'>
      {contacts}
    </ol>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;
