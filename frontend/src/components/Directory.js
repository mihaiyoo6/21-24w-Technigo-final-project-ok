import React, { useState, useEffect } from 'react'

const Directory = () => {
    const [directory, setDirectory] = useState([])

    useEffect(() => {
      fetch("https://final-project-dannuzak.herokuapp.com/resources_1")
        .then((response) => response.json())
        .then((json) => set)
    })

    return (
        <div>
            <input type="text" placeholder="Search..." />
            
        </div>
    )
}

export default Directory
