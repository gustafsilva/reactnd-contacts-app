import React from 'react'
import PropTypes from 'prop-types'

const InfoContacts = (props) => {
  const { lenShowingContacts, lenContacts, updateQuery } = props

  if (lenShowingContacts < lenContacts) {
    return (
      <div className='showing-contacts'>
        <span>Now showing {lenShowingContacts} of {lenContacts}</span>
        <button onClick={() => updateQuery('')}>Show all</button>
      </div>
    )
  }

  return false
}

InfoContacts.propTypes = {
  lenShowingContacts: PropTypes.number.isRequired,
  lenContacts: PropTypes.number.isRequired,
  updateQuery: PropTypes.func.isRequired
}

export default InfoContacts
