import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">Tröttis</li>
          <li className="items"><Link to= "/">About</Link></li>
          <li className="items"><Link to= "resources_1">Resources</Link></li>
          <li className="items"><Link to= "pos_sharing">Sharing</Link></li>        
        </ul>
      </nav>

    </header>
  )
}

export default Navbar




/* <header className ="header">
<nav className="navbar">
  <Link to= '/' className="link"><p className="logo">Tröttis</p></Link>
  <ul className="list">
    <Link to= '/pos_sharing' className="link"><li className="items">About</li></Link>
    <Link to= '/resources_1' className="link"><li className="items">Resources</li></Link>
    <Link to= '/pos_sharing' className="link"><li className="items">Sharings</li></Link>
  </ul>
</nav>  desnivel y menu a la izq
</header>  */




    /*   <header className ="header">
      <nav className="navbar">
        <Link to= '/' className="link"><p className="logo">Tröttis</p></Link>
        <ul className="list">
          <Link to= '/pos_sharing' className="link"><li className="items">About</li></Link>
          <Link to= '/resources_1' className="link"><li className="items">Resources</li></Link>
          <Link to= '/pos_sharing' className="link"><li className="items">Sharings</li></Link>
        </ul>
      </nav>
    </header>  */
    

    

     /* <header className ="header">
      <nav className="navbar">
        <ul className="list">
          <Link to= '/' className="link"><li className="logo">Tröttis</li></Link>
          <li className="items"><Link to= '/pos_sharing'>About</Link></li>
          <li className="items"><Link to= '/resources_1'>Resources</Link></li>
          <li className="items"><Link to= '/pos_sharing'>Sharing</Link></li>
        </ul>
      </nav>
    </header> */
  
   /*  <header className ="header">
    <nav className="navbar">
      <ul className="list">
        <Link to= '/' className="link"><li className="logo">Tröttis</li></Link>
        <Link to= '/pos_sharing' className="link"><li className="items">About</li></Link>
        <Link to= '/resources_1' className="link"><li className="items">Resources</li></Link>
        <Link to= '/pos_sharing' className="link"><li className="items">Sharings</li></Link>
      </ul>
    </nav> sin morado
  </header> */