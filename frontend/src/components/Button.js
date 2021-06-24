import React from 'react'
import styled from 'styled-components/macro'

const Button = ( {children}) => {
    return (
        <GreenButton>{children}</GreenButton>
    )
}

const GreenButton = styled.button`
  width:200px;
  background-color: #AAAC48;
  font-size:1em;
  margin:1em 1em 2em 1em;
  border-radius: 5px;
  padding:.5em;
  color:white;
  border-color:white;
  justify-content:center;
  cursor: grab;
`

export default Button
