import React, { useState, useEffect } from 'react'


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
        <h1>Directory</h1>
        <p>A list of specialists in different disciplines that can support you.</p>
        <button onClick={() => setCurrentCategory("Yoga")}>Yoga</button>
        <button onClick={() => setCurrentCategory("Reiki")}>Reiki</button>
        <button onClick={() => setCurrentCategory("Dearmouring")}>Dearmouring</button>
        <button onClick={() => setCurrentCategory("Eye movement desensitization and reprocessing (EDMR)")}>EDMR</button>
        <button onClick={() => setCurrentCategory("Somatic Therapy")}>Somatic Therapy</button>
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
                      <p>{resource.first_name} {resource.last_name}</p>
                      <p>Company:{resource.company}</p>
                      <p>Email:{resource.email}</p>
                      <p>Website:{resource.website}</p>
                      <p><p>Phone number:+46 73 480 00 00</p></p>
                      <p>Modality: {resource.modality}</p>
                      <p><p>Location:{resource.city}, {resource.country}</p></p>
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

export default Resources1