import React from 'react'
import { MainStyled } from './MainStyled'

export const MainLayout = ({children}) => {
  return (
    <MainStyled>{children}</MainStyled>
  )
}
