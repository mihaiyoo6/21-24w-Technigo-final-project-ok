import React from 'react'
import styled from 'styled-components/macro'



const WelcomeTitle = styled.p`
  font-size:2em;
  font-weight:600;
  text-align:center;
  font-family: 'Roboto', sans-serif;
  color:#155306;
  margin: 30px 0; /* not applying */
  height:400px;
`

const InputField = styled.input`
  margin: 5px;
  border-radius: 5px;
  width: 220px;
  align-items:center;
  justify-content:center;
  color:#155306; 
  font-size:16px;
  height:30px;

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

const HomeSignin = ( { handleSubmit,username, onPasswordChange, password, onUsernameChange }) => {
  return (
    <>
      <WelcomeTitle>Welcome back!</WelcomeTitle>        
        <SigninForm onSubmit={handleSubmit}>
          <label htlmFor={username}></label>
          <InputField
            type="text"
            value={username}
            onChange={onUsernameChange}
          />
          <label htmlFor={password}></label> 
          <InputField
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
        <Button type="submit">Login</Button>
      </SigninForm> 
     
    </>    
        
  )
}

export default HomeSignin
