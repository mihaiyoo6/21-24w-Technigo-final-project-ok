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
          <Button onClick={() => setCurrentCategory("Reiki")} className="category-btn">Reiki</Button>
          <Button onClick={() => setCurrentCategory("Dearmouring")} className="category-btn">Dearmouring</Button>
        </ButtonsContainer>
        <ButtonsContainer>
          <Button onClick={() => setCurrentCategory("Eye movement desensitization and reprocessing (EDMR)")} className="category-btn">EDMR</Button>
          <Button onClick={() => setCurrentCategory("Somatic Therapy")} className="category-btn">Somatic Therapy</Button>
          <Button onClick={() => setCurrentCategory("Integrative Therapy")}className="category-btn">Integrative Therapy</Button>
        </ButtonsContainer>
        </GreenHeroImage>  
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={(event)=> {
              setSearchTerm(event.target.value)
            }}
          />
            <div>
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
                    <div key={resource._id}>
                      <p>{resource.first_name} {resource.last_name}</p>
                      <p>Company:{resource.company}</p>
                      <p>Email:{resource.email}</p>
                      <p>Website:{resource.website}</p>
                      <p>Phone number:+46 73 480 00 00</p>
                      <p>Modality: {resource.modality}</p>
                      <p>Location:{resource.city}, {resource.country}</p>
                      <p>{resource.category}</p>
                      <img src={resource.picture} alt="something" />
                    </div>
                  </>
                )
              })}
            </div> 
          </>
    )
}

const GreenHeroImage = styled.div`
  background-image: url(${HeroImage});
  background-size:cover;
  width:100%;
  height:400px;
  padding:20px 30px;
  
 
`
const Title = styled.h1`
  color: white;
  text-align:center;
`
const Subtitle = styled.p`
  color:white;
  text-align:center;
`
const ButtonsContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:auto;
  justify-content:center;
  

`

export default Resources1