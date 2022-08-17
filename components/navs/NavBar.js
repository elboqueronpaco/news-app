import Link from 'next/link'
import React from 'react'
import { NavBarStyled } from './navbarStyled'

export const NavBar = () => {
  return (
    <NavBarStyled>
        <Link href='/' passHref><a>Inicio</a></Link>
        <Link href='/about' passHref><a>Sobre Nosotros</a></Link>
    </NavBarStyled>
  )
}
