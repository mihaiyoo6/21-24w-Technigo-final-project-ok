import React, { useState, useEffect } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import { device } from '../Commons/breakpoints'
import { API_URL } from '../reusable/urls'

import HomeFeaturedArticle from 'components/HomeFeaturedArticle'
import HomeIntroText from 'components/HomeIntroText'
import HomeSignin from 'components/HomeSignin'
import HomeSignup from '../components/HomeSignup'

import user from '../reducers/user'

const Home = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  
  const accessToken = useSelector(store => store.user.accessToken)
  const errors = useSelector(store => store.user.errors);
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    console.log('checking access token', accessToken)
    if(accessToken) {
      history.push('/main')
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
            batch(() => {
            dispatch(user.actions.setUsername(data.username))
            dispatch(user.actions.setAccessToken(data.accessToken))
            dispatch(user.actions.setErrors(null))
            
            localStorage.setItem('user', JSON.stringify({
              username: data.username,
              accessToken: data.accessToken
            }))

          })
          } else {
            dispatch(user.actions.setErrors(data))
            setUsername('')
            setPassword('')
          }
        })
        .catch()  
  }

  return (
    <>
      <MainContainer>  
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
          <ErrorMessage>{errors && <p>{errors.message}</p>}</ErrorMessage>   
          <HomeSignup/>
          
        </AccessContainer>
      </MainContainer>
    </>   
)}

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

 @media ${device.tablet} {
  flex-direction:row;  
}
`

const ErrorMessage = styled.div` 
  background-color: #E7E4DE;
  color:red;
  font-weight:300;
  padding:15px;
  text-align:center;
`

export default Home
        
 
