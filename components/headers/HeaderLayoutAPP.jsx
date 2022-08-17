import Link from 'next/link'
import React from 'react'
import { NavBar } from '../navs/NavBar'
import { HeaderLayoutStyled } from './HeaderLayoutStyled'

export const HeaderLayoutAPP = () => {
  return (
    <HeaderLayoutStyled>
        <Link href='/' passHref><a>News App</a></Link>
        <NavBar />
    </HeaderLayoutStyled>
  )
}
