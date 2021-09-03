import React, { useState, useEffect } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import user from '../reducers/user' 

import { API_URL } from '../reusable/urls'

import Navbar from 'components/Navbar'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const accessToken = useSelector(store => store.user.accessToken)
  const errorMessage = useSelector(store => store.user.errors);
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history])

  
  const onFormSubmit = (e) => {
    e.preventDefault()   

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }

    fetch(API_URL('signup'), options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.success) {
        batch(() => {
          dispatch(user.actions.setUsername(data.username))
          dispatch(user.actions.setAccessToken(data.accessToken))
          dispatch(user.actions.setErrors(null))
        });  

      } else {
        dispatch(user.actions.setErrors(data))
      }
    })
    .catch()    
  }

  return (
    <> 
      <Navbar  />
        <MainContainer>
        <WelcomeTitle>Welcome to our community!</WelcomeTitle> 
        <WelcomeParagraph>Create your username and password.</WelcomeParagraph>
          {!accessToken
            ?
            <Form onSubmit={onFormSubmit}>            
              <Label htlmFor="username">Username:</Label> 
              <InputField
                id="username"
                type="text"
                required            
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Label htmlFor="password">Password:</Label> 
              <InputField
                id="password"
                type="password"
                required             
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />        
              <Button type="submit">Signup</Button>             
            </Form>
            :
            <>
              <SignupConfirmationText>Your account has been created!</SignupConfirmationText>
              <SignupConfirmationText><Underline><HomeLink to="/main">Back to Home page</HomeLink></Underline></SignupConfirmationText>
            </>
            }
              </MainContainer>   

    </>  
         
    )
}

const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
	width:100vw;
	height:100vh;
  background-color:#E7E4DE; 
`

const WelcomeTitle = styled.p`
  font-size:1.5em;
  font-weight:600;
  color:#155306;     
`

const WelcomeParagraph = styled.p`
  font-weight:350;
  font-size:1.2em;
  color: #155306;
  padding-top:15px;   
`

const Form = styled.form`
  margin:40px;
  background-color:#155306;
  border-radius:5px;
  padding:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  border:1px solid black;
  width:380px;  
`

const Label = styled.label`
  color:white; 
  font-size:1.2em;
`

const InputField = styled.input`
  margin:5px;
  border-radius:5px;
  width:160px;
  align-items:center;
  justify-content:center;
  color:#0F3904; 
  font-size:1em;
  height:1.8em;
`

const Button = styled.button`
  width:100px;
  background-color:#AAAC48;
  font-size:1.2em;
  margin:2em 1em 1em 1em;
  border-radius:5px;
  padding:.5em;
  color:white;
  border-color:white;
  justify-content:center;
  cursor:grab; 
`

const SignupConfirmationText = styled.p`
  font-weight:350;
  font-size:1.2em;
  color: #155306;
`

const HomeLink = styled(Link)`
  text-decoration:none;
  color:black;
  color: #155306;
`

const Underline = styled.span`
  border-bottom: #155306 solid 1px;
`

export default Signup
