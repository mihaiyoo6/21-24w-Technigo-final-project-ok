import React from 'react'
import styled from 'styled-components/macro'

import FeaturedImage from '../assets/forest2.jpeg' 

import { device } from '../Commons/breakpoints'


const FeaturedArticle = () => {
  return (
    <>
      <FeaturedBgImage>
        <FeaturedTag>Featured</FeaturedTag>
        <FeaturedTitle>
          Are you having burnout symptoms?
        </FeaturedTitle>
        <FeaturedSubtitle>
          Take this quizz and find it out >>
        </FeaturedSubtitle>
      </FeaturedBgImage>
    </>     
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

@media ${device.tablet} {
  padding:20px 30px;
}
` 

const FeaturedTag = styled.p`
  background-color:black;
  font-size:1.1em;
  font-weight:200;
  color:white;
  width: fit-content;
  margin-left:30px;
  letter-spacing:1.5px;
  padding:5px;
`

const FeaturedTitle = styled.h1`
  font-size:1.6em;
  color:white;
  margin:5px 30px;
  text-decoration:underline;
  
`
const FeaturedSubtitle = styled.h2`
  font-size:1.2em;
  color:white;
  margin: 0 0 30px 30px;
  font-weight:200;
  text-decoration:underline;
`

export default FeaturedArticle
