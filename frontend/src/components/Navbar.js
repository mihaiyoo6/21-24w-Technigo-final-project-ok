import React from 'react'
import styled from 'styled-components/macro'


const NavbarContainer = styled.div`
  background-color:#155306;
  height:150px;
`
const Logo = styled.div`
  
`


const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>Tröttis</Logo>
        </NavbarContainer>
    )
}

export default Navbar
