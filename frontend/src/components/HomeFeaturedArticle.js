import React from 'react'
import styled from 'styled-components/macro'

import FeaturedImage from '../assets/forest1.jpeg'

const ArticleContainer = styled.div`
  width:100%;
`
const FeaturedArticleImage = styled.img`
 width:100%;
 height:300px;
`
const FeaturedArticleTitle = styled.p`
font-size:20px;
`


const FeaturedArticle = () => {
    return (
        <ArticleContainer>
            <FeaturedArticleImage src= {FeaturedImage}/>
            <FeaturedArticleTitle>
                hello
            </FeaturedArticleTitle>
           
            
        </ArticleContainer>
    )
}

export default FeaturedArticle
