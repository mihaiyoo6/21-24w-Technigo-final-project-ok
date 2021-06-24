import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components/macro'

import { API_URL_POS_SHARING,  THUMBSUP_URL  } from '../reusable/urls'
import HeroImage from '../assets/figma-pic.png' 

import Navbar from '../components/Navbar'
import Button from 'components/Button'


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
    <>
    <Navbar />
    <GreenHeroImage>
    
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newPositiveThought"></label>
        <input
          id="newPositiveThought"
          type="text"
          value={newPositiveThought}
          onChange={onNewPositiveThoughtChange}
          placeholder="Enter text..."
        />
        <Button type="onSubmit"> Send </Button>
      </form>
      </GreenHeroImage>
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
    
    </>
  )
}

const GreenHeroImage = styled.div`
  background-image: url(${HeroImage});
  background-size:cover;
  width:100%;
  height:400px;
  padding:30px 30px;
  
`

const Subtitle = styled.p`

`

export default PositiveSharing
