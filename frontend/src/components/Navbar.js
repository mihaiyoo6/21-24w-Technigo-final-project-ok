import React from 'react'
import styled from 'styled-components/macro'


const Container = styled.div`
  width:100%;
  background-color:#155306;
  height:150px;
  color: #155306;
 `

 const Logo = styled.p`
 font-family: 'Pacifico', cursive;
 font-size:30px; 
 color:white;
`

const Menu = styled.ul`


`

const NavbarItem = styled.li`

`

const Navbar = () => {
    return (
        <Container>
          <Logo>Tröttis</Logo>
          <Menu>
            <NavbarItem>About</NavbarItem> 
            <NavbarItem>Contact</NavbarItem>  
          </Menu>
        </Container>
    )
}

export default Navbar
