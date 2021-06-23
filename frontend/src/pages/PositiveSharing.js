import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { API_URL_POS_SHARING,  THUMBSUP_URL  } from '../reusable/urls'

const PositiveSharing = () => {
  
  const [positiveThoughtsList, setPositiveThoughtsList] = useState([])
  const [newPositiveThought, setNewPositiveThought] = useState('')

  const accessToken = useSelector(store => store.user.accessToken)

  useEffect(() => {
    fetchPositiveThoughts()
  }, [])

  const fetchPositiveThoughts = () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }     
    }

    fetch(API_URL_POS_SHARING, options)
      .then(res => res.json())
      .then((thoughts) => {
        if(thoughts.success) {
        setPositiveThoughtsList(thoughts.allPositiveThoughts)
        }
      })
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
        'Content-type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ message: newPositiveThought })
    }

    fetch(API_URL_POS_SHARING, options)
      .then(res => res.json())
      .then(() => fetchPositiveThoughts())
      .catch(err => console.error(err))
    setNewPositiveThought('')
  }

 const onThumbsupIncrease = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch(THUMBSUP_URL(_id), options)
      .then(res => res.json())
      .then(() => fetchPositiveThoughts())
      .catch(err => console.error(err)) 
  }  

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
        <button type="onSubmit"> Send </button>
      </form>

      {positiveThoughtsList.map(thought => (
      
        <div key={thought._id}>
          
          <h4>{thought.message}</h4>
          <p>{moment(thought.created).fromNow()}</p>
          <button onClick={() => onThumbsupIncrease(thought._id)}>
            {thought.thumbsup}👍
          </button>  
          {/* <button><span role="img" aria-label="thumbsup">👍</span></button> */}
        </div>
      ))}
    </div>
  )
}

export default PositiveSharing
