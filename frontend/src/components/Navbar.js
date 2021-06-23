import React from 'react'


import './navbar.css'

const Navbar = () => {
  return (
    <header className ="header">
      <nav className="navbar">
        <ul className="list">
          <li className="logo">Tröttis</li>
          <li className="items"><a className="link" href= "/pos_sharing">About</a></li>
          <li className="items"><a className="link" href= "/pos_sharing">Directory</a></li>
          <li className="items"><a className="link" href= "/pos_sharing">Sharing</a></li>        
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
