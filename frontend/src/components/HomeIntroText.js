import React from 'react'
import styled from 'styled-components/macro'


const IntroTextContainer = styled.div`
  background-color: #E7E4DE;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
 
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
 
`

const Title = styled.span`
  font-family: 'Pacifico', cursive;
  font-size: 1.2em;
`

const Paragraph = styled.p`
 font-family: 'Roboto', sans-serif;
 font-weight:350;
 font-size:1.2em;
 color:#155306;
 padding:20px 30px;
`

const HomeIntroText = () => {
  return (
    <IntroTextContainer>
      <Paragraph>
        <Title>Tröttis</Title> is your community for you experiencing 
          burnout syndrome. 
      </Paragraph> 
      <Paragraph>
        Because we understand your experience, we want to offer our members resources and support in your healing process in a safe space.
      </Paragraph>       
    </IntroTextContainer>
  )
}

export default HomeIntroText
