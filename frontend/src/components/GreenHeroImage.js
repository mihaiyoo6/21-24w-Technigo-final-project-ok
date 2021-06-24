import React from 'react'
import styled from 'styled-components/macro'

import FeaturedImage from '../assets/figma-pic.png' 

const GreenHeroImage = () => {
    return (
        <HeroImage></HeroImage>
    )
}

const HeroImage = styled.div`
  background-image: url(${FeaturedImage});
  background-size:cover;
  width:100%;
  height:400px;
`

export default GreenHeroImage

