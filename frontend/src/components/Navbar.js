import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">Tröttis</li>
          <li className="items"><Link to= "/">Home</Link></li>
          <li className="items"><Link to="#">About</Link></li>
          <li className="items"><Link to= "resources_1">Resources</Link></li>
          <li className="items"><Link to= "pos_sharing">Sharing</Link></li>        
        </ul>
      </nav>

    </header>
  )
}

export default Navbar
