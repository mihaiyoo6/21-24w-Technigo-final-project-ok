import React, { useState } from 'react'

const Resources1 = () => {
  const [resources, setResources] = useState([])
  const [filteredResources, setFilteredResources] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getResources = (category) => {
    fetch(`https://final-project-dannuzak.herokuapp.com/resources_1?currentCategory=${category}`)
      .then((response) => response.json())
      .then((json) => setResources(json))
  }

  const filterResources = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredResources(resources)
    } else {
      const filteredArray = resources.filter((resource) => resource.category.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredResources(filteredArray)
    }
  }

  return (
    <>
      <button onClick={() => getResources("Yoga")}>Yoga</button>
      <button onClick={() => getResources("Reiki")}>Reiki</button>
      <button onClick={() => getResources("Integrative Therapy")}>Integrative Therapy</button>

      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
        <button onClick={() => filterResources(searchTerm)} >Search</button>

        {filteredResources.map((resource) => (
          <div key={resource._id}>
            <div>{resource.first_name}{resource.last_name}</div>
            <div>{resource.city}{resource.location}</div>
            <div>{resource.remote}</div>
            <div>{resource.category}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Resources1