import React from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import user from '../reducers/user'

import './navbar.css'

const Navbar = () => {
  const accessToken =useSelector(store => store.user.accessToken)
  const dispatch = useDispatch();

  const onButtonClick = () => {
    batch(()=> {
      dispatch(user.actions.setUsername(null))
      dispatch(user.actions.setAccessToken(null))

      localStorage.removeItem('user')
    })
  }

  return (
    <header>
      <nav>
        <ul>
          <li className="logo">Tröttis</li>
          <li className="items"><Link to= "/">Home</Link></li>
          <li className="items"><Link to="/main">Main</Link></li>
          <li className="items"><Link to= "resources_1">Resources</Link></li>
          <li className="items"><Link to= "pos_sharing">Sharing</Link></li>
          <li className="items sign"><Link to= "login">Login</Link></li>
          <li className="items sign"><Link to= "signup">Signup</Link></li>
          {accessToken && <li className="items"><button onClick={onButtonClick}>Logout</button></li>}                 
        </ul>        
      </nav>    
    </header>
  ) 
}

export default Navbar
