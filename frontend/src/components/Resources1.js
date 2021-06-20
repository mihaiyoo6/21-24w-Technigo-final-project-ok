import React, { useState, useEffect } from 'react'

const Resources1 = () => {
    const [resources, setResources] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    

    useEffect(() => {
      fetch("https://final-project-dannuzak.herokuapp.com/resources_1")
        .then((response) => response.json())
        .then((json) => setResources(json))
    })

    return (
      <div>
        <input 
          type="text"       
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }} 
        />
          {resources.filter((resource) => {
            if(searchTerm === '') {
              return resource
            } else if(resource.category.toLowerCase().includes(searchTerm.toLowerCase())) {
              return resource
            }
       
            }).map((val) => {
              return (
                <>
                  <div key={val._id}>
                  <div>{val.first_name} {val.last_name}</div>
                  <div>{val.company}</div>
                  <div>{val.website}</div>
                  <div>{val.email}</div>
                  <div>{val.city} {val.country}</div>
                  <div>{val.modality}</div>
                  <div>{val.category}</div>
                </div>
                </>
              )
            })}
      </div>
    )
}

export default Resources1