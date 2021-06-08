import React from 'react'
import styled from 'styled-components/macro'

const WelcomeTitle = styled.p`
  font-size:2em;
  font-weight:600;
  text-align:center;
  font-family: 'Roboto', sans-serif;
  color:#155306;
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
const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
width:100px;
background-color: #AAAC48;
font-size:1.2em;
margin:1em 1em 2em 1em;
border-radius: 5px;
padding:.5em;
color:white;
border-color:white;
justify-content:center;
cursor: grab;
`

const HomeSignin = ( { onSubmitFunction,usernameValue, onUsernameChangeFunction, passwordValue, onPasswordChangeFunction }) => {
  return (
    <>
      <WelcomeTitle>Welcome back!</WelcomeTitle>        
        <SigninForm onSubmit={onSubmitFunction}>
          <label htlmFor={usernameValue}></label>
          <InputField
            type={usernameValue}
            value={usernameValue}
            onChange={onUsernameChangeFunction}
          />
          <label htmlFor={passwordValue}></label> 
          <InputField
            type={passwordValue}
            value={passwordValue}
            onChange={onPasswordChangeFunction}
          />
        <Button type="submit">Login</Button>
      </SigninForm> 
     
    </>    
        
  )
}

export default HomeSignin
