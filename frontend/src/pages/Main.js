import React from 'react'
import styled from 'styled-components/macro'

import { device } from '../Commons/breakpoints'

import QuoteSrc from '../assets/quote.jpeg'
import ArticleSrc from '../assets/article.jpeg'
import ActivitySrc from '../assets/activity.jpeg'
import MeditationSrc from '../assets/meditation.jpeg'
import RecipeSrc from '../assets/recipe.jpeg'
import InterviewSrc from '../assets/interview.jpeg'


const Main = () => {
  return (
  
    <GridContainer>
      <Title>This week's...</Title>
      <GridWrapper>
        <QuoteWrapper> 
          
            <Subtitle>Quote</Subtitle>
            <Quote src = {QuoteSrc} />
          
        </QuoteWrapper>
        <ArticleWrapper>
          <Subtitle>Article</Subtitle>
          <Article src = {ArticleSrc} />
        </ArticleWrapper>
        <ActivityWrapper>
          <Subtitle>Activity</Subtitle>
          <Activity src = {ActivitySrc} /> 
        </ActivityWrapper>
        <MeditationWrapper>
          <Subtitle>Meditation</Subtitle>
          <Meditation src = {MeditationSrc} />
        </MeditationWrapper> 
        <RecipeWrapper>
          <Subtitle>Recipe</Subtitle> 
          <Recipe src = {RecipeSrc} />
        </RecipeWrapper>
        <InterviewWrapper>
          <Subtitle>Interview</Subtitle> 
          <Interview src = {InterviewSrc} />
        </InterviewWrapper> 
      </GridWrapper>
    </GridContainer>
    
    )
}

const GridContainer = styled.div`
  background-color:#E7E4DE;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 20px;

  @media ${device.tablet} {
    padding:2em;
  }
  
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
  }

` 

const Title = styled.h1`
  font-size:3em;
  color:#155306;
  padding: 1em 2em 1em .5em;
`


const QuoteWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2; 
` 

const Quote = styled.img`
  width:100%;
  cursor: pointer;
`

const ArticleWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 2;  

  @media ${device.laptop} {
    grid-area: 1 / 2 / 2 / 3;
  }
` 

const Article = styled.img`
  width:100%;
  cursor: pointer; 
`

const ActivityWrapper = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  
  @media ${device.laptop} {
    grid-area: 1 / 3 / 2 / 4;
  }
` 

const Activity = styled.img`
  width:100%;
  cursor: pointer;
`

const MeditationWrapper = styled.div`
  grid-area: 4 / 1 / 5 / 2; 

  @media ${device.laptop} {
    grid-area: 2 / 1 / 3 / 2;
  }
` 

const Meditation = styled.img`
  width:100%;
  cursor: pointer;
`

const RecipeWrapper = styled.div`
  grid-area: 5 / 1 / 6 / 2; 

  @media ${device.laptop} {
    grid-area: 2 / 2 / 3 / 3;
  }
` 

const Recipe = styled.img`
  width:100%;
  cursor: pointer;
`

const InterviewWrapper = styled.div`
  grid-area: 6 / 1 / 7 / 2;

  @media ${device.laptop} {
    grid-area: 2 / 3 / 3 / 4;
  }
` 

const Interview = styled.img`
  width:100%;
  cursor: pointer;
`


const Subtitle = styled.h2`
  font-size:2em;
  color:#155306;
  padding-left: 1em;
` 

export default Main
