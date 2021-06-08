import React from 'react'
import styled from 'styled-components/macro'


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


const Signin = ( { usernameValue, onUsernameChangeFunction, passwordValue, onPasswordChangeFunction }) => {
    return (
      <>
       
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
          
      </>    
        
    )
}

export default Signin
