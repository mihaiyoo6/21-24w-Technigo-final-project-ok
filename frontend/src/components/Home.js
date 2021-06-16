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

const MainContainer = styled.div`
	width: 100vw;
	height: 100vh;
`
const AccessContainer = styled.div`
 width:100%
 height:300px;
 display:flex;
 flex-direction:column;
 margin:0; 
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
          (console.log(data))
          if(data.success) {
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
      <MainContainer>
        <Navbar />
        <HomeFeaturedArticle />
        <HomeIntroText />
        <AccessContainer>
        
          <HomeSignin
            handleSubmit={handleSubmit}
            username={username}
            password={password}
            onUsernameChange={onUsernameChange}
            onPasswordChange={onPasswordChange}
          />
          <HomeSignup/>
         
        </AccessContainer>
      </MainContainer>
    </>   
)}

export default Home
        
 
