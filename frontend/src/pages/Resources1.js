import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Navbar from 'components/Navbar'
import Button from 'components/Button'

import HeroImage from '../assets/figma-pic.png' 
import './resources1.css'

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
        
          <SearchBar>
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={(event)=> {
              setSearchTerm(event.target.value)
            }}
          />
            </SearchBar>
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
                        <img src={resource.picture} alt="the picture of this therapist" />
                        <p>{resource.first_name} {resource.last_name}</p>
                        <p>Company:{resource.company}</p>
                        <p>Email:{resource.email}</p>
                        <p>Website:{resource.website}</p>
                        <p>Phone number:+46 73 480 00 00</p>
                        <p>Modality: {resource.modality}</p>
                        <p>Location:{resource.city}, {resource.country}</p>
                        <p>{resource.category}</p>
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

const SearchBar = styled.div`
  border:1px solid black;
`

const CardsContainer = styled.div`
    border:1px solid black;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 1rem;
    background-color:white;
`

const CardWrapper = styled.div`
  border:1px solid black;
  
`

export default Resources1