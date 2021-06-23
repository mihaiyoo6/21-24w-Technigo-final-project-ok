import React from 'react'
import styled from 'styled-components'

import FeaturedImage from '../assets/figma-pic.png' 

const HeroImage = () => {
    return (
        <FeaturedBgImage>
           
        </FeaturedBgImage>
    )
}

const FeaturedBgImage = styled.div`
  background-image: url(${FeaturedImage});
  background-size:cover;
  width:100%;
  height:400px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  cursor: pointer;
`

export default HeroImage

