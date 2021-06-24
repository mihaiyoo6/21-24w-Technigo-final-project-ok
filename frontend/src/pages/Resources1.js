import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import HeroImage from '../assets/figma-pic.png' 

import Navbar from 'components/Navbar'
import Button from 'components/Button'



const Resources1 = () => {
  const [resources, setResources] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentCategory, setCurrentCategory] = useState('')

     useEffect(() => {
       console.log(currentCategory)
       fetch(`https://final-project-dannuzak.herokuapp.com/resources_1?currentCategory=${currentCategory}`)
        .then((response) => (response.json()))
        .then((json) => setResources(json))
    },[currentCategory]) 
  
    return (
      <>
        <Navbar />
        <GreenHeroImage>
          <Title>Directory</Title>
          <Subtitle>A list of specialists in different disciplines that can support you.</Subtitle>
        <ButtonsContainer>
          <Button onClick={() => setCurrentCategory("Yoga")}>Yoga</Button>
          <Button onClick={() => setCurrentCategory("Reiki")}>Reiki</Button>
          <Button onClick={() => setCurrentCategory("Dearmouring")}>Dearmouring</Button>
        </ButtonsContainer>
        <ButtonsContainer>
          <Button onClick={() => setCurrentCategory("Eye movement desensitization and reprocessing (EDMR)")}>EDMR</Button>
          <Button onClick={() => setCurrentCategory("Somatic Therapy")}>Somatic Therapy</Button>
          <Button onClick={() => setCurrentCategory("Integrative Therapy")}>Integrative Therapy</Button>
        </ButtonsContainer>
        </GreenHeroImage>
        
        <SearchBarContainer>
          <InputBar 
            type="text" 
            placeholder="Search..." 
            onChange={(event)=> {
              setSearchTerm(event.target.value)
            }}
          />
          </SearchBarContainer>
          <CardsContainer> 
            {resources.filter((res) => {
              if(searchTerm === '') {
                return res
              } else {
                return (
                  res.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  res.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  res.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  res.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  res.modality.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  res.category.toLowerCase().includes(searchTerm.toLowerCase())
                )  
            }})
              .map((resource) => {
                return (
                  <>
                    <CardWrapper key={resource._id}>
                      <Span>
                       {/*  <img src={resource.picture} alt="the picture of this therapist" /> */}
                        <Name>{resource.first_name} {resource.last_name}</Name>
                        <DataField>Company:{resource.company}</DataField>
                      </Span>
                      <Span>
                        <DataField>Email:{resource.email}</DataField>
                        <DataField>Website:{resource.website}</DataField>
                        <DataField>Phone number:+46 73 480 00 00</DataField>
                      </Span>
                        <DataField>Modality: {resource.modality}</DataField>
                        <DataField>Location:{resource.city}, {resource.country}</DataField>
                      <Span>
                        <CategoryTag>{resource.category}</CategoryTag>
                      </Span>
                     </CardWrapper> 
                  </>  
                )                 
              })}
          </CardsContainer> 
      </>
    )
}

const GreenHeroImage = styled.div`
  background-image: url(${HeroImage});
  background-size:cover;
  width:100%;
  height:400px;
  padding:30px 30px;
 `

const Title = styled.h1`
  color: white;
  text-align:center;
  padding-bottom:10px;
`

const Subtitle = styled.p`
  color:white;
  text-align:center;
  margin-bottom:30px;
`

const ButtonsContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:auto;
  justify-content:center;   
`

const SearchBarContainer = styled.div`
  text-align:center;
  background-color:#E7E4DE;
  padding:40px; 
`

const InputBar = styled.input`
  width:300px;
  height:30px;
  border-radius:5px;
  padding-left:10px;
  font-size:1em;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 1rem;
  background-color:#E7E4DE;
  height:2200px;
  padding-left:10px;
`

const CardWrapper = styled.div`
  border:1px solid gray;
  max-height:420px;
  max-width:320px;
  padding:15px;
  border-radius:5px;
  background-color:white;
`

const Name = styled.h1`
  font-size:1.2em;
  color:#155306;
`

const DataField = styled.p`
  color:black;
`

const CategoryTag = styled.p`
  background-color: #155306;
  width:fit-content;
  color:white;
  padding:10px;
  border-radius:5px;
`

const Span = styled.span`
 margin:5px;
`


export default Resources1