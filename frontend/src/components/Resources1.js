import React, { useState, useEffect } from 'react'

const Resources1 = () => {
    const [resources, setResources] = useState([])
    

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
        />
        {resources.map(resource => {
          return (
            <div> 
              
                {resource.first_name}{resource.last_name}
                  
            </div>
          )
        })}
      </div>
    )
}

export default Resources1