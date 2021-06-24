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
        
        <Form onSubmit={onFormSubmit}>
        <Title>Share with us...</Title>
          <Label htmlFor="newPositiveThought">a positive thought or an achievement you wanna celebrate with us!</Label>
          <TextArea
            id="newPositiveThought"
            type="text"
            value={newPositiveThought}
            onChange={onNewPositiveThoughtChange}
            placeholder="Enter text..."
          />
          <Button type="onSubmit"> Send </Button>
        </Form>
      </GreenHeroImage>
      
      {positiveThoughtsList.map(thought => (
        <ThoughtContainer key={thought._id}>
          <h4>{thought.message}</h4>
          <p>{moment(thought.created).fromNow()}</p>
          <button onClick={() => onThumbsupIncrease(thought._id)}>
            {thought.thumbsup}👍
          </button>  
        </ThoughtContainer>
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

const Title = styled.h1`
  color:white;
  font-weight:500;
`

const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:35px;
`
const Label = styled.label`
  font-size:1.4em;
  color:white;
  margin-bottom:20px;  
`

const TextArea = styled.textarea`
  width:500px;
  height:50px;
  border:black;
  margin:20px;
  font-size:1.2em;
  font-family: 'Roboto', sans-serif;
  font-weight:100;
  padding:10px;
  border-radius:5px;
  
`

const ThoughtContainer = styled.div`

`


export default PositiveSharing
