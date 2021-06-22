import React from 'react'

import { API_URL_POS_SHARING } from '../reusable/urls'

const PositiveSharing = () => {


  const fetchPositiveThoughts = () => {
    fetch(API_URL_POS_SHARING)
     .then(res => res.json())
     .then(thoughts => console.log(thoughts))
     .catch(err => console.error(err))

  }

  fetchPositiveThoughts()

    return (
      <div>
        Positive Sharing
      </div>
    )
}

export default PositiveSharing
