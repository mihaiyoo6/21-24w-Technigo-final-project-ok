import React from 'react'
import styled from 'styled-components/macro'

import { device } from '../Commons/breakpoints'

const HomeSignin = ({ handleSubmit, username, onPasswordChange, password, onUsernameChange }) => {
  return (
    <>
      <SigninFormWrapper>
        <WelcomeTitle>Welcome back!</WelcomeTitle>        
        <SigninForm onSubmit={handleSubmit}>
          <label htlmfor={username}></label>
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
      </SigninFormWrapper>
    </>           
  )
}


const SigninFormWrapper = styled.div`
  background-color:#E7E4DE;
  border-top: 1px solid black;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center; 
  padding:20px 30px;
  
  @media ${device.tablet} {
    width:50%;
  }
`

const WelcomeTitle = styled.p`
  font-size:2em;
  font-weight:600;
  color:#155306;
  margin: 30px 0;   
`

const InputField = styled.input`
  margin: 5px;
  border-radius: 5px;
  width: 230px;
  align-items:center;
  justify-content:center;
  color:#155306; 
  font-size:1em;
  height:1.8em;

  &::-webkit-input-placeholder {
    color: #155306;
    padding-left:10px;
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


export default HomeSignin
