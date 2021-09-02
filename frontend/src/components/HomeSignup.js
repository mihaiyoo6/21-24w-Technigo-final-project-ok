import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import { device } from '../Commons/breakpoints'

const HomeSignup = () => {
  return (
    <>
      <SignupWrapper>
        <SignupTitle> Join us!</SignupTitle>
          <SignupText><span>Create an account and start a journey with us.</span></SignupText> 
          <SignupText><span>As a member you have access to especial content and benefits.</span></SignupText> 
          <Link to="/signup"><Button type="submit">Signup</Button></Link>
        </SignupWrapper>        
    </>
  )
}

const SignupWrapper = styled.div`
  background-color:#155306;
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

const SignupTitle = styled.p`
  font-family:'Roboto', sans-serif;
  color:white;
  font-weight:600;
  font-size:2em;
  margin:30px 0;
`

const SignupText = styled.p`
  font-family:'Roboto', sans-serif;
  color:white;
  font-size:1.2em;
  font-weight:200;
  margin:0px 20px 15px 20px;
  text-align:center;

  @media ${device.tablet} {
    font-size:1.3em;
`

const Button = styled.button`
  width:100px;
  background-color:#AAAC48;
  font-size:1.2em;
  margin:1em 1em 2em 1em;
  border-radius:5px;
  padding:.5em;
  color:white;
  border-color:white;
  justify-content:center;
  cursor: grab;
`

export default HomeSignup
