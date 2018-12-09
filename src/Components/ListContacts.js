import React from 'react';

import Contact from './Contact';

const ListContacts = (props) => {
  const contacts = props.contacts.map((contact) => (
    <Contact key={contact.id} contact={contact} />
  ));
  
  return (
    <ol className='contact-list'>
      {contacts}
    </ol>
  );
}

export default ListContacts;
