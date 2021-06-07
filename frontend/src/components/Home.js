import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import { API_URL } from '../reusable/urls'

import user from '../reducers/user'

const AccessFormWrapper = styled.div`
 background-color:#E7E4DE;
 width: 100%;
 height:200px;
`



const Home = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState(null)

  const accessToken = useSelector(store => store.user.accessToken)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    console.log('checking access token', accessToken)
    if(accessToken) {
      history.push('/')
    }  
},[accessToken, history])

  const onFormSubmit = (e) => {
      e.preventDefault();

      const options = {
        method: 'POST',
        headers: {
         'Content-Type': ' application/json'
        },
          body: JSON.stringify({ username, password })
      }
        fetch(API_URL(mode), options)
        .then(res => res.json()) 
        .then(data => {
          console.log(data)
          if(data.success){
            dispatch(user.actions.setUsername(data.username))
            dispatch(user.actions.setAccessToken(data.accessToken))
            dispatch(user.actions.setErrors(null));

            } else {
              dispatch(user.actions.setErrors(data))
            }
        })
        .catch()
    
  }

    return (
      <AccessFormWrapper>  
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> 
        <input
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button type="submit" onClick={() => setMode('signin')}>Login</button>
        <button type="submit" onClick={() => setMode('signup')}>Signup</button>
      </form>
      </AccessFormWrapper>  
    )
}

export default Home
