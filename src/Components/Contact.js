import React from 'react';
import PropTypes from 'prop-types';

const Contact = (props) => {
  const { contact, onDeleteContact } = props;

  return (
    <li className='contact-list-item'>
      <div
        className='contact-avatar'
        style={{
          backgroundImage: `url(${contact.avatarURL})`
        }}
        >
      </div>
      <div className='contact-details'>
        <p>{contact.name}</p>
        <p>{contact.handle}</p>
      </div>
      <button
        onClick={() => onDeleteContact(contact) }
        className='contact-remove'
      >
        Remove
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default Contact;