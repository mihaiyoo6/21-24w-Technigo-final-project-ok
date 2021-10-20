import React from 'react'
import styled from 'styled-components/macro'

import { device } from '../Commons/breakpoints'

const HomeIntroText = () => {
  return (
    <IntroTextContainer>
      <Paragraph>
        <Title>Safe space</Title> is your community for you experiencing 
          burnout syndrome. 
      </Paragraph> 
      <Paragraph>
        Because we understand your experience and needs, we want to offer you  two alternatives:     
      </Paragraph>
      <Paragraph>
        As a <BoldText>non-member</BoldText> you have access to most content and our resources section where you can find useful information and practicioners that can support you in your healing process.  
      </Paragraph>
      <Paragraph>
        As a <BoldText>member</BoldText> you have access to all content and sections, including our private Sharing section. You will also receive exclusive offers and discounts from partners and sponsors.
      </Paragraph>       
    </IntroTextContainer>
  )
}

const IntroTextContainer = styled.div`
  background-color:#E7E4DE;
  font-family:'Roboto', sans-serif;
  padding:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  border-bottom:solid 1px black;

  @media ${device.tablet} {
   height:580px;
   padding:20px 30px;
  }
`

const Title = styled.span`
  font-family:'Pacifico', cursive;
  font-size:1.2em;

  @media ${device.tablet} {
    font-size:1.6em;
  }
`

const Paragraph = styled.p`
 font-family:'Roboto', sans-serif;
 font-weight:350;
 font-size:1.2em;
 color:#155306;
 padding:20px 30px;

 @media ${device.tablet} {
  font-size:1.3em;
}
`
const BoldText = styled.span`
  font-weight: 600;

`
export default HomeIntroText
