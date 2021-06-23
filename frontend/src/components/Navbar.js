import React from 'react'
import { Link } from 'react-router-dom'


import './navbar.css'

const Navbar = () => {
  return (
    <header className ="header">
      <nav className="navbar">
        <ul className="list">
          <Link to= '/' className="link"><li className="logo">Tröttis</li></Link>
          <li className="items"><Link to= '/pos_sharing'>About</Link></li>
          <li className="items"><Link to= '/resources_1'>Resources</Link></li>
          <li className="items"><Link to= '/pos_sharing'>Sharing</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
