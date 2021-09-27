import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { device } from '../Commons/breakpoints'

const HomeSignin = ({ handleSubmit, username, onPasswordChange, password, onUsernameChange }) => {
  
  const accessToken = useSelector(store => store.user.accessToken)
  

  return (
    <>
      <SigninFormWrapper>
        {!accessToken
        ?
        <>
        <Title>Login</Title>
        <Paragraph>Please enter your login details</Paragraph>        
        <SigninForm onSubmit={handleSubmit}>
          <label htlmfor={username}></label>
          <InputField
            type="text"
            value={username}
            onChange={onUsernameChange}
            placeholder="username"
            minlength="4"
          />
          <label htmlfor={password}></label> 
          <InputField
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="password"
            minlength="6"
          />
          <Button type="submit">Login</Button>
        </SigninForm>
      </>
        :
        <>
          <Title>Welcome back {username}!</Title>
          <Paragraph><Underline><HomeLink to="/main">Go to Main page</HomeLink></Underline></Paragraph>
        </>
        }

      </SigninFormWrapper>
    </>           
  )
}


const SigninFormWrapper = styled.div`
  background-color:#E7E4DE;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center; 
  padding:20px 30px;
  
  @media ${device.tablet} {
    width:50%;
  }
`

const Title = styled.p`
  font-size:2em;
  font-weight:600;
  color:#155306;
  margin:30px 0;   
`

const Paragraph = styled.p`
 font-family:'Roboto', sans-serif;
 font-weight:350;
 font-size:1.2em;
 color:#155306;
 padding:20px 30px;
`



const SigninForm = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const InputField = styled.input`
  margin:5px;
  border-radius:5px;
  width:230px;
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
  cursor:grab;
`

const HomeLink = styled(Link)`
  text-decoration:none;
  color:black;
  color: #155306;
`

const Underline = styled.span`
  border-bottom: #155306 solid 1px;
`

export default HomeSignin
