import React, { useState, useEffect } from 'react'

/* import Resources from "../data.json" */

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
        <button onClick={() => setCurrentCategory("Yoga")}>Yoga</button>
        <button onClick={() => setCurrentCategory("Reiki")}>Reiki</button>
        <button onClick={() => setCurrentCategory("Integrative Therapy")}>Integrative Therapy</button>
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
                      <div>{resource.first_name}{resource.last_name}</div>
                      <div>{resource.city}{resource.country}</div>
                      <div>{resource.modality}</div>
                      <div>{resource.category}</div>
                    </div>
                  </>
                )
              })}
            </div> 
          </>
    )
}

export default Resources1