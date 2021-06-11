import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import './home.css'

import { API_URL } from '../reusable/urls'

import Navbar from 'components/Navbar'
import HomeFeaturedArticle from 'components/HomeFeaturedArticle'
import HomeIntroText from 'components/HomeIntroText'
import HomeSignin from 'components/HomeSignin'


import user from '../reducers/user'
import HomeSignup from './HomeSignup'

const AccessContainer = styled.div`
 width:100%
 height:300px;
 display:flex;
 flex-direction:column;
 margin:0; 
`

const SigninFormWrapper = styled.div`
  background-color:#E7E4DE;
  height:250px; 
  flex-direction: column;
  border-top: 1px solid black;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
`
const Home = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

  const accessToken = useSelector(store => store.user.accessToken)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    console.log('checking access token', accessToken)
    if(accessToken) {
      history.push('/')
    }  
},[accessToken, history])

const onUsernameChange = (e) => { 
  setUsername(e.target.value)
}     

const onPasswordChange = (e) => {
  setPassword(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();

      const options = {
          method: 'POST',
          headers: {
              'Content-Type': ' application/json'
          },
          body: JSON.stringify({ username, password })
      }
      fetch(API_URL('signin'), options)
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
      <>
        <Navbar />
        <HomeFeaturedArticle />
        <HomeIntroText />
        <AccessContainer>
          <SigninFormWrapper>
            <HomeSignin
              handleSubmit={handleSubmit}
              username={username}
              password={password}
              onUsernameChange={onUsernameChange}
              onPasswordChange={onPasswordChange}
            />
              
          </SigninFormWrapper>
        </AccessContainer>
        <HomeSignup/>
      </>  
     
)}

export default Home
        
 
