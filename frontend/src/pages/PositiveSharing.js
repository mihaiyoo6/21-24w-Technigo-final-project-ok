import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL_POS_SHARING, /* THUMBSUP_URL */ } from '../reusable/urls'

const PositiveSharing = () => {
  const [positiveThoughtsList, setPositiveThoughtsList] = useState([])
  const [newPositiveThought, setNewPositiveThought] = useState('')

  useEffect(() => {
    fetchPositiveThoughts()
  }, [])

  const fetchPositiveThoughts = () => {
    fetch(API_URL_POS_SHARING)
      .then(res => res.json())
      .then(thoughts => setPositiveThoughtsList(thoughts))
      .catch(err => console.error(err))
  }

  const onNewPositiveThoughtChange = (event) => {
    setNewPositiveThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ message: newPositiveThought })
    }

    fetch(API_URL_POS_SHARING, options)
      .then(res => res.json())
      .then(() => fetchPositiveThoughts())
      .catch(err => console.error(err))
    setNewPositiveThought('')
  }

 /*  const onThumbsupIncrease = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
    }
    fetch(THUMBSUP_URL(_id), options)
      .then(res => res.json())
      .then(() => fetchPositiveThoughts())
      .catch(err => console.error(err)) 
  }  */

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newPositiveThought">Share a positive thought!</label>
        <input
          id="newPositiveThought"
          type="text"
          value={newPositiveThought}
          onChange={onNewPositiveThoughtChange}
        />
        <button type="onSubmit">Send</button>
      </form>

      {positiveThoughtsList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
          <p>{moment(thought.created).fromNow()}</p>
          {/* <button onClick={onThumbsupIncrease(thought._id)}>
            {thought.thumbsup}👍
          </button>  */}
          <button><span role="img" aria-label="thumbsup">👍</span></button>
        </div>
      ))}
    </div>
  )
}

export default PositiveSharing
