import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import { API_URL } from '../reusable/urls'

import HomeFeaturedArticle from 'components/HomeFeaturedArticle'
import HomeSignin from 'components/HomeSignin'
import Navbar from 'components/Navbar'

import user from '../reducers/user'
import HomeSignup from './HomeSignup'

const AccessContainer = styled.div`
 width:100%
 height:300px;
 display:flex;
 flex-direction:column;
 border: 1px solid black;
 margin:0; 
`

const SigninFormWrapper = styled.div`
  background-color:#E7E4DE;
  height:250px; 
  flex-direction: column;
  border: 1px solid black;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`


const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



const InputField = styled.input`
  margin: 5px;
  border-radius: 5px;
  width: 220px;
  align-items:center;
  justify-content:center;
  color:#155306; 
  font-size:16px;
  height:18px;

  &::-webkit-input-placeholder {
    color: #155306;
    padding-left:5px;
  }
` 


/* const SignupWrapper = styled.div`
  background-color: #155306;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border: 1px solid black;
  margin:0;
` */


/* const SignupTitle = styled.p`
 font-family: 'Roboto', sans-serif;
 color:white;
 font-weight:500;
 font-size:30px;
 margin-top:30px;
`

const SignupText = styled.p`
 font-family: 'Roboto', sans-serif;
 color:white;
 font-size:1.3em;
 font-weight:200;
 margin:0px 20px 15px 20px;
 text-align:center;
` */

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
        <AccessContainer>
          <SigninFormWrapper>
            <HomeSignin>
              <SigninForm 
                onSubmitFunction={handleSubmit}
              >
              <InputField
                type={username}
                usernameValue={username}
                onUsernameChangeFunction={onUsernameChange}
              />
              <InputField
                type={password}
                value={password}
                onPasswordChangeFunction={onPasswordChange}
                />
              </SigninForm>
            </HomeSignin>
          </SigninFormWrapper>
        </AccessContainer>
        <HomeSignup/>
      </>  
)}

export default Home
        
 
