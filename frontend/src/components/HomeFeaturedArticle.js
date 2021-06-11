import React from 'react'
import styled from 'styled-components/macro'

import FeaturedImage from '../assets/forest3.jpeg' 


const FeaturedBgImage = styled.div`
  background-image: url(${FeaturedImage});
  background-size:cover;
  width:100%;
  height:400px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
` 

const FeaturedTag = styled.p`
  background-color:black;
  font-size:1.1em;
  font-weight:200;
  color:white;
  width: fit-content;
  margin-left:30px;
`

const FeaturedTitle = styled.h1`
  font-size:1.6em;
  color:white;
  margin:5px 30px;
`
const FeaturedSubtitle = styled.h2`
  font-size:1.3em;
  color:white;
  margin: 0 0 30px 30px;
  font-weight:200;

`


const FeaturedArticle = () => {
    return (
        <>
        <FeaturedBgImage>
     
        <FeaturedTag>Featured</FeaturedTag>
        <FeaturedTitle>
            Knowing the physical signs of burnout
        </FeaturedTitle>
        <FeaturedSubtitle>
            It can be more than just tiredness
        </FeaturedSubtitle>
        </FeaturedBgImage>
      </>     
    )
}

export default FeaturedArticle
