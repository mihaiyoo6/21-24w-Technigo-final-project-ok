import React, { useState, useEffect } from 'react'

/* import Resources from "../data.json" */

const Resources1 = () => {
  const [resources, setResources] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentCategory, setCurrentCategory] = useState('')

     useEffect(() => {
       console.log(currentCategory)
      fetch("https://final-project-dannuzak.herokuapp.com/resources_1")
        .then((response) => response.json())
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
              {resources.filter((resource) => {
                if(searchTerm === '') {
                  return resource
                } else if(resource.category.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return resource
                }
              }).map((resource) => {
                return (
                  
                    <div key={resource._id}>
                      <div>{resource.first_name}{resource.last_name}</div>
                      <div>{resource.city}{resource.location}</div>
                      <div>{resource.remote}</div>
                      <div>{resource.category}</div>
                    </div>
                
                )
              })}
            </div> 
          </>
    )
}

export default Resources1
