import React from 'react';

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

export default Contact;