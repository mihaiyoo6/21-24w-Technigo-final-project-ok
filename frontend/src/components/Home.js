import React from 'react'
import { createGlobalStyle } from styled-components/macro



const GlobalStyle = createGlobalStyle`
  html {
    height:100%
    margin:0;
  }
  
  body {
    box-sizing: border-box;
    background: E7E4DE;
    height:100%;
    
  }
`


const Home = () => {
    return (
        <GlobalStyle>
          Hello 
        </GlobalStyle>
    )
}

export default Home
