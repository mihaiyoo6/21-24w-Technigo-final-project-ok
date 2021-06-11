import React from 'react'
import styled from 'styled-components/macro'

const SignupWrapper = styled.div`
  background-color: #155306;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin:0;
` 


const SignupTitle = styled.p`
 font-family: 'Roboto', sans-serif;
 color:white;
 font-weight:500;
 font-size:30px;
 margin:20px 0;
`

const SignupText = styled.p`
 font-family: 'Roboto', sans-serif;
 color:white;
 font-size:1.2em;
 font-weight:200;
 margin:0px 20px 15px 20px;
 text-align:center;
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

const HomeSignup = () => {
    return (
        <>
          <SignupWrapper>
            <SignupTitle> Join us!</SignupTitle>
            <SignupText>Enter your personal details and start a journey with us</SignupText>
            <Button type="submit">Signup</Button>
          </SignupWrapper>        
        </>
    )
}

export default HomeSignup
