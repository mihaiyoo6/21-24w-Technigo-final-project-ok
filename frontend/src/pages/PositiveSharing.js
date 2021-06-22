import React, { useState, useEffect} from 'react'

import { API_URL_POS_SHARING } from '../reusable/urls'

const PositiveSharing = () => {
  const [positiveThoughtsList, setPositiveThoughtsList] = useState([])

useEffect(() => {
  fetchPositiveThoughts()
},[])

  const fetchPositiveThoughts = () => {
    fetch(API_URL_POS_SHARING)
     .then(res => res.json())
     .then(thoughts => setPositiveThoughtsList(thoughts))
     .catch(err => console.error(err))

  }

     return (
      <div>
        {positiveThoughtsList.map(thought =>(
          <div key={thought._id}>
            <h4>{thought.message}</h4>
          </div>
        ))}
      </div>
    )
}

export default PositiveSharing
